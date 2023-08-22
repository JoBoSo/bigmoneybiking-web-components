class TileFilter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let style = `
      <style>

      .filter-container {
        background: #02bd94;
        margin: 10px 10px 0px 10px;
        border-radius: 7px;
        font-size: 0;
      }
      
      .filter-container .button-container {
        font-size: 10pt;
      }
      
      .filter-container button {
        border: none;
        background: none;
        color: white;
        border-radius: 7px;
        margin: 2px;
      }
      
      .filter-container button:hover, button:focus {
        background: #00d6a8;
        outline: none;
      }

      </style>
    `;

    this.innerHTML = style + `
      <div class="filter-container">
        <span class="button-container"><button onClick="tileFilter(this.name)" name="everywhere">Everywhere</button></span>
        <span class="button-container"><button onClick="tileFilter(this.name)" name="westCoast">West Coast</button></span>
        <span class="button-container"><button onClick="tileFilter(this.name)" name="interiorBC">Interior BC</button></span>
        <span class="button-container"><button onClick="tileFilter(this.name)" name="quebec">Quebec</button></span>
      </div>
    `
  }
}

customElements.define('tile-filter', TileFilter);