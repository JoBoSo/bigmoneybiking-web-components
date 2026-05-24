import SQLiteViewer from "../../scripts/SQLiteViewer.js";

function tripStats(days, kms) {
  if (days !== null && kms !== null) {
    return `${days} days, ${kms} km`;
  } else if (days !== null) {
    return `${days} days`;
  } else if (kms !== null) {
    return `${kms} km`;
  } else {
    return "";
  }
}

async function getTileData(trip_type) {
  const viewer = new SQLiteViewer("database.sqlite3");
  await viewer.init();

  const result = viewer.runPreparedQueryAsJSON(
    `
    SELECT title, subtitle, image, catagory, page_id, distance_km, days
    FROM trips as trip
    LEFT JOIN (
      SELECT id, distance_km, days
      FROM trip_header
    ) as trip_header ON trip_header.id = trip.page_id 
    WHERE trip_type = ?
  `,
    [trip_type],
  );

  return result;
}

class Tiles extends HTMLElement {
  constructor() {
    super();
    this.trip_type = "";
  }

  static get observedAttributes() {
    return ["trip_type"];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  async connectedCallback() {
    const tiles = await getTileData(this.trip_type);

    const tileHTML = tiles
      .map(
        (tile) => `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-0 card-corners">
          <a href="${tile.catagory}/${tile.page_id}.html">
            <div class="content">
              <div class="content-overlay"></div>
              <div class="image-wrapper">
                <img 
                  class="content-image img-fluid fade-in"
                  src="images/placeholder.webp" 
                  data-src="images/${tile.image}" 
                  loading="lazy"
                  alt="${tile.title} image"
                />
              </div>
              <div class="content-details">
                <h3 class="content-title text-white">${tile.title}</h3>
                <p class="content-text text-white">${tile.subtitle}</p>
                <p class="content-text text-white" style="font-size: 12px;">
                  ${tripStats(tile.days, tile.distance_km)}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    `,
      )
      .join("");

    this.innerHTML = `<div class="row no-gutters" id="card-row">${tileHTML}</div>`;
    this.lazyLoadImages();
  }

  lazyLoadImages() {
    const images = this.querySelectorAll("img[data-src]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute("data-src");
            img.onload = () => img.classList.add("loaded");
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: "200px",
        threshold: 0.1,
      },
    );

    images.forEach((img) => observer.observe(img));
  }
}

customElements.define("my-tiles", Tiles);
