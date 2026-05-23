import SQLiteViewer from "../../scripts/SQLiteViewer.js";

async function getTimelineData(page_id) {
  const viewer = new SQLiteViewer("../database.sqlite3");
  await viewer.init();

  return viewer.runPreparedQueryAsJSON(
    `
    SELECT header, description, left_image, right_image
    FROM day_trip_timeline
    WHERE page_id = ?
    ORDER BY position
    `,
    [page_id],
  );
}

class DayTripTimeline extends HTMLElement {
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

  isLastEvent(item, items) {
    if (item !== items[items.length - 1]) {
      return `
        <div class="connector row no-gutters">
          <div class="circle-top"></div>
        </div>
        <div class="connector row no-gutters">
          <div class="circle-bottom"></div>
        </div>
      `;
    }
    return "";
  }

  constructEvent(item) {
    // one image top - text bottom
    let image = item.right_image !== null ? item.right_image : item.left_image;
    return `
      <div class="row no-gutters">
        <div class="left-block col-xs-6 col-sm-6 col-md-6 col-xl-5 offset-xl-2">
          <img src=${"../images/" + image}>
        </div>
        <div class="right-block col-xs-6 col-sm-6 col-md-6 col-xl-3">
          <div class="day-trip-timeline-text">
            <h3>${item.header}</h3>
            <p>${item.description}</p>
          </div>
        </div>
      </div>
    `;
  }

  async connectedCallback() {
    const thisData = await getTimelineData(this.data_id);

    let style = `
      <style>

      .day-trip-timeline {
        margin-top: 10px;
      }

      /* connector line */
      .day-trip-timeline .connector {
        height: 11px; 
        background: linear-gradient(white, white) no-repeat center/2px 100%;
        justify-content: center;
      }

      .circle-top {
        top: -4px;
      }

      .circle-bottom {
        bottom: -7px;
      }

      .circle-top,
      .circle-bottom {
        border-radius: 50%;
        width: 8px;
        height: 8px;
        position: relative;
        z-index: 1;
        border: 2px solid white;
        background-color: white;
      }
    
      @media (min-width: 576px) {
        /* image left */
        .day-trip-timeline .left-block img {
          border-top-left-radius: 10px; 
          border-bottom-left-radius: 10px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          width: 100%; 
          object-fit: contain; 
        }
    
        /* image right */
        .day-trip-timeline .right-block img {
          border-top-right-radius: 10px; 
          border-bottom-right-radius: 10px; 
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          width: 100%; 
          object-fit: contain; 
        }
    
        /* text left */
        .day-trip-timeline .left-block .day-trip-timeline-text {
          border-top-left-radius: 10px; 
          border-bottom-left-radius: 10px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.2);
          padding: 10px;
          height: 100%;
        }
    
        /* text right */
        .day-trip-timeline .right-block .day-trip-timeline-text {
          border-top-right-radius: 10px; 
          border-bottom-right-radius: 10px; 
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.2);
          padding: 10px;
          height: 100%;
        }
    
        /* image left with text beneath it */
        .day-trip-timeline .left-block .text-below img {
          border-top-left-radius: 10px; 
          border-bottom-left-radius: 0px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          width: 100%; 
          object-fit: contain; 
        }
    
        /* image right with text beneath it */
        .day-trip-timeline .right-block .text-below img {
          border-top-right-radius: 10px; 
          border-bottom-right-radius: 0px; 
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          width: 100%; 
          object-fit: contain; 
        }
    
        /* text bottom */
        .day-trip-timeline .bottom-block .day-trip-timeline-text {
          border-bottom-right-radius: 10px; 
          border-bottom-left-radius: 10px; 
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.2);
          padding: 10px;
          height: 100%;
        }
      }
    
      @media (max-width: 575px) {
        /* move image to top for single-image item */
        .day-trip-timeline .left-block img,
        .day-trip-timeline .right-block img {
          border-top-left-radius: 10px; 
          border-top-right-radius: 10px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-bottom: none;
          width: 100%; 
          object-fit: contain; 
        }
    
        /* transformation from right to middle on phones for two-image items */
        .day-trip-timeline .right-block .text-below img {
          border-top-left-radius: 0px; 
          border-top-right-radius: 0px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-bottom: none;
          width: 100%; 
          object-fit: contain; 
        }
    
        /* move text to bottom in all cases */
        .day-trip-timeline .right-block .day-trip-timeline-text,
        .day-trip-timeline .left-block .day-trip-timeline-text,
        .day-trip-timeline .bottom-block .day-trip-timeline-text {
          border-bottom-right-radius: 10px; 
          border-bottom-left-radius: 10px; 
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          background-color: rgba(0, 0, 0, 0.2);
          padding: 10px;
        }
      </style>
    `;

    this.innerHTML =
      style +
      `
    <div class="day-trip-timeline">
      ${thisData
        .map(
          (item) => `
        ${this.constructEvent(item) + this.isLastEvent(item, thisData)}
      `,
        )
        .join("")}
    </div>
    `;
  }
}

customElements.define("my-day-trip-timeline", DayTripTimeline);
