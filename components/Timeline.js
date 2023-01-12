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
      <style>

      </style>

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
                    <div class="col-12 col-sm-4"><img src="../images/${image}"></div>
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
  ]
}

customElements.define('my-timeline', Timeline);