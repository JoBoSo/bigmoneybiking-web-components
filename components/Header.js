class Header extends HTMLElement {
  constructor() {
    super();
    this.title = 'Big Money Bicycle Touring';
    this.subtitle = "Nature gives space for thought.";
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