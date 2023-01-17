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
    this.innerHTML = `
      <div class="my-timeline">
        <ul>
          ${timelines[this.data_id].map((item) => `
            <li class="my-timeline-item">
              <p class="my-timeline-header"><b>Day ${item.day}</b> | 
                <span style='font-size:16pt;'>${item.distance} km <span style='font-size: 12pt'>from</span> ${item.start} <span style='font-size: 12pt'>to</span> ${item.end}</span>
              </p>

              <ul class="my-timeline-bullets">
                ${item.description.map((bullet) => `<li>${bullet}</li>`).join('')}
              </ul>

              <div class="photoBar">
                <div class="row no-gutters">
                  ${item.photobar_imgs.map((image) => `
                    <div class="col-12 col-sm-4"><img src="../images/${image}" loading="lazy"></div>
                  `).join('')}
                </div>
              </div>

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
      "photobar_imgs": [
        "mtrl-sherbrooke/IMG_2704.jpg",
        "mtrl-sherbrooke/IMG_2709.jpg",
        "mtrl-sherbrooke/IMG_2731.jpg"
      ]
    },
    {
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
      "photobar_imgs": [
        "mtrl-sherbrooke/IMG_2744.jpg",
        "mtrl-sherbrooke/IMG_2755.jpg",
        "mtrl-sherbrooke/IMG_2775.jpg"
      ]
    },
    {
      "day": 3,
      "date": "September 18, 2022",
      "distance": 142,
      "start": "Mt. Orford National Park",
      "end": "Montreal",
      "description": [
        "Biked home in the cold rain.",
        "Picked a couple of apples along the way."
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
      "photobar_imgs": [
        "ptit-train/IMG_2537.jpg",
        "ptit-train/poutine.jpg",
        "ptit-train/IMG_2538.jpg",
      ]
    },
    {
      "day": 2,
      "date": "August 13, 2022",
      "distance": 160,
      "start": "Lac Boyd",
      "end": "Mont Blanc",
      "description": [
        "Bumped into two wandering horses on the trail.",
        "Reach Mont Laurier at noon.",
        "Biked back to the cottage."
      ],
      "photobar_imgs": [
        "ptit-train/IMG_2550.jpg",
        "ptit-train/IMG_2551.jpg",
        "ptit-train/IMG_2553.jpg"
      ]
    },
    {
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
      "photobar_imgs": [
        "ptit-train/river.jpg",
        "ptit-train/church.jpg",
        "ptit-train/IMG_2577.jpg",
      ]
    }
  ],



  "haida-gwaii": [
    {
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
      "photobar_imgs": [
        "haida-gwaii/IMG_0837.jpg",
        "haida-gwaii/IMG_0826.jpg",
        "haida-gwaii/IMG_0834.jpg",
      ]
    },
    {
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
      "photobar_imgs": [
        "haida-gwaii/IMG_0847.jpg",
        "haida-gwaii/IMG_0857.jpg",
        "haida-gwaii/IMG_0860.jpg",

      ]
    },
    {
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
      "photobar_imgs": [
        "haida-gwaii/IMG_0869.jpg",
        "haida-gwaii/IMG_0866.jpg",
        "haida-gwaii/IMG_0868.jpg",
      ]
    }
  ],



  "nass-valley": [
    {
      "day": 1,
      "date": "May 19, 2021",
      "distance": 116,
      "start": "Kitwanga",
      "end": "Dragon Lake Campground",
      "description": [
        "In the morning, the campground attendant in Kitwanaga invited me to park in his driveway.",
        "A coytoe standing on a logging road that intersected the Stewart-Cassiar Highway watched me ride by.",
        "A serial killer with rubbermaid bins full of bodies strapped to his eroding Forester offered me a drink.",
        "Camped at Dragon Lake Campground."
      ],
      "photobar_imgs": [
        "nass-valley/IMG_9673.jpg",
        "nass-valley/IMG_9651.jpg",
        "nass-valley/IMG_9658.jpg",
      ]
    },
    {
      "day": 2,
      "date": "May 20, 2021",
      "distance": 107,
      "start": "Dragon Lake Campground",
      "end": "Gingolx",
      "description": [
        "Explored the lava beds in the nass valley.",
        "A massive moose ran through the thick forest next to me on the road into Gingolx",
        "I saw a grizzly bear eating a procepine on the highway.",
        "Eagles soared above Gingolx.",
        "I camped next to a gravel pit outside of town."

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
      "day": 3,
      "date": "May 21, 2021",
      "distance": 124,
      "start": "Gingolx",
      "end": "Kitsumkalum Provincial Park",
      "description": [
        "Checked out a couple of water falls and rode alongside the Sunken Forest.",
        "Scared a bear that wasn't moving off the highway with a banger and felt mighty.",
        "Relaxed on the beach next to a fire at my campsite on Kitsumkalum Lake."
      ],
      "photobar_imgs": [
        "nass-valley/IMG_9823.jpg",
        "nass-valley/IMG_0083.jpg",
        "nass-valley/IMG_0102.jpg",
      ]
    },
    {
      "day": 4,
      "date": "May 22, 2021",
      "distance": 127,
      "start": "Kitsumkalum Provincial Park",
      "end": "Kitwanga",
      "description": [
        "Got a cappuccino and sandwich at Bert's Deli in Terrace.",
        "Had a short conversation about my trip with a woman at Bert's who I coincidentally met at a party in Telkwa a few weeks later. Northwestern BC has a scattering of small towns connected by the same highways and surrounded by a lot of wild, tall mountains. The human world is small and the natural world is massive. It adds to the magic of the region.",
        "Returned to Kitwanaga a complete man."
      ],
      "photobar_imgs": [
        "nass-valley/IMG_0117.jpg"
      ]
    }
  ],



  "babine-lake": [
    {
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
      "photobar_imgs": [
        "babine-lake/IMG_9527.jpg",
        "babine-lake/IMG_9529.jpg",
        "babine-lake/IMG_9533.jpg",
      ]
    },
  ],



  "downie-creek": [
    {
      "day": 1,
      "date": "October 3, 2020",
      "distance": 42,
      "start": "Revelstoke",
      "end": "Carnes Creek Rec Site",
      "description": [
        "Was held up on the highway for over an hour because the crumbling mountain-side was being repaired.",
        "My neighbours at Carnes Creek Rec Site gave me a load of fire wood for the night."
      ],
      "photobar_imgs": [
        "downie-creek/IMG_8490.jpg",
        "downie-creek/IMG_8491.jpg",
        "downie-creek/IMG_8500.jpg",
      ]
    },
    {
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
      "photobar_imgs": [
        "downie-creek/IMG_8521.jpg",
        "downie-creek/IMG_8602.jpg",
        "downie-creek/IMG_8560.jpg",
      ]
    },
    {
      "day": 3,
      "date": "October 5, 2020",
      "distance": 42,
      "start": "Carnes Creek Rec Site",
      "end": "Revelstoke",
      "description": [
        "There are lots of pull-offs along the river. It's a dream for camping.",
        "This is the kind of road that you won't find unless you look for it. I want to ride it all the way to it's end when I'm back."
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
      "day": 1,
      "date": "September 26, 2020",
      "distance": 15,
      "start": "Revelstoke",
      "end": "Begbie Falls",
      "description": [
        "We biked from our place in Revelstoke to Begbie Falls Rec Site to camp."
      ],
      "photobar_imgs": [
        "begbie-falls/IMG_8346.jpg",
        "begbie-falls/IMG_3717.jpg",
        "begbie-falls/IMG_3712.jpg",
      ]
    },
    {
      "day": 2,
      "date": "September 27, 2020",
      "distance": 19,
      "start": "Begbie Falls",
      "end": "Revelstoke",
      "description": [
        "We hiked a little more than half way up Mt. Begbie the next morning."
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
      "day": 1,
      "date": "August 1, 2020",
      "distance": 64,
      "start": "Courtenay",
      "end": "Quadra Island",
      "description": [
        "Got some salmon from Dockside Fish & Chips before getting on the ferry from Campbell River to Quadra.",
        "Pushed my bike along a trail to Morte Lake where I camped."
      ],
      "photobar_imgs": [
        "quadra-cortes/IMG_6782.jpg",
        "quadra-cortes/IMG_6819.jpg",
        "quadra-cortes/IMG_6791.jpg",
      ]
    },
    {
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
      "photobar_imgs": [
        "quadra-cortes/IMG_6813.jpg",
        "quadra-cortes/IMG_6834.jpg",
        "quadra-cortes/IMG_6835.jpg",
      ]
    },
    {
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
      "photobar_imgs": [
        "comox-lake/IMG_6300.jpg",
        "comox-lake/IMG_6302.jpg",
        "comox-lake/IMG_6310.jpg",
      ]
    },
    {
      "day": 2,
      "date": "July 5, 2020",
      "distance": 66,
      "start": "Comox Lake",
      "end": "Courtenay",
      "description": [
        "The shadow of the mountains across the lake was cast upon those on my side of the lake as the sun rose at 6am.",
        "I tried biking around the lake, thinking it might connect to Cumberland on the otherside, but an old couple who lived on the otherside of the lake told me it didn't."
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
      "photobar_imgs": [
        "texada/IMG_5788.jpg",
        "texada/IMG_5800.jpg",
        "texada/IMG_5797.jpg",
      ]
    },
    {
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
      "photobar_imgs": [
        "texada/IMG_5848.jpg",
        "texada/IMG_5862.jpg",
        "texada/IMG_5871.jpg",
      ]
    },
    {
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
      "day": 4,
      "date": "June 15, 2020",
      "distance": 52,
      "start": "Bob's Lake",
      "end": "Courtenay",
      "description": [
        "The Lake was misty in the morning.",
        "I had a meal on the colourful patio at Mary Mary Cafe in Van Anda before getting on the ferry."
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
      "day": 1,
      "date": "May 28, 2020",
      "distance": 83,
      "start": "Courtenay",
      "end": "Brewster Lake",
      "description": [
        "Brewster Lake had a real beachy feel, like Tofino does, with it's swooping cedar trees and vibrant greenery."
      ],
      "photobar_imgs": [
        "brewster-lake/IMG_5594.jpg",
        "brewster-lake/IMG_5557.jpg",
        "brewster-lake/IMG_5570.jpg",
      ]
    },
    {
      "day": 2,
      "date": "May 29, 2020",
      "distance": 22,
      "start": "Brewster Lake",
      "end": "Campbell Lake",
      "description": [
        "Made a small fire on the shore and watched bats zip in and out of the forest behind me."
      ],
      "photobar_imgs": [
        "brewster-lake/IMG_5585.jpg",
        "brewster-lake/IMG_5603.jpg",
        "brewster-lake/IMG_5631.jpg",

      ]
    },
    {
      "day": 3,
      "date": "May 30, 2020",
      "distance": 72,
      "start": "Campbell Lake",
      "end": "Courtenay",
      "description": [
        "I rode home to Courtenay."
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
      "day": 1,
      "date": "May 14, 2020",
      "distance": 71,
      "start": "Courtenay",
      "end": "Burnt Beach",
      "description": [],
      "photobar_imgs": [
        "san-josef-bay/IMG_5236.jpg",
        "san-josef-bay/IMG_5254.jpg",
        "san-josef-bay/IMG_5245.jpg",
      ]
    },
    {
      "day": 2,
      "date": "May 15, 2020",
      "distance": 65,
      "start": "Burnt Beach",
      "end": "Elk Creek",
      "description": [],
      "photobar_imgs": [
        "san-josef-bay/IMG_5307.jpg",
        "san-josef-bay/IMG_5296.jpg",
        "san-josef-bay/IMG_5313.jpg",
      ]
    },
    {
      "day": 3,
      "date": "May 16, 2020",
      "distance": 0,
      "start": "Elk Creek",
      "end": "Elk Creek",
      "description": [],
      "photobar_imgs": [
        "san-josef-bay/IMG_5333.jpg",
      ]
    },
    {
      "day": 4,
      "date": "May 17, 2020",
      "distance": 71,
      "start": "Elk Creek",
      "end": "Nimpkish Lake",
      "description": [],
      "photobar_imgs": [
        "san-josef-bay/IMG_5352.jpg",
        "san-josef-bay/IMG_5353.jpg",
        "san-josef-bay/IMG_5363.jpg",
      ]
    },
    {
      "day": 5,
      "date": "May 18, 2021",
      "distance": 143,
      "start": "Nimpkish Lake",
      "end": "Nahwitti Lake",
      "description": [],
      "photobar_imgs": [
        "san-josef-bay/IMG_5387.jpg",
        "san-josef-bay/IMG_5400.jpg",
        "san-josef-bay/IMG_5406.jpg",
      ]
    },
    {
      "day": 6,
      "date": "May 19, 2020",
      "distance": 40,
      "start": "Nahwitti Lake",
      "end": "San Josef Bay",
      "description": [],
      "photobar_imgs": [
        "san-josef-bay/IMG_5469.jpg",
        "san-josef-bay/IMG_5472.jpg",
        "san-josef-bay/IMG_5473.jpg",
      ]
    },
    {
      "day": 7,
      "date": "May 20, 2020",
      "distance": 181,
      "start": "San Josef Bay",
      "end": "Nimpkish Lake",
      "description": [],
      "photobar_imgs": [
        "san-josef-bay/IMG_5495.jpg",
        "san-josef-bay/IMG_5497.jpg",
        "san-josef-bay/IMG_5515.jpg",
      ]
    },
    {
      "day": 8,
      "date": "May 21, 2020",
      "distance": 213,
      "start": "Nimpkish Lake",
      "end": "Courtenay",
      "description": [],
      "photobar_imgs": [
        "san-josef-bay/IMG_5519.jpg",
      ]
    }
  ],



  "nanaimo-courtenay": [
    {
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
      "photobar_imgs": [
        "nanaimo-courtenay/IMG_5120.jpg",
        "nanaimo-courtenay/IMG_5121.jpg",
        "nanaimo-courtenay/IMG_5142.jpg",
      ]
    },
    {
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
      "photobar_imgs": [
        "nanaimo-courtenay/IMG_5145.jpg",
        "nanaimo-courtenay/IMG_5160.jpg",
        "nanaimo-courtenay/IMG_5154.jpg",
      ]
    },
  ],



  "to-mtrl": [
    {
      "day": 1,
      "date": "August 16, 2019",
      "distance": 116,
      "start": "Schomberg",
      "end": "Darlington Provincial Park",
      "description": [
        "Spent the day riding on busy roads through dreary Toronto suburbs.",
        "Camped at Darlington Provincial Park for 50 precious dollars, but it put me right beside the Waterfront Trail."
      ],
      "photobar_imgs": []
    },
    {
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
      "photobar_imgs": [
        "to-mtrl/IMG_4208.jpg",
        "to-mtrl/IMG_4209.jpg",
        "to-mtrl/IMG_4221.jpg",
      ]
    },
    {
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
      "photobar_imgs": [
        "to-mtrl/IMG_4224.jpg",
        "to-mtrl/IMG_4225.jpg",
        "to-mtrl/IMG_4226.jpg",
      ]
    },
    {
      "day": 4,
      "date": "August 19, 2019",
      "distance": 152,
      "start": "Kingston",
      "end": "Crysler Park Marina",
      "description": [
        "The Southern Ontario/Toronto flavour completely fades past Kingston.",
        "Watched a ferry float into the Gananoque port."
      ],
      "photobar_imgs": [
        "to-mtrl/IMG_4230.jpg",
        "to-mtrl/IMG_4234.jpg",
        "to-mtrl/IMG_4238.jpg",
        "to-mtrl/IMG_4240.jpg",
        "to-mtrl/IMG_4246.jpg",
        "to-mtrl/IMG_4258.jpg",
      ]
    },
    {
      "day": 5,
      "date": "August 20, 2019",
      "distance": 66,
      "start": "Crysler Park Marina",
      "end": "Glengarry Campground",
      "description": [
        "My favorite day on the tour because I rode acros Long Sault Parkway, which spans little forested islands on the edge of the St. Lawrence.",
      ],
      "photobar_imgs": [
        "to-mtrl/IMG_4267.jpg",
        "to-mtrl/IMG_4281.jpg",
        "to-mtrl/IMG_4292.jpg",
      ]
    },
    {
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
      "photobar_imgs": [
        "to-mtrl/IMG_4301.jpg",
        "to-mtrl/IMG_4304.jpg",
        "to-mtrl/IMG_4312.jpg",
      ]
    }
  ],



  "": [
    {
      "day": 1,
      "date": "May 19, 2021",
      "distance": 0,
      "start": "",
      "end": "",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 2,
      "date": "",
      "distance": 0,
      "start": "",
      "end": "",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 3,
      "date": "",
      "distance": 0,
      "start": "",
      "end": "",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 4,
      "date": "",
      "distance": 0,
      "start": "",
      "end": "",
      "description": [],
      "photobar_imgs": []
    }
  ],



  "": [
    {
      "day": 1,
      "date": "May 19, 2021",
      "distance": 0,
      "start": "",
      "end": "",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 2,
      "date": "",
      "distance": 0,
      "start": "",
      "end": "",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 3,
      "date": "",
      "distance": 0,
      "start": "",
      "end": "",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 4,
      "date": "",
      "distance": 0,
      "start": "",
      "end": "",
      "description": [],
      "photobar_imgs": []
    }
  ],



}

customElements.define('my-timeline', Timeline);