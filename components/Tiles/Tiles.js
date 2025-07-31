import tiles from './TilesData.js';
import trips from '../TripHeader/TripHeaderData.js';

function getTripStats(key){
  let days = trips[key]["days"]
  let kms = trips[key]["distance_km"]

  if (days !== null & kms !== null) {
    return `${days} days, ${kms} km`
  } else if (days !== null & kms == null) {
    return `${days} days`
  } else if (days == null & kms !== null) {
    return `${kms} km`
  } else {
    return ``
  }
}

class Tiles extends HTMLElement {
  constructor() {
      super();
      this.page_id = '';
  }

  static get observedAttributes() {
      return ['page_id'];
  }

  attributeChangedCallback(property, oldValue, newValue) {
      if (oldValue === newValue) return;
      this[ property ] = newValue; 
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="row no-gutters" id="card-row">
      ${tiles[this.page_id].map((tile) => `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card border-0 card-corners">
            <a href=${tile.page}>
              <div class="content">
                <div class="content-overlay"></div>
                <div class="content-overlay-2"></div>
                <img class="content-image img-fluid" src=${'images/' + tile.image} height="300px">
                <div class="content-details">
                  <h3 class="content-title text-white">
                      ${tile.title}
                  </h3>
                  <p class="content-text text-white">
                      ${tile.subtitle}
                  </p>
                  <p class="content-text text-white" style="font-size: 12px;">
                      ${getTripStats([tile.page.slice(0, -5).split('/')[1]])}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      `).join("")}
    </div>
    `;
  }
}

customElements.define('my-tiles', Tiles);