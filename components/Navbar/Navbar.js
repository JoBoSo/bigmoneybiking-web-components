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
  
    async connectedCallback() {
      // let css = await fetch('./components/Navbar/Navbar.css')
      //   .then((response) => response.text())
      // ;

      // let style = `
      //   <style>${css}</style>
      // `;

      let style = `
        <style>
        
        .my-nav {
          display: flex;
          overflow: hidden;
          height: 19pt;
          background-color: #00abea /*#016ad5*/;
          align-items: center;
          padding: 0 7pt 0 7pt;
          margin: 0;
        }
        
        .my-nav a {
          color: #f8f8f8;
          font-size: 11pt;
          text-align: center;
          vertical-align: middle;
          padding: 0 5pt 0 5pt;
          margin: 2pt 1pt 2pt 1pt;
          text-decoration: none;
        }
        
        .my-nav a:hover, .active {
          background-color:rgb(36, 197, 255);
          color: #f8f8f8;
          border-radius: 5px;

        }
        
        </style>
      `;

      this.innerHTML = style + `
        <div class="my-nav">
          <a href="${this.root}index.html"><b>Bike Tours</b></a>
          <a href="${this.root}hikes.html"><b>Hikes</b></a>
          <a href="${this.root}dashboard.html"><b>Dashboard</b></a>
          <!-- <a href="${this.root}blog.html"><b>Blog</b></a> -->
          <a style="font-size: 12pt" href="https://www.instagram.com/bigmoneybiking/"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
          <a style="font-size: 12pt" href="https://www.youtube.com/@bigmoneybiking618/featured"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
          <a style="margin-left: auto;" href="${this.root}subscribe.html"><b>Subscribe</b></a>
          </a>
        </div>
      `;
    }
  }
  
  customElements.define('my-navbar', Navbar);