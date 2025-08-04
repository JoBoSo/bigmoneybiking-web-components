import SQLiteViewer from "../../scripts/SQLiteViewer.js";

async function getTripHeaderData(data_id) {
  const viewer = new SQLiteViewer("../database.sqlite3");
  await viewer.init();

  const result = viewer.runPreparedQueryAsJSON(
    `
    SELECT *
    FROM trip_header
    WHERE id = ?
    `,
    [data_id],
  );

  return result;
}

function constructStatsBar(distance_km, days, terrain, location, dates) {
  let statsBar = "";
  if (distance_km !== null) {
    statsBar += distance_km + " km | ";
  }
  if (days !== null) {
    statsBar += days + " Days | ";
  }
  if (terrain !== null) {
    statsBar += terrain + " | ";
  }
  if (location !== null) {
    statsBar += location + " | ";
  }
  if (dates !== null) {
    statsBar += dates;
  }
  return statsBar;
}

class TripHeader extends HTMLElement {
  constructor() {
    super();
    this.data_id = "";
  }

  static get observedAttributes() {
    return ["data_id"];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  async connectedCallback() {
    let style = `
      <style>

      .trip-header .tour-title {
        text-align: center;
        margin: 0;
        font-size: 24pt;
        font-weight: bold;
        text-shadow: 1px 1px 2px grey;
      }
      
      .trip-header .stats-bar {
        text-align: center;
        vertical-align: middle;
        padding-top: 0px !important;
        padding-bottom: 0px !important;
        margin: 0 !important;
        text-shadow: 1px 1px 2px grey;
        /* border-bottom: solid #dedcdc 1px; */
      }
      
      .trip-header .quote {
        text-align: center;
      }

      </style>
    `;

    const tripDataResponse = await getTripHeaderData(this.data_id);
    const tripData = tripDataResponse[0];

    this.innerHTML =
      style +
      `
      <div class="row no-gutters">
        <div class="col-12 trip-header">
          <h1 class="tour-title">${tripData.title}</h1>
          <p class="stats-bar">
            ${constructStatsBar(
              tripData.distance_km,
              tripData.days,
              tripData.terrain,
              tripData.location,
              tripData.dates,
            )}
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define("my-trip-header", TripHeader);
