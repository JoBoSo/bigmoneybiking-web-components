class Footer extends HTMLElement {
  constructor() {
    super();
    this.root = '';
  }

  static get observedAttributes() {
    return ['root'];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[ property ] = newValue; 
  }

  connectedCallback() {
    let style = `
      <style>

      .footer {
        /* border-top: rgb(64, 64, 64) solid 1px; */
        /* padding-top: 5px; */
        padding-bottom: 5px;
      }
    
      .footer img {
          display: flex;
          margin-left: auto;
          margin-right: auto;
          width: 7%;
          min-width: 90px;
      }

      </style>
    `;

    this.innerHTML = style + `
      <div class="row no-gutters">
        <div class="col-12">
          <div class="footer">
            <a href="https://www.instagram.com/big_money_biking/">
              <img src="${this.root}images/instagram-logo.png" />
            </a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('my-footer', Footer);