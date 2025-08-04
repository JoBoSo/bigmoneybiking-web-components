class Header extends HTMLElement {
  constructor() {
    super();
    this.root = "";
  }

  static get observedAttributes() {
    return ["root"];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  connectedCallback() {
    let style = `
      <style>

      .header {
        /* background: #ffc272; */
        // background-image: url('/images/header-bg.jpg');
        width: 100%;
        background-position: 50% 7%;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        // border-bottom: 1px solid #00abea;
      }
    
      .header #title {
        color: #ffb759ff;
        font-family: 'Pacifico', Arial, Helvetica, sans-serif;
        font-size: 25px;
        text-align: center;
        margin-top: 5px;
        margin-bottom: 3px;
        padding: 0 7pt 5pt 10pt;
      }

      .navbar {
        display: flex;
        // overflow: hidden;
        height: 19pt;
        // background-color: #00abea /*#016ad5*/;
        align-items: center;
        padding: 0 7pt 0 7pt;
        margin: 0;
      }
      
      .navbar a {
        color: #f8f8f8;
        font-size: 11pt;
        text-align: center;
        vertical-align: middle;
        padding: 0 5pt 0 5pt;
        margin: 2pt 1pt 2pt 1pt;
        text-decoration: none;
      }
      
      .navbar a:hover, .active {
        background-color:rgb(36, 197, 255);
        color: #f8f8f8;
        border-radius: 5px;
      }

      @media screen and (max-width: 661px) {
        .header {
          display: block;
          text-align: center;
        }
        
        .navbar {
          display: inline;
          padding: 0;
        }
      }

      @media screen and (max-width: 450px) {
        .navbar a {
          padding: 0 2pt 0 2pt;
        }
      }

      </style>
    `;

    this.innerHTML =
      style +
      `
      <div class="header">
        <h1 id="title">
          <a href="/" style="text-decoration: none; color: inherit;">Big Money Biking</a>
        </h1>
        <div class="navbar">
          <a href="${this.root}index.html"><b>Bike Tours</b></a>
          <a href="${this.root}hikes.html"><b>Hikes</b></a>
          <a href="${this.root}dashboard.html"><b>Dashboard</b></a>
          <!-- <a href="${this.root}blog.html"><b>Blog</b></a> -->
        </div>
        <div class="navbar" style="margin-left: auto;">
          <a style="font-size: 12pt" href="https://www.instagram.com/bigmoneybiking/"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
          <a style="font-size: 12pt" href="https://www.youtube.com/@bigmoneybiking618/featured"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
          <a href="${this.root}subscribe.html"><b>Subscribe</b></a>
        </div>
      </div>
    `;
  }
}

customElements.define("my-header", Header);
