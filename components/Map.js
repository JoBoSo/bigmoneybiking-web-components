import SQLiteViewer from '../../scripts/SQLiteViewer.js';

async function getMapData(page_id){
  const viewer = new SQLiteViewer("../database.sqlite3");
  await viewer.init();

  const result = viewer.runPreparedQueryAsJSON(`
    SELECT map_link
    FROM map
    WHERE page_id = ?
    `, 
    [page_id]
  )

  return result
}

class Map extends HTMLElement {
  constructor() {
      super();
      this.data_id = '';
  }

  static get observedAttributes() {
      return ['data_id'];
  }

  attributeChangedCallback(property, oldValue, newValue) {
      if (oldValue === newValue) return;
      this[ property ] = newValue; 
  }

  async connectedCallback() {
    let style = `
      <style>

      .map {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
  
      .myMap {
          width:100%; 
          height:100%; 
          overflow:hidden; 
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
      }
      
      .myMap iframe {
          margin-top:-69px; 
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border: 2px solid rgba(0, 0, 0, 0.2);
          display: block;
      }

      .open-external-map {
        font-size: 16pt;
        color: white;
      }

      .open-external-map:hover {
        color: blue;
      }

      </style>
    `;

    const map = await getMapData(this.data_id)
    const map_link = (map[0].map_link)

    this.innerHTML = style + `
      <div class="map">
        <h2 class="text-center" style="font-size: 18pt; margin-bottom: 0;">
          Route 
          <a class="open-external-map" target="_blank" rel="noopener noreferrer" href=${map_link}>
            <i class="fa-solid fa-up-right-from-square"></i>
          </a>
        </h2>
        <div class="row no-gutters">
          <div class="col-12 myMap">
            <iframe src=${map_link} width="100%" height="480"></iframe>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('my-map', Map);