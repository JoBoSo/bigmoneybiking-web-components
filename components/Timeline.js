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
        "ptit-train/poutine.JPG",
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
        "ptit-train/church.JPG",
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
        "Awoke after an uncomfortably damp and sleepless night in my tent, having regretted not returning to a quiet, sandy beach.",
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
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 2,
      "date": "May 20, 2021",
      "distance": 107,
      "start": "Dragon Lake Campground",
      "end": "Gingolx",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 3,
      "date": "May 21, 2021",
      "distance": 124,
      "start": "Gingolx",
      "end": "Kitsumkalum Provincial Park",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 4,
      "date": "May 22, 2021",
      "distance": 127,
      "start": "Kitsumkalum Provincial Park",
      "end": "Kitwanga",
      "description": [],
      "photobar_imgs": []
    }
  ],



  "babine-lake": [
    {
      "day": 1,
      "date": "May 8, 2021",
      "distance": 125,
      "start": "Tyhee Lake Provincial Park",
      "end": "Red Bluff Provincial Park",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 2,
      "date": "May 9, 2021",
      "distance": 62,
      "start": "Red Bluff Provincial Park",
      "end": "Tyhee Lake Provincial Park",
      "description": [],
      "photobar_imgs": []
    },
  ],



  "downie-creek": [
    {
      "day": 1,
      "date": "October 3, 2020",
      "distance": 42,
      "start": "Revelstoke",
      "end": "Carnes Creek Rec Site",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 2,
      "date": "October 4, 2020",
      "distance": 74,
      "start": "Carnes Creek Rec Site",
      "end": "Carnes Creek Rec Site",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 3,
      "date": "October 5, 2020",
      "distance": 42,
      "start": "Carnes Creek Rec Site",
      "end": "Revelstoke",
      "description": [],
      "photobar_imgs": []
    },
  ],



  "begbie-falls": [
    {
      "day": 1,
      "date": "September 26, 2020",
      "distance": 15,
      "start": "Revelstoke",
      "end": "Begbie Falls Rec Site",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 2,
      "date": "September 27, 2020",
      "distance": 19,
      "start": "Begbie Falls Rec Site",
      "end": "Revelstoke",
      "description": [],
      "photobar_imgs": []
    },
  ],



  "quadra-cortes": [
    {
      "day": 1,
      "date": "August 1, 2020",
      "distance": 64,
      "start": "Courtenay",
      "end": "Quadra Island",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 2,
      "date": "August 2, 2020",
      "distance": 49,
      "start": "Quadra Island",
      "end": "Quadra Island",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 3,
      "date": "August 3, 2020",
      "distance": 144,
      "start": "Quadra Island",
      "end": "Courtenay",
      "description": [],
      "photobar_imgs": []
    },
  ],



  "comox-lake": [
    {
      "day": 1,
      "date": "July 4, 2020",
      "distance": 14,
      "start": "Courtenay",
      "end": "Comox Lake",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 2,
      "date": "July 5, 2020",
      "distance": 66,
      "start": "Comox Lake",
      "end": "Courtenay",
      "description": [],
      "photobar_imgs": []
    },
  ],



  "texada": [
    {
      "day": 1,
      "date": "June 12, 2020",
      "distance": 34,
      "start": "Courtenay",
      "end": "Dinner Rock",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 2,
      "date": "June 13, 2020",
      "distance": 69,
      "start": "Dinner Rock",
      "end": "Shingle Beach",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 3,
      "date": "June 14, 2020",
      "distance": 40,
      "start": "Shingle Beach",
      "end": "Bob's Lake",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 4,
      "date": "June 15, 2020",
      "distance": 52,
      "start": "Bob's Lake",
      "end": "Courtenay",
      "description": [],
      "photobar_imgs": []
    }
  ],



  "brewster-lake": [
    {
      "day": 1,
      "date": "May 28, 2020",
      "distance": 83,
      "start": "Courtenay",
      "end": "Brewster Lake",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 2,
      "date": "May 29, 2020",
      "distance": 22,
      "start": "Brewster Lake",
      "end": "Campbell Lake",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 3,
      "date": "May 30, 2020",
      "distance": 72,
      "start": "Campbell Lake",
      "end": "Courtenay",
      "description": [],
      "photobar_imgs": []
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
      "photobar_imgs": []
    },
    {
      "day": 2,
      "date": "May 15, 2020",
      "distance": 65,
      "start": "Burnt Beach",
      "end": "Elk Creek",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 3,
      "date": "May 16, 2020",
      "distance": 0,
      "start": "Elk Creek",
      "end": "Elk Creek",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 4,
      "date": "May 17, 2020",
      "distance": 71,
      "start": "Elk Creek",
      "end": "Nimpkish Lake",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 5,
      "date": "May 18, 2021",
      "distance": 143,
      "start": "Nimpkish Lake",
      "end": "Nahwitti Lake",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 6,
      "date": "May 19, 2020",
      "distance": 40,
      "start": "Nahwitti Lake",
      "end": "San Josef Bay",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 7,
      "date": "May 20, 2020",
      "distance": 181,
      "start": "San Josef Bay",
      "end": "Nimpkish Lake",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 8,
      "date": "May 21, 2020",
      "distance": 213,
      "start": "Nimpkish Lake",
      "end": "Courtenay",
      "description": [],
      "photobar_imgs": []
    }
  ],



  "nanaimo-courtenay": [
    {
      "day": 1,
      "date": "May 6, 2020",
      "distance": 92,
      "start": "Nanaimo",
      "end": "Port Alberni",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 2,
      "date": "May 7, 2020",
      "distance": 88,
      "start": "Port Alberni",
      "end": "Courtenay",
      "description": [],
      "photobar_imgs": []
    },
  ],



  "to-mtrl": [
    {
      "day": 1,
      "date": "August 16, 2019",
      "distance": 116,
      "start": "Schomberg",
      "end": "Darlington Provincial Park",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 2,
      "date": "August 17, 2019",
      "distance": 161,
      "start": "Darlington Provincial Park",
      "end": "Picton",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 3,
      "date": "August 18, 2019",
      "distance": 44,
      "start": "Picton",
      "end": "Kingston",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 4,
      "date": "August 19, 2019",
      "distance": 152,
      "start": "Kingston",
      "end": "Crysler Park Marina",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 5,
      "date": "August 20, 2019",
      "distance": 66,
      "start": "Crysler Park Marina",
      "end": "Glengarry Campground",
      "description": [],
      "photobar_imgs": []
    },
    {
      "day": 6,
      "date": "August 21, 2019",
      "distance": 103,
      "start": "Glengarry Campground",
      "end": "Montreal",
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