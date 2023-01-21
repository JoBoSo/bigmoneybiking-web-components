class TripHeader extends HTMLElement {
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

  connectedCallback() {
    let tripData = data[this.data_id];

    this.innerHTML = `
      <div class="row no-gutters">
        <div class="col-12">
          <h1 class="tour-title">${tripData.title}</h1>
          <p class="stats-bar">
            ${tripData.distance_km !== null ? tripData.distance_km + ' km | ' : ''}
            ${tripData.days !== null ? tripData.days + ' Days | ' : ''}
            ${tripData.terrain !== null ? tripData.terrain + ' | ' : ''}
            ${tripData.location !== null ? tripData.location + ' | ' : ''}
            ${tripData.dates !== null ? tripData.dates : ''}
          </p>
        </div>
      </div>
    `;
  }
}

const data = {
  "babine-lake": {
    "title": "Babine Lake",
    "distance_km": 187,
    "days": 2,
    "terrain": "Gravel Logging Roads",
    "location": "Central BC",
    "dates": "May 8-9, 2021"
  },
  "begbie-falls": {
    "title": "Begbie Falls",
    "distance_km": 34,
    "days": 2,
    "terrain": null,
    "location": "Revelstoke, BC",
    "dates": "Sept 26-27, 2020"
  },
  "brewster-lake": {
    "title": "Brewster & Campbell Lakes",
    "distance_km": 177,
    "days": 3,
    "terrain": "Paved & logging roads",
    "location": "Campbell River, BC",
    "dates": "May 28-30, 2020"
  },
  "comox-lake": {
    "title": "Comox Lake",
    "distance_km": 80,
    "days": 2,
    "terrain": "Paved & logging roads",
    "location": "Vancouver Island, BC",
    "dates": "July 4-5, 2020"
  },
  "downie-creek": {
    "title": "Downie Creek",
    "distance_km": 158,
    "days": 3,
    "terrain": "Paved Roads",
    "location": "Columbia River, BC",
    "dates": "Oct 3-5, 2020"
  },
  "haida-gwaii": {
    "title": "Haida Gwaii",
    "distance_km": 185,
    "days": 3,
    "terrain": "Paved & logging roads",
    "location": null,
    "dates": "Aug 12-14, 2021"
  },
  "mtrl-sherbrooke": {
    "title": "Montreal to Sherbooke",
    "distance_km": 399,
    "days": 3,
    "terrain": "Paved & Gravel Bike Paths",
    "location": "SW QC",
    "dates": "Sept 16-18, 2022"
  },
  "nanaimo-courtenay": {
    "title": "Nanaimo to Courtenay",
    "distance_km": 180,
    "days": 2,
    "terrain": "Paved & Logging Roads",
    "location": "Vancouver Island",
    "dates": "May 6-7, 2020"
  },
  "nass-valley": {
    "title": "Nisga'a",
    "distance_km": 474,
    "days": 4,
    "terrain": "Paved & logging roads",
    "location": "Skeena",
    "dates": "May 19-22, 2021"
  },
  "ptit-train": {
    "title": "P'tit Train du Nord",
    "distance_km": 316,
    "days": 3,
    "terrain": "Paved & gravel rail trail",
    "location": "SW Laurentians, QC",
    "dates": "Aug 12-15, 2022"
  },
  "quadra-cortes": {
    "title": "Quadra & Cortes",
    "distance_km": 257,
    "days": 3,
    "terrain": "Paved & logging roads",
    "location": "Discovery Islands, BC",
    "dates": "Aug 1-3, 2020"
  },
  "san-josef-bay": {
    "title": "North Vancouver Island",
    "distance_km": 784,
    "days": 8,
    "terrain": "Paved & logging roads",
    "location": null,
    "dates": "May 14-21, 2020"
  },
  "texada": {
    "title": "Texada Island",
    "distance_km": 195,
    "days": 4,
    "terrain": "Paved & Logging Roads",
    "location": null,
    "dates": "June 12-15, 2020"
  },
  "to-mtrl": {
    "title": "Schomberg to Montreal",
    "distance_km": 642,
    "days": 6,
    "terrain": "Paved & Gravel Bike Paths",
    "location": null,
    "dates": "Aug 16-21, 2019"
  },
  "": {
    "title": "",
    "distance_km": 0,
    "days": 0,
    "terrain": "",
    "location": "",
    "dates": ""
  },
}

customElements.define('my-trip-header', TripHeader);