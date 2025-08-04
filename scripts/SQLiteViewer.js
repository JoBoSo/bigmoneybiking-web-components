class SQLiteViewer {
  constructor(dbFile = "database.sqlite3") {
    this.dbFile = dbFile;
    this.SQL = null;
    this.db = null;
  }

  async init() {
    this.SQL = await window.initSqlJs({
      locateFile: (file) =>
        `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`,
    });
    const dbBytes = await this._fetchDatabase(this.dbFile);
    this.db = new this.SQL.Database(dbBytes);
  }

  async _fetchDatabase(filename) {
    const response = await fetch(filename);
    const buffer = await response.arrayBuffer();
    return new Uint8Array(buffer);
  }

  runQuery(sql) {
    return this.db.exec(sql);
  }

  runQueryAsJSON(query) {
    const result = this.db.exec(query);
    if (!result || result.length === 0) return JSON.stringify([]);

    const { columns, values } = result[0];

    const jsonRows = values.map((row) =>
      Object.fromEntries(row.map((val, i) => [columns[i], val])),
    );

    return jsonRows;
  }

  runPreparedQueryAsJSON(sql, params = []) {
    const stmt = this.db.prepare(sql);
    stmt.bind(params);

    const rows = [];
    while (stmt.step()) {
      rows.push(stmt.getAsObject());
    }

    stmt.free();
    return rows;
  }
}

export default SQLiteViewer;
