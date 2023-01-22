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
  ],



  "mt-temple": [
    {
      "header": "Peaks",
      "description": "After hiking up from Moraine Lake, there's a clear view of the mountains near the treeline.",
      "image": "mt-temple/IMG_1188.jpg",
    },
    {
      "header": "Mt. Temple",
      "description": "The destination comes into view as you approach Sentinel Pass.",
      "image": "mt-temple/IMG_1191.jpg",
    },
    {
      "header": "Treeline",
      "description": "A pond sits at the top of the forest.",
      "image": "mt-temple/IMG_1257.jpg",
    },
    {
      "header": "Sentinel Pass",
      "description": "Looking back on the trail from the top of the pass. Similarly grand views sit to the other side.",
      "image": "mt-temple/IMG_1193.jpg",
    },
    {
      "header": "A Steep Ascent",
      "description": "You transition from hiking to light mountaineering past Sentinel Pass.",
      "image": "mt-temple/IMG_1250.jpg",
    },
    {
      "header": "Erosion",
      "description": "The mountain is showing its age.",
      "image": "mt-temple/IMG_1248.jpg",
    },

    {
      "header": "Eye On The Prize",
      "description": "The top was cold and icy on September 6th.",
      "image": "mt-temple/IMG_1239.jpg",
    },
    {
      "header": "Emerald Ponds",
      "description": "Seen from the peak. The water looks alive.",
      "image": "mt-temple/IMG_1215.jpg",
    },
    {
      "header": "Moraine Lake",
      "description": "Another view of from the peak.",
      "image": "mt-temple/IMG_1233.jpg",
    },
  ],



  "mt-begbie": [
    {
      "header": "Meadow",
      "description": "A waterfall flows into a subalpine meadow.",
      "image": "mt-begbie/IMG_7949.jpg",
    },
    {
      "header": "Wildflowers",
      "description": "There were lots of colourful wildflowers on September 5th.",
      "image": "mt-begbie/IMG_7959.jpg",
    },
    {
      "header": "The Trail",
      "description": "Most of the hike is through the forest.",
      "image": "mt-begbie/IMG_8038.jpg",
    },
    {
      "header": "A Climb",
      "description": "The peak becomes visible past these bluffs.",
      "image": "mt-begbie/IMG_7972.jpg",
    },
    {
      "header": "Treeline",
      "description": "The trees are quite enduring in Revelstoke.",
      "image": "mt-begbie/IMG_8036.jpg",
    },
    {
      "header": "Revelstoke",
      "description": "Looking back on the town.",
      "image": "mt-begbie/IMG_8022.jpg",
    },
    {
      "header": "Peak",
      "description": "A glacier stands between the hiker and the peak.",
      "image": "mt-begbie/IMG_7989.jpg",
    },
  ],



  "mont-nixon": [
    {
      "header": "Viewpoint #1",
      "description": "You can see these mountains with bulbous green peaks from the first viewpoint.",
      "image": "mont-nixon/IMG_2304.jpg",
    },
    {
      "header": "Mont Nixon",
      "description": "This is still at viewpoint #1. The granite cliffs belong to Mont Nixon, which is where the trail leads.",
      "image": "mont-nixon/IMG_2305.jpg",
    },
    {
      "header": "The Big View",
      "description": "All of the viewpoints are nice--I think there are four or five of them--but this is the bigget view of the landscape at the top.",
      "image": "mont-nixon/IMG_2312.jpg",
    },
    {
      "header": "The Better Side",
      "description": "The last viewpoint provides the best shot of a granite cliff on Mont Nixon.",
      "image": "mont-nixon/IMG_2325.jpg",
    },
    {
      "header": "Shelter",
      "description": "A big tree is protected by two tall rocks surrounding it.",
      "image": "mont-nixon/IMG_2329.jpg",
    },
  ],



  "six-glaciers": [
    {
      "header": "Lake Louise",
      "description": "Is only a 9 on a cloudy day.",
      "image": "six-glaciers/IMG_2110.jpg",
    },
    {
      "header": "The Teahouse",
      "description": "A potential stop for tea and deserts, but the views are ahead.",
      "image": "six-glaciers/IMG_2112.jpg",
    },
    {
      "header": "The Plain of Six Glaciers",
      "description": "Looking back from a ridge at Lake Louise and the ski resort.",
      "image": "six-glaciers/IMG_2117.jpg",
    },
    {
      "header": "End of the Road",
      "description": "The trail ends beneath steep mountains.",
      "image": "six-glaciers/IMG_2124.jpg",
    },
  ],



  "grotto-mtn": [
    {
      "header": "Morning In The Valley",
      "description": "The trailhead is on the edge of Canmore.",
      "image": "grotto-mtn/IMG_1301.jpg",
    },
    {
      "header": "Tough Trees",
      "description": "Pines grow on the steep, rocky slope.",
      "image": "grotto-mtn/IMG_1334.jpg",
    },
    {
      "header": "Fascinating Rock",
      "description": "The rocks are fascinating. I saw orange moses I have never seen before growing on the dense, hard rocks, some of which was fossilized.",
      "image": "grotto-mtn/IMG_1308.jpg",
    },
    {
      "header": "Views of Canmore",
      "description": "You can look back at Canmore from just about every where on the trail.",
      "image": "grotto-mtn/IMG_1321.jpg",
    },
    {
      "header": "Praries On The Horizon",
      "description": "You can see past the eastern-most mountains to the praries and skyscrapers in Calgary from the top.",
      "image": "grotto-mtn/IMG_1322.jpg",
    },
  ],



  "cory-pass": [
    {
      "header": "Peaceful Pine Forests",
      "description": "The dry, sparse pine forests east of Lake Louise can be so warm, quiet, and peaceful.",
      "image": "cory-pass/IMG_1086.jpg",
    },
    {
      "header": "Character",
      "description": "The ancient, carved mountains show their age",
      "image": "cory-pass/IMG_1088.jpg",
    },
    {
      "header": "Simplicity",
      "description": "Another special aspect of the eastern Rockies are the simple, transparent landscapes of rock and pine. The big, bushy forests of BC contain so much life that it feels impossible to take it all in from a mountain peak.",
      "image": "cory-pass/IMG_1095.jpg",
    },
    {
      "header": "A Scramble Up Mt. Edith",
      "description": "Magnificant views of this towering peak are achieved from Mt. Edith.",
      "image": "cory-pass/IMG_1117.jpg",
    },
    {
      "header": "Enter",
      "description": "Hike up and over the pass and enter a mountain cathedral.",
      "image": "cory-pass/IMG_1121.jpg",
    },
    {
      "header": "The Pass",
      "description": "Only good can pass through such a grand landscape.",
      "image": "cory-pass/IMG_1124.jpg",
    },
    {
      "header": "Woody Mushroom",
      "description": "I love mushrooms.",
      "image": "cory-pass/IMG_1132.jpg",
    },
  ],



  "ha-ling": [
    {
      "header": "Miner's Peak",
      "description": "After hiking up the super busy trail, I first went up Miner's Peak--the one in the foreground.",
      "image": "ha-ling/IMG_1082.jpg",
    },
    {
      "header": "Ha Ling",
      "description": "Next, I dipped down and up Ha Ling. Looking closely, you can the mass of little people standing at the top.",
      "image": "ha-ling/IMG_1076.jpg",
    },
    {
      "header": "Canmore",
      "description": "Of course, you have views of Canmore and the Bow Valley from the top.",
      "image": "ha-ling/IMG_1080.jpg",
    },
  ],



  "": [
    {
      "header": "",
      "description": "",
      "image": "/IMG_.jpg",
    },
  ],

}

customElements.define('my-day-trip-timeline', DayTripTimeline);