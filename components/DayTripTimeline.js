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

    let style = `
      <style>

      .day-trip-timeline {
        margin-top: 10px;
      }
    
      @media (min-width: 576px) {
        /* image left */
        .day-trip-timeline .left-block img {
          border-top-left-radius: 10px; 
          border-bottom-left-radius: 10px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-right: 0.75px solid white;
          width: 100%; 
          object-fit: contain; 
        }
    
        /* image right */
        .day-trip-timeline .right-block img {
          border-top-right-radius: 10px; 
          border-bottom-right-radius: 10px; 
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-left: 0.75px solid white;
          width: 100%; 
          object-fit: contain; 
        }
    
        /* text left */
        .day-trip-timeline .left-block .day-trip-timeline-text {
          border-top-left-radius: 10px; 
          border-bottom-left-radius: 10px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-right: 0.75px solid white;
          background: rgba(0, 0, 0, 0.2);
          padding: 10px;
          height: 100%;
        }
    
        /* text right */
        .day-trip-timeline .right-block .day-trip-timeline-text {
          border-top-right-radius: 10px; 
          border-bottom-right-radius: 10px; 
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-left: 0.75px solid white;
          background: rgba(0, 0, 0, 0.2);
          padding: 10px;
          height: 100%;
        }
    
        /* image left with text beneath it */
        .day-trip-timeline .left-block .text-below img {
          border-top-left-radius: 10px; 
          border-bottom-left-radius: 0px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-right: 0.75px solid white;
          width: 100%; 
          object-fit: contain; 
        }
    
        /* image right with text beneath it */
        .day-trip-timeline .right-block .text-below img {
          border-top-right-radius: 10px; 
          border-bottom-right-radius: 0px; 
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-left: 0.75px solid white;
          width: 100%; 
          object-fit: contain; 
        }
    
        /* text bottom */
        .day-trip-timeline .bottom-block .day-trip-timeline-text {
          border-bottom-right-radius: 10px; 
          border-bottom-left-radius: 10px; 
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.2);
          padding: 10px;
          height: 100%;
        }
    
        /* connector line */
        .day-trip-timeline .connector {
          height: 20px; 
          background: linear-gradient(white, white) no-repeat center/1.5px 100%;
        }
      }
    
      @media (max-width: 575px) {
        /* move image to top for single-image item */
        .day-trip-timeline .left-block img,
        .day-trip-timeline .right-block img {
          border-top-left-radius: 10px; 
          border-top-right-radius: 10px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-bottom: none;
          width: 100%; 
          object-fit: contain; 
        }
    
        /* transformation from right to middle on phones for two-image items */
        .day-trip-timeline .right-block .text-below img {
          border-top-left-radius: 0px; 
          border-top-right-radius: 0px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-bottom: none;
          width: 100%; 
          object-fit: contain; 
        }
    
        /* move text to bottom in all cases */
        .day-trip-timeline .right-block .day-trip-timeline-text,
        .day-trip-timeline .left-block .day-trip-timeline-text,
        .day-trip-timeline .bottom-block .day-trip-timeline-text {
          border-bottom-right-radius: 10px; 
          border-bottom-left-radius: 10px; 
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          background-color: rgba(0, 0, 0, 0.2);
          padding: 10px;
        }
    
        .day-trip-timeline .connector {
          height: 20px; 
          background: linear-gradient(white, white) no-repeat center/1.5px 100%
        }
      }

      </style>
    `;

    this.innerHTML = style + `
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
      "description": "Mont Noire is next to Lac Archambault. St. Donat is at the other end of the lake.",
      "left_image": null,
      "right_image": "montagne-noire/IMG_2342.jpg",
    },
    {
      "header": "Lac Lézard",
      "description": "There are two lakes on the hike and this is the first one I passed.",
      "left_image": "montagne-noire/IMG_2343.jpg",
      "right_image": null,
    },
    {
      "header": "Airplane Crash Site",
      "description": "A military airplane, called The Liberator, crashed on the mountain, killing 24 soldiers.",
      "left_image": null,
      "right_image": "montagne-noire/IMG_2344.jpg",
    },
    {
      "header": "Memorial",
      "description": "There is a memorial site for the soldiers with a lookout tower.",
      "left_image": "montagne-noire/IMG_2347.jpg",
      "right_image": null,
    },
    {
      "header": "Memorial Lookout",
      "description": "The view from the memorial lookout. Theres a much bigger lookout tower at the peak.",
      "left_image": null,
      "right_image": "montagne-noire/IMG_2351.jpg",
    },
    {
      "header": "Lookout At The Peak",
      "description": "The lookout tower at the peak has views of green mountains.",
      "left_image": "montagne-noire/IMG_2361.jpg",
      "right_image": null,
    },
    {
      "header": "The Second Lake",
      "description": "The second Lake on the trail isn't far from the peak.",
      "left_image": null,
      "right_image": "montagne-noire/IMG_2366.jpg",
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
      "description": "Theres a plateau at the top of the treeline, just before the ascent.",
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
      "description": "The Hike gets steep past Sentinel Pass.",
      "left_image": null,
      "right_image": "mt-temple/IMG_1250.jpg",
    },
    {
      "header": "Mountainside",
      "description": "Time and gravity against the mountain.",
      "left_image": "mt-temple/IMG_1248.jpg",
      "right_image": null,
    },
    {
      "header": "Nearing The Top",
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
      "header": "Look at Me!",
      "description": "I'm on top of it. The mountain could barely hold me.",
      "left_image": null,
      "right_image": "mt-temple/IMG_1222.jpg",
    },
    {
      "header": "Moraine Lake",
      "description": "A Rocky Mountain icon.",
      "left_image": "mt-temple/IMG_1233.jpg",
      "right_image": null,
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
      "description": "Beautiful Lake Louise on a cloudy spring day.",
      "left_image": null,
      "right_image": "six-glaciers/IMG_2110.jpg",
    },
    {
      "header": "Pointy Peak",
      "description": "The view of a steep peak on the other side of a pass.",
      "left_image": "six-glaciers/IMG_2111.jpg",
      "right_image": null,
    },
    {
      "header": "The Teahouse",
      "description": "The teahouse on the other end of Lake Louise.",
      "left_image": null,
      "right_image": "six-glaciers/IMG_2112.jpg",
    },
    {
      "header": "The Plain of Six Glaciers",
      "description": "I hiked past the teahouse and up a ridge on The Plain. This is the view looking back at Lake Louise.",
      "left_image": "six-glaciers/IMG_2117.jpg",
      "right_image": null,
    },
    {
      "header": "End of the Ridge",
      "description": "A steep peak seen from the end of the trail up the ridge.",
      "left_image": null,
      "right_image": "six-glaciers/IMG_2123.jpg",
    },
    {
      "header": "End of the Ridge",
      "description": "The ridge runs into steep mountain sides.",
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
      "description": "Student Ranger Javier and I walked through young forests and cut blocks.",
      "left_image": null,
      "right_image": "seaton-ridge/IMG_0905.jpg",
    },
    {
      "header": "Up The Ridge",
      "description": "We walked up the long, spiny ridge.",
      "left_image": "seaton-ridge/IMG_0718.jpg",
      "right_image": null,
    },
    {
      "header": "To The Top",
      "description": "We stood on the peak to look upon the land. There was lots of mountain goat hair and we did see some goats below.",
      "left_image": null,
      "right_image": "seaton-ridge/IMG_0728.jpg",
    },
    {
      "header": "Grey v. Green",
      "description": "The land was many shades of green at war with the grey, falling rock.",
      "left_image": "seaton-ridge/IMG_0727.jpg",
      "right_image": null,
    },
    {
      "header": "Back Down",
      "description": "We walked back down the spine and continued to take in the big views.",
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
      "description": "Three mountains surround this cozy and lively plateau. I saw more wildlife and flowers here than on any other hike in 2021.",
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
      "description": "That pointy, jagged peak in the center of this photo is one of the coolest peaks in the Bulkley Valley. You can see it wide and far, from town and the trails. It has some dark magic. It might be a gathering place for witches. I believe they live in these parts.",
      "left_image": null,
      "right_image": "silvern-lake/IMG_0585.jpg",
    },
  ],



  "gunsight": [
    {
      "header": "Creek",
      "description": "Snow melting off the top of the mountain created a fast-flowing creek through the bushy coastal forest.",
      "left_image": null,
      "right_image": "gunsight/IMG_0353.jpg",
    },
    {
      "header": "Sand",
      "description": "A section of the trail was sand.",
      "left_image": "gunsight/IMG_0393.jpg",
      "right_image": null,
    },
    {
      "header": "Abandoned Hatchery",
      "description": "A side-trail leads to what's left of an abandoned, overgrown fish hatchery.",
      "left_image": null,
      "right_image": "gunsight/IMG_0356.jpg",
    },
    {
      "header": "Waterfall",
      "description": "The fast-flowing water smoothened the rock beneath it.",
      "left_image": "gunsight/IMG_0359.jpg",
      "right_image": null,
    },
    {
      "header": "Winter in June",
      "description": "The top of the mountain was very snowy on June 17th.",
      "left_image": null,
      "right_image": "gunsight/IMG_0370.jpg",
    },
    {
      "header": "Frozen Lake",
      "description": "Snow covered the lake.",
      "left_image": "gunsight/IMG_0376.jpg",
      "right_image": null,
    },
    {
      "header": "Mountains",
      "description": "There is an open-view of the mountains for the lake.",
      "left_image": null,
      "right_image": "gunsight/IMG_0382.jpg",
    },
  ],



  "mccrae-peak": [
    {
      "header": "Akolkolex Falls",
      "description": "I biked from Revelstoke to the trailhead. Akolkolex Falls is on the road toward McCrae Peak. A series of waterfalls flow through deep canyons that lead to the Columbia River.",
      "left_image": null,
      "right_image": "mccrae-peak/IMG_8200.jpg",
    },
    {
      "header": "",
      "description": "Another waterfall on the Akolkolex Falls trail.",
      "left_image": "mccrae-peak/IMG_8217.jpg",
      "right_image": null,
    },
    {
      "header": "",
      "description": "The beautful canyon that contains the water.",
      "left_image": null,
      "right_image": "mccrae-peak/IMG_8220.jpg",
    },
    {
      "header": "",
      "description": "Where the falls merge with the Columbia River.",
      "left_image": "mccrae-peak/IMG_8238.jpg",
      "right_image": null,
    },
    {
      "header": "Mushroom",
      "description": "An interesting mushroom I encountered by the falls.",
      "left_image": null,
      "right_image": "mccrae-peak/IMG_8204.jpg",
    },
    {
      "header": "Riding To The Trail",
      "description": "The trailhead is near the top of the mountain. The ride up the steep, rocky logging road was the hard work of the day. The views of the Columbia Valley were big the whole way up.",
      "left_image": "mccrae-peak/IMG_8249.jpg",
      "right_image": null,
    },
    {
      "header": "The Trail",
      "description": "The hike begins near the treeline. Near the start, I passed a couple loads of fresh, purple bear shit in the short section through the forest, which led to McCrae Lake Rec Site and then the mossy plateau shown in this photo.",
      "left_image": null,
      "right_image": "mccrae-peak/IMG_8266.jpg",
    },
    {
      "header": "",
      "description": "The section of the trail up to the peak was tough. It followed a ridge across snow and jagged rock.",
      "left_image": "mccrae-peak/IMG_8280.jpg",
      "right_image": null,
    },
    {
      "header": "",
      "description": "This final section to the peak was a scramble up steep, loose-rock. It really freaked me out.",
      "left_image": null,
      "right_image": "mccrae-peak/IMG_8272.jpg",
    },
    {
      "header": "",
      "description": "After the tough scramble, a plateau leads gently to the peak. I saw this merry band of fluffy birds on top of the mountain. I have never seen birds like this before.",
      "left_image": "mccrae-peak/IMG_8296.jpg",
      "right_image": null,
    },
    {
      "header": "",
      "description": "The views of the Columbia Valley from the peak were glorious. Sun beams shot through the clouds. It was late in the afternoon and the sun had set by the time I was back on my bike.",
      "left_image": "mccrae-peak/IMG_8307.jpg",
      "right_image": "mccrae-peak/IMG_8309.jpg",
    },
  ],



  "mt-cartier": [
    {
      "header": "Cabin In The Woods",
      "description": "There is a cabin in the forest a ways up the trail.",
      "left_image": null,
      "right_image": "mt-cartier/IMG_8070.jpg",
    },
    {
      "header": "Exposed Switchbacks",
      "description": "Once out of the forest, switchbacks cross the steep, sunny slope.",
      "left_image": "mt-cartier/IMG_8080.jpg",
      "right_image": null,
    },
    {
      "header": "Hut On The Hill",
      "description": "A weather hut sits high, just beneath the peak.",
      "left_image": null,
      "right_image": "mt-cartier/IMG_8090.jpg",
    },
    {
      "header": "On The Edge",
      "description": "The trail wraps tightly around the tip of the mountain.",
      "left_image": "mt-cartier/IMG_8094.jpg",
      "right_image": null,
    },
    {
      "header": "Weather Hut",
      "description": "The sturdy weather hut at the top offers shelter.",
      "left_image": null,
      "right_image": "mt-cartier/IMG_8095.jpg",
    },
    {
      "header": "Wilderness",
      "description": "Seen to the east from the peak.",
      "left_image": "mt-cartier/IMG_8109.jpg",
      "right_image": null,
    },
    {
      "header": "Columbia Valley",
      "description": "Seen to the west from the peak.",
      "left_image": null,
      "right_image": "mt-cartier/IMG_8111.jpg",
    },
    {
      "header": "Back Down The Mountain",
      "description": "Wealthier men than I heli to the top and mountain bike down. If I didn't know any better, I, too, might believe money can't buy happiness.",
      "left_image": "mt-cartier/IMG_8132.jpg",
      "right_image": null,
    },
    {
      "header": "Wildflowers",
      "description": "Summer's gift from the ground.",
      "left_image": null,
      "right_image": "mt-cartier/IMG_8133.jpg",
    },
    {
      "header": "Paraglider",
      "description": "Some folks just know how to have fun.",
      "left_image": "mt-cartier/IMG_8134.jpg",
      "right_image": null,
    },
    {
      "header": "Mushroom",
      "description": "A weathered mushroom in the final days of summer.",
      "left_image": null,
      "right_image": "mt-cartier/IMG_8136.jpg",
    },
    {
      "header": "Dusk",
      "description": "I biked home from the base at dusk. Don't let the rest of them fool you. <i>This</i> is paradise.",
      "left_image": "mt-cartier/IMG_8148.jpg",
      "right_image": null,
    },
  ],



  "mt-revelstoke": [
    {
      "header": "Monashee Lookout",
      "description": "I biked over to the park on the edge of town and hiked up to Monashee Lookout.",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8708.jpg",
    },
    {
      "header": "Lindmark Trail",
      "description": "I continued up the winding Lindmark Trail, which had snow on it at higher elevations.",
      "left_image": "mt-revelstoke/IMG_8727.jpg",
      "right_image": null,
    },
    {
      "header": "Bear Prints",
      "description": "There were bear prints in the snow on the trail. It took me a long time before I noticed that they were bear prints, and not from other hikers, because the prints had melted into big round imprints at lower elevations. I was thinking, 'damn, this hiker has some big feet'.",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8762.jpg",
    },
    {
      "header": "Cedar Collective",
      "description": "Three mighty cedars stand tall.",
      "left_image": "mt-revelstoke/IMG_8774.jpg",
      "right_image": null,
    },
    {
      "header": "Mighty Mushroom",
      "description": "There were some massive mushrooms bursting through the earth.",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8714.jpg",
    },
    {
      "header": "Dank AF",
      "description": "If this shroom were cheese it would be some expensive stuff.",
      "left_image": "mt-revelstoke/IMG_8718.jpg",
      "right_image": null,
    },
    {
      "header": "Purity",
      "description": "These three shrooms must be mormon.",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8723.jpg",
    },
    {
      "header": "Bodybuilder",
      "description": "This one had a thick neck from headbutting it's way through the ground.",
      "left_image": "mt-revelstoke/IMG_8734.jpg",
      "right_image": null,
    },
    {
      "header": "The Last Thing I'll Do",
      "description": "This trio swore to get to the surface or die trying.",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8746.jpg",
    },
    {
      "header": "Summer's End",
      "description": "This shroom faces his fate as the seasons change.",
      "left_image": "mt-revelstoke/IMG_8747.jpg",
      "right_image": null,
    },
    {
      "header": "The Lagoon",
      "description": "This is the fertile shroom lagoon. I could have easily missed it but for the gentle whispers of it's inhabitants.",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8867.jpg",
    },
    {
      "header": "Peaceful Invasion",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8739.jpg",
      "right_image": null,
    },
    {
      "header": "Styroshroom",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8826.jpg",
    },
    {
      "header": "Neighbours",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8831.jpg",
      "right_image": null,
    },
    {
      "header": "Leopardshrooms",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8834.jpg",
    },
    {
      "header": "Groovyshroom",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8838.jpg",
      "right_image": null,
    },
    {
      "header": "Thiccshroom",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8839.jpg",
    },
    {
      "header": "Earshroom",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8842.jpg",
      "right_image": null,
    },
    {
      "header": "Sting-ray-shroom",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8843.jpg",
    },
    {
      "header": "Coral",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8845.jpg",
      "right_image": null,
    },
    {
      "header": "Spoutshroom",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8848.jpg",
    },
    {
      "header": "Cartoonshroom",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8852.jpg",
      "right_image": null,
    },
    {
      "header": "Shinyshroom",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8854.jpg",
    },
    {
      "header": "Shitake",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8855.jpg",
      "right_image": null,
    },
    {
      "header": "Shroom Family",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8856.jpg",
    },
    {
      "header": "Sunshroom",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8857.jpg",
      "right_image": null,
    },
    {
      "header": "Ain't No Branch High Enough",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8858.jpg",
    },
    {
      "header": "Matteshroom",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8859.jpg",
      "right_image": null,
    },
    {
      "header": "Little Puffshrooms",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8861.jpg",
    },
    {
      "header": "Big Puffshrooms",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8860.jpg",
      "right_image": null,
    },
    {
      "header": "A Generous Host",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8865.jpg",
    },
    {
      "header": "Candle Wax",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8866.jpg",
      "right_image": null,
    },
    {
      "header": "Flexishroom",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8869.jpg",
    },
    {
      "header": "Electrishroom",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8871.jpg",
      "right_image": null,
    },
    {
      "header": "Spidershroom",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8874.jpg",
    },
    {
      "header": "Roughshroom",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8875.jpg",
      "right_image": null,
    },
    {
      "header": "Balloonshroom",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8883.jpg",
    },
    {
      "header": "Pouroushroom",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8884.jpg",
      "right_image": null,
    },
    {
      "header": "Alienshroom",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8885.jpg",
    },
    {
      "header": "Eggshroom",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8886.jpg",
      "right_image": null,
    },
    {
      "header": "Vine",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8876.jpg",
    },
    {
      "header": "Scaredishroom",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8878.jpg",
      "right_image": null,
    },
    {
      "header": "Slendershroom",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8889.jpg",
    },
    {
      "header": "Simpleshroom",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8890.jpg",
      "right_image": null,
    },
    {
      "header": "Sleepishroom",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8891.jpg",
    },
    {
      "header": "Community",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8892.jpg",
      "right_image": null,
    },
    {
      "header": "Nastishroom",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8894.jpg",
    },
    {
      "header": "Bathshroom",
      "description": "",
      "left_image": "mt-revelstoke/IMG_8903.jpg",
      "right_image": null,
    },
    {
      "header": "Slimishroom",
      "description": "",
      "left_image": null,
      "right_image": "mt-revelstoke/IMG_8904.jpg",
    },
    {
      "header": "Revelstoke",
      "description": "After a thorough exploration of the shroom lagoon, I came back down to beautiful Revelstoke. I could sleep easy knowing the diverse mushroom kingdom was alive and well on Mt. Revelstoke.",
      "left_image": "mt-revelstoke/IMG_8912.jpg",
      "right_image": null,
    },
  ],



  "silver-king": [
    {
      "header": "Out Fur A Rip On A Bluebird Day",
      "description": "Babine Mountains Provincial Park is on the edge of Smithers, where I worked as a Student Ranger. I went up to Silver King Basin twice, once to clean and stock the Joe L'Orsa Cabin and once by bike on my own time.",
      "left_image": null,
      "right_image": "silver-king/IMG_0471.jpg",
    },
    {
      "header": "Silver King Basin",
      "description": "The Silver King Basin feeds the thrist of hikers, bikers, and rangers, alike.",
      "left_image": "silver-king/IMG_0472.jpg",
      "right_image": null,
    },
    {
      "header": "Hyland Pass",
      "description": "",
      "left_image": null,
      "right_image": "silver-king/IMG_0484.jpg",
    },
    {
      "header": "Nice Views",
      "description": "What more are you asking for?",
      "left_image": "silver-king/IMG_0487.jpg",
      "right_image": null,
    },
    {
      "header": "Stocking Wood",
      "description": "Some Rangers stocking some fire wood for the campers and cabiners.",
      "left_image": null,
      "right_image": "silver-king/IMG_0502.jpg",
    },
    {
      "header": "Campground",
      "description": "A campground with horse stalls caters to horse lovers and cowboys.",
      "left_image": "silver-king/IMG_0505.jpg",
      "right_image": null,
    },
    {
      "header": "Joe L'Orsa Cabin",
      "description": "If you can get your hands on $10 you can sleep in the cabin.",
      "left_image": null,
      "right_image": "silver-king/IMG_0508.jpg",
    },
    {
      "header": "Mine Shaft",
      "description": "Does beauty above imply beauty below? Sure it does.",
      "left_image": "silver-king/IMG_0767.jpg",
      "right_image": null,
    },
  ],



  "mt-becher": [
    {
      "header": "Cabin In The Woods",
      "description": "I passed this little cabin on one of the bike trails that led to the Mt. Becher trailhead from Courtenay.",
      "left_image": null,
      "right_image": "mt-becher/IMG_7534.jpg",
    },
    {
      "header": "Comox Lake",
      "description": "Imagine paragliding across that lake, from one mountain to another.",
      "left_image": "mt-becher/IMG_7569.jpg",
      "right_image": null,
    },
    {
      "header": "The Comox Valley",
      "description": "Life is hard for a valley girl.",
      "left_image": null,
      "right_image": "mt-becher/IMG_7573.jpg",
    },
    {
      "header": "Infinity Pool",
      "description": "If you look closely, it's like it has no edge.",
      "left_image": "mt-becher/IMG_7580.jpg",
      "right_image": null,
    },
    {
      "header": "The Top",
      "description": "And what a top it was.",
      "left_image": null,
      "right_image": "mt-becher/IMG_7594.jpg",
    },
    {
      "header": "Looping Back Down",
      "description": "I took the Boston Ridge route up and the Mt. Becher Trail down. Boston Ridge had better views.",
      "left_image": "mt-becher/IMG_7601.jpg",
      "right_image": null,
    },
    {
      "header": "Firepit from 1933",
      "description": "That's an old pit.",
      "left_image": null,
      "right_image": "mt-becher/IMG_7602.jpg",
    },
  ],



  "": [
    {
      "header": "",
      "description": "",
      "left_image": null,
      "right_image": "/IMG_.jpg",
    },
    {
      "header": "",
      "description": "",
      "left_image": "/IMG_.jpg",
      "right_image": null,
    },
  ],

}

customElements.define('my-day-trip-timeline', DayTripTimeline);