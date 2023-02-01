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
      <div class="title"><b>${data.title}</b></div>

      ${data.events.map((event) => `
      <div class="event-container">
        <div class="circle"></div>
        <div class="header"><b>${event.header}</b></div>
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
        "description": "Our trip to Denman Island on August 10-14, 2020 to restore Taylor's Checkerspot Butterfly habitat by removing invasive Scotch Broom from Denman Island Park.",
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
            "caption": "Ralph River"
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
        "header": "Schoen Lake",
        "description": "Our trip to Schoen Lake.",
        "photos": [
          {
            "image": "rangers-black-creek/schoen-lake/IMG_7212.jpg",
            "caption": "Lessons in Chainsawing"
          },
          {
            "image": "rangers-black-creek/schoen-lake/IMG_7209.jpg",
            "caption": "Canoeing"
          },
          {
            "image": "rangers-black-creek/schoen-lake/IMG_7206.jpg",
            "caption": "Dinner"
          },
        ]
      },

      {
        "header": "Yorke Island",
        "description": "Our trip to the overgrown WWII military base on Yorke Island on July 2, 2020 to clear fallen trees along the old road.",
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
        "description": "Our trip to Landslide Lake on July 15-16, 2020 to divert water flowing onto the Elk River Trail.",
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
        "description": "Our trip to Marble River on July 21-24, 2020 to rebuild a bridge on the trail.",
        "photos": [
          {
            "image": "rangers-black-creek/marble-river/IMG_7337.jpg",
            "caption": "Visions of a Bridge"
          },
          {
            "image": "rangers-black-creek/marble-river/IMG_7330.jpg",
            "caption": "Focus and Stamina"
          },
          {
            "image": "rangers-black-creek/marble-river/IMG_6603.jpg",
            "caption": "Trail Closure"
          },
          {
            "image": "rangers-black-creek/marble-river/IMG_7318.jpg",
            "caption": "Raw Concentration"
          },
          {
            "image": "rangers-black-creek/marble-river/IMG_7274.jpg",
            "caption": "Port Alice"
          },
          {
            "image": "rangers-black-creek/marble-river/IMG_7287.jpg",
            "caption": "Storey's Beach"
          },
        ]
      },

      {
        "header": "Echo Bay",
        "description": "Our trip to Echo Bay on August 5-7, 2020 to repaint the signs and clear fallen trees.",
        "photos": [
          {
            "image": "rangers-black-creek/echo-bay/IMG_6984.jpg",
            "caption": "Moss on the Boardwalk"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_6985.jpg",
            "caption": "Fish Processing Plant"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_6996.jpg",
            "caption": "Senior El Dinero"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_7003.jpg",
            "caption": "Alert Bay"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_7018.jpg",
            "caption": "Echo Bay Dock"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_7030.jpg",
            "caption": "Old Schoolhouse"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_7048.jpg",
            "caption": "Echo Bay"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_7055.jpg",
            "caption": "Lessons in Rafting"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_7369.jpg",
            "caption": "Pierre's Fine Yacht Club"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_7381.jpg",
            "caption": "Cedar Cabin"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_7382.jpg",
            "caption": "Sleeping, Pondering"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_7417.jpg",
            "caption": "Breakfast on the Boat"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_7427.jpg",
            "caption": "Boating"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_7065.jpg",
            "caption": "Village Island"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_7061.jpg",
            "caption": "Old Bottles"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_7067.jpg",
            "caption": "China Beach"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_7084.jpg",
            "caption": "Supplies"
          },
          {
            "image": "rangers-black-creek/echo-bay/IMG_7363.jpg",
            "caption": "Times Past"
          },
        ]
      },

      {
        "header": "Jedediah Island",
        "description": "Our trip to Jedediah Island on August 11-14, 2020 to remove debris left over from a cabin fire.",
        "photos": [
          {
            "image": "rangers-black-creek/jedediah/IMG_7131.jpg",
            "caption": "Boating To The Island"
          },
          {
            "image": "rangers-black-creek/jedediah/IMG_7138.jpg",
            "caption": "Unloading"
          },
          {
            "image": "rangers-black-creek/jedediah/IMG_7500.jpg",
            "caption": "The Mess From The Cabin Fire"
          },
          {
            "image": "rangers-black-creek/jedediah/IMG_7468.jpg",
            "caption": "Removing Debris"
          },
          {
            "image": "rangers-black-creek/jedediah/IMG_7489.jpg",
            "caption": "Burning Lumber From The Cabin"
          },
          {
            "image": "rangers-black-creek/jedediah/IMG_7496.jpg",
            "caption": "Packing A Heli Bag"
          },
          {
            "image": "rangers-black-creek/jedediah/IMG_7491.jpg",
            "caption": "Bundled Cabin Remains"
          },
          {
            "image": "rangers-black-creek/jedediah/IMG_7488.jpg",
            "caption": "After A Day's Work"
          },
          {
            "image": "rangers-black-creek/jedediah/IMG_7493.jpg",
            "caption": "Sitting On The Rocks"
          },
          {
            "image": "rangers-black-creek/jedediah/IMG_7448.jpg",
            "caption": "Frolicking"
          },
          {
            "image": "rangers-black-creek/jedediah/IMG_7484.jpg",
            "caption": "Campfire"
          },
          {
            "image": "rangers-black-creek/jedediah/IMG_7485.jpg",
            "caption": "Sunset"
          },
        ]
      },

      {
        "header": "Mitlenatch Island",
        "description": "Our trip to Mitlenatch Island on August 17-18, 2020 to remove invasive Himalayan Blackberry.",
        "photos": [
          {
            "image": "rangers-black-creek/mitlenatch/IMG_7605.jpg",
            "caption": "Looking For Land"
          },
          {
            "image": "rangers-black-creek/mitlenatch/IMG_7609.jpg",
            "caption": "Sausage of the Sea"
          },
          {
            "image": "rangers-black-creek/mitlenatch/IMG_7614.jpg",
            "caption": "Paddle In"
          },
          {
            "image": "rangers-black-creek/mitlenatch/IMG_7611.jpg",
            "caption": "On The Island"
          },
          {
            "image": "rangers-black-creek/mitlenatch/IMG_7626.jpg",
            "caption": "Sea Lion"
          },
          {
            "image": "rangers-black-creek/mitlenatch/IMG_7629.jpg",
            "caption": "Driftwood"
          },
          {
            "image": "rangers-black-creek/mitlenatch/IMG_7631.jpg",
            "caption": "The Long Approach"
          },
          {
            "image": "rangers-black-creek/mitlenatch/IMG_7633.jpg",
            "caption": "Middle of the Rock"
          },
          {
            "image": "rangers-black-creek/mitlenatch/IMG_7635.jpg",
            "caption": "The Path"
          },
        ]
      },

      {
        "header": "San Josef Bay",
        "description": "Our trip to San Josef Bay on August 25-27, 2020 to remove invasive English Ivy from the edge of the beach.",
        "photos": [
          {
            "image": "rangers-black-creek/san-josef-bay/IMG_7776.jpg",
            "caption": "Luxury Beach Camping"
          },
          {
            "image": "rangers-black-creek/san-josef-bay/IMG_7780.jpg",
            "caption": "Dessert Dwellers"
          },
          {
            "image": "rangers-black-creek/san-josef-bay/IMG_7782.jpg",
            "caption": "Sea Stacks"
          },
          {
            "image": "rangers-black-creek/san-josef-bay/IMG_7788.jpg",
            "caption": "San Josef Bay"
          },
          {
            "image": "rangers-black-creek/san-josef-bay/IMG_7819.jpg",
            "caption": "Jellyfish"
          },
          {
            "image": "rangers-black-creek/san-josef-bay/IMG_7822.jpg",
            "caption": "Birthday Party"
          },
          {
            "image": "rangers-black-creek/san-josef-bay/IMG_7825.jpg",
            "caption": "Breakfast on the Beach"
          },
          {
            "image": "rangers-black-creek/san-josef-bay/IMG_7893.jpg",
            "caption": "Oceanside Cabin"
          },
          {
            "image": "rangers-black-creek/san-josef-bay/IMG_7839.jpg",
            "caption": "West Coast"
          },
          {
            "image": "rangers-black-creek/san-josef-bay/IMG_7844.jpg",
            "caption": "Dusk"
          },
          {
            "image": "rangers-black-creek/san-josef-bay/IMG_7859.jpg",
            "caption": "Salmon Dinner"
          },
          {
            "image": "rangers-black-creek/san-josef-bay/IMG_7863.jpg",
            "caption": "English Ivy"
          },
          {
            "image": "rangers-black-creek/san-josef-bay/IMG_7871.jpg",
            "caption": "Burning English Ivy"
          },
          {
            "image": "rangers-black-creek/san-josef-bay/IMG_7875.jpg",
            "caption": "Rope Swing"
          },
          {
            "image": "rangers-black-creek/san-josef-bay/IMG_7885.jpg",
            "caption": "Crab"
          },
        ]
      },

    ]
  }
} 

customElements.define('my-events', Events);