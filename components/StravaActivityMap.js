class StravaActivityMap extends HTMLElement {
  constructor() {
      super();
      this.root = '';
  }

  connectedCallback() {
    let style = `
      <style>

      .map-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .map-container .map {
        width: 100%;
        height: 575px;
        padding: 10px 10px 10px 10px;
      }

      </style>
    `;

    this.innerHTML = style + `
      <div class="map-container">
        <embed src="https://stravaactivitymap.pythonanywhere.com/" class='map'>
      </div>
    `;
  }
}

customElements.define('strava-activity-map', StravaActivityMap);