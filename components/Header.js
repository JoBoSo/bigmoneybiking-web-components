class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let style = `
      <style>

      #bmb-header {
        background: #ffc272;
        background-image: url('/components/sunset.jpg');
        width: 100%;
        background-position: 50% 7%;
        background-repeat: no-repeat;
        background-size: cover;
        backdrop-filter: blur(5px);
      }
    
      #bmb-title {
        color: #0065d1;
        font-family: 'Pacifico', Arial, Helvetica, sans-serif;
        font-size: 22pt;
        text-align: center;
        margin-bottom: 0;
        text-shadow: 0.5px 0.5px 15px white;
        -webkit-text-stroke: 0.3px white; /* width and color */
      }
    
      #bmb-phrase {
        color: #823a19;
        font-family: 'Caveat', Arial, Helvetica, sans-serif;
        /* font-size: 18pt; */
        text-align: center;
        margin-bottom: 0;
        color: #ffc272; /*hide*/
        font-size: 5pt;
      }

      </style>
    `;

    this.innerHTML = style + `
      <div id="bmb-header">
        <h1 id="bmb-title">Big Money Biking</h1>
        <p id="bmb-phrase">M</p>
      </div>
    `
  }
}

customElements.define('my-header', Header);