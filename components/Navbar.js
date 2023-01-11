class Navbar extends HTMLElement {
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
        <div class="my-nav">
            <a href="${this.root}index.html"><b>BIKE TOURS</b></a>
            <a href="${this.root}hikes.html"><b>HIKES</b></a>
            <a href="${this.root}blog.html"><b>BLOG</b></a>
            <a style="margin-left: auto;" href="${this.root}subscribe.html"><i><b>SUBSCRIBE</b></i></a>
            </a>
        </div>
      `;
    }
  }
  
  customElements.define('my-navbar', Navbar);