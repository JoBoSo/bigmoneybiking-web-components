class Header extends HTMLElement {
  constructor() {
    super();
    this.title = 'Big Money Bicycle Touring';
    this.subtitle = "M";
  }

  connectedCallback() {
    let style = `
      <style>

      #bmb-header {
        background: #ffc272;
      }
    
      #bmb-title {
        color: #0065d1;
        font-family: 'Pacifico', Arial, Helvetica, sans-serif;
        font-size: 32pt;
        text-align: center;
        margin-bottom: 1vh;
      }
    
      #bmb-phrase {
        color: #823a19;
        font-family: 'Caveat', Arial, Helvetica, sans-serif;
        /* font-size: 18pt; */
        text-align: center;
        margin-bottom: 0;
        color: #ffc272; /*hide*/
        font-size: 6pt;
      }

      </style>
    `;

    this.innerHTML = style + `
      <div id="bmb-header">
        <h1 id="bmb-title">${this.title}</h1>
        <p id="bmb-phrase">${this.subtitle}</p>
      </div>
    `
  }
}

customElements.define('my-header', Header);