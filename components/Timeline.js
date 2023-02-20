class Timeline extends HTMLElement {
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

      .my-timeline ul {
        list-style-type: none;
        position: relative;
        padding-left: 0px; 
      }
      
        /* vertical line */
      .my-timeline ul:before {
        content: ' ';
        background: white;
        display: inline-block;
        position: absolute;
        left: 0px;
        width: 1.5px;
        height: auto; /*auto for line on top dot*/
        top: 16px; /*16px for on the top dot*/
        bottom: 20px; 
        z-index: 400;
        border-radius: 50%;
      }
      
      .my-timeline-item {
        margin-left: 0px;
        margin-top: 10px;
        margin-bottom: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        background-color: rgba(0, 0, 0, 0.2);
      }
      
      /* Timeline item circle marker */
      .my-timeline-item::before {
        content: ' ';
        background: #FDB813;
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 1.5px solid white;
        left: -6px;
        width: 14px;
        height: 14px;
        z-index: 400;
        /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); */
        margin-top: 11px;
      }
      
      .my-timeline-header {
        font-size: 18pt;
        margin-left: 20px;
      }
      
      .my-timeline-bullets {
        list-style-type: circle !important;
        padding-left: 46px !important;
        background: none !important;
      }
      
      .my-timeline-bullets::before {
        background: none !important;
      }

      #timeline-slider-section {
        margin-top: -10px;
      }
      
      .photo-slider-container {
        width: 1600px;
      }
      
      @media (max-width: 1600px) {
        .photo-slider-container {
          width: 100%
        }
      }
      
      .subcontainer {
        width: 100%;
        margin: auto;
      }
      
      .slider-wrapper {
        position: relative;
      }
      
      .slide {
        width: auto;
        height: fit-content;
      }
      
      .slide img {
        width: 100%;
        height: 263px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }

      @media (max-width: 576px) {
        .slide img {
          width: auto;
          height: 237px;
        }
      }

      .slide .caption {
        width: 100%; 
        height: auto;
        padding: 5px;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        text-align: center;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        background: rgba(0, 0, 0, 0.2);
      }
      
      #controls i {
        color: white;
      }

      #controls {
        padding-bottom: 5px;
      }
      
      .previous,
      .next {
        width: 30px;
        cursor: pointer;
        border-radius: 50%;
        outline: none;
        transition: 0.7s ease-in-out;
        border: 2px solid white;
        background-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 50%;
      }
      
      .previous {
        left: 2%;
      }
      
      .next {
        right: 2%;
      }
      
      .previous:hover,
      .next:hover {
        border: 2px solid #FDB813;
      }

      </style>
    `;

    let tripData = timelines[this.data_id];

    this.innerHTML = style + `
      <div class="my-timeline">
        <ul>
          ${tripData.map((item) => `
            <li class="my-timeline-item">
              <p class="my-timeline-header">${item.day !== null ? '<b>Day ' + item.day + '</b> | ' : ''}
                <span style='font-size:16pt;'> ${item.distance !== null ? item.distance + ' km' : ''} 
                  ${item.destination !== null ? ' &#8212; ' + item.destination : ''} 
                  ${item.start !== null ? "<span style='font-size: 12pt'>from</span> " + item.start : ''} 
                  ${item.end !== null ? "<span style='font-size: 12pt'>to</span> " + item.end : ''} 
                </span>
              </p>

              <ul class="my-timeline-bullets">
                ${item.description.map((bullet) => `<li>${bullet}</li>`).join('')}
              </ul>

              ${item.photos.length < 1 ? `` : `
                <section id="timeline-slider-section">
                  <div class="container">
                    <div class="subcontainer">
                      <div class="slider-wrapper">
                        <div class="slider">
                          ${item.photos.map((photo) => `
                            <div class="slide">
                              <img src='../images/${photo.image}'/>
                              <div class="caption">${photo.caption}</div>
                            </div>
                          `).join('')}
                        </div>
                        <div id="controls">
                          <button class="previous"><i class="fa-solid fa-angle-left"></i></button>
                          <button class="next"><i class="fa-solid fa-angle-right"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              `}

            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }
}

const timelines = {
  "mtrl-sherbrooke": [
    {
      "destination": null,
      "day": 1,
      "date": "September 16, 2022",
      "distance": 136,
      "start": "Montreal",
      "end": "Stukley-Sud",
      "description": [
        "The hills and nice landscapes began east of Granby.",
        "The forested trail along the lake in Yamaska National Park was a highlight.",
        "Camped next to a power generator near Stukley-Sud."
      ],
      "photos": [
        {
          "image": "mtrl-sherbrooke/IMG_2704.jpg",
          "caption": "On the Jacques Cartier Bridge"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2707.jpg",
          "caption": "Sprial Highway Pass"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2708.jpg",
          "caption": "Train Tracks"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2709.jpg",
          "caption": "St. Joseph Center"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2710.jpg",
          "caption": "Bounty"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2711.jpg",
          "caption": "Pumpkin Patch"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2712.jpg",
          "caption": "Lunch From Le Tarbouche"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2713.jpg",
          "caption": "Granby"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2715.jpg",
          "caption": "Lac Boivin Fountain"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2717.jpg",
          "caption": "Yamaska River"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2718.jpg",
          "caption": "Choiniere Reservoir"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2720.jpg",
          "caption": "Yamaska River"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2724.jpg",
          "caption": "Telephone Lines"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2727.jpg",
          "caption": "La Route Verte"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2729.jpg",
          "caption": "Sunset on Chem. de la Diligence"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2731.jpg",
          "caption": "Camping in Stukley"
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "September 17, 2022",
      "distance": 121,
      "start": "Stukley-Sud",
      "end": "Mt. Orford National Park",
      "description": [
        "Biked through the forest in Mont Orford National Park.",
        "Arrived in Sherbrooke in the afternoon where I ate some shawarma for lunch and sat in the park by the river before turning back around.",
        "Ate some more Shawarma in Magog for dinner and biked along the water front.",
        "Watched the sunset over Lake Memphermagog.",
        "Arrived at the cyclist campground in Mt. Orford National Park after midnight."
      ],
      "photos": [
        {
          "image": "mtrl-sherbrooke/IMG_2735.jpg",
          "caption": "Cow"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2736.jpg",
          "caption": "Bull"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2739.jpg",
          "caption": "The Hills Begin"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2740.jpg",
          "caption": "Forest Trail Near Eastman"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2742.jpg",
          "caption": "Étang aux Cerises Viewpoint"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2744.jpg",
          "caption": "Saint Patrice Church"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2746.jpg",
          "caption": "Into Magog"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2748.jpg",
          "caption": "Out of Magog"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2750.jpg",
          "caption": "Bend In The Trail"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2753.jpg",
          "caption": "Drummond Dam"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2755.jpg",
          "caption": "Parc Des Quatre-Pins"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2757.jpg",
          "caption": "Les chutes de Magog"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2759.jpg",
          "caption": "Pont Jacques-Cartier"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2767.jpg",
          "caption": "Main Street, Magog"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2769.jpg",
          "caption": "Sunset Over Lake Memphermagog"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2775.jpg",
          "caption": "Sailboats On Lake Memphermagog"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2781.jpg",
          "caption": "Lovely Path Out of Magog"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2783.jpg",
          "caption": "Mont Orford"
        },
      ],
    },
    {
      "destination": null,
      "day": 3,
      "date": "September 18, 2022",
      "distance": 142,
      "start": "Mt. Orford National Park",
      "end": "Montreal",
      "description": [
        "Biked home in the cold rain.",
        "Picked a couple of apples along the way."
      ],
      "photos": [
        {
          "image": "mtrl-sherbrooke/IMG_2791.jpg",
          "caption": "Camping At Mont Orford"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2792.jpg",
          "caption": "The Cyclist Campground To the Left"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2793.jpg",
          "caption": "Through the Forest"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2795.jpg",
          "caption": "Country Living"
        },
        {
          "image": "mtrl-sherbrooke/IMG_2805.jpg",
          "caption": "Barnyard"
        },
      ],
    }
  ],



  "ptit-train": [
    {
      "destination": null,
      "day": 1,
      "date": "August 12, 2022",
      "distance": 118,
      "start": "Mont Blanc",
      "end": "Lac Boyd",
      "description": [
        "Departed from the cottage I was living in near Mont Blanc.",
        "Loved riding through the green farms and hills just Noth of Mont Tremblant.",
        "Ate poutine at La P'tite Patate Chez Léo for lunch.",
        "Camped next to a shelter along the trail beside Lac Boyd."
      ],
      "photos": [
        {
          "image": "ptit-train/IMG_2537.jpg",
          "caption": "Marsh Near Mont Tremblant"
        },
        {
          "image": "ptit-train/IMG_2538.jpg",
          "caption": "More Marsh"
        },
        {
          "image": "ptit-train/IMG_2541.jpg",
          "caption": "Poutine From La P'tite Patate Chez Léo"
        },
        {
          "image": "ptit-train/IMG_2542.jpg",
          "caption": "Path To The River"
        },
        {
          "image": "ptit-train/IMG_2543.jpg",
          "caption": "Campsite On The River"
        },
        {
          "image": "ptit-train/IMG_2545.jpg",
          "caption": "The Side of the Trail"
        },
        {
          "image": "ptit-train/IMG_2546.jpg",
          "caption": "One of Many Train Stations"
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "August 13, 2022",
      "distance": 160,
      "start": "Lac Boyd",
      "end": "Mont Blanc",
      "description": [
        "Bumped into two wandering horses on the trail.",
        "Reached Mont Laurier at noon.",
        "Biked back to the cottage."
      ],
      "photos": [
        {
          "image": "ptit-train/IMG_2550.jpg",
          "caption": "Another Marsh"
        },
        {
          "image": "ptit-train/IMG_2551.jpg",
          "caption": "Marsh Consuming a Forest"
        },
        {
          "image": "ptit-train/IMG_2553.jpg",
          "caption": "Barn"
        },
        {
          "image": "ptit-train/IMG_2559.jpg",
          "caption": "River"
        },
      ],
    },
    {
      "destination": null,
      "day": 3,
      "date": "August 15, 2022",
      "distance": 86,
      "start": "St Agathe des Monts",
      "end": "St Agathe des Monts",
      "description": [
        "After a day off, I drove back to the trail in St. Agathe and rode the southern section to St. Jerome.",
        "The section of the trail between Val David and St. Adele has great views of lakes and granite cliffs.",
        "I hungout at the park across from the church before turning back home."
      ],
      "photos": [
        {
          "image": "ptit-train/IMG_2571.jpg",
          "caption": "Long Tunnel Near St. Jerome"
        },
        {
          "image": "ptit-train/IMG_2577.jpg",
          "caption": "Art"
        },
        {
          "image": "ptit-train/IMG_2579.jpg",
          "caption": "St. Jerome's Cathedral"
        },
      ],
    }
  ],



  "haida-gwaii": [
    {
      "destination": null,
      "day": 1,
      "date": "August 12, 2021",
      "distance": 24,
      "start": "Skidgate Landing",
      "end": "Jungle Beach",
      "description": [
        "Took the eight hour ferry from Prince Rupert to Graham Island.",
        "Arrived at Skidgate Landing late in the afternoon.",
        "Explored the little town hoping to find some good food, but everything was closed for covid.",
        "Biked North on the ocean-side highway and passed lots people picking ripe black and thimble berries.",
        "Camped on the beach about 15 km south of Tlell and watched a long, soft-pink sunset while sitting beside a fire."
      ],
      "photos": [
        {
          "image": "haida-gwaii/IMG_0817.jpg",
          "caption": "Roadside Stop Near Prince Rupert"
        },
        {
          "image": "haida-gwaii/IMG_0822.jpg",
          "caption": "Grassy Beach Entrance"
        },
        {
          "image": "haida-gwaii/IMG_0825.jpg",
          "caption": "On The Beach"
        },
        {
          "image": "haida-gwaii/IMG_0826.jpg",
          "caption": "Beach Camping"
        },
        {
          "image": "haida-gwaii/IMG_0831.jpg",
          "caption": "Facing Sandspit"
        },
        {
          "image": "haida-gwaii/IMG_0834.jpg",
          "caption": "Looking East"
        },
        {
          "image": "haida-gwaii/IMG_0835.jpg",
          "caption": "The Forest's Edge"
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "August 13, 2021",
      "distance": 153,
      "start": "Jungle Beach",
      "end": "Queen Charlotte",
      "description": [
        "Biked around the beach near Misty Meadows Campground in Naikoon Provincial Park.",
        "Looked at the big forestry machinery outside the Port Clements museum.",
        "Bought some tomatoes and candy at Bayview Market.",
        "Biked the Golden Spruce Trail, which was cool after having read the book on it.",
        "Traveled through the interior of the island to the edge of Queen Charlotte where I camped by a rocky, wet cove."
      ],
      "photos": [
        {
          "image": "haida-gwaii/IMG_0837.jpg",
          "caption": "My Bike"
        },
        {
          "image": "haida-gwaii/IMG_0838.jpg",
          "caption": "Naikoon Provincial Park"
        },
        {
          "image": "haida-gwaii/IMG_0839.jpg",
          "caption": "Driftwood"
        },
        {
          "image": "haida-gwaii/IMG_0841.jpg",
          "caption": "Stump"
        },
        {
          "image": "haida-gwaii/IMG_0846.jpg",
          "caption": "Lilypads"
        },
        {
          "image": "haida-gwaii/IMG_0851.jpg",
          "caption": "Stuart Bay"
        },
        {
          "image": "haida-gwaii/IMG_0852.jpg",
          "caption": "More Stuart Bay"
        },
        {
          "image": "haida-gwaii/IMG_0853.jpg",
          "caption": "Port Clements Museum"
        },
        {
          "image": "haida-gwaii/IMG_0855.jpg",
          "caption": "Masset Inlet"
        },
        {
          "image": "haida-gwaii/IMG_0856.jpg",
          "caption": "Masset Inlet"
        },
        {
          "image": "haida-gwaii/IMG_0857.jpg",
          "caption": "Masset Inlet"
        },
        {
          "image": "haida-gwaii/IMG_0858.jpg",
          "caption": "Masset Inlet"
        },
        {
          "image": "haida-gwaii/IMG_0859.jpg",
          "caption": "Golden Spruce Trail"
        },
        {
          "image": "haida-gwaii/IMG_0860.jpg",
          "caption": "Massive Cedar"
        },
        {
          "image": "haida-gwaii/IMG_0861.jpg",
          "caption": "Orange Mushroom"
        },
        {
          "image": "haida-gwaii/IMG_0863.jpg",
          "caption": "Life On A Log"
        },
        {
          "image": "haida-gwaii/IMG_0866.jpg",
          "caption": "Retro Mushroom"
        },
      ],
    },
    {
      "destination": null,
      "day": 3,
      "date": "August 14, 2021",
      "distance": 8,
      "start": "Queen Charlotte",
      "end": "Skidgate Landing",
      "description": [
        "Awoke after an uncomfortably damp and sleepless night in my tent having regretted not returning to a quiet, sandy beach.",
        "Hung out in Queen Charlotte for the day before returning to Skidgate Landing.",
        "Took the night ferry back to Prince Rupert."
      ],
      "photos": [
        {
          "image": "haida-gwaii/IMG_0867.jpg",
          "caption": "Foxglove"
        },
        {
          "image": "haida-gwaii/IMG_0868.jpg",
          "caption": "Queen Charlotte Docks"
        },
        {
          "image": "haida-gwaii/IMG_0869.jpg",
          "caption": "Ocean Bay"
        },
      ],
    }
  ],



  "nass-valley": [
    {
      "destination": null,
      "day": 1,
      "date": "May 19, 2021",
      "distance": 116,
      "start": "Kitwanga",
      "end": "Dragon Lake Campground",
      "description": [
        "In the morning, the campground attendant in Kitwanaga invited me to park in his driveway.",
        "A coytoe standing on a logging road that intersected the Stewart-Cassiar Highway watched me ride by.",
        "I camped at Dragon Lake Campground."
      ],
      "photos": [
        {
          "image": "nass-valley/IMG_111.jpg",
          "caption": "Cranberry Connector FSR"
        },
        {
          "image": "nass-valley/IMG_112.jpg",
          "caption": "Kiteen River"
        },
        {
          "image": "nass-valley/IMG_113.jpg",
          "caption": "Dragon Lake"
        },
        {
          "image": "nass-valley/IMG_114.jpg",
          "caption": "Blue Flowers"
        },
        {
          "image": "nass-valley/IMG_115.jpg",
          "caption": "Rock Shore"
        },
        {
          "image": "nass-valley/IMG_116.jpg",
          "caption": "Little White Flower"
        },
        {
          "image": "nass-valley/IMG_117.jpg",
          "caption": "Split Tree"
        },
        {
          "image": "nass-valley/IMG_118.jpg",
          "caption": "Dragon Lake"
        },
        {
          "image": "nass-valley/IMG_119.jpg",
          "caption": "Dragon Lake Campground"
        },
        {
          "image": "nass-valley/IMG_120.jpg",
          "caption": "Yellow Flower"
        },
        {
          "image": "nass-valley/IMG_121.jpg",
          "caption": "Devils Claw"
        },
        {
          "image": "nass-valley/IMG_122.jpg",
          "caption": "Dragon Lake"
        },
        {
          "image": "nass-valley/IMG_123.jpg",
          "caption": "Dragon Lake"
        },
        {
          "image": "nass-valley/IMG_124.jpg",
          "caption": "My Tent"
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "May 20, 2021",
      "distance": 107,
      "start": "Dragon Lake Campground",
      "end": "Gingolx",
      "description": [
        "I explored the lava beds in the nass valley.",
        "A massive moose ran through the thick forest next to me on the road into Gingolx",
        "I saw a grizzly bear eating a procepine on the highway.",
        "Eagles soared above me on the Gingolx Lookout Trail.",
        "I camped next to a gravel pit a few kilometers outside of Gingolx."
      ],
      "photos": [
        {
          "image": "nass-valley/IMG_201.jpg",
          "caption": "Jungle Creek"
        },
        {
          "image": "nass-valley/IMG_202.jpg",
          "caption": "Mossy Lava"
        },
        {
          "image": "nass-valley/IMG_204.jpg",
          "caption": "Lava Rock"
        },
        {
          "image": "nass-valley/IMG_205.jpg",
          "caption": "Mossy Lava"
        },
        {
          "image": "nass-valley/IMG_206.jpg",
          "caption": "Lava Ridge"
        },
        {
          "image": "nass-valley/IMG_207.jpg",
          "caption": "Ksi Sii Aks River"
        },
        {
          "image": "nass-valley/IMG_208.jpg",
          "caption": "Ksi Sii Aks River"
        },
        {
          "image": "nass-valley/IMG_209.jpg",
          "caption": "Bark"
        },
        {
          "image": "nass-valley/IMG_210.jpg",
          "caption": "Return of the Forest"
        },
        {
          "image": "nass-valley/IMG_211.jpg",
          "caption": "Red Columbine"
        },
        {
          "image": "nass-valley/IMG_212.jpg",
          "caption": "The Nass Valley Lava Beds"
        },
        {
          "image": "nass-valley/IMG_214.jpg",
          "caption": "Directions to Gitwinksihlkw"
        },
        {
          "image": "nass-valley/IMG_215.jpg",
          "caption": "Nass River"
        },
        {
          "image": "nass-valley/IMG_216.jpg",
          "caption": "Almost Alaska"
        },
        {
          "image": "nass-valley/IMG_217.jpg",
          "caption": "Aiyansh"
        },
        {
          "image": "nass-valley/IMG_218.jpg",
          "caption": "Porcupine"
        },
        {
          "image": "nass-valley/IMG_220.jpg",
          "caption": "Nass River"
        },
        {
          "image": "nass-valley/IMG_221.jpg",
          "caption": "Nass River"
        },
        {
          "image": "nass-valley/IMG_223.jpg",
          "caption": "Gingolx Lookout Trail"
        },
        {
          "image": "nass-valley/IMG_225.jpg",
          "caption": "Gingolx"
        },
        {
          "image": "nass-valley/IMG_227.jpg",
          "caption": "Nisga'a Highway sign"
        },
        {
          "image": "nass-valley/IMG_228.jpg",
          "caption": "Gingolx: Seafood Capital of The Nass"
        },
        {
          "image": "nass-valley/IMG_229.jpg",
          "caption": "Nass River"
        },
        {
          "image": "nass-valley/IMG_230.jpg",
          "caption": "Tropical Bird"
        },
        {
          "image": "nass-valley/IMG_231.jpg",
          "caption": "Campsite"
        },
        {
          "image": "nass-valley/IMG_232.jpg",
          "caption": "Steep Mountain"
        },
        {
          "image": "nass-valley/IMG_233.jpg",
          "caption": "Bear Prints"
        },
      ],
    },
    {
      "destination": null,
      "day": 3,
      "date": "May 21, 2021",
      "distance": 124,
      "start": "Gingolx",
      "end": "Kitsumkalum Provincial Park",
      "description": [
        "I checked out a couple of water falls and rode alongside the Sunken Forest toward Terrace.",
        "Scared a bear that wasn't moving off the highway with a banger and felt pretty cool.",
        "Camped on the beach next to a fire at my campsite on Kitsumkalum Lake."
      ],
      "photos": [
        {
          "image": "nass-valley/IMG_303.jpg",
          "caption": "Vetter Falls"
        },
        {
          "image": "nass-valley/IMG_304.jpg",
          "caption": "Beaupre Falls"
        },
        {
          "image": "nass-valley/IMG_305.jpg",
          "caption": "Drowned Forest"
        },
        {
          "image": "nass-valley/IMG_306.jpg",
          "caption": "Kitsumkalum Lake"
        },
        {
          "image": "nass-valley/IMG_309.jpg",
          "caption": "Kitsumkalum Lake"
        },
        {
          "image": "nass-valley/IMG_312.jpg",
          "caption": "Camping on Kitsumkalum Lake"
        },
      ],
    },
    {
      "destination": null,
      "day": 4,
      "date": "May 22, 2021",
      "distance": 127,
      "start": "Kitsumkalum Provincial Park",
      "end": "Kitwanga",
      "description": [
        "I got a cappuccino and sandwich at Bert's Deli in Terrace.",
        "Returned to Kitwanaga a complete man in my mind."
      ],
      "photos": [
        {
          "image": "nass-valley/IMG_401.jpg",
          "caption": "Jesus"
        },
      ],
    }
  ],



  "babine-lake": [
    {
      "destination": null,
      "day": 1,
      "date": "May 8, 2021",
      "distance": 125,
      "start": "Tyhee Lake Provincial Park",
      "end": "Red Bluff Provincial Park",
      "description": [
        "I went south on the Yellowhead from Telkwa and turned off toward Babine Lake in Wiley.",
        "I ate some Chicken Tikka from Indian Curry House in Houston.",
        "The gently rolling hills of interior BC made for a ride that was easy on the knees.",
        "I camped on the edge of Babine Lake in Red Bluff Provincial Park."
      ],
      "photos": [
        {
          "image": "babine-lake/IMG_9496.jpg",
          "caption": "Main Street, Smithers"
        },
        {
          "image": "babine-lake/IMG_9497.jpg",
          "caption": "Peterbuilt, Houston"
        },
        {
          "image": "babine-lake/IMG_9500.jpg",
          "caption": "Cow Pen"
        },
        {
          "image": "babine-lake/IMG_9503.jpg",
          "caption": "Grazing"
        },
        {
          "image": "babine-lake/IMG_9504.jpg",
          "caption": "Babine Lake Sign"
        },
        {
          "image": "babine-lake/IMG_9506.jpg",
          "caption": "Shore"
        },
        {
          "image": "babine-lake/IMG_9509.jpg",
          "caption": "Red Bluffs"
        },
        {
          "image": "babine-lake/IMG_9510.jpg",
          "caption": "Red Bluffs Trail Viewpoint"
        },
        {
          "image": "babine-lake/IMG_9511.jpg",
          "caption": "Beach"
        },
        {
          "image": "babine-lake/IMG_9515.jpg",
          "caption": "Duck"
        },
        {
          "image": "babine-lake/IMG_9519.jpg",
          "caption": "Roots"
        },
        {
          "image": "babine-lake/IMG_9520.jpg",
          "caption": "Babine Lake"
        },
        {
          "image": "babine-lake/IMG_9525.jpg",
          "caption": "Dusk On The Beach"
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "May 9, 2021",
      "distance": 62,
      "start": "Red Bluff Provincial Park",
      "end": "Tyhee Lake Provincial Park",
      "description": [
        "I took the more-direct logging road back toward Smithers. It had great view of the Babine Mountains.",
        "Before I reached Telkwa High Road, where the logging road ended, a local guy picked me up after driving ahead of me because a grizzly was on the road and wouldn't budge when he honked. So, he brought me and by bike to the edge of Telkwa.",
        "I returned to Tyhee Lake Provincial Park."
      ],
      "photos": [
        {
          "image": "babine-lake/IMG_9527.jpg",
          "caption": "Ripples"
        },
        {
          "image": "babine-lake/IMG_9532.jpg",
          "caption": "Still Water"
        },
        {
          "image": "babine-lake/IMG_9533.jpg",
          "caption": "Babine Lake Rd"
        },
        {
          "image": "babine-lake/IMG_9538.jpg",
          "caption": "Cow Being A Cow"
        },
        {
          "image": "babine-lake/IMG_9540.jpg",
          "caption": "Alpine Air"
        },
      ],
    },
  ],



  "downie-creek": [
    {
      "destination": null,
      "day": 1,
      "date": "October 3, 2020",
      "distance": 42,
      "start": "Revelstoke",
      "end": "Carnes Creek Rec Site",
      "description": [
        "Was held up on the highway for over an hour because the crumbling mountain-side was being repaired.",
        "My neighbours at Carnes Creek Rec Site gave me a load of fire wood for the night."
      ],
      "photos": [
        {
          "image": "downie-creek/IMG_8487.jpg",
          "caption": "Hot Sun"
        },
        {
          "image": "downie-creek/IMG_8488.jpg",
          "caption": "BC Interior Forestry Museum"
        },
        {
          "image": "downie-creek/IMG_8490.jpg",
          "caption": "Construction"
        },
        {
          "image": "downie-creek/IMG_8491.jpg",
          "caption": "Dusk"
        },
        {
          "image": "downie-creek/IMG_8495.jpg",
          "caption": "Fire"
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "October 4, 2020",
      "distance": 74,
      "start": "Carnes Creek Rec Site",
      "end": "Carnes Creek Rec Site",
      "description": [
        "Sunbeams shot through the clouds and the landscape had a glassy shine.",
        "The mist and fog was moving around me all day. It brought the river to life.",
        "I decided to turn around at Downie Creek. If the forecast wasn't cold rain, I would have continued to Mica Creek."
      ],
      "photos": [
        {
          "image": "downie-creek/IMG_8500.jpg",
          "caption": "My Campsite at Carnes Creek"
        },
        {
          "image": "downie-creek/IMG_8502.jpg",
          "caption": "Low Clouds"
        },
        {
          "image": "downie-creek/IMG_8505.jpg",
          "caption": "The Long & Winding Road"
        },
        {
          "image": "downie-creek/IMG_8507.jpg",
          "caption": "Creek"
        },
        {
          "image": "downie-creek/IMG_8564.jpg",
          "caption": "Creek"
        },
        {
          "image": "downie-creek/IMG_8511.jpg",
          "caption": "Slopes"
        },
        {
          "image": "downie-creek/IMG_8521.jpg",
          "caption": "The Road"
        },
        {
          "image": "downie-creek/IMG_8525.jpg",
          "caption": "Downie Creek Rec Site"
        },
        {
          "image": "downie-creek/IMG_8527.jpg",
          "caption": "My Bike"
        },
        {
          "image": "downie-creek/IMG_8551.jpg",
          "caption": "River Valley"
        },
        {
          "image": "downie-creek/IMG_8560.jpg",
          "caption": "Blue Water"
        },
        {
          "image": "downie-creek/IMG_8588.jpg",
          "caption": "End of the Road"
        },
        {
          "image": "downie-creek/IMG_8602.jpg",
          "caption": "Drift Wood"
        },
        {
          "image": "downie-creek/IMG_8604.jpg",
          "caption": "Dock"
        },
        {
          "image": "downie-creek/IMG_8618.jpg",
          "caption": "Bump"
        },
        {
          "image": "downie-creek/IMG_8621.jpg",
          "caption": "Bumps"
        },
        {
          "image": "downie-creek/IMG_8619.jpg",
          "caption": "The Other Side"
        },
      ],
    },
    {
      "destination": null,
      "day": 3,
      "date": "October 5, 2020",
      "distance": 42,
      "start": "Carnes Creek Rec Site",
      "end": "Revelstoke",
      "description": [
        "There are lots of pull-offs along the river. It's a dream for camping.",
        "This is the kind of road that you won't find unless you look for it. I want to ride it all the way to it's end when I'm back."
      ],
      "photos": [
        {
          "image": "downie-creek/IMG_8634.jpg",
          "caption": "My Campsite at Carnes Creek"
        },
        {
          "image": "downie-creek/IMG_8638.jpg",
          "caption": "Bird House"
        },
        {
          "image": "downie-creek/IMG_8639.jpg",
          "caption": "Dining"
        },
        {
          "image": "downie-creek/IMG_8644.jpg",
          "caption": "Wide-Open River"
        },
        {
          "image": "downie-creek/IMG_8647.jpg",
          "caption": "Campsite"
        },
        {
          "image": "downie-creek/IMG_8648.jpg",
          "caption": "River Road"
        },
        {
          "image": "downie-creek/IMG_8661.jpg",
          "caption": "God Bless Alberta"
        },
        {
          "image": "downie-creek/IMG_8657.jpg",
          "caption": "This Is Oil Country"
        },
        {
          "image": "downie-creek/IMG_8658.jpg",
          "caption": "Alberta Rules"
        },
      ],
    },
  ],



  "begbie-falls": [
    {
      "destination": null,
      "day": 1,
      "date": "September 26, 2020",
      "distance": 15,
      "start": "Revelstoke",
      "end": "Begbie Falls",
      "description": [
        "We biked from our place in Revelstoke to Begbie Falls Rec Site to camp."
      ],
      "photos": [
        {
          "image": "begbie-falls/IMG_8340.jpg",
          "caption": "Leaving Town"
        },
        {
          "image": "begbie-falls/IMG_8346.jpg",
          "caption": "Riding Fast"
        },
        {
          "image": "begbie-falls/IMG_8348.jpg",
          "caption": "Looking Forward"
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "September 27, 2020",
      "distance": 19,
      "start": "Begbie Falls",
      "end": "Revelstoke",
      "description": [
        "We hiked a little more than half way up Mt. Begbie the next morning."
      ],
      "photos": [
        {
          "image": "begbie-falls/IMG_3712.jpg",
          "caption": "Begbie Falls Campsite"
        },
        {
          "image": "begbie-falls/IMG_3720.jpg",
          "caption": "In The Sticks"
        },
        {
          "image": "begbie-falls/IMG_8359.jpg",
          "caption": "Superman"
        },
        {
          "image": "begbie-falls/IMG_8360.jpg",
          "caption": " No Feet"
        },
        {
          "image": "begbie-falls/IMG_3792.jpg",
          "caption": "Up Mt. Begbie"
        },
        {
          "image": "begbie-falls/IMG_3778.jpg",
          "caption": "Oasis"
        },
        {
          "image": "begbie-falls/IMG_8374.jpg",
          "caption": "Thirst"
        },
        {
          "image": "begbie-falls/IMG_8377.jpg",
          "caption": "Stamina"
        },
        {
          "image": "begbie-falls/IMG_8371.jpg",
          "caption": "The Top*"
        },
        {
          "image": "begbie-falls/IMG_3762.jpg",
          "caption": "Down Mt. Begbie"
        },
      ],
    },
  ],



  "quadra-cortes": [
    {
      "destination": null,
      "day": 1,
      "date": "August 1, 2020",
      "distance": 64,
      "start": "Courtenay",
      "end": "Quadra Island",
      "description": [
        "Got some salmon from Dockside Fish & Chips before getting on the ferry from Campbell River to Quadra.",
        "Pushed my bike along a trail to Morte Lake where I camped."
      ],
      "photos": [
        {
          "image": "quadra-cortes/IMG_6782.jpg",
          "caption": ""
        },
        {
          "image": "quadra-cortes/IMG_6819.jpg",
          "caption": ""
        },
        {
          "image": "quadra-cortes/IMG_6791.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "August 2, 2020",
      "distance": 49,
      "start": "Quadra Island",
      "end": "Quadra Island",
      "description": [
        "Hiked up beeches mountain which led to big views of the ocean and Sunshine Coast.",
        "Went to Surge Narrows Provincial Park where the ocean gets squeezed between Quadra and it's neighbour, Maurelle Island.",
        "Camped in a lushious opening in the forest."
      ],
      "photos": [
        {
          "image": "quadra-cortes/IMG_6813.jpg",
          "caption": ""
        },
        {
          "image": "quadra-cortes/IMG_6834.jpg",
          "caption": ""
        },
        {
          "image": "quadra-cortes/IMG_6835.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": null,
      "day": 3,
      "date": "August 3, 2020",
      "distance": 144,
      "start": "Quadra Island",
      "end": "Courtenay",
      "description": [
        "Took the ferry from Quadra to Cortes.",
        "Sat on white, sandy the beach at Smelt Bay and watched the sea birds.",
        "Walked around the rocky beach and dock in Squirrel Cove and watched sailors replenish their liquor supplies.",
        "Looked at the garden behind Cortes Natural Food Co-op.",
        "Was confused when I found pontoon boats sitting in a pit with cottages on cliffs above them. But I figured out what was going on when the tide came in to fill it up."
      ],
      "photos": [
        {
          "image": "quadra-cortes/IMG_6856.jpg",
          "caption": ""
        },
        {
          "image": "quadra-cortes/IMG_6848.jpg",
          "caption": ""
        },
        {
          "image": "quadra-cortes/IMG_6861.jpg",
          "caption": ""
        },
        {
          "image": "quadra-cortes/IMG_6904.jpg",
          "caption": ""
        },
        {
          "image": "quadra-cortes/IMG_6950.jpg",
          "caption": ""
        },
        {
          "image": "quadra-cortes/IMG_6954.jpg",
          "caption": ""
        },
      ],
    },
  ],



  "comox-lake": [
    {
      "destination": null,
      "day": 1,
      "date": "July 4, 2020",
      "distance": 14,
      "start": "Courtenay",
      "end": "Comox Lake",
      "description": [
        "It was a short afternoon trip from my apartment above Delicado's in Courtenay to Comox Lake.",
        "The north side of the lake is lined with rustic cottages that extend out over the water.",
        "The lake is surrounded by vibrant greenery and organe arbutus trees.",
        "I camped on some mossy bluffs overlooking the lake."
      ],
      "photos": [
        {
          "image": "comox-lake/IMG_6300.jpg",
          "caption": ""
        },
        {
          "image": "comox-lake/IMG_6302.jpg",
          "caption": ""
        },
        {
          "image": "comox-lake/IMG_6310.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "July 5, 2020",
      "distance": 66,
      "start": "Comox Lake",
      "end": "Courtenay",
      "description": [
        "The shadow of the mountains across the lake was cast upon those on my side of the lake as the sun rose at 6am.",
        "I tried biking around the lake, thinking it might connect to Cumberland on the otherside, but an old couple who lived on the otherside of the lake told me it didn't."
      ],
      "photos": [
        {
          "image": "comox-lake/IMG_6325.jpg",
          "caption": ""
        },
        {
          "image": "comox-lake/IMG_6331.jpg",
          "caption": ""
        },
        {
          "image": "comox-lake/IMG_6336.jpg",
          "caption": ""
        },
      ],
    },
  ],



  "texada": [
    {
      "destination": null,
      "day": 1,
      "date": "June 12, 2020",
      "distance": 34,
      "start": "Courtenay",
      "end": "Dinner Rock",
      "description": [
        "Took the ferry from Comox to Powell River.",
        "On my way down the road to Dinner Rock, I saw a bear with two cubs run through the forest.",
        "Someone left a homemade fire-starter in the pit and I needed no more convincing. It felt like a gift."
      ],
      "photos": [
        {
          "image": "texada/IMG_5788.jpg",
          "caption": ""
        },
        {
          "image": "texada/IMG_5800.jpg",
          "caption": ""
        },
        {
          "image": "texada/IMG_5797.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "June 13, 2020",
      "distance": 69,
      "start": "Dinner Rock",
      "end": "Shingle Beach",
      "description": [
        "Took the ferry from Powell River to Texada Island",
        "Napped on some spongy bluffs and watched an eagle fly above me. It was so quite I could hear the eagle's wings cutting the air.",
        "Camped at Single Beach. The host was really on the ball with an iPad for registation and a tagged truck."
      ],
      "photos": [
        {
          "image": "texada/IMG_5848.jpg",
          "caption": ""
        },
        {
          "image": "texada/IMG_5862.jpg",
          "caption": ""
        },
        {
          "image": "texada/IMG_5871.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": null,
      "day": 3,
      "date": "June 14, 2020",
      "distance": 40,
      "start": "Shingle Beach",
      "end": "Bob's Lake",
      "description": [
        "I followed some hydo lines as far south as I could go before the trail became too rough.",
        "There were tiny strawberries growing that tasted unbelievably sweet.",
        "I hiked around Bob's Lake and saw an old horse campsite and a variety of perfectly content mushrooms."
      ],
      "photos": [
        {
          "image": "texada/IMG_6103.jpg",
          "caption": ""
        },
        {
          "image": "texada/IMG_5893.jpg",
          "caption": ""
        },
        {
          "image": "texada/IMG_5941.jpg",
          "caption": ""
        },
        {
          "image": "texada/IMG_6011.jpg",
          "caption": ""
        },
        {
          "image": "texada/IMG_5974.jpg",
          "caption": ""
        },
        {
          "image": "texada/IMG_6021.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": null,
      "day": 4,
      "date": "June 15, 2020",
      "distance": 52,
      "start": "Bob's Lake",
      "end": "Courtenay",
      "description": [
        "The Lake was misty in the morning.",
        "I had a meal on the colourful patio at Mary Mary Cafe in Van Anda before getting on the ferry."
      ],
      "photos": [
        {
          "image": "texada/IMG_6107.jpg",
          "caption": ""
        },
        {
          "image": "texada/IMG_6110.jpg",
          "caption": ""
        },
        {
          "image": "texada/IMG_6113.jpg",
          "caption": ""
        },
      ],
    }
  ],



  "brewster-lake": [
    {
      "destination": null,
      "day": 1,
      "date": "May 28, 2020",
      "distance": 83,
      "start": "Courtenay",
      "end": "Brewster Lake",
      "description": [
        "Brewster Lake had a real beachy feel, like Tofino does, with it's swooping cedar trees and vibrant greenery."
      ],
      "photos": [
        {
          "image": "brewster-lake/IMG_5594.jpg",
          "caption": ""
        },
        {
          "image": "brewster-lake/IMG_5557.jpg",
          "caption": ""
        },
        {
          "image": "brewster-lake/IMG_5570.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "May 29, 2020",
      "distance": 22,
      "start": "Brewster Lake",
      "end": "Campbell Lake",
      "description": [
        "Made a small fire on the shore and watched bats zip in and out of the forest behind me."
      ],
      "photos": [
        {
          "image": "brewster-lake/IMG_5585.jpg",
          "caption": ""
        },
        {
          "image": "brewster-lake/IMG_5603.jpg",
          "caption": ""
        },
        {
          "image": "brewster-lake/IMG_5631.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": null,
      "day": 3,
      "date": "May 30, 2020",
      "distance": 72,
      "start": "Campbell Lake",
      "end": "Courtenay",
      "description": [
        "I rode home to Courtenay."
      ],
      "photos": [
        {
          "image": "brewster-lake/IMG_5610.jpg",
          "caption": ""
        },
        {
          "image": "brewster-lake/IMG_5628.jpg",
          "caption": ""
        },
        {
          "image": "brewster-lake/IMG_5619.jpg",
          "caption": ""
        },
      ],
    },
  ],



  "san-josef-bay": [
    {
      "destination": null,
      "day": 1,
      "date": "May 14, 2020",
      "distance": 71,
      "start": "Courtenay",
      "end": "Burnt Beach",
      "description": [
        "I left Courtenay late in the morning and camped at Burnt Beach Rec Site near Campbell River."
      ],
      "photos": [
        {
          "image": "san-josef-bay/IMG_5234.jpg",
          "caption": "Road"
        },
        {
          "image": "san-josef-bay/IMG_5236.jpg",
          "caption": "Campbell River"
        },
        {
          "image": "san-josef-bay/IMG_5290.jpg",
          "caption": "Burnt Beach Rec Site"
        },
        {
          "image": "san-josef-bay/IMG_5243.jpg",
          "caption": "The Steel Steed"
        },
        {
          "image": "san-josef-bay/IMG_5245.jpg",
          "caption": "Burnt Beach"
        },
        {
          "image": "san-josef-bay/IMG_5254.jpg",
          "caption": "Lizard"
        },
        {
          "image": "san-josef-bay/IMG_5257.jpg",
          "caption": "Sunset"
        },
        {
          "image": "san-josef-bay/IMG_5263.jpg",
          "caption": "My Campsite"
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "May 15, 2020",
      "distance": 65,
      "start": "Burnt Beach",
      "end": "Elk Creek",
      "description": [
        "I continued toward Sayward, mostly on logging roads that were in pretty good shape."
      ],
      "photos": [
        {
          "image": "san-josef-bay/IMG_5293.jpg",
          "caption": "Apple Point Rec Site"
        },
        {
          "image": "san-josef-bay/IMG_5296.jpg",
          "caption": "Ferns"
        },
        {
          "image": "san-josef-bay/IMG_5303.jpg",
          "caption": "Gravel Road"
        },
        {
          "image": "san-josef-bay/IMG_5307.jpg",
          "caption": "Cut Block"
        },
        {
          "image": "san-josef-bay/IMG_5309.jpg",
          "caption": "Sustainable Forestry"
        },
        {
          "image": "san-josef-bay/IMG_5311.jpg",
          "caption": "Forest Road"
        },
        {
          "image": "san-josef-bay/IMG_5313.jpg",
          "caption": "Jungle"
        },
        {
          "image": "san-josef-bay/IMG_5319.jpg",
          "caption": "Winding Road"
        },
        {
          "image": "san-josef-bay/IMG_5321.jpg",
          "caption": "Logging Road"
        },
        {
          "image": "san-josef-bay/IMG_5323.jpg",
          "caption": "Elk Creek Rec Site"
        },
        {
          "image": "san-josef-bay/IMG_5326.jpg",
          "caption": "The Creek"
        },
        {
          "image": "san-josef-bay/IMG_5330.jpg",
          "caption": "My Bedroom"
        },
      ],
    },
    {
      "destination": null,
      "day": 3,
      "date": "May 16, 2020",
      "distance": 0,
      "start": "Elk Creek",
      "end": "Elk Creek",
      "description": [
        "I took a rainy day off at the campground near Sayward."
      ],
      "photos": [
        {
          "image": "san-josef-bay/IMG_5332.jpg",
          "caption": "Mossy Branches"
        },
        {
          "image": "san-josef-bay/IMG_5333.jpg",
          "caption": "My Tent"
        },
        {
          "image": "san-josef-bay/IMG_5327.jpg",
          "caption": "Swooping Trees"
        },
      ],
    },
    {
      "destination": null,
      "day": 4,
      "date": "May 17, 2020",
      "distance": 71,
      "start": "Elk Creek",
      "end": "Nimpkish Lake",
      "description": [
        "I followed the highway to Woss and bought some food a the gas station. There wasn't much to choose from, but it was my only option for the day.",
        "I ended at Nimpkish Lake for the night. It's one of my favorite campsites."
      ],
      "photos": [
        {
          "image": "san-josef-bay/IMG_5339.jpg",
          "caption": "Wet Needles"
        },
        {
          "image": "san-josef-bay/IMG_5340.jpg",
          "caption": "River"
        },
        {
          "image": "san-josef-bay/IMG_5352.jpg",
          "caption": "Woss, Dank Woss"
        },
        {
          "image": "san-josef-bay/IMG_5353.jpg",
          "caption": "Nimpkish Lake Rec Site"
        },
        {
          "image": "san-josef-bay/IMG_5354.jpg",
          "caption": "Nimpkish Lake"
        },
        {
          "image": "san-josef-bay/IMG_5355.jpg",
          "caption": "Private Beach"
        },
        {
          "image": "san-josef-bay/IMG_5363.jpg",
          "caption": "Wood"
        },
      ],
    },
    {
      "destination": null,
      "day": 5,
      "date": "May 18, 2021",
      "distance": 143,
      "start": "Nimpkish Lake",
      "end": "Nahwitti Lake",
      "description": [
        "I arrived at the Port McNeill Harbour around lunch time. I had a bag of cashews on top of an open pack while I was walking around and a group of crows stole it.",
        "Shortly after lunch, I was onto the Logging road that leads to Cape Scott. I was rather rough riding on by bike.",
        "I camped on a sandy beach on Nahwitti Lake. The trail to the lake was beautiful. It went through a big, dense forest."
      ],
      "photos": [
        {
          "image": "san-josef-bay/IMG_5384.jpg",
          "caption": "Beaver Lake Rec Site"
        },
        {
          "image": "san-josef-bay/IMG_5386.jpg",
          "caption": "The Logging Road to Cape Scott"
        },
        {
          "image": "san-josef-bay/IMG_5387.jpg",
          "caption": "Shoe Stump"
        },
        {
          "image": "san-josef-bay/IMG_5388.jpg",
          "caption": "It's Tall"
        },
        {
          "image": "san-josef-bay/IMG_5393.jpg",
          "caption": "My Bike"
        },
        {
          "image": "san-josef-bay/IMG_5394.jpg",
          "caption": "Canopy"
        },
        {
          "image": "san-josef-bay/IMG_5395.jpg",
          "caption": "Old Tree"
        },
        {
          "image": "san-josef-bay/IMG_5396.jpg",
          "caption": "Looking Up The Old Tree"
        },
        {
          "image": "san-josef-bay/IMG_5397.jpg",
          "caption": "The Old Tree In Full"
        },
        {
          "image": "san-josef-bay/IMG_5400.jpg",
          "caption": "Microcosm"
        },
        {
          "image": "san-josef-bay/IMG_5406.jpg",
          "caption": "Fungi"
        },
        {
          "image": "san-josef-bay/IMG_5411.jpg",
          "caption": "Root Bed"
        },
        {
          "image": "san-josef-bay/IMG_5412.jpg",
          "caption": "Nahwitti Lake"
        },
        {
          "image": "san-josef-bay/IMG_5416.jpg",
          "caption": "Red Cedar"
        },
      ],
    },
    {
      "destination": null,
      "day": 6,
      "date": "May 19, 2020",
      "distance": 40,
      "start": "Nahwitti Lake",
      "end": "San Josef Bay",
      "description": [
        "The road to Cape Scott was busy with logging trucks. They kick-up a lot of dust.",
        "I met a guy and his daughter on motorbikes who were mapping a backroads route called the North Island 1000.",
        "I took the Cape Scott Trail to San Josef Bay and setup camp on the edge of the beach."
      ],
      "photos": [
        {
          "image": "san-josef-bay/IMG_5421.jpg",
          "caption": "Camping on Nahwitti Lake"
        },
        {
          "image": "san-josef-bay/IMG_5422.jpg",
          "caption": "Nahwitti Lake In The Morning"
        },
        {
          "image": "san-josef-bay/IMG_5425.jpg",
          "caption": "Pipe"
        },
        {
          "image": "san-josef-bay/IMG_5434.jpg",
          "caption": "Green Things"
        },
        {
          "image": "san-josef-bay/IMG_5440.jpg",
          "caption": "Goodspeed Fossil Bed"
        },
        {
          "image": "san-josef-bay/IMG_5441.jpg",
          "caption": "Golf Course"
        },
        {
          "image": "san-josef-bay/IMG_5454.jpg",
          "caption": "Toward the Beach"
        },
        {
          "image": "san-josef-bay/IMG_5459.jpg",
          "caption": "Cape Scott"
        },
        {
          "image": "san-josef-bay/IMG_5460.jpg",
          "caption": "Trail to San Josef Bay"
        },
        {
          "image": "san-josef-bay/IMG_5462.jpg",
          "caption": "San Josef Bay"
        },
        {
          "image": "san-josef-bay/IMG_5469.jpg",
          "caption": "Tide"
        },
        {
          "image": "san-josef-bay/IMG_5470.jpg",
          "caption": "Forest"
        },
        {
          "image": "san-josef-bay/IMG_5471.jpg",
          "caption": "Edge of The Island"
        },
        {
          "image": "san-josef-bay/IMG_5472.jpg",
          "caption": "Elevated Forest"
        },
        {
          "image": "san-josef-bay/IMG_5473.jpg",
          "caption": "Barnacles"
        },
        {
          "image": "san-josef-bay/IMG_5475.jpg",
          "caption": "Crab"
        },
        {
          "image": "san-josef-bay/IMG_5477.jpg",
          "caption": "Island"
        },
        {
          "image": "san-josef-bay/IMG_5481.jpg",
          "caption": "Flowers"
        },
        {
          "image": "san-josef-bay/IMG_5485.jpg",
          "caption": "Sea Stacks"
        },
        {
          "image": "san-josef-bay/IMG_5486.jpg",
          "caption": "My Campsite"
        },
        {
          "image": "san-josef-bay/IMG_5492.jpg",
          "caption": "Grass"
        },
      ],
    },
    {
      "destination": null,
      "day": 7,
      "date": "May 20, 2020",
      "distance": 181,
      "start": "San Josef Bay",
      "end": "Nimpkish Lake",
      "description": [
        "I rode back to Nimpkish Lake."
      ],
      "photos": [
        {
          "image": "san-josef-bay/IMG_5495.jpg",
          "caption": "Leaving The Ocean"
        },
        {
          "image": "san-josef-bay/IMG_5497.jpg",
          "caption": "Logging Truck"
        },
        {
          "image": "san-josef-bay/IMG_5499.jpg",
          "caption": "Squashed"
        },
        {
          "image": "san-josef-bay/IMG_5505.jpg",
          "caption": "Port McNeill"
        },
        {
          "image": "san-josef-bay/IMG_5509.jpg",
          "caption": "Lucky Lager"
        },
        {
          "image": "san-josef-bay/IMG_5515.jpg",
          "caption": "Beans"
        },
      ],
    },
    {
      "destination": null,
      "day": 8,
      "date": "May 21, 2020",
      "distance": 213,
      "start": "Nimpkish Lake",
      "end": "Courtenay",
      "description": [
        "I made the 213km trip back to Courtenay from Nimpkish Lake in one day."
      ],
      "photos": [
        {
          "image": "san-josef-bay/IMG_5519.jpg",
          "caption": "Pedaling Home"
        },
      ],
    }
  ],



  "nanaimo-courtenay": [
    {
      "destination": null,
      "day": 1,
      "date": "May 6, 2020",
      "distance": 92,
      "start": "Nanaimo",
      "end": "Port Alberni",
      "description": [
        "Dropped my rental car off in Nanaimo after driving west from Ontario.",
        "Arrived in Port Alberni around 10pm where I setup camp without a tent on the bank of the river on the edge of town.",
        "Awoke at midnight when I rolled over and found myself in a puddle. The river was tidal and my air mattress had been floating on a shallow layer of water. Life in Southern Ontario doesn't prepare you for these situations."
      ],
      "photos": [
        {
          "image": "nanaimo-courtenay/IMG_5120.jpg",
          "caption": "Trails"
        },
        {
          "image": "nanaimo-courtenay/IMG_5121.jpg",
          "caption": "Top Bridge"
        },
        {
          "image": "nanaimo-courtenay/IMG_5122.jpg",
          "caption": "Englishman River"
        },
        {
          "image": "nanaimo-courtenay/IMG_5123.jpg",
          "caption": "Hills"
        },
        {
          "image": "nanaimo-courtenay/IMG_5125.jpg",
          "caption": "Cameron Lake"
        },
        {
          "image": "nanaimo-courtenay/IMG_5131.jpg",
          "caption": "Sproat River"
        },
        {
          "image": "nanaimo-courtenay/IMG_5140.jpg",
          "caption": "Soaked"
        },
        {
          "image": "nanaimo-courtenay/IMG_5142.jpg",
          "caption": "Water Bed"
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "May 7, 2020",
      "distance": 88,
      "start": "Port Alberni",
      "end": "Courtenay",
      "description": [
        "Now that my sleeping bag was wet and I was cold, I continued riding to Courtenay in the dark.",
        "My camera lense was now foggy after it got wet in the river.",
        "When I got to the edge of civilization, the road ahead was very dark. I sat out front of a lit gas station while I built up the courage to keep riding in the dark.",
        "I had to take logging roads. I didn't realize that the route I had mapped out would be as rough and steep as it was. I figured the roads would be just like dirt roads in Ontario, but in some cases, the roads on the map were inactive. They were blocked off with mounds of dirt and overgrown.", 
        "My brake pads wore down as a result of riding my loaded, rigid bike down steep, rocky roads.",
        "I saw three bears, all near Comox Lake after the sun had risen.",
        "Much was learned. My confidence as a bicycle tourist developed."
      ],
      "photos": [
        {
          "image": "nanaimo-courtenay/IMG_5145.jpg",
          "caption": "Early in the Morning"
        },
        {
          "image": "nanaimo-courtenay/IMG_5146.jpg",
          "caption": "Glow"
        },
        {
          "image": "nanaimo-courtenay/IMG_5149.jpg",
          "caption": "Dew"
        },
        {
          "image": "nanaimo-courtenay/IMG_5150.jpg",
          "caption": "Sunrise"
        },
        {
          "image": "nanaimo-courtenay/IMG_5154.jpg",
          "caption": "Wet Grass"
        },
        {
          "image": "nanaimo-courtenay/IMG_5157.jpg",
          "caption": "Trilliums"
        },
        {
          "image": "nanaimo-courtenay/IMG_5158.jpg",
          "caption": "Skunk Cabbage"
        },
        {
          "image": "nanaimo-courtenay/IMG_5160.jpg",
          "caption": "Late Morning Sun"
        },
        {
          "image": "nanaimo-courtenay/IMG_5162.jpg",
          "caption": "Comox Lake"
        },
        {
          "image": "nanaimo-courtenay/IMG_5221.jpg",
          "caption": "Courtenay"
        },
      ],
    },
  ],



  "to-mtrl": [
    {
      "destination": null,
      "day": 1,
      "date": "August 16, 2019",
      "distance": 116,
      "start": "Schomberg",
      "end": "Darlington Provincial Park",
      "description": [
        "Spent the day riding on busy roads through dreary Toronto suburbs.",
        "Camped at Darlington Provincial Park for 50 precious dollars, but it put me right beside the Waterfront Trail."
      ],
      "photos": [],
    },
    {
      "destination": null,
      "day": 2,
      "date": "August 17, 2019",
      "distance": 161,
      "start": "Darlington Provincial Park",
      "end": "Picton",
      "description": [
        "Passed through many nice towns on Lake Ontario, like Port Hope.",
        "My favorite section of the day was the marshy landscape around Presqu’ile Provincial Park.",
        "Rode through corn fields in Prince Edward County.",
        "Camped at a conservation area in Picton."
      ],
      "photos": [
        {
          "image": "to-mtrl/IMG_4208.jpg",
          "caption": "Field To The Lake"
        },
        {
          "image": "to-mtrl/IMG_4209.jpg",
          "caption": "Lake Ontario"
        },
        {
          "image": "to-mtrl/IMG_4210.jpg",
          "caption": "Lots of Lake Ontario"
        },
        {
          "image": "to-mtrl/IMG_4216.jpg",
          "caption": "Swamp"
        },
        {
          "image": "to-mtrl/IMG_4220.jpg",
          "caption": "Bullrushes"
        },
        {
          "image": "to-mtrl/IMG_4221.jpg",
          "caption": "Prince Edward Country"
        },
        {
          "image": "to-mtrl/IMG_4222.jpg",
          "caption": "Corn Rows"
        },
        {
          "image": "to-mtrl/IMG_4224.jpg",
          "caption": "Macaulay Mountain Conservation Area"
        },
      ],
    },
    {
      "destination": null,
      "day": 3,
      "date": "August 18, 2019",
      "distance": 44,
      "start": "Picton",
      "end": "Kingston",
      "description": [
        "Awoke from a poor sleep. I could hear alot of road traffic and people were biking by my tent early in the morning. Provincial Parks are the best option for camping in Ontario, but they are too expensive.",
        "Took the ferry in Glenora.",
        "Stayed at a motel in Kingston."
      ],
      "photos": [
        {
          "image": "to-mtrl/IMG_4225.jpg",
          "caption": "Ferry Toward Kingston"
        },
        {
          "image": "to-mtrl/IMG_4226.jpg",
          "caption": "Kingston Seen From the Ferry"
        },
        {
          "image": "to-mtrl/IMG_4228.jpg",
          "caption": "Motelling"
        },
      ],
    },
    {
      "destination": null,
      "day": 4,
      "date": "August 19, 2019",
      "distance": 152,
      "start": "Kingston",
      "end": "Crysler Park Marina",
      "description": [
        "The Southern Ontario/Toronto flavour completely fades past Kingston.",
        "Watched a ferry float into the Gananoque port."
      ],
      "photos": [
        {
          "image": "to-mtrl/IMG_4229.jpg",
          "caption": "Gananoque Entrance"
        },
        {
          "image": "to-mtrl/IMG_4230.jpg",
          "caption": "Gananoque Port"
        },
        {
          "image": "to-mtrl/IMG_4234.jpg",
          "caption": "The St. Lawrence River"
        },
        {
          "image": "to-mtrl/IMG_4235.jpg",
          "caption": "Stone House"
        },
        {
          "image": "to-mtrl/IMG_4238.jpg",
          "caption": "Landon's Bay"
        },
        {
          "image": "to-mtrl/IMG_4243.jpg",
          "caption": "Granite"
        },
        {
          "image": "to-mtrl/IMG_4246.jpg",
          "caption": "Crysler Park Marina"
        },
        {
          "image": "to-mtrl/IMG_4258.jpg",
          "caption": "Riverside"
        },
        {
          "image": "to-mtrl/IMG_4255.jpg",
          "caption": "Sunset"
        },
      ],
    },
    {
      "destination": null,
      "day": 5,
      "date": "August 20, 2019",
      "distance": 66,
      "start": "Crysler Park Marina",
      "end": "Glengarry Campground",
      "description": [
        "My favorite day on the tour because I rode acros Long Sault Parkway, which spans little forested islands on the edge of the St. Lawrence.",
      ],
      "photos": [
        {
          "image": "to-mtrl/IMG_4257.jpg",
          "caption": "Morning Sun"
        },
        {
          "image": "to-mtrl/IMG_4259.jpg",
          "caption": "Fountain"
        },
        {
          "image": "to-mtrl/IMG_4267.jpg",
          "caption": "Long Sault Parkway"
        },
        {
          "image": "to-mtrl/IMG_4275.jpg",
          "caption": "Upper Canada Village"
        },
        {
          "image": "to-mtrl/IMG_4277.jpg",
          "caption": "The Waterfront Trail"
        },
        {
          "image": "to-mtrl/IMG_4281.jpg",
          "caption": "Canal Bridge"
        },
        {
          "image": "to-mtrl/IMG_4282.jpg",
          "caption": "By The Cornwall Port"
        },
        {
          "image": "to-mtrl/IMG_4290.jpg",
          "caption": "Long Dock"
        },
        {
          "image": "to-mtrl/IMG_4291.jpg",
          "caption": "Fish & Chips"
        },
        {
          "image": "to-mtrl/IMG_4292.jpg",
          "caption": "Glengarry Campground"
        },
      ],
    },
    {
      "destination": null,
      "day": 6,
      "date": "August 21, 2019",
      "distance": 103,
      "start": "Glengarry Campground",
      "end": "Montreal",
      "description": [
        "The trail led into Montreal seamlessly. I wasn't pushed to the sides of busy roads and it guided me through nice areas.",
        "I loved riding through Sainte-Anne-de-Bellevue.",
        "After I arrived at my AirBnb in Montreal, I went to three bars.",
        "I prepared to take the train home the next morning."
      ],
      "photos": [
        {
          "image": "to-mtrl/IMG_4301.jpg",
          "caption": "Gazebo"
        },
        {
          "image": "to-mtrl/IMG_4302.jpg",
          "caption": "On The Island"
        },
        {
          "image": "to-mtrl/IMG_4303.jpg",
          "caption": "Spiral Bridge"
        },
        {
          "image": "to-mtrl/IMG_4304.jpg",
          "caption": "Sainte-Anne-de-Bellevue"
        },
        {
          "image": "to-mtrl/IMG_4305.jpg",
          "caption": "A Nice House"
        },
        {
          "image": "to-mtrl/IMG_4307.jpg",
          "caption": "Another Nice House"
        },
        {
          "image": "to-mtrl/IMG_4312.jpg",
          "caption": "Canal"
        },
        {
          "image": "to-mtrl/IMG_4313.jpg",
          "caption": "The City"
        },
      ],
    }
  ],



  "tin-hat": [
    {
      "destination": null,
      "day": 1,
      "date": "August 22, 2020",
      "distance": 12,
      "start": "Courtenay",
      "end": "Tin Hat Cabin",
      "description": [
        "I started the day in Courtenay and reached the trailhead by bike and ferry.",
        "There were signs of hobbits and lots of cool mushrooms growing in the forest.",
        "The trail went through some unfortunate cut blocks and nice forests.",
        "I looped around Lewis Lake.",
        "It was lively at the top. The cabin was full of people cooking and the best spots to pitch a tent were occupied.",
        "There was a long sunset."
      ],
      "photos": [
        {
          "image": "tin-hat/IMG_7668.jpg",
          "caption": ""
        },
        {
          "image": "tin-hat/IMG_7676.jpg",
          "caption": ""
        },
        {
          "image": "tin-hat/IMG_7689.jpg",
          "caption": ""
        },
        {
          "image": "tin-hat/IMG_7721.jpg",
          "caption": ""
        },
        {
          "image": "tin-hat/IMG_7730.jpg",
          "caption": ""
        },
        {
          "image": "tin-hat/IMG_7735.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "August 23, 2020",
      "distance": 6,
      "start": "Tin Hat Cabin",
      "end": "Courtenay",
      "description": [
        "Low clouds floated over the inlet and the ocean in the morning",
        "I hiked back to the road on the more direct route, which appeared to be a service road for the cabin.",
        "I pulled my bike out of the woods, biked by a swampy lake on the logging road toward the Powell River Ferry, got off in Comox, and returned home."
      ],
      "photos": [
        {
          "image": "tin-hat/IMG_7748.jpg",
          "caption": ""
        },
        {
          "image": "tin-hat/IMG_7752.jpg",
          "caption": ""
        },
      ],
    },
  ],



  "mt-albert-edward": [
    {
      "destination": null,
      "day": 1,
      "date": "July 25, 2020",
      "distance": 11.9,
      "start": "Courtenay",
      "end": "Circlet Lake",
      "description": [
        "Biked up Mt. Washington from Courtenay to the trailhead.",
        "Hiked through paradise meadows to Circlet Lake Campground"
      ],
      "photos": [
        {
          "image": "mt-albert-edward/IMG_6639.jpg",
          "caption": ""
        },
        {
          "image": "mt-albert-edward/IMG_6653.jpg",
          "caption": ""
        },
        {
          "image": "mt-albert-edward/IMG_6665.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "July 26, 2020",
      "distance": 26.9,
      "start": "Circlet Lake",
      "end": "Courtenay",
      "description": [
        "Moat Lake was shimmering under the sun.",
        "Mt. Albert Edward has a twin peak.",
        "Wildflowers grew at the peak, adding some magic."
      ],
      "photos": [
        {
          "image": "mt-albert-edward/IMG_6697.jpg",
          "caption": ""
        },
        {
          "image": "mt-albert-edward/IMG_6705.jpg",
          "caption": ""
        },
        {
          "image": "mt-albert-edward/IMG_6717.jpg",
          "caption": ""
        },
        {
          "image": "mt-albert-edward/IMG_6733.jpg",
          "caption": ""
        },
        {
          "image": "mt-albert-edward/IMG_6740.jpg",
          "caption": ""
        },
        {
          "image": "mt-albert-edward/IMG_6735.jpg",
          "caption": ""
        },
      ],
    },
  ],



  "oliver-creek": [
    {
      "destination": null,
      "day": 1,
      "date": "June 15, 2021",
      "distance": 20,
      "start": "Trailhead",
      "end": "Campground",
      "description": [
        "The long hike through the old-growth forest where the Hell's Bells Trail intersects is something special.",
        "There was still snow at the top in the middle of June.",
        "I camped next to a sub-alpine pond."
      ],
      "photos": [
        {
          "image": "oliver-creek/IMG_0257.jpg",
          "caption": ""
        },
        {
          "image": "oliver-creek/IMG_0263.jpg",
          "caption": ""
        },
        {
          "image": "oliver-creek/IMG_0324.jpg",
          "caption": ""
        },
        {
          "image": "oliver-creek/IMG_0325.jpg",
          "caption": ""
        },
        {
          "image": "oliver-creek/IMG_0332.jpg",
          "caption": ""
        },
        {
          "image": "oliver-creek/IMG_0336.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "June 16, 2021",
      "distance": 18,
      "start": "Campground",
      "end": "Trailhead",
      "description": [
        "I hiked back down to the warmth the next morning.",
        "As I approached the base, there were nice views of the Skeena River."
      ],
      "photos": [
        {
          "image": "oliver-creek/IMG_0343.jpg",
          "caption": ""
        },
        {
          "image": "oliver-creek/IMG_0344.jpg",
          "caption": ""
        },
        {
          "image": "oliver-creek/IMG_0350.jpg",
          "caption": ""
        },
      ],
    },
  ],



  "phillips-ridge": [
    {
      "destination": null,
      "day": 1,
      "date": "May 19, 2021",
      "distance": "~22",
      "start": "Arnica Lake Trailhead",
      "end": "Phillips Ridge",
      "description": [
        "I biked from Courtenay to Campbell River, met up with Student Ranger Zoe, and drove to the trailhead in Strathcona Provincial Park.",
        "The hike was very rocky and hard on my sore and sickly body. It was more like a route than a defined trail. It changed the way I thought about hiking--I realized I can hike anywhere.",
        "The ridge was quite exposed to the sky.",
        "We camped in a bowl with an open view of the mountains and a few ponds.",
        "The sunset was nuts."
      ],
      "photos": [
        {
          "image": "phillips-ridge/IMG_7095.jpg",
          "caption": ""
        },
        {
          "image": "phillips-ridge/IMG_7099.jpg",
          "caption": ""
        },
        {
          "image": "phillips-ridge/IMG_7102.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "",
      "distance": "~24",
      "start": "Phillips Ridge",
      "end": "Arnica Lake Trailhead",
      "description": [
        "The next morning, we hiked until we got a good view of Golden Hinde, the tallest mountain on Vancouver Island.",
        "We hiked back to the car quickly and I biked home to Courtenay from Campbell River."
      ],
      "photos": [
        {
          "image": "phillips-ridge/IMG_7112.jpg",
          "caption": ""
        },
        {
          "image": "phillips-ridge/IMG_7119.jpg",
          "caption": ""
        },
        {
          "image": "phillips-ridge/IMG_7123.jpg",
          "caption": ""
        },
      ],
    },
  ],



  "algonquin": [
    {
      "destination": "Western Uplands Trail",
      "day": 1,
      "date": "Dec 31, 2019",
      "distance": 1.6,
      "start": null,
      "end": null,
      "description": [
        "I went snowshoeing in Algonquin Park on New Years Eve Day.",
        "I started my trip late in the afternoon at the Western Uplands Trail parking lot.",
        "I snowshoed a short way up the trail and setup camp on the side of a tall hill.",
        "Night was silent and I could hear snowflakes gently tapping my tent. The sky was clear and the stars were shining."
      ],
      "photos": [
        {
          "image": "algonquin/IMG_4454.jpg",
          "caption": ""
        },
        {
          "image": "algonquin/IMG_4464.jpg",
          "caption": ""
        },
        {
          "image": "algonquin/IMG_4471.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": null,
      "day": 2,
      "date": "Jan 1, 2020",
      "distance": 9.5,
      "start": "Western Uplands Trail",
      "end": "The Minnesing Trail",
      "description": [
        "The next morning, I hiked back to the parking lot.",
        "My intention was to spend the rest of the afternoon and the next day cross-country skiing. However, I forgot to bring my ski boots, so continued to snowshoe instead.",
        "First, I hit the 1km Hardwood Lookout Trail to get an elevated view.",
        "Next, I drove to the Minnesing Trailhead and snowshoed 7kms before setting up camp in the wide open woods."
      ],
      "photos": [
        {
          "image": "algonquin/IMG_4494.jpg",
          "caption": ""
        },
        {
          "image": "algonquin/IMG_4501.jpg",
          "caption": ""
        },
        {
          "image": "algonquin/IMG_4508.jpg",
          "caption": ""
        },
        {
          "image": "algonquin/IMG_4510.jpg",
          "caption": ""
        },
        {
          "image": "algonquin/IMG_4526.jpg",
          "caption": ""
        },
        {
          "image": "algonquin/IMG_4535.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": "The Minnesing Trail",
      "day": 3,
      "date": "Jan 2, 2020",
      "distance": 14.2,
      "start": null,
      "end": null,
      "description": [
        "On the third day, the sun poked through the sky for the first time during the trip.",
        "I was feeling in sync with the cold. I think being cold for an extended period of time was driving up my metabolism rate, making me feel focused and calm.",
        "There were no human tracks in the snow, but there were lots of animal tracks.",
        "I encountered one major animal crossing--there were overlapping tracks of all kinds imprinted in the snow."
      ],
      "photos": [
        {
          "image": "algonquin/IMG_4563.jpg",
          "caption": ""
        },
        {
          "image": "algonquin/IMG_4565.jpg",
          "caption": ""
        },
        {
          "image": "algonquin/IMG_4566.jpg",
          "caption": ""
        },
        {
          "image": "algonquin/the_lake.jpg",
          "caption": ""
        },
        {
          "image": "algonquin/IMG_4608.jpg",
          "caption": ""
        },
        {
          "image": "algonquin/IMG_4611.jpg",
          "caption": ""
        },
      ],
    },
  ],



  "jasper": [
    {
      "destination": "Mt. Robson",
      "day": 1.1,
      "date": "Aug 29, 2021",
      "distance": 13.3,
      "start": null,
      "end": null,
      "description": [
        "When I was moving from Smithers to Canmore, I hiked a few trails along my route.",
        "I stopped at Mt. Robson for a short bike ride on the morning that I was arriving in Jasper.",
      ],
      "photos": [
        {
          "image": "jasper/IMG_0966.jpg",
          "caption": ""
        },
        {
          "image": "jasper/IMG_0969.jpg",
          "caption": ""
        },
        {
          "image": "jasper/IMG_0972.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": "Valley of the Five Lakes",
      "day": 1.2,
      "date": "Aug 29, 2021",
      "distance": 20.2,
      "start": null,
      "end": null,
      "description": [
        "My trip to Jasper was about driving out to a few different areas of the park to explore them by foot and bike.",
        "When I arrived, I checked into my campsite at Whistlers Campground and setup my tent.",
        "Then I spent the afternoon exploring the Valley of the Five Lakes by bike.",
        "I walked around town in the evening.",
        "It was energizing to be around so many people in town and in the valley after spending the summer in fairly remote places."
      ],
      "photos": [
        {
          "image": "jasper/IMG_0979.jpg",
          "caption": ""
        },
        {
          "image": "jasper/IMG_0984.jpg",
          "caption": ""
        },
        {
          "image": "jasper/IMG_0990.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": "Sulpher Skyline Trail and Utopia Mountain",
      "day": 2,
      "date": "Aug 30, 2021",
      "distance": 16.8,
      "start": null,
      "end": null,
      "description": [
        "I started my day by driving to Miette Hotsprings.",
        "I hiked up the Sulpher Skyline Trail. The trail was nothing special but the views from the top absolutely were.",
        "I came back down the trail and hiked up the neighbouring Utopia Mountain.",
        "I didn't climb to the peak of Utopia Mountain because the final stretch required a pretty daring scramble.",
        "When I got back to my campsite, I biked around the trails in the valley."
      ],
      "photos": [
        {
          "image": "jasper/IMG_0997.jpg",
          "caption": ""
        },
        {
          "image": "jasper/IMG_1005.jpg",
          "caption": ""
        },
        {
          "image": "jasper/IMG_1008.jpg",
          "caption": ""
        },
        {
          "image": "jasper/IMG_1019.jpg",
          "caption": ""
        },
        {
          "image": "jasper/IMG_1026.jpg",
          "caption": ""
        },
        {
          "image": "jasper/IMG_1032.jpg",
          "caption": ""
        },
      ],
    },
    {
      "destination": "The Main Attractions",
      "day": 3,
      "date": "Aug 31, 2021",
      "distance": 22.2,
      "start": null,
      "end": null,
      "description": [
        "There were lots of large elk at the campground.",
        "I hit Edith Lake and Maligne Canyon, then continued to hike along the athabasca river.",
      ],
      "photos": [
        {
          "image": "jasper/IMG_1043.jpg",
          "caption": ""
        },
        {
          "image": "jasper/IMG_1044.jpg",
          "caption": ""
        },
        {
          "image": "jasper/IMG_1046.jpg",
          "caption": ""
        },
        {
          "image": "jasper/IMG_1049.jpg",
          "caption": ""
        },
        {
          "image": "jasper/IMG_1051.jpg",
          "caption": ""
        },
        {
          "image": "jasper/IMG_1055.jpg",
          "caption": ""
        },
      ],
    },
  ],



  "": [
    {
      "destination": null,
      "day": 1,
      "date": "May 19, 2021",
      "distance": 0,
      "start": "",
      "end": "",
      "description": [],
      "photos": [
        {
          "image": "",
          "caption": ""
        },
        {
          "image": "",
          "caption": ""
        },
        {
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": []
    },
    {
      "destination": null,
      "day": 2,
      "date": "",
      "distance": 0,
      "start": "",
      "end": "",
      "description": [],
      "photos": [
        {
          "image": "",
          "caption": ""
        },
        {
          "image": "",
          "caption": ""
        },
        {
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": []
    },
    {
      "destination": null,
      "day": 3,
      "date": "",
      "distance": 0,
      "start": "",
      "end": "",
      "description": [],
      "photos": [
        {
          "image": "",
          "caption": ""
        },
        {
          "image": "",
          "caption": ""
        },
        {
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": []
    },
    {
      "destination": null,
      "day": 4,
      "date": "",
      "distance": 0,
      "start": "",
      "end": "",
      "description": [],
      "photos": [
        {
          "image": "",
          "caption": ""
        },
        {
          "image": "",
          "caption": ""
        },
        {
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": []
    }
  ],

}

customElements.define('my-timeline', Timeline);

let sliders = document.querySelectorAll('.slider');
let controls = document.querySelectorAll('#controls');
let previous = document.querySelectorAll('.previous');
let next = document.querySelectorAll('.next');
for (let i = 0; i < sliders.length; i++) {
  tns({
    container: sliders[i],
    autoWidth: true,
    gutter: 12,
    slideBy: 1,
    nav: false,
    speed: 400,
    controlsContainer: controls[i],
    prevButton: previous[i],
    nextButton: next[i],
    rewind: true,
    mouseDrag: true,
    swipeAngle: 30,
    preventScrollOnTouch: "auto",
  });
};