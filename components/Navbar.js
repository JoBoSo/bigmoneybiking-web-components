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
      let style = `
        <style>

        .my-nav {
          display: flex;
          overflow: hidden;
          height: 21pt;
          background-color: #00abea /*#016ad5*/;
          align-items: center;
          padding: 0;
          margin: 0;
        }
      
        .my-nav a {
          color: #f8f8f8;
          font-size: 12pt;
          text-align: center;
          vertical-align: middle;
          padding: 10pt;
          margin: 0;
          text-decoration: none;
        }
    
        .my-nav a:hover {
          background-color: #e69c3d;
          color: #f8f8f8;
        }

        </style>
      `;

      this.innerHTML = style + `
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