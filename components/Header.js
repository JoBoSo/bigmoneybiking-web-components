class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let style = `
      <style>

      #bmb-header {
        /* background: #ffc272; */
        background-image: url('/images/header-bg.jpg');
        width: 100%;
        background-position: 50% 7%;
        background-repeat: no-repeat;
        background-size: cover;
        backdrop-filter: blur(5px);
      }
    
      #bmb-title {
        color:rgb(0, 123, 255);
        font-family: 'Pacifico', Arial, Helvetica, sans-serif;
        font-size: 22pt;
        text-align: center;
        margin-bottom: 0;
        text-shadow: -1px 3px 10px white;
        -webkit-text-stroke: 0.4px white; /* width and color */
      }
    
      #bmb-phrase {
        color: #823a19;
        font-family: 'Caveat', Arial, Helvetica, sans-serif;
        /* font-size: 18pt; */
        text-align: center;
        margin-bottom: 0;
        color: rgb(0, 123, 255); /*hide*/
        font-size: 5pt;
      }

      </style>
    `;

    this.innerHTML = style + `
      <div id="bmb-header">
        <h1 id="bmb-title">Big Money Biking</h1>
        <p id="bmb-phrase">.</p>
      </div>
    `
  }
}

customElements.define('my-header', Header);