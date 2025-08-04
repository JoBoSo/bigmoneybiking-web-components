class TileFilter extends HTMLElement {
  constructor() {
    super();
    this.page_id = '';
  }

  static get observedAttributes() {
    return ['page_id'];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let html = '';

    if (this.page_id === 'bike_tours') {
      html = `
        <div class="filter-container">
          <span class="button-container"><button name="everywhere">Everywhere</button></span>
          <span class="button-container"><button name="washington">Washington</button></span>
          <span class="button-container"><button name="westCoast">West Coast</button></span>
          <span class="button-container"><button name="interiorBC">Interior BC</button></span>
          <span class="button-container"><button name="quebec">Quebec</button></span>
          <span class="button-container"><button name="gulfIslands">Gulf Islands</button></span>
          <span class="button-container"><button name="vancouverIsland">Vancouver Island</button></span>
        </div>
      `;
    } else if (this.page_id === 'hikes') {
      html = `
        <div class="filter-container">
          <span class="button-container"><button name="everywhere">Everywhere</button></span>
          <span class="button-container"><button name="quebecHikes">Quebec</button></span>
          <span class="button-container"><button name="rockiesHikes">Rocky Mountains</button></span>
          <span class="button-container"><button name="columbiasHikes">Columbia Mountains</button></span>
          <span class="button-container"><button name="skeenaHikes">Skeena Mountains</button></span>
          <span class="button-container"><button name="coastHikes">Coast Mountains</button></span>
          <span class="button-container"><button name="vancouverIslandHikes">Vancouver Island</button></span>
          <span class="button-container"><button name="ontarioHikes">Ontario</button></span>
        </div>
      `;
    }

    this.innerHTML = html;

    // Focus 'everywhere' button by default
    const everywhereBtn = this.querySelector('button[name="everywhere"]');
    if (everywhereBtn) {
      everywhereBtn.focus();
    }

    // Attach event listeners
    this.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => {
        this.handleFilter(button.name);
      });
    });
  }

  handleFilter(buttonName) {
    // Here is your filtering logic, slightly adapted:

    // Select all <a> inside <my-tiles> custom element
    const tileLinks = document.querySelectorAll('my-tiles a');

    tileLinks.forEach(link => {
      let filter = [];

      if (buttonName === 'everywhere') {
        // Show all tiles
        link.parentElement.parentElement.style.display = '';
        return;
      }

      // Bike tours (index.html)
      if (buttonName === 'washington') filter = ['north-cascades'];
      else if (buttonName === 'westCoast') filter = ['lillooet', 'french-beach', 'gabriola', 'san-juan-circle', 'nanaimo-courtenay', 'san-josef-bay', 'brewster-lake', 'texada', 'comox-lake', 'quadra-cortes', 'nass-valley', 'haida-gwaii', 'galiano', 'saltspring', 'south-vi', 'pender-mayne-saturna', 'olympic', 'sunshine-coast', 'lomas-lake', 'san-juan-circle'];
      else if (buttonName === 'gulfIslands') filter = ['gabriola', 'texada', 'quadra-cortes', 'galiano', 'saltspring', 'pender-mayne-saturna'];
      else if (buttonName === 'vancouverIsland') filter = ['french-beach', 'nanaimo-courtenay', 'san-josef-bay', 'brewster-lake', 'comox-lake', 'south-vi', 'lomas-lake'];
      else if (buttonName === 'interiorBC') filter = ['thompson-nicola', 'begbie-falls', 'downie-creek', 'babine-lake'];
      else if (buttonName === 'quebec') filter = ['to-mtrl', 'ptit-train', 'mtrl-sherbrooke', 'quebec'];

      // Hikes (hikes.html)
      else if (buttonName === 'quebecHikes') filter = ['mont-nixon', 'montagne-noire'];
      else if (buttonName === 'rockiesHikes') filter = ['six-glaciers', 'grotto-mtn', 'mt-temple', 'bourgeau', 'cory-pass', 'ha-ling', 'jasper'];
      else if (buttonName === 'columbiasHikes') filter = ['sprauge-bay', 'perley-rock', 'jade-lakes', 'miller-lake', 'mt-begbie', 'mt-cartier', 'mccrae-peak', 'mt-revelstoke', 'viking-ridge'];
      else if (buttonName === 'skeenaHikes') filter = ['silver-king', 'seaton-ridge'];
      else if (buttonName === 'coastHikes') filter = ['tin-hat', 'oliver-creek', 'gunsight', 'silvern-lake', 'maroon-mtn'];
      else if (buttonName === 'vancouverIslandHikes') filter = ['mt-albert-edward', 'phillips-ridge', 'mt-becher', 'jocelyn-hill', 'heather-mountain'];
      else if (buttonName === 'ontarioHikes') filter = ['algonquin'];

      // Determine page name from href
      const thisPageName = link.href.substring(link.href.lastIndexOf('/') + 1, link.href.length - 5);

      // Show or hide tiles
      if (filter.includes(thisPageName)) {
        link.parentElement.parentElement.style.display = '';
      } else {
        link.parentElement.parentElement.style.display = 'none';
      }
    });
  }
}

customElements.define('tile-filter', TileFilter);
