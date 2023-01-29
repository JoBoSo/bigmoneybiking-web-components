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
    "title": "BC Parks Student Rangers: North Vancouver Island",
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

      {
        "header": "Yorke Island",
        "description": "Our trip to the overgrown WWII military base on Yorke Island on July 2, 2020.",
        "photos": [
          {
            "image": "rangers-black-creek/yorke-island/IMG_6442.jpg",
            "caption": ""
          },
          {
            "image": "rangers-black-creek/yorke-island/IMG_6440.jpg",
            "caption": ""
          },
          {
            "image": "rangers-black-creek/yorke-island/IMG_6373.jpg",
            "caption": ""
          },
          {
            "image": "rangers-black-creek/yorke-island/IMG_6380.jpg",
            "caption": ""
          },
          {
            "image": "rangers-black-creek/yorke-island/IMG_6390.jpg",
            "caption": ""
          },
          {
            "image": "rangers-black-creek/yorke-island/IMG_6396.jpg",
            "caption": ""
          },
          {
            "image": "rangers-black-creek/yorke-island/IMG_6411.jpg",
            "caption": ""
          },
          {
            "image": "rangers-black-creek/yorke-island/IMG_6419.jpg",
            "caption": ""
          },
          {
            "image": "rangers-black-creek/yorke-island/IMG_6422.jpg",
            "caption": ""
          },
          {
            "image": "rangers-black-creek/yorke-island/IMG_6423.jpg",
            "caption": ""
          },
          {
            "image": "rangers-black-creek/yorke-island/IMG_6437.jpg",
            "caption": ""
          },
          {
            "image": "rangers-black-creek/yorke-island/IMG_6432.jpg",
            "caption": ""
          },
        ]
      },

      {
        "header": "Landslide Lake",
        "description": "Our trip to Landslide Lake on July 15-16, 2020.",
        "photos": [
          {
            "image": "rangers-black-creek/landslide-lake/IMG_6491.jpg",
            "caption": "Working on the Elk River Trail"
          },
          {
            "image": "rangers-black-creek/landslide-lake/IMG_7238.jpg",
            "caption": "Landslide Lake"
          },
          {
            "image": "rangers-black-creek/landslide-lake/IMG_7268.jpg",
            "caption": "The Beach"
          },
        ]
      },

      {
        "header": "Marble River",
        "description": "Our trip to Marble River on July 21-24, 2020.",
        "photos": [
          {
            "image": "rangers-black-creek/marble-river/IMG_6603.jpg",
            "caption": ""
          },
          {
            "image": "rangers-black-creek/marble-river/IMG_7337.jpg",
            "caption": ""
          },
          {
            "image": "rangers-black-creek/marble-river/IMG_7330.jpg",
            "caption": ""
          },
          {
            "image": "rangers-black-creek/marble-river/IMG_7318.jpg",
            "caption": ""
          },
          {
            "image": "rangers-black-creek/marble-river/IMG_7274.jpg",
            "caption": ""
          },
          {
            "image": "rangers-black-creek/marble-river/IMG_7287.jpg",
            "caption": ""
          },
        ]
      },

    ]
  }
} 

customElements.define('my-events', Events);