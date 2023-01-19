class DayTripTimeline extends HTMLElement {
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

  isLastItem(item, items) {
    if (item === items[items.length - 1]) {return true}
    else {return false};
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="day-trip-timeline">
      ${timelines[this.data_id].map((item) => `
        <div class="item row no-gutters">
            <div class="left-block col-xs-6 col-sm-6 col-md-6 col-xl-4 offset-xl-2">
                <img src=${'../images/' + item.image}>
            </div>
            <div class="right-block col-xs-6 col-sm-6 col-md-6 col-xl-4">
                <h3>${item.header}</h3>
                <p>${item.description}</p>
            </div>
        </div>
        ${(this.isLastItem(item, timelines[this.data_id]) === false ? '<div class="connector row no-gutters"></div>' : '')}
      `).join('')}
    </div>
    `;
  }
}

const timelines = {
  "bourgeau": [
    {
      "header": "Sunrising",
      "description": "The sun began to reach the mountain when I arrived at Bourgeau Lake, which is close to the treeline.",
      "image": "bourgeau/IMG_1142.jpg",
    },
    {
      "header": "The Ridge",
      "description": "You can see that the lake is surrounded by the steep ridge that leads to the peak.",
      "image": "bourgeau/IMG_1181.jpg",
    },
    {
      "header": "First Pond Above the Lake",
      "description": "Beyond the treeline, a pond sits above the lake that it overflows in to.",
      "image": "bourgeau/IMG_1177.jpg",
    },
    {
      "header": "A Second Pond In The Pass",
      "description": "Another pond lies in Harvey Pass, above Lake Bourgeau and beneath the long ridge that leads to the peak.",
      "image": "bourgeau/IMG_1173.jpg",
    },
    {
      "header": "Harvey Pass",
      "description": "There were high-resolution views of the rocky mountain-sides in Harvey Pass.",
      "image": "bourgeau/IMG_1174.jpg",
    },
    {
      "header": "Colossal Ridge",
      "description": "This mammoth ridge leads to the peak.",
      "image": "bourgeau/IMG_1171.jpg",
    },
    {
      "header": "Peak",
      "description": "You can see other mountain ranges and the town of Banff from the top.",
      "image": "bourgeau/IMG_1150.jpg",
    },
    {
      "header": "Looking Down",
      "description": "Looking down from the peak, you can see the ponds, lake, and green, neighbouring mountains.",
      "image": "bourgeau/IMG_1164.jpg",
    },
  ],



  "montagne-noire": [
    {
      "header": "Lac Archambault",
      "description": "Saint-Donat's busy lake.",
      "image": "montagne-noire/IMG_2342.jpg",
    },
    {
      "header": "Lac Lézard",
      "description": "The first lake I passed.",
      "image": "montagne-noire/IMG_2343.jpg",
    },
    {
      "header": "Airplane Crash Site",
      "description": "The remains of The Liberator, which claimed the lives of 24 people in the the Royal Canadian Air Force when it crashed.",
      "image": "montagne-noire/IMG_2344.jpg",
    },
    {
      "header": "Memorial",
      "description": "The memorial site for those who died in the crash has a lookout tower.",
      "image": "montagne-noire/IMG_2346.jpg",
    },
    {
      "header": "Lookout #1",
      "description": "The view from the memorial lookout.",
      "image": "montagne-noire/IMG_2351.jpg",
    },
    {
      "header": "Lookout #2",
      "description": "View from the second, larger lookout tower at the peak.",
      "image": "montagne-noire/IMG_2355.jpg",
    },
    {
      "header": "Lookout #2: In Another Direction",
      "description": "You can see gently rolling mountains in every direction.",
      "image": "montagne-noire/IMG_2361.jpg",
    },
    {
      "header": "Elevated Lake",
      "description": "Another Lake near the peak.",
      "image": "montagne-noire/IMG_2366.jpg",
    },
  ]

}

customElements.define('my-day-trip-timeline', DayTripTimeline);