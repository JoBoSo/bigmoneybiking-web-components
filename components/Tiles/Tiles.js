import tiles from './TilesData.js';

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
        <div class="col-12 col-md-4">
          <div class="card border-0 card-corners">
            <a href=${tile.page}>
              <div class="content">
                <div class="content-overlay"></div>
                <img class="content-image img-fluid" src=${'images/' + tile.image} height="300px">
                <div class="content-details">
                  <h3 class="content-title text-white">
                        ${tile.title}
                    </h3>
                    <p class="content-text text-white">
                        ${tile.subtitle}
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