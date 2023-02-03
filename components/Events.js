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

  "": {
    "title": "",
    "subtitle": "",
    "events": [

      {
        "header": "",
        "description": "",
        "photos": [
          {
            "image": "",
            "caption": ""
          },
        ]
      },

    ]
  },


  "rangers-smithers": {
    "title": "BC Parks Student Ranger: Skeena",
    "subtitle": "",
    "events": [

      {
        "header": "Cronin Creek Trail Revival",
        "description": "We brought the extremely overgrown Cronin Creek Trail back to life.",
        "photos": [
          {
            "image": "rangers-smithers/cronin/IMG_0204.jpg",
            "caption": "T-Rex"
          },
          {
            "image": "rangers-smithers/cronin/IMG_0206.jpg",
            "caption": "Big Saw"
          },
          {
            "image": "rangers-smithers/cronin/IMG_0208.jpg",
            "caption": "Hand Saw"
          },
          {
            "image": "rangers-smithers/cronin/IMG_0223.jpg",
            "caption": "Creek Crossing"
          },
          {
            "image": "rangers-smithers/cronin/IMG_0440.jpg",
            "caption": "Across The Creek"
          },
          {
            "image": "rangers-smithers/cronin/IMG_0430.jpg",
            "caption": "Duo"
          },
        ]
      },

      {
        "header": "Joe L'Orsa Cabin Maintenance",
        "description": "We cleaned the Joe L'Orsa Cabin in Silver King Basin and recieved a load of logs from a helicopter.",
        "photos": [
          {
            "image": "rangers-smithers/silver-king/IMG_0463.jpg",
            "caption": "Hiking To The Cabin"
          },
          {
            "image": "rangers-smithers/silver-king/IMG_0471.jpg",
            "caption": "Creek Crossing"
          },
          {
            "image": "rangers-smithers/silver-king/IMG_0478.jpg",
            "caption": "Cleaning The Cabin"
          },
          {
            "image": "rangers-smithers/silver-king/IMG_0484.jpg",
            "caption": "Hiking To Hyland Pass"
          },
          {
            "image": "rangers-smithers/silver-king/IMG_0502.jpg",
            "caption": "Log Load"
          },
          {
            "image": "rangers-smithers/silver-king/IMG_0508.jpg",
            "caption": "Joe L'Orsa Cabin"
          },
        ]
      },

      {
        "header": "Red Bluff Boardwalk",
        "description": "We built a long boardwalk across a flood plain between the lake and a marsh.",
        "photos": [
          {
            "image": "rangers-smithers/red-bluff/IMG_0604.jpg",
            "caption": "Stretching"
          },
          {
            "image": "rangers-smithers/red-bluff/IMG_0598.jpg",
            "caption": "Building The Boardwalk"
          },
          {
            "image": "rangers-smithers/red-bluff/IMG_0600.jpg",
            "caption": "Canoeing To The Bluffs"
          },
          {
            "image": "rangers-smithers/red-bluff/IMG_0596.jpg",
            "caption": "Notice the Black Flies"
          },
          {
            "image": "rangers-smithers/red-bluff/IMG_0601.jpg",
            "caption": "Dusk On Babine Lake"
          },
          {
            "image": "rangers-smithers/red-bluff/IMG_0605.jpg",
            "caption": "I Scream After Work"
          },
        ]
      },

      {
        "header": "Dock Repair In Tweedsmuir North Provincial Park",
        "description": "We replaced the boards on the docks at the ranger cabin in Tweedsmuir North Provincial Park and boated to campsites in the park to do maintenance.",
        "photos": [
          {
            "image": "rangers-smithers/tweedsmuir/IMG_0732.jpg",
            "caption": "Initial State of The Dock"
          },
          {
            "image": "rangers-smithers/tweedsmuir/IMG_0737.jpg",
            "caption": "New Beams In Place"
          },
          {
            "image": "rangers-smithers/tweedsmuir/IMG_0738.jpg",
            "caption": "New Boards"
          },
          {
            "image": "rangers-smithers/tweedsmuir/IMG_0739.jpg",
            "caption": "Boat Trolly To Move Between Two Lakes"
          },
          {
            "image": "rangers-smithers/tweedsmuir/IMG_0740.jpg",
            "caption": "Two Boats"
          },
          {
            "image": "rangers-smithers/tweedsmuir/IMG_0752.jpg",
            "caption": "Glassy Lake"
          },
        ]
      },

      {
        "header": "Francois Lake Trail Maintenance",
        "description": "We cut back overgrowth on the Francois Lake Trail in Uncha Mountain Red Hills Provincial Park and built a boardwalk by spliting a fallen tree.",
        "photos": [
          {
            "image": "rangers-smithers/francois-lake/IMG_0775.jpg",
            "caption": "Trail Maintenance"
          },
          {
            "image": "rangers-smithers/francois-lake/IMG_0781.jpg",
            "caption": "Aspens"
          },
          {
            "image": "rangers-smithers/francois-lake/IMG_0782.jpg",
            "caption": "Hoodoos"
          },
          {
            "image": "rangers-smithers/francois-lake/IMG_0786.jpg",
            "caption": "Waterfalls"
          },
          {
            "image": "rangers-smithers/francois-lake/IMG_0787.jpg",
            "caption": "Swimming Hole"
          },
          {
            "image": "rangers-smithers/francois-lake/IMG_0789.jpg",
            "caption": "The Lake"
          },
          {
            "image": "rangers-smithers/francois-lake/IMG_0795.jpg",
            "caption": "Burnt Stump"
          },
          {
            "image": "rangers-smithers/francois-lake/IMG_0799.jpg",
            "caption": "Boardwalk"
          },
          {
            "image": "rangers-smithers/francois-lake/IMG_0800.jpg",
            "caption": "Marsh"
          },
        ]
      },

      {
        "header": "Harvey Mountain Trail Maintenance",
        "description": "We cleared overgrowth and fallen trees from the Harvey Mountain Trail and hiked to the top.",
        "photos": [
          {
            "image": "rangers-smithers/harvey-mountain/IMG_0878.jpg",
            "caption": "The Babine Mountains"
          },
          {
            "image": "rangers-smithers/harvey-mountain/IMG_0879.jpg",
            "caption": "Looking Up"
          },
          {
            "image": "rangers-smithers/harvey-mountain/IMG_0883.jpg",
            "caption": "Looking Out"
          },
        ]
      },

      {
        "header": "Babine River Salmon Run",
        "description": "We patrolled the Babine River during the salmon run to make sure fisherman were staying with in the catch limits and being bear-safe.",
        "photos": [
          {
            "image": "rangers-smithers/babine-river/IMG_0885.jpg",
            "caption": "A Napping Salmon"
          },
          {
            "image": "rangers-smithers/babine-river/IMG_0890.jpg",
            "caption": "A Land-Curious Salmon"
          },
          {
            "image": "rangers-smithers/babine-river/IMG_0894.jpg",
            "caption": "Bend In The River"
          },
        ]
      },

    ]
  },



  "revelstoke": {
    "title": "Life In Revelstoke",
    "subtitle": "Collections of pictures about my time in Revelstoke.",
    "events": [

      {
        "header": "Skiing",
        "description": "At Revelstoke Mountain Resort.",
        "photos": [
          {
            "image": "revelstoke/skiing/IMG_9005.jpg",
            "caption": "Vehicle"
          },
          {
            "image": "revelstoke/skiing/IMG_9013.jpg",
            "caption": "Skiier Clara"
          },
          {
            "image": "revelstoke/skiing/IMG_9009.jpg",
            "caption": "Skiier Clara in Hole"
          },
        ]
      },

      {
        "header": "On The River",
        "description": "The Columbia and Illecillewaet Rivers.",
        "photos": [
          {
            "image": "revelstoke/river/IMG_8170.jpg",
            "caption": "Fog"
          },
          {
            "image": "revelstoke/river/IMG_8667.jpg",
            "caption": "Dusk"
          },
          {
            "image": "revelstoke/river/IMG_9342.jpg",
            "caption": "Lights"
          },

          {
            "image": "revelstoke/river/IMG_8703.jpg",
            "caption": "Beach"
          },
          {
            "image": "revelstoke/river/IMG_9366.jpg",
            "caption": "Ducks"
          },
          {
            "image": "revelstoke/river/IMG_8707.jpg",
            "caption": "Evening"
          },

          {
            "image": "revelstoke/river/IMG_9294.jpg",
            "caption": "Low Clouds"
          },
          {
            "image": "revelstoke/river/IMG_9329.jpg",
            "caption": "Stick Fort"
          },
          {
            "image": "revelstoke/river/IMG_9393.jpg",
            "caption": "Pink Mountain"
          },

          {
            "image": "revelstoke/river/IMG_9130.jpg",
            "caption": "Frozen River"
          },
          {
            "image": "revelstoke/river/IMG_9152.jpg",
            "caption": "Geese"
          },
          {
            "image": "revelstoke/river/IMG_9158.jpg",
            "caption": "Ice"
          },
        ]
      },

      {
        "header": "On The Town",
        "description": "The tamed streets of Revelstoke.",
        "photos": [
          {
            "image": "revelstoke/town/IMG_8909.jpg",
            "caption": "Revelstoke From Above"
          },
          {
            "image": "revelstoke/town/IMG_8912.jpg",
            "caption": "Train Running Through Town"
          },
          {
            "image": "revelstoke/town/IMG_9425.jpg",
            "caption": "Bear Statue"
          },

          {
            "image": "revelstoke/town/IMG_3900.jpg",
            "caption": "The Big Eddy Bridge"
          },
          {
            "image": "revelstoke/town/IMG_8669.jpg",
            "caption": "Autumn Leaves"
          },
          {
            "image": "revelstoke/town/IMG_8040.jpg",
            "caption": "Dream Home"
          },

          {
            "image": "revelstoke/town/IMG_9335.jpg",
            "caption": "McKinnon Rd"
          },
          {
            "image": "revelstoke/town/IMG_3259.jpg",
            "caption": "Arrow Heights Houses"
          },
          {
            "image": "revelstoke/town/IMG_9055.jpg",
            "caption": "Christmas Lights"
          },

          {
            "image": "revelstoke/town/IMG_9299.jpg",
            "caption": "Timber Mill"
          },
          {
            "image": "revelstoke/town/IMG_9239.jpg",
            "caption": "Between The Mill & The Power Grid"
          },
          {
            "image": "revelstoke/town/IMG_9272.jpg",
            "caption": "Power Grid"
          },
          
          {
            "image": "revelstoke/town/IMG_8684.jpg",
            "caption": "The Streetz"
          },
          
          {
            "image": "revelstoke/town/IMG_9079.jpg",
            "caption": "Monashee Spirits"
          },

          {
            "image": "revelstoke/town/IMG_9289.jpg",
            "caption": "Big Eddy Glass Works"
          },
        ]
      },

      {
        "header": "Poking Around",
        "description": "My face looking at things.",
        "photos": [
          {
            "image": "revelstoke/exploring/IMG_3917.jpg",
            "caption": "Looking Forward, From The Side"
          },
          {
            "image": "revelstoke/exploring/IMG_8479.jpg",
            "caption": "Looking At Mushroom"
          },
          {
            "image": "revelstoke/exploring/IMG_3588.jpg",
            "caption": "On My Bike"
          },
        ]
      },

      {
        "header": "On The Trails",
        "description": "Hikes I went on in Revelstoke. Click the captions see more.",
        "photos": [
          {
            "image": "revelstoke/hiking/IMG_8022.jpg",
            "caption": "<a href='../hikes/mt-begbie.html' style='color: white;'>Mt. Begbie</a>"
          },
          {
            "image": "revelstoke/hiking/IMG_8111.jpg",
            "caption": "<a href='../hikes/mt-cartier.html' style='color: white;'>Mt. Cartier</a>"
          },
          {
            "image": "revelstoke/hiking/IMG_8309.jpg",
            "caption": "<a href='../hikes/mccrae-peak.html' style='color: white;'>McCrae Peak</a>"
          },
        ]
      },

    ]
  },



  "rangers-black-creek": {
    "title": "BC Parks Student Rangers: North Vancouver Island",
    "subtitle": "",
    "events": [

      {
        "header": "Denman Island",
        "description": "Our trip to Denman Island on August 10-14, 2020 to restore Taylor's Checkerspot Butterfly habitat by removing invasive Scotch Broom from their breeding grounds in Denman Island Park.",
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
        "description": "Our trip to Helliwell Provincial Park on Hornby Island on July 2, 2020 to take pictures for the BC Parks iNaturalist Project.",
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
        "description": "Our trip to Schoen Lake to clean up the campground.",
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
            "caption": "Boating to the Island"
          },
          {
            "image": "rangers-black-creek/yorke-island/IMG_6440.jpg",
            "caption": "Eroding Ship"
          },
          {
            "image": "rangers-black-creek/yorke-island/IMG_6373.jpg",
            "caption": "Concrete Tank"
          },
          {
            "image": "rangers-black-creek/yorke-island/IMG_6380.jpg",
            "caption": "Overgrown Building"
          },
          {
            "image": "rangers-black-creek/yorke-island/IMG_6390.jpg",
            "caption": "Red Brick Building"
          },
          {
            "image": "rangers-black-creek/yorke-island/IMG_6396.jpg",
            "caption": "Downstairs"
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
        "description": "Our trip to Landslide Lake on July 15-16, 2020 to divert water away from the Elk River Trail.",
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