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
      return '<div class="connector row no-gutters"></div>';
    }
    return "";
  }

  constructEvent(item) {
    let larger_media = window.matchMedia("(min-width: 576px)");
    let smaller_media = window.matchMedia("(max-width: 575px)");

    // larger screen: image left - text right
    if (larger_media.matches && item.left_image && !item.right_image) {
      return `
        <div class="row no-gutters">
          <div class="left-block col-xs-6 col-sm-6 col-md-6 col-xl-4 offset-xl-2">
            <img src=${"../images/" + item.left_image}>
          </div>
          <div class="right-block col-xs-6 col-sm-6 col-md-6 col-xl-4">
            <div class="day-trip-timeline-text">
              <h3>${item.header}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        </div>
      `;
    }

    // larger screen: text left - image right
    else if (larger_media.matches && !item.left_image && item.right_image) {
      return `
        <div class="row no-gutters">
          <div class="left-block col-xs-6 col-sm-6 col-md-6 col-xl-4 offset-xl-2">
            <div class="day-trip-timeline-text">
              <h3>${item.header}</h3>
              <p>${item.description}</p>
            </div>
          </div>
          <div class="right-block col-xs-6 col-sm-6 col-md-6 col-xl-4">
            <img src=${"../images/" + item.right_image}>
          </div>
        </div>
      `;
    }

    // larger screen: image left - image right - text bottom
    if (larger_media.matches && item.left_image && item.right_image) {
      return `
        <div class="row no-gutters">
          <div class="left-block col-xs-6 col-sm-6 col-md-6 col-xl-4 offset-xl-2">
            <div class="text-below">
              <img src=${"../images/" + item.left_image}>
            </div>
          </div>
          <div class="right-block col-xs-6 col-sm-6 col-md-6 col-xl-4">
            <div class="text-below">
              <img src=${"../images/" + item.right_image}>
            </div>
          </div>
          <div class="bottom-block col-xs-12 col-sm-12 col-md-12 col-xl-8 offset-xl-2">
            <div class="day-trip-timeline-text">
              <h3>${item.header}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        </div>
      `;
    }

    // smaller screen: one image top - text bottom
    // transform items with one image, left or right, for phones.
    else if (
      smaller_media.matches &&
      ((!item.left_image && item.right_image) ||
        (item.left_image && !item.right_image))
    ) {
      let image =
        item.right_image !== null ? item.right_image : item.left_image;
      return `
        <div class="row no-gutters">
          <div class="left-block col-xs-6 col-sm-6 col-md-6 col-xl-4 offset-xl-2">
            <img src=${"../images/" + image}>
          </div>
          <div class="right-block col-xs-6 col-sm-6 col-md-6 col-xl-4">
            <div class="day-trip-timeline-text">
              <h3>${item.header}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        </div>
      `;
    }

    // smaller screen: image top - image middle - text bottom
    // transform items with two images, left and right, for phones
    if (smaller_media.matches && item.left_image && item.right_image) {
      return `
        <div class="row no-gutters">
          <div class="left-block col-xs-6 col-sm-6 col-md-6 col-xl-4 offset-xl-2">
            <div class="text-below">
              <img src=${"../images/" + item.left_image}>
            </div>
          </div>
          <div class="right-block col-xs-6 col-sm-6 col-md-6 col-xl-4">
            <div class="text-below">
              <img src=${"../images/" + item.right_image}>
            </div>
          </div>
          <div class="bottom-block col-xs-12 col-sm-12 col-md-12 col-xl-8 offset-xl-2">
            <div class="day-trip-timeline-text">
              <h3>${item.header}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        </div>
      `;
    }
  }

  async connectedCallback() {
    const thisData = await getTimelineData(this.data_id);

    let style = `
      <style>

      .day-trip-timeline {
        margin-top: 10px;
      }
    
      @media (min-width: 576px) {
        /* image left */
        .day-trip-timeline .left-block img {
          border-top-left-radius: 10px; 
          border-bottom-left-radius: 10px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-right: 0.75px solid white;
          width: 100%; 
          object-fit: contain; 
        }
    
        /* image right */
        .day-trip-timeline .right-block img {
          border-top-right-radius: 10px; 
          border-bottom-right-radius: 10px; 
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-left: 0.75px solid white;
          width: 100%; 
          object-fit: contain; 
        }
    
        /* text left */
        .day-trip-timeline .left-block .day-trip-timeline-text {
          border-top-left-radius: 10px; 
          border-bottom-left-radius: 10px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-right: 0.75px solid white;
          background: rgba(0, 0, 0, 0.2);
          padding: 10px;
          height: 100%;
        }
    
        /* text right */
        .day-trip-timeline .right-block .day-trip-timeline-text {
          border-top-right-radius: 10px; 
          border-bottom-right-radius: 10px; 
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-left: 0.75px solid white;
          background: rgba(0, 0, 0, 0.2);
          padding: 10px;
          height: 100%;
        }
    
        /* image left with text beneath it */
        .day-trip-timeline .left-block .text-below img {
          border-top-left-radius: 10px; 
          border-bottom-left-radius: 0px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-right: 0.75px solid white;
          width: 100%; 
          object-fit: contain; 
        }
    
        /* image right with text beneath it */
        .day-trip-timeline .right-block .text-below img {
          border-top-right-radius: 10px; 
          border-bottom-right-radius: 0px; 
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-left: 0.75px solid white;
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
    
        /* connector line */
        .day-trip-timeline .connector {
          height: 20px; 
          background: linear-gradient(white, white) no-repeat center/1.5px 100%;
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
    
        .day-trip-timeline .connector {
          height: 20px; 
          background: linear-gradient(white, white) no-repeat center/1.5px 100%
        }
      }

      </style>
    `;

    if (!thisData || thisData.length === 0) {
      this.innerHTML =
        style +
        `
    <div class="day-trip-timeline">
      <p>No timeline data available.</p>
    </div>
    `;
      return;
    }

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
