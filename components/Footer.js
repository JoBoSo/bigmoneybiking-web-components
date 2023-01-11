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
      this.innerHTML = `
        <div class="row no-gutters">
            <div class="col-12">
                <div class="footer">
                    <div class="content">
                        <a href="https://www.instagram.com/big_money_biking/">
                            <img src="${this.root}images/instagram-logo.png">
                        </a>
                    </div>
                </div>
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('my-footer', Footer);