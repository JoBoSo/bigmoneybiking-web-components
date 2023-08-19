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
          height: 22pt;
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
          padding: 0 10pt 0 10pt;
          margin: 2pt 1pt 2pt 1pt;
          text-decoration: none;
        }
    
        .my-nav a:hover, .active {
          background-color: #e69c3d;
          color: #f8f8f8;
          border-radius: 5px;
          box-shadow: 0 0 4px #e69c3d;
        }

        </style>
      `;

      this.innerHTML = style + `
        <div class="my-nav">
          <a href="${this.root}index.html"><b>BIKE TOURS</b></a>
          <a href="${this.root}hikes.html"><b>HIKES</b></a>
          <a href="${this.root}blog.html"><b>BLOG</b></a>
          <a style="font-size: 13pt" href="https://www.instagram.com/big_money_biking/"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
          <a style="margin-left: auto;" href="${this.root}subscribe.html"><i><b>SUBSCRIBE</b></i></a>
          </a>
        </div>
      `;
    }
  }
  
  customElements.define('my-navbar', Navbar);