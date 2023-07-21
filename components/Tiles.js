class Tiles extends HTMLElement {
  constructor() {
      super();
      this.page_id = '';
  }

  static get observedAttributes() {
      return ['page_id'];
  }

  attributeChangedCallback(property, oldValue, newValue) {
      if (oldValue === newValue) return;
      this[ property ] = newValue; 
  }

  connectedCallback() {
    let style = `
      <style>

      .text-white {
        color: white;
      }

      @media (hover: hover) {

        /*setting the properties of content within the image*/
        .content {
          position: relative;
          width: 100%;
          margin: auto;
          overflow: hidden;
          border-radius: 7px;
          /* border: 1px solid #d1cfc8 ; */
          box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
        }

        .content .content-overlay {
          background: rgba(0, 0, 0, 0.516);
          position: absolute;
          height: auto;
          width: 100%;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          opacity: 0;
          /*transition time and effect*/
          -webkit-transition: all 0.4s ease-in-out 0s;
          /*transition time and effect*/
          -moz-transition: all 0.4s ease-in-out 0s;
          /*transition time and effect*/
          transition: all 0.4s ease-in-out 0s;
        }

        /* setting hover properties */
        .content:hover .content-overlay {
          opacity: 1;
        }

        .content-image {
          width: 100%;
        }

        .content-details {
          position: absolute;
          text-align: center;
          width: 100%;
          top: 50%;
          left: 50%;
          opacity: 0;
          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          /*transition time and effect*/
          -webkit-transition: all 0.3s ease-in-out 0s;
          /*transition time and effect*/
          -moz-transition: all 0.3s ease-in-out 0s;
          /*transition time and effect*/
          transition: all 0.3s ease-in-out 0s;
        }

        .content:hover .content-details {
          top: 50%;
          left: 50%;
          opacity: 1;
        }

      }
      
      @media (hover: none) {

        /*setting the properties of content within the image*/
        .content {
          position: relative;
          width: 100%;
          margin: auto;
          overflow: hidden;
          border-radius: 7px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.25);
        }

        .content .content-overlay {
          /*setting 0.8 to 1 will turn the overlay opaque*/
          background: rgba(0, 0, 0, 0.7);
          position: absolute;
          height: auto;
          width: 100%;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          opacity: 0.6;
        }

        .content-image {
          width: 100%;
        }

        .content-details {
          position: absolute;
          text-align: center;
          width: 100%;
          top: 50%;
          left: 50%;
          opacity: 1;
          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }

      }
      
      .card-corners {
        border-radius: 7px;
      }
      
      .card {
        margin: 5px;
      }
      
      #card-row {
        margin: 5px;
      }

      </style>
    `;

    this.innerHTML = style + `
    <div class="row no-gutters" id="card-row">
      ${tiles[this.page_id].map((tile) => `
        <div class="col-12 col-md-4">
          <div class="card border-0 card-corners">
            <a href=${tile.page}>
              <div class="content">
                <div class="content-overlay"></div>
                <img class="content-image img-fluid" src=${'images/' + tile.image} height="300px">
                <div class="content-details">
                  <h3 class="content-title text-white">
                        ${tile.title}
                    </h3>
                    <p class="content-text text-white">
                        ${tile.subtitle}
                    </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      `).join("")}
    </div>
    `;
  }
}

const tiles = {

  "bike_tours": [
    {
      title: "The Sunshine Coast",
      subtitle: "Sea the Good Side",
      image: "sunshine-coast/IMG_2129.jpeg",
      page: "tours/sunshine-coast.html"
    },
    {
      title: "Olympic National Park",
      subtitle: "I Took a Trip Down to L'America",
      image: "olympic/IMG_1675.jpeg",
      page: "tours/olympic.html"
    },
    {
      title: "Pender, Mayne, & Saturna",
      subtitle: "Three Southern Gulf Islands",
      image: "pender-mayne-saturna/IMG_1467.jpeg",
      page: "tours/pender-mayne-saturna.html"
    },
    {
      title: "South Vancouver Island",
      subtitle: "Lake Cowichan & The Pacific Marine Circle Route",
      image: "south-vi/IMG_0845.jpeg",
      page: "tours/south-vi.html"
    },
    {
      title: "Salt Spring Island",
      subtitle: "Don't Choke On The Pixie Dust",
      image: "saltspring/IMG_0626.jpeg",
      page: "tours/saltspring.html"
    },
    {
      title: "Galiano Island",
      subtitle: "On The Straight & Narrow Island",
      image: "galiano/IMG_0180.JPEG",
      page: "tours/galiano.html"
    },
    {
      title: "Montreal to Quebec City",
      subtitle: "Subtle Notes of France",
      image: "quebec/IMG_4209.jpg",
      page: "tours/quebec.html"
    },
    {
      title: "Montreal to Sherbrooke",
      subtitle: "Via La Route Verte",
      image: "mtrl-sherbrooke/IMG_2775.jpg",
      page: "tours/mtrl-sherbrooke.html"
    },
    {
      title: "P'tit Train du Nord",
      subtitle: "Once a Railway for Ski Trains",
      image: "ptit-train/IMG_2538.jpg",
      page: "tours/ptit-train.html"
    },
    {
      title: "Haida Gwaii",
      subtitle: "A Magical Pacific Island",
      image: "haida-gwaii/IMG_0857.jpg",
      page: "tours/haida-gwaii.html"
    },
    {
      title: "Nisga'a",
      subtitle: "A Volcanic Landscape",
      image: "nass-valley/IMG_212.jpg",
      page: "tours/nass-valley.html"
    },
    {
      title: "Babine Lake",
      subtitle: "BC's Longest Lake",
      image: "babine-lake/IMG_9538.jpg",
      page: "tours/babine-lake.html"
    },
    {
      title: "Downie Creek",
      subtitle: "A Ride Along the Columbia River",
      image: "downie-creek/IMG_8505.jpg",
      page: "tours/downie-creek.html"
    },
    {
      title: "Begbie Falls",
      subtitle: "Heavenly Revelstoke",
      image: "begbie-falls/IMG_8374.jpg",
      page: "tours/begbie-falls.html"
    },
    {
      title: "Quadra & Cortes",
      subtitle: "Psychedelic Sailors",
      image: "quadra-cortes/IMG_6877.jpg",
      page: "tours/quadra-cortes.html"
    },
    {
      title: "Comox Lake",
      subtitle: "Tucked Behind the Comox Valley",
      image: "comox-lake/IMG_6328.jpg",
      page: "tours/comox-lake.html"
    },
    {
      title: "Texada Island",
      subtitle: "The Largest Island in the Strait of Georgia",
      image: "texada/IMG_5873.jpg",
      page: "tours/texada.html"
    },
    {
      title: "Brewster & Campbell Lakes",
      subtitle: "Two Fine Lakes",
      image: "brewster-lake/IMG_5603.jpg",
      page: "tours/brewster-lake.html"
    },
    {
      title: "North Vancouver Island",
      subtitle: "All Paths Lead to a Beach",
      image: "san-josef-bay/IMG_5333.jpg",
      page: "tours/san-josef-bay.html"
    },
    {
      title: "Nanaimo to Courtenay",
      subtitle: "Via Logging Roads",
      image: "nanaimo-courtenay/IMG_5149.jpg",
      page: "tours/nanaimo-courtenay.html"
    },
    {
      title: "Schomberg to Montreal",
      subtitle: "Riding the Waterfront Trail",
      image: "to-mtrl/IMG_4238.jpg",
      page: "tours/to-mtrl.html"
    },
  ],



  "hikes": [
    {
      title: "Montagne Noire",
      subtitle: "The Crash Site of a Military Plane",
      image: "montagne-noire/IMG_2361.jpg",
      page: "hikes/montagne-noire.html"
    },
    {
      title: "Mont Nixon",
      subtitle: "Beautiful Laurentian Views",
      image: "mont-nixon/IMG_2325.jpg",
      page: "hikes/mont-nixon.html"
    },
    {
      title: "Plain of Six Glaciers",
      subtitle: "Looking Down on Lake Louise",
      image: "six-glaciers/IMG_2117.jpg",
      page: "hikes/six-glaciers.html"
    },
    {
      title: "Grotto Mountain",
      subtitle: "Sculpted Rock",
      image: "grotto-mtn/IMG_1305.jpg",
      page: "hikes/grotto-mtn.html"
    },
    {
      title: "Mt. Temple",
      subtitle: "Outer Space",
      image: "mt-temple/IMG_1215.jpg",
      page: "hikes/mt-temple.html"
    },
    {
      title: "Mt. Bourgeau",
      subtitle: "The Grand Rockies On Display",
      image: "bourgeau/IMG_1177.jpg",
      page: "hikes/bourgeau.html"
    },
    {
      title: "Cory Pass",
      subtitle: "Between Two Mountains",
      image: "cory-pass/IMG_1124.jpg",
      page: "hikes/cory-pass.html"
    },
    {
      title: "Ha Ling",
      subtitle: "Canmore's Iconic Peak",
      image: "ha-ling/IMG_1071.jpg",
      page: "hikes/ha-ling.html"
    },
    {
      title: "Jasper",
      subtitle: "Was It All Just A Dream?",
      image: "jasper/IMG_0990.jpg",
      page: "hikes/jasper.html"
    },
    {
      title: "Viking Ridge",
      subtitle: "One Big Bowl",
      image: "viking-ridge/IMG_0926.jpg",
      page: "hikes/viking-ridge.html"
    },
    {
      title: "Seaton Ridge",
      subtitle: "A Splattering of Green",
      image: "seaton-ridge/IMG_0727.jpg",
      page: "hikes/seaton-ridge.html"
    },
    {
      title: "Maroon Mountain",
      subtitle: "Amoung the Clouds",
      image: "maroon-mtn/IMG_0691.jpg",
      page: "hikes/maroon-mtn.html"
    },
    {
      title: "Silvern Lake",
      subtitle: "In Two Seasons",
      image: "silvern-lake/IMG_0542.jpg",
      page: "hikes/silvern-lake.html"
    },
    {
      title: "Silver King Basin",
      subtitle: "The Hills Are Alive",
      image: "silver-king/IMG_0470.jpg",
      page: "hikes/silver-king.html"
    },
    {
      title: "Gunsight Lake",
      subtitle: "Winter In June",
      image: "gunsight/IMG_0370.jpg",
      page: "hikes/gunsight.html"
    },
    {
      title: "Oliver Creek Trail",
      subtitle: "Views of the Seven Sisters Peaks",
      image: "oliver-creek/IMG_0263.jpg",
      page: "hikes/oliver-creek.html"
    },
    {
      title: "Mt. Revelstoke",
      subtitle: "Inside The Shroom Lagoon",
      image: "mt-revelstoke/IMG_8845.jpg",
      page: "hikes/mt-revelstoke.html"
    },
    {
      title: "McCrae Peak",
      subtitle: "Sunbeam City",
      image: "mccrae-peak/IMG_8307.jpg",
      page: "hikes/mccrae-peak.html"
    },
    {
      title: "Mt. Cartier",
      subtitle: "Mountains Upon Mountains",
      image: "mt-cartier/IMG_8090.jpg",
      page: "hikes/mt-cartier.html"
    },
    {
      title: "Mt. Begbie",
      subtitle: "Wildflowers & Meadows",
      image: "mt-begbie/IMG_7959.jpg",
      page: "hikes/mt-begbie.html"
    },
    {
      title: "Tin Hat Mountain",
      subtitle: "There's Some Tin Up Here",
      image: "tin-hat/IMG_7721.jpg",
      page: "hikes/tin-hat.html"
    },
    {
      title: "Mt. Becher",
      subtitle: "A Short Hike Near Courtenay",
      image: "mt-becher/IMG_7569.jpg",
      page: "hikes/mt-becher.html"
    },
    {
      title: "Phillips Ridge",
      subtitle: "Views of Golden Hinde",
      image: "phillips-ridge/IMG_7102.jpg",
      page: "hikes/phillips-ridge.html"
    },
    {
      title: "Mt. Albert Edward",
      subtitle: "Everything, All At Once",
      image: "mt-albert-edward/IMG_6705.jpg",
      page: "hikes/mt-albert-edward.html"
    },
    {
      title: "Algonquin Park",
      subtitle: "Snowshoeing Into The New Year",
      image: "algonquin/IMG_4464.jpg",
      page: "hikes/algonquin.html"
    },
  ]
  
}

customElements.define('my-tiles', Tiles);