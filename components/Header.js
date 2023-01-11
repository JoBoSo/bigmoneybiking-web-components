class Header extends HTMLElement {
  constructor() {
    super();
    this.title = 'Big Money Bicycle Touring';
    this.subtitle = "The joy of riding one's bicycle anywhere one wishes and camping along the way is priceless.";
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="bmb-header">
        <h1 id="bmb-title">${this.title}</h1>
        <p id="bmb-phrase">${this.subtitle}</p>
      </div>
    `
  }
}

customElements.define('my-header', Header);