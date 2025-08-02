import SQLiteViewer from '../../scripts/SQLiteViewer.js';

function tripStats(days, kms){
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

async function getTileData(trip_type){
  const viewer = new SQLiteViewer("database.sqlite3");
  await viewer.init();

  function getPageFragment(page){
    return page.slice(0, -5).split('/')[1];
  }
  viewer.db.create_function("getPageFragment", getPageFragment)

  const result = viewer.runPreparedQueryAsJSON(`
    SELECT title, subtitle, image, page, distance_km, days
    FROM trips as trip
    left join (
      select id, distance_km, days
      from trip_header
    ) as trip_header on trip_header.id = getPageFragment(trip.page)
    WHERE trip_type = ?
    `, 
    [trip_type]
  )

  return result
}

class Tiles extends HTMLElement {
  constructor() {
      super();
      this.trip_type = '';
  }

  static get observedAttributes() {
      return ['trip_type'];
  }

  attributeChangedCallback(property, oldValue, newValue) {
      if (oldValue === newValue) return;
      this[ property ] = newValue; 
  }

async connectedCallback() {
  const tiles = await getTileData(this.trip_type)

  const tileHTML = await Promise.all(
    tiles.map(async (tile) => {
      return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card border-0 card-corners">
            <a href=${tile.page}>
              <div class="content">
                <div class="content-overlay"></div>
                <div class="content-overlay-2"></div>
                <img class="content-image img-fluid" src=${'images/' + tile.image} height="300px">
                <div class="content-details">
                  <h3 class="content-title text-white">${tile.title}</h3>
                  <p class="content-text text-white">${tile.subtitle}</p>
                  <p class="content-text text-white" style="font-size: 12px;">${tripStats(tile.days, tile.distance_km)}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      `;
    })
  );

  this.innerHTML = `<div class="row no-gutters" id="card-row">${tileHTML.join('')}</div>`;
}

}
customElements.define('my-tiles', Tiles);