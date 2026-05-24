class UsaBikeTourDashboard extends HTMLElement {
  constructor() {
    super();
    this.root = "";
  }

  connectedCallback() {
    let style = `
      <style>

      .dash-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -30px;
        padding-bottom: 10px;
      }
      
      .dash-container .dash {
        width: 100%;
        height: 3257px;
        margin: 0px 18px 0px 18px;
        border-radius: 7px;
        overflow: hidden;
        border: 1px solid #ddd;
      }

      </style>
    `;

    this.innerHTML =
      style +
      `
      <div class="dash-container">
        <embed src="https://westernusabiketourexpensedash.pythonanywhere.com/" class='dash'>
      </div>
    `;
  }
}

customElements.define("usa-bike-tour-dashboard", UsaBikeTourDashboard);
