class TileFilter extends HTMLElement {
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

    let html = '';

    if (this.page_id == 'bike_tours') {
      html = `
        <div class="filter-container">
          <span class="button-container"><button onClick="tileFilter(this.name)" name="everywhere">Everywhere</button></span>
          <span class="button-container"><button onClick="tileFilter(this.name)" name="westCoast">West Coast</button></span>
          <span class="button-container"><button onClick="tileFilter(this.name)" name="interiorBC">Interior BC</button></span>
          <span class="button-container"><button onClick="tileFilter(this.name)" name="quebec">Quebec</button></span>
          <span class="button-container"><button onClick="tileFilter(this.name)" name="gulfIslands">Gulf Islands</button></span>
          <span class="button-container"><button onClick="tileFilter(this.name)" name="vancouverIsland">Vancouver Island</button></span>
        </div>
      `
    }

    else if (this.page_id == 'hikes') {
      html = `
        <div class="filter-container">
          <span class="button-container"><button onClick="tileFilter(this.name)" name="everywhere">Everywhere</button></span>
          <span class="button-container"><button onClick="tileFilter(this.name)" name="quebecHikes">Quebec</button></span>
          <span class="button-container"><button onClick="tileFilter(this.name)" name="rockiesHikes">Rocky Mountains</button></span>
          <span class="button-container"><button onClick="tileFilter(this.name)" name="columbiasHikes">Columbia Mountains</button></span>
          <span class="button-container"><button onClick="tileFilter(this.name)" name="skeenaHikes">Skeena Mountains</button></span>
          <span class="button-container"><button onClick="tileFilter(this.name)" name="coastHikes">Coast Mountains</button></span>
          <span class="button-container"><button onClick="tileFilter(this.name)" name="vancouverIslandHikes">Vancouver Island</button></span>
          <span class="button-container"><button onClick="tileFilter(this.name)" name="ontarioHikes">Ontario</button></span>
        </div>
      `
    }

    this.innerHTML = html
  }
}

customElements.define('tile-filter', TileFilter);