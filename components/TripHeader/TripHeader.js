import data from './TripHeaderData.js';

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
    let style = `
      <style>

      .trip-header .tour-title {
        text-align: center;
        margin: 0;
      }
      
      .trip-header .stats-bar {
        text-align: center;
        vertical-align: middle;
        padding-top: 0px !important;
        padding-bottom: 0px !important;
        margin: 0 !important;
        /* border-bottom: solid #dedcdc 1px; */
      }
      
      .trip-header .quote {
        text-align: center;
      }

      </style>
    `;

    let tripData = data[this.data_id];

    this.innerHTML = style + `
      <div class="row no-gutters">
        <div class="col-12 trip-header">
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

customElements.define('my-trip-header', TripHeader);