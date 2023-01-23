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

  isLastEvent(item, items) {
    if (item !== items[items.length - 1]) {
      return '<div class="connector row no-gutters"></div>';
    }
    return '';
  }

  constructEvent(item) {
    let larger_media = window.matchMedia('(min-width: 576px)');
    let smaller_media = window.matchMedia('(max-width: 575px)');

    // larger screen: image left - text right
    if (larger_media.matches && item.left_image && !item.right_image) {
      return `
        <div class="row no-gutters">
          <div class="left-block col-xs-6 col-sm-6 col-md-6 col-xl-4 offset-xl-2">
            <img src=${'../images/' + item.left_image}>
          </div>
          <div class="right-block col-xs-6 col-sm-6 col-md-6 col-xl-4">
            <div class="day-trip-timeline-text">
              <h3>${item.header}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        </div>
      `;
    }

    // larger screen: text left - image right
    else if (larger_media.matches && !item.left_image && item.right_image) {
      return `
        <div class="row no-gutters">
          <div class="left-block col-xs-6 col-sm-6 col-md-6 col-xl-4 offset-xl-2">
            <div class="day-trip-timeline-text">
              <h3>${item.header}</h3>
              <p>${item.description}</p>
            </div>
          </div>
          <div class="right-block col-xs-6 col-sm-6 col-md-6 col-xl-4">
            <img src=${'../images/' + item.right_image}>
          </div>
        </div>
      `;
    }

    // larger screen: image left - image right - text bottom
    if (larger_media.matches && item.left_image && item.right_image) {
      return `
        <div class="row no-gutters">
          <div class="left-block col-xs-6 col-sm-6 col-md-6 col-xl-4 offset-xl-2">
            <div class="text-below">
              <img src=${'../images/' + item.left_image}>
            </div>
          </div>
          <div class="right-block col-xs-6 col-sm-6 col-md-6 col-xl-4">
            <div class="text-below">
              <img src=${'../images/' + item.right_image}>
            </div>
          </div>
          <div class="bottom-block col-xs-12 col-sm-12 col-md-12 col-xl-8 offset-xl-2">
            <div class="day-trip-timeline-text">
              <h3>${item.header}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        </div>
      `;
    }

    // smaller screen: one image top - text bottom
    // transform items with one image, left or right, for phones.
    else if (smaller_media.matches && ((!item.left_image && item.right_image) || (item.left_image && !item.right_image))) {
      let image = item.right_image !== null ? item.right_image : item.left_image;
      return `
        <div class="row no-gutters">
          <div class="left-block col-xs-6 col-sm-6 col-md-6 col-xl-4 offset-xl-2">
            <img src=${'../images/' + image}>
          </div>
          <div class="right-block col-xs-6 col-sm-6 col-md-6 col-xl-4">
            <div class="day-trip-timeline-text">
              <h3>${item.header}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        </div>
      `;
    }

    // smaller screen: image top - image middle - text bottom
    // transform items with two images, left and right, for phones
    if (smaller_media.matches && item.left_image && item.right_image) {
      return `
        <div class="row no-gutters">
          <div class="left-block col-xs-6 col-sm-6 col-md-6 col-xl-4 offset-xl-2">
            <div class="text-below">
              <img src=${'../images/' + item.left_image}>
            </div>
          </div>
          <div class="right-block col-xs-6 col-sm-6 col-md-6 col-xl-4">
            <div class="text-below">
              <img src=${'../images/' + item.right_image}>
            </div>
          </div>
          <div class="bottom-block col-xs-12 col-sm-12 col-md-12 col-xl-8 offset-xl-2">
            <div class="day-trip-timeline-text">
              <h3>${item.header}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        </div>
      `;
    }
  }

  connectedCallback() {
    let thisData = timelines[this.data_id];
    this.innerHTML = `
    <div class="day-trip-timeline">
      ${thisData.map((item) => `
        ${
          this.constructEvent(item) 
          + this.isLastEvent(item, thisData)
        }
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
      "left_image": null,
      "right_image": "bourgeau/IMG_1142.jpg",
    },
    {
      "header": "The Ridge",
      "description": "You can see that the lake is surrounded by the steep ridge that leads to the peak.",
      "left_image": "bourgeau/IMG_1181.jpg",
      "right_image": null,
    },
    {
      "header": "First Pond Above the Lake",
      "description": "Beyond the treeline, a pond sits above the lake that it overflows in to.",
      "left_image": null,
      "right_image": "bourgeau/IMG_1177.jpg",
    },
    {
      "header": "A Second Pond In The Pass",
      "description": "Another pond lies in Harvey Pass, above Lake Bourgeau and beneath the long ridge that leads to the peak.",
      "left_image": "bourgeau/IMG_1173.jpg",
      "right_image": null,
    },
    {
      "header": "Harvey Pass",
      "description": "There were high-resolution views of the rocky mountain-sides in Harvey Pass.",
      "left_image": null,
      "right_image": "bourgeau/IMG_1174.jpg",
    },
    {
      "header": "Colossal Ridge",
      "description": "This mammoth ridge leads to the peak.",
      "left_image": "bourgeau/IMG_1171.jpg",
      "right_image": null,
    },
    {
      "header": "Peak",
      "description": "You can see other mountain ranges and the town of Banff from the top.",
      "left_image": null,
      "right_image": "bourgeau/IMG_1150.jpg",
    },
    {
      "header": "Looking Down",
      "description": "Looking down from the peak, you can see the ponds, lake, and green, neighbouring mountains.",
      "left_image": "bourgeau/IMG_1164.jpg",
      "right_image": null,
    },
  ],



  "montagne-noire": [
    {
      "header": "Lac Archambault",
      "description": "Saint-Donat's busy lake.",
      "left_image": null,
      "right_image": "montagne-noire/IMG_2342.jpg",
    },
    {
      "header": "Lac Lézard",
      "description": "The first lake I passed.",
      "left_image": "montagne-noire/IMG_2343.jpg",
      "right_image": null,
    },
    {
      "header": "Airplane Crash Site",
      "description": "The remains of The Liberator, which claimed the lives of 24 people in the the Royal Canadian Air Force when it crashed.",
      "left_image": null,
      "right_image": "montagne-noire/IMG_2344.jpg",
    },
    {
      "header": "Memorial",
      "description": "The memorial site for those who died in the crash has a lookout tower.",
      "left_image": "montagne-noire/IMG_2346.jpg",
      "right_image": null,
    },
    {
      "header": "Lookout #1",
      "description": "The view from the memorial lookout.",
      "left_image": null,
      "right_image": "montagne-noire/IMG_2351.jpg",
    },
    {
      "header": "Lookout #2",
      "description": "View from the second, larger lookout tower at the peak.",
      "left_image": "montagne-noire/IMG_2355.jpg",
      "right_image": null,
    },
    {
      "header": "Lookout #2: In Another Direction",
      "description": "You can see gently rolling mountains in every direction.",
      "left_image": null,
      "right_image": "montagne-noire/IMG_2361.jpg",
    },
    {
      "header": "Elevated Lake",
      "description": "Another Lake near the peak.",
      "left_image": "montagne-noire/IMG_2366.jpg",
      "right_image": null,
    },
  ],



  "mt-temple": [
    {
      "header": "Peaks",
      "description": "After hiking up from Moraine Lake, there's a clear view of the mountains near the treeline.",
      "left_image": null,
      "right_image": "mt-temple/IMG_1188.jpg",
    },
    {
      "header": "Mt. Temple",
      "description": "The destination comes into view as you approach Sentinel Pass.",
      "left_image": "mt-temple/IMG_1191.jpg",
      "right_image": null,
    },
    {
      "header": "Treeline",
      "description": "A pond sits at the top of the forest.",
      "left_image": null,
      "right_image": "mt-temple/IMG_1257.jpg",
    },
    {
      "header": "Sentinel Pass",
      "description": "Looking back on the trail from the top of the pass. Similarly grand views sit to the other side.",
      "left_image": "mt-temple/IMG_1193.jpg",
      "right_image": null,
    },
    {
      "header": "A Steep Ascent",
      "description": "You transition from hiking to light mountaineering past Sentinel Pass.",
      "left_image": null,
      "right_image": "mt-temple/IMG_1250.jpg",
    },
    {
      "header": "Erosion",
      "description": "Gravity is the mountain's only opponent.",
      "left_image": "mt-temple/IMG_1248.jpg",
      "right_image": null,
    },
    {
      "header": "Eye On The Prize",
      "description": "The top was cold and icy on September 6th.",
      "left_image": null,
      "right_image": "mt-temple/IMG_1239.jpg",
    },
    {
      "header": "Emerald Ponds",
      "description": "There is magic in that water.",
      "left_image": "mt-temple/IMG_1215.jpg",
      "right_image": null,
    },
    {
      "header": "Moraine Lake",
      "description": "An icon.",
      "left_image": null,
      "right_image": "mt-temple/IMG_1233.jpg",
    },
  ],



  "mt-begbie": [
    {
      "header": "Meadow",
      "description": "A waterfall flows into a subalpine meadow.",
      "left_image": null,
      "right_image": "mt-begbie/IMG_7949.jpg",
    },
    {
      "header": "Wildflowers",
      "description": "There were lots of colourful wildflowers on September 5th.",
      "left_image": "mt-begbie/IMG_7959.jpg",
      "right_image": null,
    },
    {
      "header": "The Trail",
      "description": "Most of the hike is through the forest.",
      "left_image": null,
      "right_image": "mt-begbie/IMG_8038.jpg",
    },
    {
      "header": "A Climb",
      "description": "The peak becomes visible past these bluffs.",
      "left_image": "mt-begbie/IMG_7972.jpg",
      "right_image": null,
    },
    {
      "header": "Treeline",
      "description": "The trees are quite enduring in Revelstoke.",
      "left_image": null,
      "right_image": "mt-begbie/IMG_8036.jpg",
    },
    {
      "header": "Revelstoke",
      "description": "Looking back on the town.",
      "left_image": "mt-begbie/IMG_8022.jpg",
      "right_image": null,
    },
    {
      "header": "Peak",
      "description": "A glacier stands between the hiker and the peak.",
      "left_image": null,
      "right_image": "mt-begbie/IMG_7989.jpg",
    },
  ],



  "mont-nixon": [
    {
      "header": "Viewpoint #1",
      "description": "You can see these mountains with bulbous green peaks from the first viewpoint.",
      "left_image": null,
      "right_image": "mont-nixon/IMG_2304.jpg",
    },
    {
      "header": "Mont Nixon",
      "description": "This is still at viewpoint #1. The granite cliffs belong to Mont Nixon, which is where the trail leads.",
      "left_image": "mont-nixon/IMG_2305.jpg",
      "right_image": null,
    },
    {
      "header": "The Big View",
      "description": "All of the viewpoints are nice--I think there are four or five of them--but this is the bigget view of the landscape at the top.",
      "left_image": null,
      "right_image": "mont-nixon/IMG_2312.jpg",
    },
    {
      "header": "The Better Side",
      "description": "The last viewpoint provides the best shot of a granite cliff on Mont Nixon.",
      "left_image": "mont-nixon/IMG_2325.jpg",
      "right_image": null,
    },
    {
      "header": "Shelter",
      "description": "A big tree is protected by two tall rocks surrounding it.",
      "left_image": null,
      "right_image": "mont-nixon/IMG_2329.jpg",
    },
  ],



  "six-glaciers": [
    {
      "header": "Lake Louise",
      "description": "Is only a 9 on a cloudy day.",
      "left_image": null,
      "right_image": "six-glaciers/IMG_2110.jpg",
    },
    {
      "header": "The Teahouse",
      "description": "A potential stop for tea and deserts, but the views are ahead.",
      "left_image": "six-glaciers/IMG_2112.jpg",
      "right_image": null,
    },
    {
      "header": "The Plain of Six Glaciers",
      "description": "Looking back from a ridge at Lake Louise and the ski resort.",
      "left_image": null,
      "right_image": "six-glaciers/IMG_2117.jpg",
    },
    {
      "header": "End of the Road",
      "description": "The trail ends beneath steep mountains.",
      "left_image": "six-glaciers/IMG_2124.jpg",
      "right_image": null,
    },
  ],



  "grotto-mtn": [
    {
      "header": "Morning In The Valley",
      "description": "The trailhead is on the edge of Canmore.",
      "left_image": null,
      "right_image": "grotto-mtn/IMG_1301.jpg",
    },
    {
      "header": "Tough Trees",
      "description": "Pines grow on the steep, rocky slope.",
      "left_image": "grotto-mtn/IMG_1334.jpg",
      "right_image": null,
    },
    {
      "header": "Fascinating Rock",
      "description": "The rocks are fascinating. I saw orange moses I have never seen before growing on the dense, hard rocks, some of which was fossilized.",
      "left_image": null,
      "right_image": "grotto-mtn/IMG_1308.jpg",
    },
    {
      "header": "Views of Canmore",
      "description": "You can look back at Canmore from just about every where on the trail.",
      "left_image": "grotto-mtn/IMG_1321.jpg",
      "right_image": null,
    },
    {
      "header": "Praries On The Horizon",
      "description": "You can see past the eastern-most mountains to the praries and skyscrapers in Calgary from the top.",
      "left_image": null,
      "right_image": "grotto-mtn/IMG_1322.jpg",
    },
  ],



  "cory-pass": [
    {
      "header": "Peaceful Pine Forests",
      "description": "The dry, sparse pine forests east of Lake Louise can be so warm, quiet, and peaceful.",
      "left_image": null,
      "right_image": "cory-pass/IMG_1086.jpg",
    },
    {
      "header": "Character",
      "description": "The ancient, carved mountains show their age",
      "left_image": "cory-pass/IMG_1088.jpg",
      "right_image": null,
    },
    {
      "header": "Simplicity",
      "description": "Another special aspect of the eastern Rockies are the simple, transparent landscapes of rock and pine. The big, bushy forests of BC contain so much life that it feels impossible to take it all in from a mountain peak.",
      "left_image": null,
      "right_image": "cory-pass/IMG_1095.jpg",
    },
    {
      "header": "A Scramble Up Mt. Edith",
      "description": "Magnificant views of this towering peak are achieved from Mt. Edith.",
      "left_image": "cory-pass/IMG_1117.jpg",
      "right_image": null,
    },
    {
      "header": "Enter",
      "description": "Hike up and over the pass and enter a mountain cathedral.",
      "left_image": null,
      "right_image": "cory-pass/IMG_1121.jpg",
    },
    {
      "header": "The Pass",
      "description": "Only good can pass through such a grand landscape.",
      "left_image": "cory-pass/IMG_1124.jpg",
      "right_image": null,
    },
    {
      "header": "Woody Mushroom",
      "description": "I love mushrooms.",
      "left_image": null,
      "right_image": "cory-pass/IMG_1132.jpg",
    },
  ],



  "ha-ling": [
    {
      "header": "Miner's Peak",
      "description": "After hiking up the super busy trail, I first went up Miner's Peak--the one in the foreground.",
      "left_image": null,
      "right_image": "ha-ling/IMG_1082.jpg",
    },
    {
      "header": "Ha Ling",
      "description": "Next, I dipped down and up Ha Ling. Looking closely, you can the mass of little people standing at the top.",
      "left_image": "ha-ling/IMG_1076.jpg",
      "right_image": null,
    },
    {
      "header": "Canmore",
      "description": "Of course, you have views of Canmore and the Bow Valley from the top.",
      "left_image": null,
      "right_image": "ha-ling/IMG_1080.jpg",
    },
  ],



  "viking-ridge": [
    {
      "header": "Where The Grizzly Bears Are",
      "description": "No bears showed up for me.",
      "left_image": null,
      "right_image": "viking-ridge/IMG_0921.jpg",
    },
    {
      "header": "Encircled",
      "description": "The ridge surrounds the pond beneath it.",
      "left_image": "viking-ridge/IMG_0926.jpg",
      "right_image": null,
    },
    {
      "header": "Ridge Wall",
      "description": "The ridge wall looks medieval.",
      "left_image": null,
      "right_image": "viking-ridge/IMG_0931.jpg",
    },
    {
      "header": "The Valley",
      "description": "The view of the neighbouring valley is wide open.",
      "left_image": "viking-ridge/IMG_0943.jpg",
      "right_image": null,
    },
    {
      "header": "Blue Mountains",
      "description": "The landscape was dramatic on an overcast day.",
      "left_image": null,
      "right_image": "viking-ridge/IMG_0928.jpg",
    },
  ],



  "seaton-ridge": [
    {
      "header": "Through The Forest",
      "description": "",
      "left_image": null,
      "right_image": "seaton-ridge/IMG_0905.jpg",
    },
    {
      "header": "Up The Ridge",
      "description": "",
      "left_image": "seaton-ridge/IMG_0718.jpg",
      "right_image": null,
    },
    {
      "header": "To The Top",
      "description": "",
      "left_image": null,
      "right_image": "seaton-ridge/IMG_0728.jpg",
    },
    {
      "header": "Grey v. Green",
      "description": "",
      "left_image": "seaton-ridge/IMG_0727.jpg",
      "right_image": null,
    },
    {
      "header": "Back Down",
      "description": "",
      "left_image": null,
      "right_image": "seaton-ridge/IMG_0731.jpg",
    },
  ],



  "maroon-mtn": [
    {
      "header": "Tall Trees",
      "description": "The trailhead is at the end of a tight, bumpy gravel road. You immediately cross a foot-bridge and then walk through a tall forest.",
      "left_image": null,
      "right_image": "maroon-mtn/IMG_0667.jpg",
    },
    {
      "header": "Mars",
      "description": "At the top, you find yourself on another planet.",
      "left_image": "maroon-mtn/IMG_0680.jpg",
      "right_image": null,
    },
    {
      "header": "Neighbours",
      "description": "There are nice views of the mountains next door.",
      "left_image": null,
      "right_image": "maroon-mtn/IMG_0689.jpg",
    },
    {
      "header": "Pools",
      "description": "On the plateau, there are many pools.",
      "left_image": "maroon-mtn/IMG_0691.jpg",
      "right_image": null,
    },
    {
      "header": "Geometry",
      "description": "These hardy geometric plants were popping out of the moss.",
      "left_image": null,
      "right_image": "maroon-mtn/IMG_0704.jpg",
    },
    {
      "header": "Antler",
      "description": "",
      "left_image": "maroon-mtn/IMG_0708.jpg",
      "right_image": null,
    },
  ],



  "silvern-lake": [
    {
      "header": "Two Looks",
      "description": "The snow was deep on May 24th. By July 1st, the trail was dry.",
      "left_image": "silvern-lake/IMG_0119.jpg",
      "right_image": "silvern-lake/IMG_0519.jpg",
    },
    {
      "header": "Spiral Mountain",
      "description": "The twisted mountain ends at its pointy peak.",
      "left_image": "silvern-lake/IMG_0126.jpg",
      "right_image": "silvern-lake/IMG_0527.jpg",
    },
    {
      "header": "Between Three Mountains",
      "description": "Three mountains surround this cozy and lively plateau. This land is definitely work protecting. I saw more wildlife and flowers here than on any other hike in the summer that I was here.",
      "left_image": "silvern-lake/IMG_0142.jpg",
      "right_image": "silvern-lake/IMG_0528.jpg",
    },
    {
      "header": "Mountain Goats",
      "description": "This is the first lake along the trail. You can see three white specs in the meadow across the lake if you zoom into this photo. They are mountain goats. There was a whole herd of them moving around the lake, grazing.",
      "left_image": "silvern-lake/IMG_0540.jpg",
      "right_image": null,
    },
    {
      "header": "Silvern Lake",
      "description": "Past the first lake and around a bend, sits Silvern Lake. I saw a beaver building his dam, seen to the right-side of the lake in this photo, and a grizzly bear and cub at the left shore that I had hiked from a few minutes later.",
      "left_image": null,
      "right_image": "silvern-lake/IMG_0557.jpg",
    },
    {
      "header": "Wildflowers",
      "description": "Wildflowers in full-bloom lined the marshy lake. Bees were floating from flower to flower.",
      "left_image": "silvern-lake/IMG_0565.jpg",
      "right_image": null,
    },
    {
      "header": "Colourful Mountains",
      "description": "I camped on a flat part of the ridge next to this colourful mountain-side, which belongs to Hudson Bay Mountain.",
      "left_image": null,
      "right_image": "silvern-lake/IMG_0568.jpg",
    },
    {
      "header": "Bulkley Valley",
      "description": "This is the big view from colourful mountain-side location where I took the previous photo.",
      "left_image": "silvern-lake/IMG_0576.jpg",
      "right_image": null,
    },
    {
      "header": "Jagged Peak",
      "description": "That pointy, jagged peak in the center of this photo is one of the coolest peaks in the Bulkley Valley. You can see it wide and far, from town and the trails. It has some dark magic. It might be a gathering place for witches. I'm pretty sure there are some in these parts.",
      "left_image": null,
      "right_image": "silvern-lake/IMG_0585.jpg",
    },
  ],



  "": [
    {
      "header": "",
      "description": "",
      "left_image": "/IMG_.jpg",
      "right_image": null,
    },
  ],

}

customElements.define('my-day-trip-timeline', DayTripTimeline);