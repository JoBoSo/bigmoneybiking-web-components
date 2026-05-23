import SQLiteViewer from "../scripts/SQLiteViewer.js";

async function getEventsData(page_id) {
  const viewer = new SQLiteViewer("../database.sqlite3");
  await viewer.init();

  // Get the page data
  const pageResults = viewer.runPreparedQueryAsJSON(
    `SELECT page_id, title, subtitle FROM events_page WHERE page_id = ?`,
    [page_id],
  );

  if (!pageResults || pageResults.length === 0) {
    return null;
  }

  const page = pageResults[0];

  // Get events for this page
  const events = viewer.runPreparedQueryAsJSON(
    `SELECT event_id, event_order, header, description 
     FROM events_event 
     WHERE page_id = ? 
     ORDER BY event_order`,
    [page_id],
  );

  // Get photos for each event
  for (const event of events) {
    event.photos = viewer.runPreparedQueryAsJSON(
      `SELECT photo_order, image, caption 
       FROM events_photo 
       WHERE event_id = ? 
       ORDER BY photo_order`,
      [event.event_id],
    );
  }

  return {
    title: page.title,
    subtitle: page.subtitle,
    events: events,
  };
}

class Events extends HTMLElement {
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
    const data = await getEventsData(this.data_id);

    if (!data || !data.events || data.events.length === 0) {
      this.innerHTML = "";
      return;
    }

    let style = `
      <style>

      .events-container {
        background: rgba(0, 0, 0, 0.05);
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        margin-top: 10px;
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-radius: 10px;
      }
    
      .events-container .title {
        font-size: 22pt;
        text-align: center;
        padding: 10px;
        margin-bottom: -20px;
      }
    
      .event-container {
        /* box-shadow: 0 0 5px rgba(255, 255, 255, 0.2); */
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 20px;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.1);
      }
    
      .event-container .event-header {
        font-size: 18pt;
        text-align: left;
        padding-left: 10px;
        padding-right: 10px;
      }
    
      .event-container .description {
        font-size: 14pt;
        text-align: justify;
        padding-left: 10px;
        padding-right: 10px;
      }
    
      .event-container .photos-container {
        padding: 5px;
      }
    
      .event-container .photos-container .img-caption-container {
        padding: 5px;
      }
    
      .event-container .photos-container img {
        width: 100%; 
        height: auto;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
      }
    
      .event-container .photos-container .caption {
        width: 100%; 
        height: auto;
        padding: 5px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        text-align: center;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        background: rgba(0, 0, 0, 0.2);
      }
    
      .circle {
        position: absolute;
        width: 15px;
        height: 15px;
        margin-top: -5px;
        margin-left: -5px;
        /* z-index: -1; */
        border-radius: 50%;
        background: #FDB813;
      }

      </style>
    `;

    this.innerHTML =
      style +
      `
    <div class="events-container">
      <div class="title"><b>${data.title}</b></div>

      ${data.events
        .map(
          (event) => `
      <div class="event-container">
        <div class="circle"></div>
        <div class="event-header"><b>${event.header}</b></div>
        <div class="description">${event.description}</div>
        <div class="photos-container">
          <div class="row no-gutters">
          ${event.photos
            .map(
              (photo) => `
            <div class="col-12 col-sm-4">
              <div class="img-caption-container">
                <img src="../images/${photo.image}" loading="lazy">
                <div class="caption">${photo.caption}</div>
              </div>
            </div>
          `,
            )
            .join("")}
          </div>
        </div>
      </div>
      `,
        )
        .join("")}

    </div>
    `;
  }
}

customElements.define("my-events", Events);