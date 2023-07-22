class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let style = `
      <style>

      .social-footer {
        padding: 0;
        background: none;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
      }
      
      .social-footer .social-footer-icons {
        margin-right: 0cm;
      }
      
      .social-footer .social-footer-icons .fa-brands {
        font-size: 24pt;
        color: #fbeede;
        margin: 0px 5px;
      }
      
      .social-footer .social-footer-icons .fa-brands:hover {
        color: #4a4a4a;
        transition: color;
      }

      </style>
    `;

    this.innerHTML = style + `
      <footer class="social-footer">
        <div class="social-footer-icons">
          <a href="https://github.com/JoBoSo"><i class="fa-brands fa-github" aria-hidden="true"></i></a>
          <a href="https://www.youtube.com/channel/UCKRBrbnllsieDOUu7j8falw"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/big_money_biking/"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
          <a href="https://www.strava.com/athletes/6648947"><i class="fa-brands fa-strava" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/james-scott-the-third/"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
        </div>
      </footer>
    `;
  }
}

customElements.define('my-footer', Footer);