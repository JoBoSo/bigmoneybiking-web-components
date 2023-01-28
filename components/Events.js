class Events extends HTMLElement {
  constructor() {
      super();
      this.data_id = '';
  }

  static get observedAttributes() {
      return ['data_id'];
  }

  attributeChangedCallback(property, oldValue, newValue) {
      if (oldValue === newValue) return;
      this[ property ] = newValue; 
  }

  connectedCallback() {
    let data = events[this.data_id];

    this.innerHTML = `
    <div class="events-container">
      <div class="title">${data.title}</div>

      ${data.events.map((event) => `
      <div class="event-container">
        <div class="circle"></div>
        <div class="header">${event.header}</div>
        <div class="description">${event.description}</div>
        <div class="photos-container">
          <div class="row no-gutters">
          ${event.photos.map((photo) => `
            <div class="col-12 col-sm-4">
              <div class="img-caption-container">
                <img src="../images/${photo.image}" loading="lazy">
                <div class="caption">${photo.caption}</div>
              </div>
            </div>
          `).join('')}
          </div>
        </div>
      </div>
      `).join('')}

    </div>
    `;
  }
}

const events = {
  "rangers-black-creek": {
    "title": "BC Parks Student Rangers&#8212;North Vancouver Island",
    "subtitle": "",
    "events": [

      {
        "header": "Denman Island",
        "description": "Our trip to Denman Island on August 10-14, 2020.",
        "photos": [
          {
            "image": "rangers-black-creek/denman/IMG_7141.jpg",
            "caption": "Pulled Scotch Broom"
          },
          {
            "image": "rangers-black-creek/denman/IMG_7144.jpg",
            "caption": "Camped at Fillongley Provincial Park"
          },
          {
            "image": "rangers-black-creek/denman/IMG_7145.jpg",
            "caption": "Chrome Island Lighthouse"
          },
          {
            "image": "rangers-black-creek/denman/IMG_5770.jpg",
            "caption": "The Island's Edge"
          },
          {
            "image": "rangers-black-creek/denman/IMG_7148.jpg",
            "caption": "Beachcombing"
          },
          {
            "image": "rangers-black-creek/denman/IMG_7155.jpg",
            "caption": "Chrome Island Viewpoint"
          },
        ]
      },

      {
        "header": "Ralph River",
        "description": "Our trip to Ralph River on June 16-18, 2020.",
        "photos": [
          {
            "image": "rangers-black-creek/ralph-river/IMG_6123.jpg",
            "caption": "Ralph River's Shore"
          },
          {
            "image": "rangers-black-creek/ralph-river/IMG_6136.jpg",
            "caption": "Raplh River"
          },
          {
            "image": "rangers-black-creek/ralph-river/IMG_6138.jpg",
            "caption": "Lower Myra Falls"
          },
        ]
      },

      {
        "header": "Hornby Island",
        "description": "Our trip to Helliwell Provincial Park on Hornby Island on July 2, 2020.",
        "photos": [
          {
            "image": "rangers-black-creek/helliwell/IMG_6221.jpg",
            "caption": "Purple Starfish"
          },
          {
            "image": "rangers-black-creek/helliwell/IMG_6239.jpg",
            "caption": "The Shore"
          },
          {
            "image": "rangers-black-creek/helliwell/IMG_6258.jpg",
            "caption": "The Helliwell Bluffs"
          },
        ]
      },

    ]
  }
} 

customElements.define('my-events', Events);