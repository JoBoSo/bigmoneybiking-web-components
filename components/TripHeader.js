class TripHeader extends HTMLElement {
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
    let style = `
      <style>

      .trip-header .tour-title {
        text-align: center;
        margin: 0;
      }
      
      .trip-header .stats-bar {
        text-align: center;
        vertical-align: middle;
        padding-top: 0px !important;
        padding-bottom: 0px !important;
        margin: 0 !important;
        /* border-bottom: solid #dedcdc 1px; */
      }
      
      .trip-header .quote {
        text-align: center;
      }

      </style>
    `;

    let tripData = data[this.data_id];

    this.innerHTML = style + `
      <div class="row no-gutters">
        <div class="col-12 trip-header">
          <h1 class="tour-title">${tripData.title}</h1>
          <p class="stats-bar">
            ${tripData.distance_km !== null ? tripData.distance_km + ' km | ' : ''}
            ${tripData.days !== null ? tripData.days + ' Days | ' : ''}
            ${tripData.terrain !== null ? tripData.terrain + ' | ' : ''}
            ${tripData.location !== null ? tripData.location + ' | ' : ''}
            ${tripData.dates !== null ? tripData.dates : ''}
          </p>
        </div>
      </div>
    `;
  }
}

const data = {
  "quebec": {
    "title": "Montreal to Quebec City",
    "distance_km": 315,
    "days": 3,
    "terrain": null,
    "location": null,
    "dates": "Apr 14-16, 2021",
    "quote": null,
  },
  "babine-lake": {
    "title": "Babine Lake",
    "distance_km": 187,
    "days": 2,
    "terrain": "Gravel Logging Roads",
    "location": "Central BC",
    "dates": "May 8-9, 2021",
    "quote": null,
  },
  "begbie-falls": {
    "title": "Begbie Falls",
    "distance_km": 34,
    "days": 2,
    "terrain": null,
    "location": "Revelstoke, BC",
    "dates": "Sept 26-27, 2020",
    "quote": null,
  },
  "brewster-lake": {
    "title": "Brewster & Campbell Lakes",
    "distance_km": 177,
    "days": 3,
    "terrain": "Paved & logging roads",
    "location": "Campbell River, BC",
    "dates": "May 28-30, 2020",
    "quote": "Every whisper in the wind brings a good man back again. &#8212;Arlo Guthrie",
  },
  "comox-lake": {
    "title": "Comox Lake",
    "distance_km": 80,
    "days": 2,
    "terrain": "Paved & logging roads",
    "location": "Vancouver Island, BC",
    "dates": "July 4-5, 2020",
    "quote": null,
  },
  "downie-creek": {
    "title": "Downie Creek",
    "distance_km": 158,
    "days": 3,
    "terrain": "Paved Roads",
    "location": "Columbia River, BC",
    "dates": "Oct 3-5, 2020",
    "quote": "\"Fuck you,\" I said to the outhouse. \"All I want is a ride down the river.\" &#8212;Richard Brautigan",
  },
  "haida-gwaii": {
    "title": "Haida Gwaii",
    "distance_km": 185,
    "days": 3,
    "terrain": "Paved & logging roads",
    "location": null,
    "dates": "Aug 12-14, 2021",
    "quote": null,
  },
  "mtrl-sherbrooke": {
    "title": "Montreal to Sherbooke",
    "distance_km": 399,
    "days": 3,
    "terrain": "Paved & Gravel Bike Paths",
    "location": "SW QC",
    "dates": "Sept 16-18, 2022",
    "quote": null,
  },
  "nanaimo-courtenay": {
    "title": "Nanaimo to Courtenay",
    "distance_km": 180,
    "days": 2,
    "terrain": "Paved & Logging Roads",
    "location": "Vancouver Island",
    "dates": "May 6-7, 2020",
    "quote": "In the dark lurks things you don't understand. &#8212;Jordan Peterson",
  },
  "nass-valley": {
    "title": "Nisga'a",
    "distance_km": 474,
    "days": 4,
    "terrain": "Paved & logging roads",
    "location": "Skeena",
    "dates": "May 19-22, 2021",
    "quote": "People will tell you where they've gone, they'll tell you where to go. But till you get there yourself you never really know. &#8212;Joni Mitcehll",
  },
  "ptit-train": {
    "title": "P'tit Train du Nord",
    "distance_km": 316,
    "days": 3,
    "terrain": "Paved & Gravel Rail Trail",
    "location": "SW Laurentians, QC",
    "dates": "Aug 12-15, 2022",
    "quote": null,
  },
  "quadra-cortes": {
    "title": "Quadra & Cortes",
    "distance_km": 257,
    "days": 3,
    "terrain": "Paved & logging roads",
    "location": "Discovery Islands, BC",
    "dates": "Aug 1-3, 2020",
    "quote": null,
  },
  "san-josef-bay": {
    "title": "North Vancouver Island",
    "distance_km": 784,
    "days": 8,
    "terrain": "Paved & logging roads",
    "location": null,
    "dates": "May 14-21, 2020",
    "quote": null,
  },
  "texada": {
    "title": "Texada Island",
    "distance_km": 195,
    "days": 4,
    "terrain": "Paved & Logging Roads",
    "location": null,
    "dates": "June 12-15, 2020",
    "quote": null,
  },
  "to-mtrl": {
    "title": "Schomberg to Montreal",
    "distance_km": 642,
    "days": 6,
    "terrain": "Paved & Gravel Bike Paths",
    "location": null,
    "dates": "Aug 16-21, 2019",
    "quote": "Many a dream is lost in the nasty city sound. &#8212;Don McLean",
  },
  "bourgeau": {
    "title": "Mt. Bourgeau",
    "distance_km": 26,
    "days": null,
    "terrain": null,
    "location": "Banff National Park",
    "dates": "Sept 4, 2021",
    "quote": null,
  },
  "cory-pass": {
    "title": "Cory Pass",
    "distance_km": 17,
    "days": null,
    "terrain": null,
    "location": "Banff National Park",
    "dates": "Sept 3, 2021",
    "quote": null,
  },
  "grotto-mtn": {
    "title": "Grotto Mountain",
    "distance_km": 10,
    "days": null,
    "terrain": null,
    "location": "Canmore, AB",
    "dates": "Oct 4, 2021",
    "quote": null,
  },
  "gunsight": {
    "title": "Gunsight Lake",
    "distance_km": 19,
    "days": null,
    "terrain": null,
    "location": "Terrace, BC",
    "dates": "June 17, 2021",
    "quote": null,
  },
  "ha-ling": {
    "title": "Ha Ling",
    "distance_km": 10,
    "days": null,
    "terrain": null,
    "location": "Canmore, AB",
    "dates": "Sept 2, 2021",
    "quote": null,
  },
  "jasper": {
    "title": "Jasper",
    "distance_km": null,
    "days": null,
    "terrain": null,
    "location": "Jasper National Park",
    "dates": "Aug 29-Sept 1, 2021",
    "quote": null,
  },
  "maroon-mtn": {
    "title": "Maroon Mountain",
    "distance_km": 20,
    "days": null,
    "terrain": null,
    "location": "Terrace, BC",
    "dates": "July 15, 2021",
    "quote": null,
  },
  "mccrae-peak": {
    "title": "McCrae Peak",
    "distance_km": 10,
    "days": null,
    "terrain": null,
    "location": "Revelstoke, BC",
    "dates": "Sept 20, 2020",
    "quote": null,
  },
  "mont-nixon": {
    "title": "Mont Nixon",
    "distance_km": 10,
    "days": null,
    "terrain": null,
    "location": "Parc National du Mont Tremblant",
    "dates": "July 16, 2022",
    "quote": null,
  },
  "montagne-noire": {
    "title": "Montagne Noire",
    "distance_km": 13,
    "days": null,
    "terrain": null,
    "location": "Saint Donat, QC",
    "dates": "July 17, 2022",
    "quote": null,
  },
  "mt-albert-edward": {
    "title": "Mt. Albert Edward",
    "distance_km": 38,
    "days": 2,
    "terrain": null,
    "location": "Strathcona Provincial Park",
    "dates": "July 25-26, 2020",
    "quote": null,
  },
  "mt-begbie": {
    "title": "Mt. Begbie",
    "distance_km": 15.1,
    "days": null,
    "terrain": null,
    "location": "Revelstoke, BC",
    "dates": "Sept 5, 2020",
    "quote": null,
  },
  "mt-cartier": {
    "title": "Mt. Cartier",
    "distance_km": 27.4,
    "days": null,
    "terrain": null,
    "location": "Revelstoke, BC",
    "dates": "Sept 9, 2020",
    "quote": "If you miss this train I'm on, then you'll know that I am gone."
  },
  "mt-revelstoke": {
    "title": "Mt. Revelstoke",
    "distance_km": 9.3,
    "days": null,
    "terrain": null,
    "location": "Mt. Revelstoke National Park",
    "dates": "Oct 15, 2020",
    "quote": "The mushroom said to me once: Nature loves courage. <br>Nature loves courage, and I said, what’s the payoff on that? <br>It said: It shows you that it loves courage because it will remove obstacles. <br>- Terence McKenna",
  },
  "mt-temple": {
    "title": "Mt. Temple",
    "distance_km": 20,
    "days": null,
    "terrain": null,
    "location": "Lake Louise, AB",
    "dates": "Sept 6, 2021",
    "quote": null,
  },
  "oliver-creek": {
    "title": "Oliver Creek Trail",
    "distance_km": 38,
    "days": 2,
    "terrain": null,
    "location": "Seven Sisters Provincial Park",
    "dates": "June 15-16, 2021",
    "quote": null,
  },
  "phillips-ridge": {
    "title": "Phillips Ridge",
    "distance_km": null,
    "days": 2,
    "terrain": null,
    "location": "Strathcona Provincial Park",
    "dates": "Aug 8-9, 2020",
    "quote": "Some people work very hard but still they never get it right. Well, I'm beginning to see the light. &#8212;Lou Reed",
  },
  "seaton-ridge": {
    "title": "Seaton Ridge",
    "distance_km": 11,
    "days": null,
    "terrain": null,
    "location": "Seaton, BC",
    "dates": "July 18, 2021",
    "quote": null,
  },
  "silver-king": {
    "title": "Silver King Basin",
    "distance_km": 25,
    "days": null,
    "terrain": null,
    "location": "Babine Mountains Provincial Park",
    "dates": "June 27-28 & Aug 2, 2021",
    "quote": null,
  },
  "silvern-lake": {
    "title": "Silvern Lake",
    "distance_km": 23,
    "days": null,
    "terrain": null,
    "location": "Smithers, BC",
    "dates": "May 24 & July 1-2, 2021",
    "quote": null,
  },
  "six-glaciers": {
    "title": "Plain of Six Glaciers",
    "distance_km": 12,
    "days": null,
    "terrain": null,
    "location": "Lake Louise, AB",
    "dates": "June 25, 2022",
    "quote": null,
  },
  "tin-hat": {
    "title": "Tin Hat Mountain",
    "distance_km": 18.3,
    "days": 2,
    "terrain": null,
    "location": "Powell River, BC",
    "dates": "Aug 22-23, 2020",
    "quote": null,
  },
  "viking-ridge": {
    "title": "Viking Ridge",
    "distance_km": 17,
    "days": null,
    "terrain": null,
    "location": "Sugarbowl-Grizzly Den Provincial Park",
    "dates": "Aug 28, 2021",
    "quote": null,
  },
  "algonquin": {
    "title": "Algonquin Park",
    "distance_km": 25.3,
    "days": 3,
    "terrain": null,
    "location": null,
    "dates": "Dec 31, 2019 - Jan 2, 2020",
    "quote": null,
  },
  "mt-becher": {
    "title": "Mt. Becher",
    "distance_km": 14,
    "days": null,
    "terrain": null,
    "location": "Strathcona Provincial Park",
    "dates": "Aug 16, 2020",
    "quote": null,
  }
}

customElements.define('my-trip-header', TripHeader);