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

      .my-timeline-description {
        padding-left: 20px !important;
        padding-right: 13px !important;
        background: none !important;
        text-align: justify;
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
              <p class="my-timeline-header">
                <b>
                  ${item.day !== null ? 'Day ' + item.day + ' | ' : ''}
                  <span style='font-size:16pt;'> 
                    ${item.distance !== null ? item.distance + ' km' : ''} 
                    ${item.destination !== null ? ' &#8212; ' + item.destination : ''} 
                    ${item.start !== null ? "<span style='font-size: 12pt'>from</span> " + item.start : ''} 
                    ${item.end !== null ? "<span style='font-size: 12pt'>to</span> " + item.end : ''} 
                  </span>
                </b>
              </p>

              <p class="my-timeline-description">${item.description !== null ? item.description : ''}</p>

              <ul class="my-timeline-bullets">
                ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
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
      "description": "I began the ride in Montreal. I crossed the Jacques Cartier Bridge to Longueuil, passed through quiet suburbs, and then farms and orchards in the flat countryside. The hills and forests began east of Granby. The highlight of the day was riding through through the forests and along the water in Yamaska National Park. I finished my day next to a power generator in Stukley-Sud.",
      "bullets": [
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
      "description": "In the morning, I rode through rolling countryside, then bright green forests around Eastman and Mont Orford. I arrived in Sherbrooke around 2pm where I sat on the the riverside in Parc Des Quatre-Pins and looked at the Magog Chutes in the city-center before turning back around. When I was passing back through Magog, I watched the sunset on Lake Memphermagog. I finished my day at the cyclist campground in Mont Orford National Park around midnight.",
      "bullets": [
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
      "description": "I packed up my tent and started riding shortly before the cold rain began. I picked a couple of apples in the orchards along the trail. I arrived home in Montreal in the afternoon.",
      "bullets": [
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
      "description": "I started my ride at a cottage near Mont Blanc. I biked to the trail in Sainte Agathe des Monts and headed north. The section of the trail that runs just north of Mont Tremblant had some of the nicest views. There are a few marshy lakes and open views of mountains from the trail. I ate poutine at La P'tite Patate Chez Léo in Labelle for lunch. At the end of the day, I camped next to a shelter along the trail beside Lac Boyd.",
      "bullets": [
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
      "description": "In the morning, I came across two stray horses out for a stroll on the trail. An old guy walking on the road called something out to me in french and laughed. I just laughed and grunted to pretend I understood him and the dialogue went on for a short while. The french language is open to interpretation. Arguably, it's a mindset. Around noon, I made to Mont Laurier. I ate a box of granola bars, a tube of pringles, and turned back around. I finished the day back at the cottage.",
      "bullets": [
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
      "description": "After a day off, I headed back to the trail from the cottage to ride the south section. My favorite part of the trail is between Val David and Sainte Adele because it goes by lots of lakes and has nice views of granite cliffs and mountains. It is also one of the busiest parts of the trail. I saw people hanging out on the beaches and lakes and lots of cyclists here. Once I made it to Sainte Jerome, I hung out in the park across from Sainte Jerome's Cathedral before turning back around to return to the cottage.",
      "bullets": [
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
      "description": "Getting to Haida Gwaii was a trip in its own right. I drove a few hours from Smithers, which is on the eastern border of the Coast Mountains, to Prudhomme Provincial Park near Prince Rupert to camp for the night. I woke up early to board the ferry in Rupert and arrived in Skidgate Landing eight hours later. I biked north on the ocean-side highway. There were lots of people picking ripe black and thimble berries. I camped near Jungle Beach and watched a long sunset while sitting next to a fire.",
      "bullets": [
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
      "description": "I continued my ride along the ocean to a beach near Misty Meadows Campground in Naikoon Provincial Park. Then, I biked toward the interior of the island. In Port Clements, I looked at the old logging machinery at the museum and bought some tomatoes and candy at Bayview Market. On my way out of town, checked out the Masset Inlet at low tide and the Golden Spruce Trail. I spend the rest of the day riding through the damp, dark forests in the interior to Queen Charlotte where I camped in the forest on the edge of a rocky bay.",
      "bullets": [
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
      "description": "I awoke from an uncomfortably damp and sleepless night in my tent, regretting not returning to a quiet, sandy beach. I spent the day in Queen Charlotte before returning to Skidgate Landing to take the night ferry back to Prince Rupert.",
      "bullets": [
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
      "description": "I started my day at the Kitwanga campground. The Campground Steward said hello to me in the morning and invited me to park my car in his driveway up the road and I accepted his offer. I began my ride by heading north on the Stewart-Cassiar Highway. On the edge of Kitwanga, a coyote watched me bike by from a sideroad. A wierd man in an old rusty Subaru Forester with Rubbermaid bins strapped to the roof and a hitch tray drove by me when I was about 50kms from Kitwanaga. About half an hour later he came back my way, hammered on his breaks about 200 meters in front of me, and said, \"want a drink\" with a fast, nasally voice when I approached his car. I don't even think he could have reached town before he turned around. I got serial killer vibes from him. I turned off of the Stewart-Cassiar Highway and headed west on the Cranberry Connector at Cranberry Junction. I was riding beneath massive trees and mountains the whole way and I noticed the landscape becoming increasingly lively and coastal as I moved west. The sound of birds defined this part of the tour for me because their singing added an auditory depth to the forest. I camped at Dragon Lake Campground.",
      "bullets": [
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
      "description": "I reached the beautiful native town, New Aiyansh shortly after departing my campsite. The town is wrapped in mountains. A little further up the highway, the Nass Valley has wide open views of lava beds from a volcanic erruption that occured around 1700. I rode through the valley and toward Gingolx, the northern-most coastal community in BC. The road from New Aiyansh to Gingolx might be the most beautiful road in Canada. I saw a moose running through dense forest along the side of the road, a grizzly bear eating a bright-red porcupine carcus and lots of living porcupines and black bears with shiny coats. When I reached Gingolx, I hiked up the lookout trail and watched eagles fly above me. I turned back toward the east and camped next to a gravel pit for the night.",
      "bullets": [
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
      "description": "The first part of my third day looked much like my second day. I biked back to the Nass Valley and turned south toward Terrace. This opened up into yet another world. I biked by the Drowned Forest where a river runs through the trees. There were lots of waterfalls. The water reflected many tones of green and blue and grey. The entire area around Rosswood felt like a permanent forestry camp. I camped on a beach on Kitsumkalum Lake where everything looked black, white, and blue beneath the grey sky. It was like being in a sketch.",
      "bullets": [
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
      "description": "On my last day of the tour, I biked to Terrace and ordered a sandwich and cappuccino at Bert's Deli. While waiting for my order, I spoke to another person at Bert's who I would coincidentally met again a few weeks later in Telkwa. This part of BC has lots of land and few people, which creates a unique contrast. I ate my food at the park across the street and watched people walk around the farmers' market in the park for a while, got on my bike, and returned to my car in Kitwanga.",
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
        "Got some salmon from Dockside Fish & Chips before getting on the ferry from Campbell River to Quadra.",
        "Pushed my bike along a trail to Morte Lake where I camped."
      ],
      "photos": [
        {
          "image": "quadra-cortes/IMG_6781.jpg",
          "caption": "Fisherman's Wharf, Campbell River"
        },
        {
          "image": "quadra-cortes/IMG_6787.jpg",
          "caption": "Morte Lake, My Campsite"
        },
        {
          "image": "quadra-cortes/IMG_6791.jpg",
          "caption": "Dusk On The Lake"
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
      "description": null,
      "bullets": [
        "Hiked up beeches mountain which led to big views of the ocean and Sunshine Coast.",
        "Went to Surge Narrows Provincial Park where the ocean gets squeezed between Quadra and it's neighbour, Maurelle Island.",
        "Camped in a lushious opening in the forest."
      ],
      "photos": [
        {
          "image": "quadra-cortes/IMG_6796.jpg",
          "caption": "Moss"
        },
        {
          "image": "quadra-cortes/IMG_6813.jpg",
          "caption": "Beeches Mountain"
        },
        {
          "image": "quadra-cortes/IMG_6815.jpg",
          "caption": "Beeches Mountain"
        },
        {
          "image": "quadra-cortes/IMG_6819.jpg",
          "caption": "A Beach Off Valdez Rd"
        },
        {
          "image": "quadra-cortes/IMG_6824.jpg",
          "caption": "Colourful Rocks"
        },
        {
          "image": "quadra-cortes/IMG_6829.jpg",
          "caption": "Hole In The Rock"
        },
        {
          "image": "quadra-cortes/IMG_6833.jpg",
          "caption": "Lagoon"
        },
        {
          "image": "quadra-cortes/IMG_6834.jpg",
          "caption": "Surge Narrows"
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
      "description": null,
      "bullets": [
        "Took the ferry from Quadra to Cortes.",
        "Sat on white, sandy the beach at Smelt Bay and watched the sea birds.",
        "Walked around the rocky beach and dock in Squirrel Cove and watched sailors replenish their liquor supplies.",
        "Looked at the garden behind Cortes Natural Food Co-op.",
        "Was confused when I found pontoon boats sitting in a pit with cottages on cliffs above them. But I figured out what was going on when the tide came in to fill it up."
      ],
      "photos": [
        {
          "image": "quadra-cortes/IMG_6835.jpg",
          "caption": "Campsite On Quadra"
        },
        {
          "image": "quadra-cortes/IMG_6839.jpg",
          "caption": "Ferry to Cortes"
        },
        {
          "image": "quadra-cortes/IMG_6843.jpg",
          "caption": "Relax"
        },
        {
          "image": "quadra-cortes/IMG_6850.jpg",
          "caption": "Cortes Ferry Terminal"
        },
        {
          "image": "quadra-cortes/IMG_6848.jpg",
          "caption": "Signs"
        },
        {
          "image": "quadra-cortes/IMG_6851.jpg",
          "caption": "Everywhere a Sign"
        },
        {
          "image": "quadra-cortes/IMG_6856.jpg",
          "caption": "Squirrel Cove Pier"
        },
        {
          "image": "quadra-cortes/IMG_6866.jpg",
          "caption": "Squirrel Cove Beach"
        },
        {
          "image": "quadra-cortes/IMG_6861.jpg",
          "caption": "Washed Up Car"
        },
        {
          "image": "quadra-cortes/IMG_6875.jpg",
          "caption": "Free Movies"
        },
        {
          "image": "quadra-cortes/IMG_6877.jpg",
          "caption": "Blind Creek"
        },
        {
          "image": "quadra-cortes/IMG_6883.jpg",
          "caption": "Smelt Bay"
        },
        {
          "image": "quadra-cortes/IMG_6903.jpg",
          "caption": "Bee"
        },
        {
          "image": "quadra-cortes/IMG_6932.jpg",
          "caption": "The Wal-De-Mark"
        },
        {
          "image": "quadra-cortes/IMG_6936.jpg",
          "caption": "Mansons Landing"
        },
        {
          "image": "quadra-cortes/IMG_6948.jpg",
          "caption": "Mansons Landing"
        },
        {
          "image": "quadra-cortes/IMG_6950.jpg",
          "caption": "Mansons Landing"
        },
        {
          "image": "quadra-cortes/IMG_6952.jpg",
          "caption": "Mansons Landing"
        },
        {
          "image": "quadra-cortes/IMG_6954.jpg",
          "caption": "Sand Dollars"
        },
        {
          "image": "quadra-cortes/IMG_6958.jpg",
          "caption": "Mansons Landing Beach"
        },
        {
          "image": "quadra-cortes/IMG_6963.jpg",
          "caption": "Mansons Landing Tide Pool"
        },
        {
          "image": "quadra-cortes/IMG_6969.jpg",
          "caption": "Bluffs"
        },
        {
          "image": "quadra-cortes/IMG_6970.jpg",
          "caption": "Rebecca Spit"
        },
        {
          "image": "quadra-cortes/IMG_6972.jpg",
          "caption": "Silver Lining"
        },
        {
          "image": "quadra-cortes/IMG_6975.jpg",
          "caption": "Financial District, Quadra Island"
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
      "description": null,
      "bullets": [
        "It was a short afternoon trip from my apartment above Delicado's in Courtenay to Comox Lake.",
        "The north side of the lake is lined with rustic cottages that extend out over the water.",
        "The lake is surrounded by vibrant greenery and organe arbutus trees.",
        "I camped on some mossy bluffs overlooking the lake."
      ],
      "photos": [
        {
          "image": "comox-lake/IMG_6272.jpg",
          "caption": "Forest Bathing"
        },
        {
          "image": "comox-lake/IMG_6277.jpg",
          "caption": "Arbutus Tree"
        },
        {
          "image": "comox-lake/IMG_6282.jpg",
          "caption": "Waterfall"
        },
        {
          "image": "comox-lake/IMG_6284.jpg",
          "caption": "Comox Logging Rd"
        },
        {
          "image": "comox-lake/IMG_6289.jpg",
          "caption": "Comox Lake"
        },
        {
          "image": "comox-lake/IMG_6298.jpg",
          "caption": "Comox Lake"
        },
        {
          "image": "comox-lake/IMG_6300.jpg",
          "caption": "Frequency Zero"
        },
        {
          "image": "comox-lake/IMG_6301.jpg",
          "caption": "Arbutus Bark"
        },
        {
          "image": "comox-lake/IMG_6302.jpg",
          "caption": "Comox Lake"
        },
        {
          "image": "comox-lake/IMG_6305.jpg",
          "caption": "Arbutus Tree"
        },
        {
          "image": "comox-lake/IMG_6306.jpg",
          "caption": "Bluffs"
        },
        {
          "image": "comox-lake/IMG_6310.jpg",
          "caption": "Twisted Trees"
        },
        {
          "image": "comox-lake/IMG_6315.jpg",
          "caption": "Flowers & Moss"
        },
        {
          "image": "comox-lake/IMG_6321.jpg",
          "caption": "Parsley Fern"
        },
        {
          "image": "comox-lake/IMG_6324.jpg",
          "caption": "Bluffs"
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
      "description": null,
      "bullets": [
        "The shadow of the mountains across the lake was cast upon those on my side of the lake as the sun rose at 6am.",
        "I tried biking around the lake, thinking it might connect to Cumberland on the otherside, but an old couple who lived on the otherside of the lake told me it didn't."
      ],
      "photos": [
        {
          "image": "comox-lake/IMG_6328.jpg",
          "caption": "Sunrise"
        },
        {
          "image": "comox-lake/IMG_6325.jpg",
          "caption": "Sunrise"
        },
        {
          "image": "comox-lake/IMG_6331.jpg",
          "caption": "Blue Sky"
        },
        {
          "image": "comox-lake/IMG_6333.jpg",
          "caption": "On The Bluffs"
        },
        {
          "image": "comox-lake/IMG_6336.jpg",
          "caption": "Lushious Comox Lake"
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
      "description": null,
      "bullets": [
        "Took the ferry from Comox to Powell River.",
        "On my way down the road to Dinner Rock, I saw a bear with two cubs run through the forest.",
        "Someone left a homemade fire-starter in the pit and I needed no more convincing. It felt like a gift."
      ],
      "photos": [
        {
          "image": "texada/IMG_5777.jpg",
          "caption": "The Ferry to Powell River"
        },
        {
          "image": "texada/IMG_5788.jpg",
          "caption": "Driftwood Bench"
        },
        {
          "image": "texada/IMG_5797.jpg",
          "caption": "Sunshine Coast"
        },
        {
          "image": "texada/IMG_5800.jpg",
          "caption": "Dinner Rock Rec Site"
        },
        {
          "image": "texada/IMG_5802.jpg",
          "caption": "Kelp"
        },
        {
          "image": "texada/IMG_5808.jpg",
          "caption": "Coast"
        },
        {
          "image": "texada/IMG_5832.jpg",
          "caption": "Dinner Rock"
        },
        {
          "image": "texada/IMG_5838.jpg",
          "caption": "Red Plant"
        },
        {
          "image": "texada/IMG_5839.jpg",
          "caption": "Only You"
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
      "description": null,
      "bullets": [
        "Took the ferry from Powell River to Texada Island",
        "Napped on some spongy bluffs and watched an eagle fly above me. It was so quite I could hear the eagle's wings cutting the air.",
        "Camped at Single Beach. The host was really on the ball with an iPad for registation and a tagged truck."
      ],
      "photos": [
        {
          "image": "texada/IMG_5841.jpg",
          "caption": "Powell River Port"
        },
        {
          "image": "texada/IMG_5848.jpg",
          "caption": "Welcome to Texada"
        },
        {
          "image": "texada/IMG_5855.jpg",
          "caption": "Gillies Bay"
        },
        {
          "image": "texada/IMG_5856.jpg",
          "caption": "Gillies Bay"
        },
        {
          "image": "texada/IMG_5858.jpg",
          "caption": "Gillies Bay"
        },
        {
          "image": "texada/IMG_5862.jpg",
          "caption": "Bluffs"
        },
        {
          "image": "texada/IMG_5867.jpg",
          "caption": "Shingle Beach Sign"
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
      "description": null,
      "bullets": [
        "I followed some hydo lines as far south as I could go before the trail became too rough.",
        "There were tiny strawberries growing that tasted unbelievably sweet.",
        "I hiked around Bob's Lake and saw an old horse campsite and a variety of perfectly content mushrooms."
      ],
      "photos": [
        {
          "image": "texada/IMG_5871.jpg",
          "caption": "Shingle Beach"
        },
        {
          "image": "texada/IMG_5878.jpg",
          "caption": "Forest Road"
        },
        {
          "image": "texada/IMG_5885.jpg",
          "caption": "Ocean Views"
        },
        {
          "image": "texada/IMG_5890.jpg",
          "caption": "Foxgloves"
        },
        {
          "image": "texada/IMG_5893.jpg",
          "caption": "Eroded Grader"
        },
        {
          "image": "texada/IMG_5898.jpg",
          "caption": "Anderson Bay Sign"
        },
        {
          "image": "texada/IMG_5902.jpg",
          "caption": "Marsh"
        },
        {
          "image": "texada/IMG_5919.jpg",
          "caption": "Bob's Lake Sign"
        },
        {
          "image": "texada/IMG_5941.jpg",
          "caption": "Star"
        },
        {
          "image": "texada/IMG_5944.jpg",
          "caption": "Bob's Lake Trail"
        },
        {
          "image": "texada/IMG_5960.jpg",
          "caption": "Old Stable"
        },
        {
          "image": "texada/IMG_5963.jpg",
          "caption": "Stable Sign"
        },
        {
          "image": "texada/IMG_5966.jpg",
          "caption": "Inside the Stable"
        },
        {
          "image": "texada/IMG_5974.jpg",
          "caption": "Mushrooms"
        },
        {
          "image": "texada/IMG_5983.jpg",
          "caption": "Mushroom"
        },
        {
          "image": "texada/IMG_5988.jpg",
          "caption": "Pond in the Forest"
        },
        {
          "image": "texada/IMG_5992.jpg",
          "caption": "Mushroom"
        },
        {
          "image": "texada/IMG_5994.jpg",
          "caption": "Mushroom"
        },
        {
          "image": "texada/IMG_6002.jpg",
          "caption": "Orange Mold"
        },
        {
          "image": "texada/IMG_6010.jpg",
          "caption": "Mushroom"
        },
        {
          "image": "texada/IMG_6015.jpg",
          "caption": "Mushroom"
        },
        {
          "image": "texada/IMG_6021.jpg",
          "caption": "Mushroom"
        },
        {
          "image": "texada/IMG_6027.jpg",
          "caption": "Mushroom"
        },
        {
          "image": "texada/IMG_6029.jpg",
          "caption": "Slime Mold"
        },
        {
          "image": "texada/IMG_6032.jpg",
          "caption": "Pinesap"
        },
        {
          "image": "texada/IMG_6040.jpg",
          "caption": "Lake"
        },
        {
          "image": "texada/IMG_6043.jpg",
          "caption": "Forest Road"
        },
        {
          "image": "texada/IMG_6050.jpg",
          "caption": "Road Along a Pond"
        },
        {
          "image": "texada/IMG_6052.jpg",
          "caption": "Road to the Ocean"
        },
        {
          "image": "texada/IMG_6055.jpg",
          "caption": "Ocean views"
        },
        {
          "image": "texada/IMG_6061.jpg",
          "caption": "Forest Road"
        },
        {
          "image": "texada/IMG_6069.jpg",
          "caption": "Forest Road"
        },
        {
          "image": "texada/IMG_6078.jpg",
          "caption": "Mushrooms"
        },
        {
          "image": "texada/IMG_6080.jpg",
          "caption": "Slug"
        },
        {
          "image": "texada/IMG_6085.jpg",
          "caption": "Lichen"
        },
        {
          "image": "texada/IMG_6087.jpg",
          "caption": "Lichens"
        },
        {
          "image": "texada/IMG_6090.jpg",
          "caption": "Strawberry"
        },
        {
          "image": "texada/IMG_6099.jpg",
          "caption": "Bob's Lake"
        },
        {
          "image": "texada/IMG_6103.jpg",
          "caption": "Camping on Bob's Lake"
        },
        {
          "image": "texada/IMG_6106.jpg",
          "caption": "Bob's Lake Sunset"
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
      "description": null,
      "bullets": [
        "The Lake was misty in the morning.",
        "I had a meal on the colourful patio at Mary Mary Cafe in Van Anda before getting on the ferry."
      ],
      "photos": [
        {
          "image": "texada/IMG_6107.jpg",
          "caption": "Bob's Lake"
        },
        {
          "image": "texada/IMG_6108.jpg",
          "caption": "Bob's Lake"
        },
        {
          "image": "texada/IMG_6110.jpg",
          "caption": "Pasture"
        },
        {
          "image": "texada/IMG_6113.jpg",
          "caption": "Mary Mary Cafe"
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
      "description": null,
      "bullets": [
        "Brewster Lake had a real beachy feel, like Tofino does, with it's swooping cedar trees and vibrant greenery."
      ],
      "photos": [
        {
          "image": "brewster-lake/IMG_5557.jpg",
          "caption": "Sunset on Brewster Lake"
        },
        {
          "image": "brewster-lake/IMG_5561.jpg",
          "caption": "Mountain, Forest, and Lake"
        },
        {
          "image": "brewster-lake/IMG_5565.jpg",
          "caption": "My Campsite"
        },
        {
          "image": "brewster-lake/IMG_5570.jpg",
          "caption": "Fire"
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
      "description": null,
      "bullets": [
        "Made a small fire on the shore and watched bats zip in and out of the forest behind me."
      ],
      "photos": [
        {
          "image": "brewster-lake/IMG_5585.jpg",
          "caption": "Brewster Lake By Day"
        },
        {
          "image": "brewster-lake/IMG_5594.jpg",
          "caption": "My Campsite"
        },
        {
          "image": "brewster-lake/IMG_5603.jpg",
          "caption": "Beachy Shoreline"
        },
        {
          "image": "brewster-lake/IMG_5604.jpg",
          "caption": "The Road Out"
        },
        {
          "image": "brewster-lake/IMG_5605.jpg",
          "caption": "Apple Point Rec Site"
        },
        {
          "image": "brewster-lake/IMG_5609.jpg",
          "caption": "Mountain Bluet"
        },
        {
          "image": "brewster-lake/IMG_5610.jpg",
          "caption": "My Bike"
        },
        {
          "image": "brewster-lake/IMG_5618.jpg",
          "caption": "Open Views"
        },
        {
          "image": "brewster-lake/IMG_5619.jpg",
          "caption": "Bend in the Road"
        },
        {
          "image": "brewster-lake/IMG_5628.jpg",
          "caption": "Beatle"
        },
        {
          "image": "brewster-lake/IMG_5631.jpg",
          "caption": "Campbell Lake"
        },
        {
          "image": "brewster-lake/IMG_5634.jpg",
          "caption": "My Campsite"
        },
        {
          "image": "brewster-lake/IMG_5635.jpg",
          "caption": "Burning Clive Cussler"
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
      "description": null,
      "bullets": [
        "I rode home to Courtenay."
      ],
      "photos": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
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
      "description": null,
      "bullets": [
        "I started the day in Courtenay and reached the trailhead by bike and ferry.",
        "There were signs of hobbits and lots of cool mushrooms growing in the forest.",
        "The trail went through some unfortunate cut blocks and nice forests.",
        "I looped around Lewis Lake.",
        "It was lively at the top. The cabin was full of people cooking and the best spots to pitch a tent were occupied.",
        "There was a long sunset."
      ],
      "photos": [
        {
          "image": "tin-hat/IMG_7658.jpg",
          "caption": "Ferry to Powell River"
        },
        {
          "image": "tin-hat/IMG_7659.jpg",
          "caption": "Mural"
        },
        {
          "image": "tin-hat/IMG_7661.jpg",
          "caption": "Inuksuk"
        },
        {
          "image": "tin-hat/IMG_7664.jpg",
          "caption": "Haslam Lake"
        },
        {
          "image": "tin-hat/IMG_7665.jpg",
          "caption": "Haslam Lake"
        },
        {
          "image": "tin-hat/IMG_7668.jpg",
          "caption": "Family Bankeraceae"
        },
        {
          "image": "tin-hat/IMG_7669.jpg",
          "caption": "Onion Earthball"
        },
        {
          "image": "tin-hat/IMG_7672.jpg",
          "caption": "Velvet-footed Pax"
        },
        {
          "image": "tin-hat/IMG_7674.jpg",
          "caption": "Bay Polypore"
        },
        {
          "image": "tin-hat/IMG_7676.jpg",
          "caption": "Hobit Home"
        },
        {
          "image": "tin-hat/IMG_7678.jpg",
          "caption": "Lewis Lake"
        },
        {
          "image": "tin-hat/IMG_7680.jpg",
          "caption": "Genus Hydnellum"
        },
        {
          "image": "tin-hat/IMG_7681.jpg",
          "caption": "Russula Crassotunicata"
        },
        {
          "image": "tin-hat/IMG_7682.jpg",
          "caption": "Brown Funnel Polypore"
        },
        {
          "image": "tin-hat/IMG_7685.jpg",
          "caption": "The Trail"
        },
        {
          "image": "tin-hat/IMG_7686.jpg",
          "caption": "Pacific Golden Chanterelle"
        },
        {
          "image": "tin-hat/IMG_7687.jpg",
          "caption": "Brittlegills"
        },
        {
          "image": "tin-hat/IMG_7688.jpg",
          "caption": "Pycnoporellus Alboluteus"
        },
        {
          "image": "tin-hat/IMG_7690.jpg",
          "caption": "The Trail"
        },
        {
          "image": "tin-hat/IMG_7695.jpg",
          "caption": "Pine White Butterfly"
        },
        {
          "image": "tin-hat/IMG_7696.jpg",
          "caption": "Turkey-Tail"
        },
        {
          "image": "tin-hat/IMG_7699.jpg",
          "caption": "Coral Fungus"
        },
        {
          "image": "tin-hat/IMG_7700.jpg",
          "caption": "Mushroom"
        },
        {
          "image": "tin-hat/IMG_7707.jpg",
          "caption": "Flowers"
        },
        {
          "image": "tin-hat/IMG_7713.jpg",
          "caption": "Lakes"
        },
        {
          "image": "tin-hat/IMG_7714.jpg",
          "caption": "Mountain Slope"
        },
        {
          "image": "tin-hat/IMG_7715.jpg",
          "caption": "Cut Blocks"
        },
        {
          "image": "tin-hat/IMG_7721.jpg",
          "caption": "Tin Hat Cabin"
        },
        {
          "image": "tin-hat/IMG_7727.jpg",
          "caption": "Weather Station"
        },
        {
          "image": "tin-hat/IMG_7728.jpg",
          "caption": "Elf"
        },
        {
          "image": "tin-hat/IMG_7726.jpg",
          "caption": "The Peak"
        },
        {
          "image": "tin-hat/IMG_7732.jpg",
          "caption": "Sunset on The Peak"
        },
        {
          "image": "tin-hat/IMG_7740.jpg",
          "caption": "Sunset"
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
      "description": null,
      "bullets": [
        "Low clouds floated over the inlet and the ocean in the morning",
        "I hiked back to the road on the more direct route, which appeared to be a service road for the cabin.",
        "I pulled my bike out of the woods, biked by a swampy lake on the logging road toward the Powell River Ferry, got off in Comox, and returned home."
      ],
      "photos": [
        {
          "image": "tin-hat/IMG_7748.jpg",
          "caption": "Clouds Over Haslam Lake"
        },
        {
          "image": "tin-hat/IMG_7750.jpg",
          "caption": "Duck Lake"
        },
        {
          "image": "tin-hat/IMG_7752.jpg",
          "caption": "Duck Lake"
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
      "description": null,
      "bullets": [
        "Biked up Mt. Washington from Courtenay to the trailhead.",
        "Hiked through paradise meadows to Circlet Lake Campground"
      ],
      "photos": [
        {
          "image": "mt-albert-edward/IMG_6622.jpg",
          "caption": "Meadow"
        },
        {
          "image": "mt-albert-edward/IMG_6636.jpg",
          "caption": "Pink Mountain Heather"
        },
        {
          "image": "mt-albert-edward/IMG_6639.jpg",
          "caption": "Ranger Cabin"
        },
        {
          "image": "mt-albert-edward/IMG_6644.jpg",
          "caption": "Meadow"
        },
        {
          "image": "mt-albert-edward/IMG_6649.jpg",
          "caption": "Plateau"
        },
        {
          "image": "mt-albert-edward/IMG_6652.jpg",
          "caption": "Pond"
        },
        {
          "image": "mt-albert-edward/IMG_6653.jpg",
          "caption": "Plateau"
        },
        {
          "image": "mt-albert-edward/IMG_6657.jpg",
          "caption": "Subalpine Daisy"
        },
        {
          "image": "mt-albert-edward/IMG_6659.jpg",
          "caption": "Boardwalk Through Meadow"
        },
        {
          "image": "mt-albert-edward/IMG_6665.jpg",
          "caption": "Circlet Lake"
        },
        {
          "image": "mt-albert-edward/IMG_6669.jpg",
          "caption": "Nighttime On Circlet Lake"
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
      "description": null,
      "bullets": [
        "Moat Lake was shimmering under the sun.",
        "Mt. Albert Edward has a twin peak.",
        "Wildflowers grew at the peak, adding some magic."
      ],
      "photos": [
        {
          "image": "mt-albert-edward/IMG_6672.jpg",
          "caption": "Looking Back At Circlet Lake"
        },
        {
          "image": "mt-albert-edward/IMG_6677.jpg",
          "caption": "Castlecrag Mountain"
        },
        {
          "image": "mt-albert-edward/IMG_6682.jpg",
          "caption": "Subalpine Pond"
        },
        {
          "image": "mt-albert-edward/IMG_6687.jpg",
          "caption": "Pond"
        },
        {
          "image": "mt-albert-edward/IMG_6697.jpg",
          "caption": "Moat Lake"
        },
        {
          "image": "mt-albert-edward/IMG_6708.jpg",
          "caption": "Mt. Albert Edward"
        },
        {
          "image": "mt-albert-edward/IMG_6713.jpg",
          "caption": "Up"
        },
        {
          "image": "mt-albert-edward/IMG_6715.jpg",
          "caption": "Up Some More"
        },
        {
          "image": "mt-albert-edward/IMG_6717.jpg",
          "caption": "Up A Little More"
        },
        {
          "image": "mt-albert-edward/IMG_6719.jpg",
          "caption": "Almost There"
        },
        {
          "image": "mt-albert-edward/IMG_6721.jpg",
          "caption": "Flowers"
        },
        {
          "image": "mt-albert-edward/IMG_6727.jpg",
          "caption": "Gem Lake"
        },
        {
          "image": "mt-albert-edward/IMG_6728.jpg",
          "caption": "Top of the Ridge"
        },
        {
          "image": "mt-albert-edward/IMG_6743.jpg",
          "caption": "To The Peak"
        },
        {
          "image": "mt-albert-edward/IMG_6732.jpg",
          "caption": "Wildflowers"
        },
        {
          "image": "mt-albert-edward/IMG_6733.jpg",
          "caption": "Valley"
        },
        {
          "image": "mt-albert-edward/IMG_6734.jpg",
          "caption": "Many Mountains"
        },
        {
          "image": "mt-albert-edward/IMG_6735.jpg",
          "caption": "Mullein"
        },
        {
          "image": "mt-albert-edward/IMG_6740.jpg",
          "caption": "Wildflower Garden"
        },
        {
          "image": "mt-albert-edward/IMG_6748.jpg",
          "caption": "Back Through The Forest"
        },
        {
          "image": "mt-albert-edward/IMG_6750.jpg",
          "caption": "Back Through The Meadows"
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
      "description": null,
      "bullets": [
        "The long hike through the old-growth forest where the Hell's Bells Trail intersects is something special.",
        "There was still snow at the top in the middle of June.",
        "I camped next to a sub-alpine pond."
      ],
      "photos": [
        {
          "image": "oliver-creek/IMG_0254.jpg",
          "caption": "Brown Cup"
        },
        {
          "image": "oliver-creek/IMG_0257.jpg",
          "caption": "Trapper's Cabin"
        },
        {
          "image": "oliver-creek/IMG_0262.jpg",
          "caption": "Trapper's Cabin"
        },
        {
          "image": "oliver-creek/IMG_0263.jpg",
          "caption": "Tall Trees"
        },
        {
          "image": "oliver-creek/IMG_0269.jpg",
          "caption": "Creek"
        },
        {
          "image": "oliver-creek/IMG_0280.jpg",
          "caption": "Melting Snow"
        },
        {
          "image": "oliver-creek/IMG_0285.jpg",
          "caption": "Rock Slide"
        },
        {
          "image": "oliver-creek/IMG_0293.jpg",
          "caption": "Creek"
        },
        {
          "image": "oliver-creek/IMG_0295.jpg",
          "caption": "Pond"
        },
        {
          "image": "oliver-creek/IMG_0296.jpg",
          "caption": "Butterbur"
        },
        {
          "image": "oliver-creek/IMG_0307.jpg",
          "caption": "Mountain Hemlock"
        },
        {
          "image": "oliver-creek/IMG_0308.jpg",
          "caption": "Mountain Hemlock"
        },
        {
          "image": "oliver-creek/IMG_0317.jpg",
          "caption": "Subalpine Pond"
        },
        {
          "image": "oliver-creek/IMG_0322.jpg",
          "caption": "Subalpine Pond"
        },
        {
          "image": "oliver-creek/IMG_0324.jpg",
          "caption": "My Tent"
        },
        {
          "image": "oliver-creek/IMG_0325.jpg",
          "caption": "Waterfall"
        },
        {
          "image": "oliver-creek/IMG_0330.jpg",
          "caption": "Snowy Peak"
        },
        {
          "image": "oliver-creek/IMG_0342.jpg",
          "caption": "Mountain View"
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
      "description": null,
      "bullets": [
        "I hiked back down to the warmth the next morning.",
        "As I approached the base, there were nice views of the Skeena River."
      ],
      "photos": [
        {
          "image": "oliver-creek/IMG_0343.jpg",
          "caption": "Back to Summer"
        },
        {
          "image": "oliver-creek/IMG_0344.jpg",
          "caption": "Lake"
        },
        {
          "image": "oliver-creek/IMG_0350.jpg",
          "caption": "The Skeena River"
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
      "description": null,
      "bullets": [
        "I biked from Courtenay to Campbell River, met up with Student Ranger Zoe, and drove to the trailhead in Strathcona Provincial Park.",
        "The hike was very rocky and hard on my sore and sickly body. It was more like a route than a defined trail. It changed the way I thought about hiking--I realized I can hike anywhere.",
        "The ridge was quite exposed to the sky.",
        "We camped in a bowl with an open view of the mountains and a few ponds.",
        "The sunset was nuts."
      ],
      "photos": [
        {
          "image": "phillips-ridge/IMG_7095.jpg",
          "caption": "Up The Ridge"
        },
        {
          "image": "phillips-ridge/IMG_7097.jpg",
          "caption": "On The Ridge"
        },
        {
          "image": "phillips-ridge/IMG_7098.jpg",
          "caption": "In The Mountains"
        },
        {
          "image": "phillips-ridge/IMG_7099.jpg",
          "caption": "Trees"
        },
        {
          "image": "phillips-ridge/IMG_7101.jpg",
          "caption": "Sitting"
        },
        {
          "image": "phillips-ridge/IMG_7102.jpg",
          "caption": "Sunset"
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
      "description": null,
      "bullets": [
        "The next morning, we hiked until we got a good view of Golden Hinde, the tallest mountain on Vancouver Island.",
        "We hiked back to the car quickly and I biked home to Courtenay from Campbell River."
      ],
      "photos": [
        {
          "image": "phillips-ridge/IMG_7112.jpg",
          "caption": "A Big Place"
        },
        {
          "image": "phillips-ridge/IMG_7117.jpg",
          "caption": "Golden Hinde"
        },
        {
          "image": "phillips-ridge/IMG_7116.jpg",
          "caption": "Zoe"
        },
        {
          "image": "phillips-ridge/IMG_7119.jpg",
          "caption": "Me"
        },
        {
          "image": "phillips-ridge/IMG_7123.jpg",
          "caption": "Wildflowers"
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
      "description": null,
      "bullets": [
        "I went snowshoeing in Algonquin Park on New Years Eve Day.",
        "I started my trip late in the afternoon at the Western Uplands Trail parking lot.",
        "I snowshoed a short way up the trail and setup camp on the side of a tall hill.",
        "Night was silent and I could hear snowflakes gently tapping my tent. The sky was clear and the stars were shining."
      ],
      "photos": [
        {
          "image": "algonquin/IMG_4453.jpg",
          "caption": "Western Highlands Trailhead"
        },
        {
          "image": "algonquin/IMG_4454.jpg",
          "caption": "Bridge"
        },
        {
          "image": "algonquin/IMG_4464.jpg",
          "caption": "My Campsite"
        },
        {
          "image": "algonquin/IMG_4466.jpg",
          "caption": "Fire"
        },
        {
          "image": "algonquin/IMG_4471.jpg",
          "caption": "Table"
        },
        {
          "image": "algonquin/IMG_4476.jpg",
          "caption": "Night"
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
      "description": null,
      "bullets": [
        "The next morning, I hiked back to the parking lot.",
        "My intention was to spend the rest of the afternoon and the next day cross-country skiing. However, I forgot to bring my ski boots, so continued to snowshoe instead.",
        "First, I hit the 1km Hardwood Lookout Trail to get an elevated view.",
        "Next, I drove to the Minnesing Trailhead and snowshoed 7kms before setting up camp in the wide open woods."
      ],
      "photos": [
        {
          "image": "algonquin/IMG_4483.jpg",
          "caption": "Coffee"
        },
        {
          "image": "algonquin/IMG_4493.jpg",
          "caption": "Sled Tracks"
        },
        {
          "image": "algonquin/IMG_4494.jpg",
          "caption": "Sled"
        },
        {
          "image": "algonquin/IMG_4496.jpg",
          "caption": "The Woods"
        },
        {
          "image": "algonquin/IMG_4501.jpg",
          "caption": "Moss"
        },
        {
          "image": "algonquin/IMG_4502.jpg",
          "caption": "Back to the Car"
        },
        {
          "image": "algonquin/IMG_4508.jpg",
          "caption": "Tall Rock"
        },
        {
          "image": "algonquin/IMG_4510.jpg",
          "caption": "Hardwood Lookout"
        },
        {
          "image": "algonquin/IMG_4518.jpg",
          "caption": "Pine Branch"
        },
        {
          "image": "algonquin/IMG_4521.jpg",
          "caption": "Cross Trails"
        },
        {
          "image": "algonquin/IMG_4526.jpg",
          "caption": "Dead Plant"
        },
        {
          "image": "algonquin/IMG_4535.jpg",
          "caption": "Mushroom"
        },
        {
          "image": "algonquin/IMG_4538.jpg",
          "caption": "Mushrooms"
        },
        {
          "image": "algonquin/IMG_4539.jpg",
          "caption": "Snowy Mushrooms"
        },
        {
          "image": "algonquin/IMG_4550.jpg",
          "caption": "Dinner"
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
      "description": null,
      "bullets": [
        "On the third day, the sun poked through the sky for the first time during the trip.",
        "I was feeling in sync with the cold. I think being cold for an extended period of time was driving up my metabolism rate, making me feel focused and calm.",
        "There were no human tracks in the snow, but there were lots of animal tracks.",
        "I encountered one major animal crossing--there were overlapping tracks of all kinds imprinted in the snow."
      ],
      "photos": [
        {
          "image": "algonquin/IMG_4560.jpg",
          "caption": "My Campsite"
        },
        {
          "image": "algonquin/IMG_4563.jpg",
          "caption": "Sunshine"
        },
        {
          "image": "algonquin/IMG_4564.jpg",
          "caption": "Tracks"
        },
        {
          "image": "algonquin/IMG_4565.jpg",
          "caption": "Canis Bay Portage Sign"
        },
        {
          "image": "algonquin/IMG_4566.jpg",
          "caption": "Rodent Tracks"
        },
        {
          "image": "algonquin/IMG_4571.jpg",
          "caption": "Root Bed"
        },
        {
          "image": "algonquin/IMG_4572.jpg",
          "caption": "Leaf"
        },
        {
          "image": "algonquin/IMG_4575.jpg",
          "caption": "Old Outhouse"
        },
        {
          "image": "algonquin/IMG_4582.jpg",
          "caption": "Ice"
        },
        {
          "image": "algonquin/IMG_4586.jpg",
          "caption": "The Trail"
        },
        {
          "image": "algonquin/IMG_4594.jpg",
          "caption": "Polly Lake"
        },
        {
          "image": "algonquin/IMG_4607.jpg",
          "caption": "Leaf"
        },        
        {
          "image": "algonquin/IMG_4608.jpg",
          "caption": "Leaves"
        },
        {
          "image": "algonquin/IMG_4611.jpg",
          "caption": "Branches"
        },   
        {
          "image": "algonquin/IMG_4616.jpg",
          "caption": "Canis Bay Lake Portage Sign"
        },    
        {
          "image": "algonquin/IMG_4669.jpg",
          "caption": "Icy Branch"
        },   
        {
          "image": "algonquin/IMG_4694.jpg",
          "caption": "Cabin"
        },  
        {
          "image": "algonquin/IMG_4696.jpg",
          "caption": "Parking Sign"
        },  
        {
          "image": "algonquin/IMG_4698.jpg",
          "caption": "Home Stretch"
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
      "description": null,
      "bullets": [
        "When I was moving from Smithers to Canmore, I hiked a few trails along my route.",
        "I stopped at Mt. Robson for a short bike ride on the morning that I was arriving in Jasper.",
      ],
      "photos": [
        {
          "image": "jasper/IMG_0966.jpg",
          "caption": "Park Office"
        },
        {
          "image": "jasper/IMG_0969.jpg",
          "caption": "Robson River"
        },
        {
          "image": "jasper/IMG_0970.jpg",
          "caption": "Robson River"
        },
        {
          "image": "jasper/IMG_0972.jpg",
          "caption": "Berg Lake"
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
      "description": null,
      "bullets": [
        "My trip to Jasper was about driving out to a few different areas of the park to explore them by foot and bike.",
        "When I arrived, I checked into my campsite at Whistlers Campground and setup my tent.",
        "Then I spent the afternoon exploring the Valley of the Five Lakes by bike.",
        "I walked around town in the evening.",
        "It was energizing to be around so many people in town and in the valley after spending the summer in fairly remote places."
      ],
      "photos": [
        {
          "image": "jasper/IMG_0977.jpg",
          "caption": "Valley of the Five Lakes"
        },
        {
          "image": "jasper/IMG_0978.jpg",
          "caption": "Valley of the Five Lakes"
        },
        {
          "image": "jasper/IMG_0979.jpg",
          "caption": "Valley of the Five Lakes"
        },
        {
          "image": "jasper/IMG_0980.jpg",
          "caption": "Green Pond"
        },
        {
          "image": "jasper/IMG_0982.jpg",
          "caption": "Green Pond"
        },
        {
          "image": "jasper/IMG_0984.jpg",
          "caption": "Mushroom"
        },
        {
          "image": "jasper/IMG_0985.jpg",
          "caption": "Mushrooms"
        },
        {
          "image": "jasper/IMG_0990.jpg",
          "caption": "First Lake"
        },
        {
          "image": "jasper/IMG_0991.jpg",
          "caption": "Mountains Across The Valley"
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
      "description": null,
      "bullets": [
        "I started my day by driving to Miette Hotsprings.",
        "I hiked up the Sulpher Skyline Trail. The trail was nothing special but the views from the top absolutely were.",
        "I came back down the trail and hiked up the neighbouring Utopia Mountain.",
        "I didn't climb to the peak of Utopia Mountain because the final stretch required a pretty daring scramble.",
        "When I got back to my campsite, I biked around the trails in the valley."
      ],
      "photos": [
        {
          "image": "jasper/IMG_0996.jpg",
          "caption": "Valley"
        },
        {
          "image": "jasper/IMG_0997.jpg",
          "caption": "Ridge on The Sulpher Skyline Trail"
        },
        {
          "image": "jasper/IMG_1005.jpg",
          "caption": "Sulpher Skyline"
        },
        {
          "image": "jasper/IMG_1010.jpg",
          "caption": "Mushroom bouquet"
        },
        {
          "image": "jasper/IMG_1011.jpg",
          "caption": "Mushroom"
        },
        {
          "image": "jasper/IMG_1014.jpg",
          "caption": "Mountain Goats"
        },
        {
          "image": "jasper/IMG_1016.jpg",
          "caption": "Fiddle River"
        },
        {
          "image": "jasper/IMG_1017.jpg",
          "caption": "Mushrooms"
        },
        {
          "image": "jasper/IMG_1019.jpg",
          "caption": "Utopia Mountain"
        },
        {
          "image": "jasper/IMG_1021.jpg",
          "caption": "Fiddle River Valley"
        },
        {
          "image": "jasper/IMG_1025.jpg",
          "caption": "Blue Sky"
        },
        {
          "image": "jasper/IMG_1026.jpg",
          "caption": "Dry Mountainsides"
        },
        {
          "image": "jasper/IMG_1032.jpg",
          "caption": "Mountain Goat Skull"
        },
        {
          "image": "jasper/IMG_1034.jpg",
          "caption": "Fiddler River"
        },
        {
          "image": "jasper/IMG_1039.jpg",
          "caption": "Golden Mushroom"
        },
        {
          "image": "jasper/IMG_1040.jpg",
          "caption": "Fiddle River"
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
      "description": null,
      "bullets": [
        "There were lots of large elk at the campground.",
        "I hit Edith Lake and Maligne Canyon, then continued to hike along the Athabasca River.",
      ],
      "photos": [
        {
          "image": "jasper/IMG_1043.jpg",
          "caption": "Elk"
        },
        {
          "image": "jasper/IMG_1044.jpg",
          "caption": "Maligne Canyon"
        },
        {
          "image": "jasper/IMG_1045.jpg",
          "caption": "Maligne Canyon"
        },
        {
          "image": "jasper/IMG_1046.jpg",
          "caption": "Cascading Waterfall"
        },
        {
          "image": "jasper/IMG_1049.jpg",
          "caption": "Athabasca River"
        },
        {
          "image": "jasper/IMG_1050.jpg",
          "caption": "Athabasca River"
        },
        {
          "image": "jasper/IMG_1051.jpg",
          "caption": "Athabasca River"
        },
        {
          "image": "jasper/IMG_1054.jpg",
          "caption": "Athabasca River"
        },
        {
          "image": "jasper/IMG_1055.jpg",
          "caption": "Droplets on Pine Needles"
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
      "description": null,
      "bullets": [],
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
      "description": null,
      "bullets": [],
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
      "description": null,
      "bullets": [],
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
      "description": null,
      "bullets": [],
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