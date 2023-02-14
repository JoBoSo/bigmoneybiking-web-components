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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "mtrl-sherbrooke/IMG_2704.jpg",
        "mtrl-sherbrooke/IMG_2709.jpg",
        "mtrl-sherbrooke/IMG_2731.jpg"
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "mtrl-sherbrooke/IMG_2744.jpg",
        "mtrl-sherbrooke/IMG_2755.jpg",
        "mtrl-sherbrooke/IMG_2775.jpg"
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "mtrl-sherbrooke/IMG_2789.jpg",
        "mtrl-sherbrooke/IMG_2795.jpg",
        "mtrl-sherbrooke/IMG_2805.jpg"
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "ptit-train/IMG_2537.jpg",
        "ptit-train/poutine.jpg",
        "ptit-train/IMG_2538.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "ptit-train/IMG_2550.jpg",
        "ptit-train/IMG_2551.jpg",
        "ptit-train/IMG_2553.jpg"
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "ptit-train/river.jpg",
        "ptit-train/church.jpg",
        "ptit-train/IMG_2577.jpg",
      ]
    }
  ],



  "haida-gwaii": [
    {
      "destination": null,
      "day": 1,
      "date": "August 12, 2021",
      "distance": 24,
      "start": "Skidgate Landing",
      "end": "a beach up the island",
      "description": [
        "Took the eight hour ferry from Prince Rupert to Graham Island.",
        "Arrived at Skidgate Landing late in the afternoon.",
        "Explored the little town hoping to find some good food, but everything was closed for covid.",
        "Biked North on the ocean-side highway and passed lots people picking ripe black and thimble berries.",
        "Camped on the beach about 15 km south of Tlell and watched a long, soft-pink sunset while sitting beside a fire."
      ],
      "photos": [
        {
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "haida-gwaii/IMG_0837.jpg",
        "haida-gwaii/IMG_0826.jpg",
        "haida-gwaii/IMG_0834.jpg",
      ]
    },
    {
      "destination": null,
      "day": 2,
      "date": "August 13, 2021",
      "distance": 153,
      "start": "the beach",
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "haida-gwaii/IMG_0847.jpg",
        "haida-gwaii/IMG_0857.jpg",
        "haida-gwaii/IMG_0860.jpg",

      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "haida-gwaii/IMG_0869.jpg",
        "haida-gwaii/IMG_0866.jpg",
        "haida-gwaii/IMG_0868.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "nass-valley/IMG_9673.jpg",
        "nass-valley/IMG_9651.jpg",
        "nass-valley/IMG_9658.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "nass-valley/IMG_9714.jpg",
        "nass-valley/IMG_9750.jpg",
        "nass-valley/IMG_9753.jpg",
        "nass-valley/IMG_9766.jpg",
        "nass-valley/IMG_9787.jpg",
        "nass-valley/IMG_9819.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "nass-valley/IMG_9823.jpg",
        "nass-valley/IMG_0083.jpg",
        "nass-valley/IMG_0102.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "nass-valley/IMG_0117.jpg"
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "babine-lake/IMG_9497.jpg",
        "babine-lake/IMG_9504.jpg",
        "babine-lake/IMG_9506.jpg",
        "babine-lake/IMG_9511.jpg",
        "babine-lake/IMG_9517.jpg",
        "babine-lake/IMG_9525.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "babine-lake/IMG_9527.jpg",
        "babine-lake/IMG_9529.jpg",
        "babine-lake/IMG_9533.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "downie-creek/IMG_8490.jpg",
        "downie-creek/IMG_8491.jpg",
        "downie-creek/IMG_8500.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "downie-creek/IMG_8521.jpg",
        "downie-creek/IMG_8602.jpg",
        "downie-creek/IMG_8560.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "downie-creek/IMG_8634.jpg",
        "downie-creek/IMG_8647.jpg",
        "downie-creek/IMG_8648.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "begbie-falls/IMG_8346.jpg",
        "begbie-falls/IMG_3717.jpg",
        "begbie-falls/IMG_3712.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "begbie-falls/IMG_8377.jpg",
        "begbie-falls/IMG_8374.jpg",
        "begbie-falls/IMG_8371.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "quadra-cortes/IMG_6782.jpg",
        "quadra-cortes/IMG_6819.jpg",
        "quadra-cortes/IMG_6791.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "quadra-cortes/IMG_6813.jpg",
        "quadra-cortes/IMG_6834.jpg",
        "quadra-cortes/IMG_6835.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "quadra-cortes/IMG_6856.jpg",
        "quadra-cortes/IMG_6848.jpg",
        "quadra-cortes/IMG_6861.jpg",
        "quadra-cortes/IMG_6904.jpg",
        "quadra-cortes/IMG_6950.jpg",
        "quadra-cortes/IMG_6954.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "comox-lake/IMG_6300.jpg",
        "comox-lake/IMG_6302.jpg",
        "comox-lake/IMG_6310.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "comox-lake/IMG_6325.jpg",
        "comox-lake/IMG_6331.jpg",
        "comox-lake/IMG_6336.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "texada/IMG_5788.jpg",
        "texada/IMG_5800.jpg",
        "texada/IMG_5797.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "texada/IMG_5848.jpg",
        "texada/IMG_5862.jpg",
        "texada/IMG_5871.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "texada/IMG_6103.jpg",
        "texada/IMG_5893.jpg",
        "texada/IMG_5941.jpg",
        "texada/IMG_6011.jpg",
        "texada/IMG_5974.jpg",
        "texada/IMG_6021.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "texada/IMG_6107.jpg",
        "texada/IMG_6110.jpg",
        "texada/IMG_6113.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "brewster-lake/IMG_5594.jpg",
        "brewster-lake/IMG_5557.jpg",
        "brewster-lake/IMG_5570.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "brewster-lake/IMG_5585.jpg",
        "brewster-lake/IMG_5603.jpg",
        "brewster-lake/IMG_5631.jpg",

      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "brewster-lake/IMG_5610.jpg",
        "brewster-lake/IMG_5628.jpg",
        "brewster-lake/IMG_5619.jpg",
      ]
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
          "caption": ""
        },
        {
          "image": "san-josef-bay/IMG_5236.jpg",
          "caption": ""
        },
        {
          "image": "san-josef-bay/IMG_5243.jpg",
          "caption": ""
        },
        {
          "image": "san-josef-bay/IMG_5245.jpg",
          "caption": ""
        },
        {
          "image": "san-josef-bay/IMG_5254.jpg",
          "caption": ""
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
          "image": "san-josef-bay/IMG_5296.jpg",
          "caption": ""
        },
        {
          "image": "san-josef-bay/IMG_5300.jpg",
          "caption": ""
        },
        {
        "image": "san-josef-bay/IMG_5303.jpg",
        "caption": ""
        },
        {
          "image": "san-josef-bay/IMG_5307.jpg",
          "caption": ""
        },
        {
          "image": "san-josef-bay/IMG_5309.jpg",
          "caption": ""
        },
        {
          "image": "san-josef-bay/IMG_5313.jpg",
          "caption": ""
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
          "image": "san-josef-bay/IMG_5333.jpg",
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
          "image": "san-josef-bay/IMG_5352.jpg",
          "caption": ""
        },
        {
          "image": "san-josef-bay/IMG_5353.jpg",
          "caption": ""
        },
        {
          "image": "san-josef-bay/IMG_5363.jpg",
          "caption": ""
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
          "image": "san-josef-bay/IMG_5387.jpg",
          "caption": ""
        },
        {
          "image": "san-josef-bay/IMG_5400.jpg",
          "caption": ""
        },
        {
          "image": "san-josef-bay/IMG_5406.jpg",
          "caption": ""
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
          "image": "san-josef-bay/IMG_5469.jpg",
          "caption": ""
        },
        {
          "image": "san-josef-bay/IMG_5472.jpg",
          "caption": ""
        },
        {
          "image": "san-josef-bay/IMG_5473.jpg",
          "caption": ""
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
          "caption": ""
        },
        {
          "image": "san-josef-bay/IMG_5497.jpg",
          "caption": ""
        },
        {
          "image": "san-josef-bay/IMG_5515.jpg",
          "caption": ""
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
          "caption": "Approaching Port Alberni"
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "tin-hat/IMG_7668.jpg",
        "tin-hat/IMG_7676.jpg",
        "tin-hat/IMG_7689.jpg",
        "tin-hat/IMG_7721.jpg",
        "tin-hat/IMG_7730.jpg",
        "tin-hat/IMG_7735.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "tin-hat/IMG_7748.jpg",
        "tin-hat/IMG_7752.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "mt-albert-edward/IMG_6639.jpg",
        "mt-albert-edward/IMG_6653.jpg",
        "mt-albert-edward/IMG_6665.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "mt-albert-edward/IMG_6697.jpg",
        "mt-albert-edward/IMG_6705.jpg",
        "mt-albert-edward/IMG_6717.jpg",
        "mt-albert-edward/IMG_6733.jpg",
        "mt-albert-edward/IMG_6740.jpg",
        "mt-albert-edward/IMG_6735.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "oliver-creek/IMG_0257.jpg",
        "oliver-creek/IMG_0263.jpg",
        "oliver-creek/IMG_0324.jpg",
        "oliver-creek/IMG_0325.jpg",
        "oliver-creek/IMG_0332.jpg",
        "oliver-creek/IMG_0336.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "oliver-creek/IMG_0343.jpg",
        "oliver-creek/IMG_0344.jpg",
        "oliver-creek/IMG_0350.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "phillips-ridge/IMG_7095.jpg",
        "phillips-ridge/IMG_7099.jpg",
        "phillips-ridge/IMG_7102.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "phillips-ridge/IMG_7112.jpg",
        "phillips-ridge/IMG_7119.jpg",
        "phillips-ridge/IMG_7123.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "algonquin/IMG_4454.jpg",
        "algonquin/IMG_4464.jpg",
        "algonquin/IMG_4471.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "algonquin/IMG_4494.jpg",
        "algonquin/IMG_4501.jpg",
        "algonquin/IMG_4508.jpg",
        "algonquin/IMG_4510.jpg",
        "algonquin/IMG_4526.jpg",
        "algonquin/IMG_4535.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "algonquin/IMG_4563.jpg",
        "algonquin/IMG_4565.jpg",
        "algonquin/IMG_4566.jpg",
        "algonquin/the_lake.jpg",
        "algonquin/IMG_4608.jpg",
        "algonquin/IMG_4611.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "jasper/IMG_0966.jpg",
        "jasper/IMG_0969.jpg",
        "jasper/IMG_0972.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "jasper/IMG_0979.jpg",
        "jasper/IMG_0984.jpg",
        "jasper/IMG_0990.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "jasper/IMG_0997.jpg",
        "jasper/IMG_1005.jpg",
        "jasper/IMG_1008.jpg",,
        "jasper/IMG_1019.jpg",
        "jasper/IMG_1026.jpg",
        "jasper/IMG_1032.jpg",
      ]
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
          "image": "",
          "caption": ""
        },
      ],
      "photobar_imgs": [
        "jasper/IMG_1043.jpg",
        "jasper/IMG_1044.jpg",
        "jasper/IMG_1046.jpg",
        "jasper/IMG_1049.jpg",
        "jasper/IMG_1051.jpg",
        "jasper/IMG_1055.jpg",
      ]
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
    swipeAngle: 45,
  });
};