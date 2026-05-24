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
        padding-bottom: 5px;
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
        color: #ffb759ff;
        transition: color;
      }

      </style>
    `;

    this.innerHTML =
      style +
      `
      <footer class="social-footer">
        <div class="social-footer-icons">
          <a href="https://www.youtube.com/@bigmoneybiking618/videos" title="YouTube"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/bigmoneybiking/" title="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
          <a href="https://www.strava.com/athletes/6648947" title="Strava"><i class="fa-brands fa-strava" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/jbscott/" title="LinkedIn"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
          <a href="https://github.com/JoBoSo" title="GitHub"><i class="fa-brands fa-github" aria-hidden="true"></i></a>
        </div>
      </footer>
    `;
  }
}

customElements.define("my-footer", Footer);
