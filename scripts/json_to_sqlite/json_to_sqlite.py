import json
import sqlite3
from typing import Any

class JsonToSQLiteConverter:
    def __init__(self, json_file: str, db_file: str = "output.db", table_name: str = "data"):
        self.json_file = json_file
        self.db_file = db_file
        self.table_name = table_name

    def infer_type(self, value: Any) -> str:
        if isinstance(value, int):
            return "INTEGER"
        elif isinstance(value, float):
            return "REAL"
        else:
            return "TEXT"

    def flatten_dict(self, d: dict, parent_key: str = '', sep: str = '_') -> dict:
        """Flatten nested dict keys with sep."""
        items = []
        for k, v in d.items():
            new_key = f"{parent_key}{sep}{k}" if parent_key else k
            if isinstance(v, dict):
                items.extend(self.flatten_dict(v, new_key, sep=sep).items())
            else:
                items.append((new_key, v))
        return dict(items)

    def load_json(self) -> list[dict]:
        with open(self.json_file, 'r', encoding='utf-8') as f:
            data = json.load(f)

        if isinstance(data, list):
            # flatten each item if needed
            return [self.flatten_dict(item) if isinstance(item, dict) else item for item in data]

        elif isinstance(data, dict):
            rows = []
            for outer_key, inner_val in data.items():
                if isinstance(inner_val, dict):
                    key_name = "id"
                    if key_name in inner_val:
                        key_name = "outer_id"
                    flattened_inner = self.flatten_dict(inner_val)
                    row = {key_name: outer_key, **flattened_inner}
                    rows.append(row)
            return rows

        raise ValueError("Unsupported JSON format.")

    def create_table_and_insert(self):
        rows = self.load_json()
        if not rows:
            raise ValueError("No records to insert.")

        conn = sqlite3.connect(self.db_file)
        cursor = conn.cursor()

        sample = rows[0]
        columns = list(sample.keys())
        has_id_column = 'id' in columns or 'outer_id' in columns

        if has_id_column:
            schema = ", ".join(f"{col} {self.infer_type(sample[col])}" for col in columns)
            create_table_sql = f"CREATE TABLE IF NOT EXISTS {self.table_name} ({schema})"
        else:
            schema = ", ".join(f"{col} {self.infer_type(sample[col])}" for col in columns)
            create_table_sql = f"""
                CREATE TABLE IF NOT EXISTS {self.table_name} (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    {schema}
                )
            """

        cursor.execute(create_table_sql)

        placeholders = ", ".join("?" for _ in columns)
        insert_columns = ", ".join(columns)
        insert_sql = f"INSERT INTO {self.table_name} ({insert_columns}) VALUES ({placeholders})"

        for row in rows:
            values = [row.get(col, None) for col in columns]
            cursor.execute(insert_sql, values)

        conn.commit()
        conn.close()
        print(f"✅ Inserted {len(rows)} records into '{self.table_name}'.")


# Example usage:
converter = JsonToSQLiteConverter("data.json", "../../database.sqlite3", "youtube_video")
converter.create_table_and_insert()
