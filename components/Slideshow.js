class Slideshow extends HTMLElement {
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

        #slider-section {
          margin-top: 10px;
          margin-bottom: 10px;
          padding-top: 10px;
          padding-bottom: 5px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          background-color: rgba(0, 0, 0, 0.2);
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

        .slider-wrapper h2 {
          margin-top: -5px;
          margin-bottom: -10px !important;
        }
        
        .slide {
          width: auto;
          height: fit-content;
        }
        
        .slide img {
          width: 100%;
          height: 265px;
        }

        @media (max-width: 576px) {
          .slide img {
            width: 100%;
            height: 237px;
          }
        }

        .slide .caption {
          width: 100%; 
          height: auto;
          padding: 5px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          text-align: center;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.2);
        }
        
        #controls i {
          color: white;
          font-size: 1rem;
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

    let data = photos[this.data_id];

    this.innerHTML = style + `
      <section id="slider-section">
        <div class="container">
          <div class="subcontainer">
            <div class="slider-wrapper">
              <h2 class="text-center">Gallery</h2>
              <div class="slider">
                ${data.map((photo) => `
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
    `;
  }
}

const photos = {
  "mccrae-peak": [
    {
      image: "mccrae-peak/IMG_8200.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8204.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8205.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8206.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8208.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8210.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8217.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8220.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8225.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8226.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8232.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8238.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8241.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8243.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8244.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8246.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8247.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8248.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8249.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8252.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8253.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8254.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8256.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8258.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8259.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8260.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8262.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8268.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8272.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8275.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8276.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8280.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8281.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8290.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8291.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8296.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8301.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8304.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8305.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8307.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8308.jpg",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8309.jpg",
      caption: ""
    }
  ],



  "babine-lake": [
    {
      image: "babine-lake/64169084518__22C58F39-BA0E-4811-968D-82934B76049F.jpg",
      caption: "Main Street, Smithers"
    },
    {
      image: "babine-lake/IMG_9497.jpg", 
      caption: "Peterbuilt, Houston"
    },
    {
      image: "babine-lake/IMG_9500.jpg", 
      caption: "Cow Pen"
    },
    {
      image: "babine-lake/IMG_9503.jpg", 
      caption: "Grazing"
    },
    {
      image: "babine-lake/IMG_9504.jpg", 
      caption: "Babine Lake Sign"
    },
    {
      image: "babine-lake/IMG_9506.jpg", 
      caption: "Shore"
    },
    {
      image: "babine-lake/IMG_9509.jpg", 
      caption: "Red Bluffs"
    },
    {
      image: "babine-lake/IMG_9510.jpg", 
      caption: "Red Bluffs Trail Viewpoint"
    },
    {
      image: "babine-lake/IMG_9511.jpg", 
      caption: "Beach"
    },
    {
      image: "babine-lake/IMG_9519.jpg", 
      caption: "Roots"
    },
    {
      image: "babine-lake/IMG_9520.jpg", 
      caption: "Babine Lake"
    },
    {
      image: "babine-lake/IMG_9525.jpg", 
      caption: "Dusk On The Beach"
    },
    {
      image: "babine-lake/IMG_9527.jpg", 
      caption: "Ripple"
    },
    {
      image: "babine-lake/IMG_9532.jpg", 
      caption: "Still Water"
    },
    {
      image: "babine-lake/IMG_9533.jpg", 
      caption: "Babine Lake Rd"
    },
    {
      image: "babine-lake/IMG_9538.jpg", 
      caption: "A Cow Being A Cow"
    },
    {
      image: "babine-lake/IMG_9540.jpg", 
      caption: "Alpine Air"
    },
  ],



  "begbie-falls": [
    {
      image: "begbie-falls/IMG_3712.jpg",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_3717.jpg",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_3720.jpg",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_3778.jpg",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_3791.jpg",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_8340.jpg",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_8346.jpg",
      caption: "Form Is Everything"
    },
    {
      image: "begbie-falls/IMG_8348.jpg",
      caption: "Aerodynamics"
    },
    {
      image: "begbie-falls/IMG_8358.jpg",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_8359.jpg",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_8360.jpg",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_8371.jpg",
      caption: "Take one step forward"
    },
    {
      image: "begbie-falls/IMG_8374.jpg",
      caption: "... and don't look back"
    },
    {
      image: "begbie-falls/IMG_8377.jpg",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_8378.jpg",
      caption: ""
    },
  ],



  "brewster-lake": [
    {
      image: "brewster-lake/IMG_5557.jpg",
      caption: "Brewster Lake"
    },
    {
      image: "brewster-lake/IMG_5561.jpg",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5565.jpg",
      caption: "My campsite on Brewster Lake"
    },
    {
      image: "brewster-lake/IMG_5570.jpg",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5585.jpg",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5594.jpg",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5603.jpg",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5605.jpg",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5610.jpg",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5618.jpg",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5619.jpg",
      caption: "Bend in the Road"
    },
    {
      image: "brewster-lake/IMG_5628.jpg",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5631.jpg",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5634.jpg",
      caption: "My Campsite on Campbell Lake"
    },
    {
      image: "brewster-lake/IMG_5635.jpg",
      caption: ""
    }
  ],



  "comox-lake": [
    {
      image: "comox-lake/IMG_6286.jpg",
      caption: ""
    },
    {
      image: "comox-lake/IMG_6289.jpg",
      caption: ""
    },
    {
      image: "comox-lake/IMG_6292.jpg",
      caption: ""
    },
    {
      image: "comox-lake/IMG_6300.jpg",
      caption: ""
    },
    {
      image: "comox-lake/IMG_6302.jpg",
      caption: "The view from my campsite"
    },
    {
      image: "comox-lake/IMG_6305.jpg",
      caption: ""
    },
    {
      image: "comox-lake/IMG_6310.jpg",
      caption: ""
    },
    {
      image: "comox-lake/IMG_6325.jpg",
      caption: ""
    },
    {
      image: "comox-lake/IMG_6328.jpg",
      caption: ""
    },
    {
      image: "comox-lake/IMG_6331.jpg",
      caption: ""
    },
    {
      image: "comox-lake/IMG_6336.jpg",
      caption: ""
    }   
  ],



  "downie-creek": [
    {
      image: "downie-creek/IMG_8487.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8488.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8490.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8491.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8495.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8500.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8505.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8507.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8521.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8525.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8527.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8551.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8560.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8564.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8588.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8602.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8615.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8618.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8621.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8634.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8638.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8644.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8647.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8648.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8650.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8657.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8658.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8661.jpg", 
      caption: ""
    },
  ],



  "haida-gwaii": [
    {
      image: "haida-gwaii/IMG_0817.jpg",
      caption: "Roadside stop on the way to the Prince Rupert ferry"
    },
    {
      image: "haida-gwaii/IMG_0822.jpg",
      caption: "Entry"
    },
    {
      image: "haida-gwaii/IMG_0826.jpg",
      caption: "The vision, realized"
    },
    {
      image: "haida-gwaii/IMG_0827.jpg",
      caption: "All the beach"
    },
    {
      image: "haida-gwaii/IMG_0834.jpg",
      caption: "The edge of the world"
    },
    {
      image: "haida-gwaii/IMG_0837.jpg",
      caption: "Sun-bathing bike"
    },
    {
      image: "haida-gwaii/IMG_0838.jpg",
      caption: "On the beach"
    },
    {
      image: "haida-gwaii/IMG_0841.jpg",
      caption: "Sea bank"
    },
    {
      image: "haida-gwaii/IMG_0847.jpg",
      caption: "Mystical clouds"
    },
    {
      image: "haida-gwaii/IMG_0853.jpg",
      caption: "The Madill Steel Spar in Port Clements"
    },
    {
      image: "haida-gwaii/IMG_0856.jpg",
      caption: "Forest with a view"
    },
    {
      image: "haida-gwaii/IMG_0857.jpg",
      caption: "Land meets ocean"
    },
    {
      image: "haida-gwaii/IMG_0858.jpg",
      caption: "Low tide"
    },
    {
      image: "haida-gwaii/IMG_0859.jpg",
      caption: "The Golden Spruce Trail"
    },
    {
      image: "haida-gwaii/IMG_0860.jpg",
      caption: "We are better because this tree is standing"
    },
    {
      image: "haida-gwaii/IMG_0863.jpg",
      caption: "Smiling mushrooms"
    },
    {
      image: "haida-gwaii/IMG_0866.jpg",
      caption: "Toasted marshmallow"
    },
    {
      image: "haida-gwaii/IMG_0867.jpg",
      caption: "Entry"
    },
    {
      image: "haida-gwaii/IMG_0868.jpg",
      caption: "Queen Charlotte"
    },
    {
      image: "haida-gwaii/IMG_0869.jpg",
      caption: "Mystical fog"
    }
  ],



  "mtrl-sherbrooke": [
    {
      image: "mtrl-sherbrooke/IMG_2704.jpg",
      caption: "On the Jacques Cartier Bridge"
    },
    {
      image: "mtrl-sherbrooke/IMG_2707.jpg", 
      caption: "Corkscrew Foot Bridge"
    },
    {
      image: "mtrl-sherbrooke/IMG_2708.jpg", 
      caption: "Trains"
    },
    {
      image: "mtrl-sherbrooke/IMG_2709.jpg",
      caption: "St. Joseph Center"
    },
    {
      image: "mtrl-sherbrooke/IMG_2710.jpg", 
      caption: "La Route Verte"
    },
    {
      image: "mtrl-sherbrooke/IMG_2711.jpg", 
      caption: "Orchards"
    },
    {
      image: "mtrl-sherbrooke/IMG_2712.jpg",
      caption: "Le Tarbouche in Granby"
    },
    {
      image: "mtrl-sherbrooke/IMG_2713.jpg", 
      caption: "Leaving Granby"
    },
    {
      image: "mtrl-sherbrooke/IMG_2715.jpg", 
      caption: "Lac Boivin Fountain"
    },
    {
      image: "mtrl-sherbrooke/IMG_2717.jpg", 
      caption: "Yamaska River"
    },
    {
      image: "mtrl-sherbrooke/IMG_2718.jpg", 
      caption: "Choiniere Reservoir"
    },
    {
      image: "mtrl-sherbrooke/IMG_2720.jpg", 
      caption: "Yamaska River"
    },
    {
      image: "mtrl-sherbrooke/IMG_2724.jpg", 
      caption: "Telephone Lines"
    },
    {
      image: "mtrl-sherbrooke/IMG_2727.jpg", 
      caption: "La Route Verte"
    },
    {
      image: "mtrl-sherbrooke/IMG_2730.jpg", 
      caption: "Chem. de la Diligence"
    },
    {
      image: "mtrl-sherbrooke/IMG_2731.jpg", 
      caption: "Camping in Stukley"
    },
    {
      image: "mtrl-sherbrooke/IMG_2735.jpg", 
      caption: "Cow"
    },
    {
      image: "mtrl-sherbrooke/IMG_2736.jpg", 
      caption: "Bull"
    },
    {
      image: "mtrl-sherbrooke/IMG_2739.jpg", 
      caption: "Hills"
    },
    {
      image: "mtrl-sherbrooke/IMG_2740.jpg", 
      caption: "Eastman"
    },
    {
      image: "mtrl-sherbrooke/IMG_2742.jpg", 
      caption: "Étang aux Cerises, Viewpoint"
    },
    {
      image: "mtrl-sherbrooke/IMG_2744.jpg", 
      caption: "Saint Patrice Church"
    },
    {
      image: "mtrl-sherbrooke/IMG_2746.jpg", 
      caption: "Magog"
    },
    {
      image: "mtrl-sherbrooke/IMG_2748.jpg", 
      caption: "Leaving Magog"
    },
    {
      image: "mtrl-sherbrooke/IMG_2750.jpg", 
      caption: "La Route Verte"
    },
    {
      image: "mtrl-sherbrooke/IMG_2753.jpg", 
      caption: "Drummond Dam"
    },
    {
      image: "mtrl-sherbrooke/IMG_2755.jpg", 
      caption: "Parc Des Quatre-Pins"
    },
    {
      image: "mtrl-sherbrooke/IMG_2757.jpg", 
      caption: "Les chutes de Magog"
    },
    {
      image: "mtrl-sherbrooke/IMG_2763.jpg", 
      caption: "Pont Jacques-Cartier"
    },
    {
      image: "mtrl-sherbrooke/IMG_2764.jpg", 
      caption: "Main Street, Magog"
    },
    {
      image: "mtrl-sherbrooke/IMG_2771.jpg", 
      caption: "Sunset Over Lake Memphermagog"
    },
    {
      image: "mtrl-sherbrooke/IMG_2775.jpg", 
      caption: "Sailboats On Lake Memphermagog"
    },
    {
      image: "mtrl-sherbrooke/IMG_2781.jpg", 
      caption: "Leaving Magog"
    },
    {
      image: "mtrl-sherbrooke/IMG_2783.jpg", 
      caption: "Mont Orford"
    },
    {
      image: "../images/mtrl-sherbrooke/IMG_2789.jpg",
      caption: "Camping in Mont Orford National Park"
    },
    {
      image: "../images/mtrl-sherbrooke/IMG_2792.jpg",
      caption: "Cyclist Campground to the left of the trail"
    },
    {
      image: "mtrl-sherbrooke/IMG_2793.jpg", 
      caption: "La Route Verte Near Mont Orford"
    },
    {
      image: "mtrl-sherbrooke/IMG_2795.jpg", 
      caption: "Country Life"
    },
    {
      image: "mtrl-sherbrooke/IMG_2805.jpg", 
      caption: "Horse Farm"
    }
  ],



  "nanaimo-courtenay": [
    {
      image: "nanaimo-courtenay/IMG_5119.jpg",
      caption: "Bicycle repair"
    },
    {
      image: "nanaimo-courtenay/IMG_5120.jpg",
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5121.jpg",
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5122.jpg",
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5123.jpg",
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5131.jpg",
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5140.jpg",
      caption: "The river was tidal"
    },
    {
      image: "nanaimo-courtenay/IMG_5142.jpg",
      caption: "And I got wet"
    },
    {
      image: "nanaimo-courtenay/IMG_5145.jpg", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5149.jpg", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5150.jpg", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5154.jpg", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5157.jpg", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5158.jpg", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5160.jpg", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5162.jpg",
      caption: "Comox Lake"
    },
    {
      image: "nanaimo-courtenay/IMG_5221.jpg",
      caption: "The corner I lived on in Courtenay"
    }
  ],



  "nass-valley": [
    {
      image: "nass-valley/IMG_9592.jpg", 
      caption: "Cranberry Connector FSR"
    },
    {
      image: "nass-valley/IMG_9598.jpg", 
      caption: "Kiteen River"
    },
    {
      image: "nass-valley/IMG_9618.jpg", 
      caption: "Dragon Lake"
    },
    {
      image: "nass-valley/IMG_9625.jpg", 
      caption: "Dragon Lake"
    },
    {
      image: "nass-valley/IMG_9636.jpg", 
      caption: "Dragon Lake"
    },
    {
      image: "nass-valley/IMG_9647.jpg", 
      caption: "Dragon Lake Campground"
    },
    {
      image: "nass-valley/IMG_9650.jpg", 
      caption: "Dragon Lake Campground"
    },
    {
      image: "nass-valley/IMG_9651.jpg", 
      caption: "Sunshine"
    },
    {
      image: "nass-valley/IMG_9658.jpg",
      caption: "Dragon Lake at Dusk"
    },
    {
      image: "nass-valley/IMG_9667.jpg",
      caption: "Dragon Lake"
    },
    {
      image: "nass-valley/IMG_9673.jpg",
      caption: "My mobile home"
    },
    {
      image: "nass-valley/IMG_9675.jpg",
      caption: "Jungle creek"
    },
    {
      image: "nass-valley/IMG_9685.jpg",
      caption: "Jungle creek"
    },
    {
      image: "nass-valley/IMG_9690.jpg",
      caption: "Lava"
    },
    {
      image: "nass-valley/IMG_9692.jpg",
      caption: ""
    },
    {
      image: "nass-valley/IMG_9700.jpg",
      caption: "Ksi Sii Aks River"
    },
    {
      image: "nass-valley/IMG_9706.jpg",
      caption: "Ksi Sii Aks River"
    },
    {
      image: "nass-valley/IMG_9714.jpg",
      caption: "The beginnings of a forest"
    },
    {
      image: "nass-valley/IMG_9719.jpg",
      caption: "Red Columbine"
    },
    {
      image: "nass-valley/IMG_9727.jpg",
      caption: "Nass Valley"
    },
    {
      image: "nass-valley/IMG_9733.jpg",
      caption: "Directions to Gitwinksihlkw"
    },
    {
      image: "nass-valley/IMG_9749.jpg",
      caption: "The Nass River was redirected as a result of the lava flow"
    },
    {
      image: "nass-valley/IMG_9750.jpg",
      caption: "The best of The West"
    },
    {
      image: "nass-valley/IMG_9753.jpg",
      caption: "Aiyansh"
    },
    {
      image: "nass-valley/IMG_9758.jpg",
      caption: "Nass River"
    },
    {
      image: "nass-valley/IMG_9766.jpg",
      caption: "Nass River"
    },
    {
      image: "nass-valley/IMG_9773.jpg",
      caption: "Nass River"
    },
    {
      image: "nass-valley/IMG_9782.jpg",
      caption: "Gingolx Lookout Trail"
    },
    {
      image: "nass-valley/IMG_9787.jpg",
      caption: "Gingolx"
    },
    {
      image: "nass-valley/IMG_9802.jpg",
      caption: "Nisga'a Highway sign"
    },
    {
      image: "nass-valley/IMG_9804.jpg",
      caption: "Gingolx: Seafood Capital of The Nass"
    },
    {
      image: "nass-valley/IMG_9807.jpg",
      caption: "Nass River"
    },
    {
      image: "nass-valley/IMG_9811.jpg",
      caption: "Tropical Bird"
    },
    {
      image: "nass-valley/IMG_9819.jpg",
      caption: "Chill Spot"
    },
    {
      image: "nass-valley/IMG_9821.jpg",
      caption: "Furry Mountain"
    },
    {
      image: "nass-valley/IMG_9823.jpg",
      caption: "Bear Prints"
    },
    {
      image: "nass-valley/IMG_0080.jpg",
      caption: "Vetter Falls"
    },
    {
      image: "nass-valley/IMG_0083.jpg",
      caption: "Vetter Falls"
    },
    {
      image: "nass-valley/IMG_0086.jpg",
      caption: "Beaupre Falls"
    },
    {
      image: "nass-valley/IMG_0087.jpg",
      caption: "Drowned Forest"
    },
    {
      image: "nass-valley/IMG_0092.jpg",
      caption: "Kitsumkalum Lake"
    },
    {
      image: "nass-valley/IMG_0096.jpg",
      caption: "Kitsumkalum Lake"
    },
    {
      image: "nass-valley/IMG_0102.jpg",
      caption: "Kisumkalum Lake"
    },
    {
      image: "nass-valley/IMG_0117.jpg",
      caption: "Jesus was here"
    }
  ],



  "ptit-train": [
    {
      image: "ptit-train/IMG_2537.jpg",
      caption: "Marsh"
    },
    {
      image: "ptit-train/IMG_2538.jpg",
      caption: "More Marsh"
    },
    {
      image: "ptit-train/IMG_2540.jpg",
      caption: "Poutine"
    },
    {
      image: "ptit-train/IMG_2542.jpg",
      caption: "River trail"
    },
    {
      image: "ptit-train/IMG_2543.jpg",
      caption: "Campsite Next To The River"
    },
    {
      image: "ptit-train/IMG_2546.jpg",
      caption: "Train Station"
    },
    {
      image: "ptit-train/IMG_2550.jpg",
      caption: "It's All Marsh"
    },
    {
      image: "ptit-train/IMG_2551.jpg",
      caption: "Marsh eats forest"
    },
    {
      image: "ptit-train/IMG_2553.jpg",
      caption: "Barn"
    },
    {
      image: "ptit-train/IMG_2559.jpg",
      caption: "River"
    },
    {
      image: "ptit-train/IMG_2571.jpg",
      caption: "Tunnel Near St. Jerome"
    },
    {
      image: "ptit-train/IMG_2577.jpg",
      caption: "A Tree Wall"
    },
    {
      image: "ptit-train/church.jpg",
      caption: "St. Jerome's Cathedral"
    }
  ],



  "quadra-cortes": [
    {
      image: "quadra-cortes/IMG_6782.jpg",
      caption: "Fisherman's Wharf, Campbell River"
    },
    {
      image: "quadra-cortes/IMG_6787.jpg",
      caption: ""
    },
    {
      image: "quadra-cortes/IMG_6791.jpg",
      caption: "Morte Lake"
    },
    {
      image: "quadra-cortes/IMG_6813.jpg",
      caption: "Beeches Mountain"
    },
    {
      image: "quadra-cortes/IMG_6815.jpg",
      caption: "Beeches Mountain Peak"
    },
    {
      image: "quadra-cortes/IMG_6819.jpg",
      caption: "The beach at the end of Valdez Road"
    },
    {
      image: "quadra-cortes/IMG_6829.jpg",
      caption: "Surge Narrows Trail"
    },
    {
      image: "quadra-cortes/IMG_6830.jpg",
      caption: ""
    },
    {
      image: "quadra-cortes/IMG_6833.jpg",
      caption: ""
    },
    {
      image: "quadra-cortes/IMG_6834.jpg",
      caption: ""
    },
    {
      image: "quadra-cortes/IMG_6835.jpg",
      caption: "My campsite"
    },
    {
      image: "quadra-cortes/IMG_6839.jpg",
      caption: "Ferry to Cortes Island"
    },
    {
      image: "quadra-cortes/IMG_6848.jpg",
      caption: "Cortes Island Signage"
    },
    {
      image: "quadra-cortes/IMG_6851.jpg",
      caption: ""
    },
    {
      image: "quadra-cortes/IMG_6856.jpg",
      caption: "Squirrel Cove Dock"
    },
    {
      image: "quadra-cortes/IMG_6861.jpg",
      caption: "Eroding Car"
    },
    {
      image: "quadra-cortes/IMG_6866.jpg",
      caption: "Squirrel Cove Beach"
    },
    {
      image: "quadra-cortes/IMG_6868.jpg",
      caption: "Squirrel Cove Dock"
    },
    {
      image: "quadra-cortes/IMG_6875.jpg",
      caption: "Free VHS Tapes"
    },
    {
      image: "quadra-cortes/IMG_6877.jpg",
      caption: "Blind Creek Boat Ramp"
    },
    {
      image: "quadra-cortes/IMG_6903.jpg",
      caption: "Pollinator on Smelt Bay"
    },
    {
      image: "quadra-cortes/IMG_6913.jpg",
      caption: "Smelt Bay"
    },
    {
      image: "quadra-cortes/IMG_6932.jpg",
      caption: "Wal-De-Mark"
    },
    {
      image: "quadra-cortes/IMG_6936.jpg",
      caption: "Mansons Landing"
    },
    {
      image: "quadra-cortes/IMG_6950.jpg",
      caption: "Mansons Landing"
    },
    {
      image: "quadra-cortes/IMG_6954.jpg",
      caption: "Sand Dollars"
    },
    {
      image: "quadra-cortes/IMG_6958.jpg",
      caption: "Mansons Landing"
    },
    {
      image: "quadra-cortes/IMG_6963.jpg",
      caption: "Masons Landing"
    },
    {
      image: "quadra-cortes/IMG_6969.jpg",
      caption: ""
    },
    {
      image: "quadra-cortes/IMG_6970.jpg",
      caption: ""
    },
    {
      image: "quadra-cortes/IMG_6972.jpg",
      caption: ""
    },
    {
        image: "quadra-cortes/IMG_6975.jpg",
      caption: "Financial District, Quadra Island"
    },
  ],



  "san-josef-bay": [
    {
      image: "san-josef-bay/IMG_5234.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5236.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5243.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5245.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5254.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5296.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5300.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5303.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5309.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5313.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5326.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5333.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5340.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5352.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5353.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5363.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5384.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5387.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5396.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5400.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5406.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5411.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5416.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5421.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5422.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5425.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5434.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5441.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5454.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5459.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5461.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5462.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5469.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5471.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5472.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5473.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5475.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5477.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5481.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5484.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5485.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5486.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5492.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5495.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5497.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5499.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5509.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5510.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5515.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5519.jpg", 
      caption: ""
    }
  ],



  "texada": [
    {
      image: "texada/IMG_5777.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5788.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5797.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5800.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5806.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5832.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5839.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5841.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5848.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5856.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5862.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5871.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5872.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5873.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5878.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5885.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5890.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5893.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5941.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5960.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5963.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5966.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5974.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5992.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5994.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_6010.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_6015.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_6027.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_6029.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_6032.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_6040.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_6069.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_6080.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_6084.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_6090.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_6099.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_6103.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_6107.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_6110.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_6113.jpg", 
      caption: ""
    }
  ],



  "to-mtrl": [
    {
      image: "to-mtrl/IMG_4208.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4209.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4210.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4213.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4216.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4221.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4222.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4224.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4225.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4226.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4229.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4230.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4234.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4235.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4238.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4240.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4246.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4258.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4267.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4281.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4284.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4290.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4291.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4292.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4301.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4303.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4304.jpg",
      caption: "Sainte-Anne-de-Bellevue"
    },
    {
      image: "to-mtrl/IMG_4307.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4312.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4313.jpg",
      caption: ""
    },
  ],



  "bourgeau": [
    {
      image: "bourgeau/IMG_1151.jpg", 
      caption: ""
    },
    {
      image: "bourgeau/IMG_1140.jpg", 
      caption: ""
    },
    {
      image: "bourgeau/IMG_1142.jpg", 
      caption: ""
    },
    {
      image: "bourgeau/IMG_1144.jpg", 
      caption: ""
    },
    {
      image: "bourgeau/IMG_1150.jpg", 
      caption: ""
    },
    {
      image: "bourgeau/IMG_1161.jpg", 
      caption: ""
    },
    {
      image: "bourgeau/IMG_1164.jpg", 
      caption: ""
    },
    {
      image: "bourgeau/IMG_1167.jpg", 
      caption: ""
    },
    {
      image: "bourgeau/IMG_1168.jpg", 
      caption: ""
    },
    {
      image: "bourgeau/IMG_1171.jpg", 
      caption: ""
    },
    {
      image: "bourgeau/IMG_1173.jpg", 
      caption: ""
    },
    {
      image: "bourgeau/IMG_1174.jpg", 
      caption: ""
    },
    {
      image: "bourgeau/IMG_1177.jpg", 
      caption: ""
    },
    {
      image: "bourgeau/IMG_1180.jpg", 
      caption: ""
    },
    {
      image: "bourgeau/IMG_1181.jpg", 
      caption: ""
    },
    {
      image: "bourgeau/IMG_1183.jpg", 
      caption: ""
    },   
  ],



  "cory-pass": [
    {
      image: "cory-pass/IMG_1125.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1086.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1088.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1095.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1097.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1099.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1103.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1104.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1110.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1112.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1114.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1117.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1119.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1120.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1121.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1122.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1123.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1124.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1126.jpg", 
      caption: ""
    },
    {
      image: "cory-pass/IMG_1132.jpg", 
      caption: ""
    },
  ],



  "grotto-mtn": [
    {
      image: "grotto-mtn/IMG_1301.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1302.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1305.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1306.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1308.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1310.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1313.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1314.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1317.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1320.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1321.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1322.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1324.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1325.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1326.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1327.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1332.jpg", 
      caption: ""
    },
    {
      image: "grotto-mtn/IMG_1334.jpg", 
      caption: ""
    },
  ],



  "gunsight": [
    {
      image: "gunsight/IMG_0353.jpg", 
      caption: ""
    },
    {
      image: "gunsight/IMG_0355.jpg", 
      caption: ""
    },
    {
      image: "gunsight/IMG_0356.jpg", 
      caption: ""
    },
    {
      image: "gunsight/IMG_0359.jpg", 
      caption: ""
    },
    {
      image: "gunsight/IMG_0362.jpg", 
      caption: ""
    },
    {
      image: "gunsight/IMG_0370.jpg", 
      caption: ""
    },
    {
      image: "gunsight/IMG_0372.jpg", 
      caption: ""
    },
    {
      image: "gunsight/IMG_0375.jpg", 
      caption: ""
    },
    {
      image: "gunsight/IMG_0376.jpg", 
      caption: ""
    },
    {
      image: "gunsight/IMG_0379.jpg", 
      caption: ""
    },
    {
      image: "gunsight/IMG_0380.jpg", 
      caption: ""
    },
    {
      image: "gunsight/IMG_0382.jpg", 
      caption: ""
    },
    {
      image: "gunsight/IMG_0389.jpg", 
      caption: ""
    },
    {
      image: "gunsight/IMG_0393.jpg", 
      caption: ""
    },
  ],



  "ha-ling": [
    {
      image: "ha-ling/IMG_1071.jpg", 
      caption: ""
    },
    {
      image: "ha-ling/IMG_1073.jpg", 
      caption: ""
    },
    {
      image: "ha-ling/IMG_1075.jpg", 
      caption: ""
    },
    {
      image: "ha-ling/IMG_1076.jpg", 
      caption: ""
    },
    {
      image: "ha-ling/IMG_1077.jpg", 
      caption: ""
    },
    {
      image: "ha-ling/IMG_1079.jpg", 
      caption: ""
    },
    {
      image: "ha-ling/IMG_1080.jpg", 
      caption: ""
    },
    {
      image: "ha-ling/IMG_1082.jpg", 
      caption: ""
    },
    {
      image: "ha-ling/IMG_1083.jpg", 
      caption: ""
    },
    {
      image: "ha-ling/IMG_1084.jpg", 
      caption: ""
    },   
  ],



  "jasper": [
    {
      image: "jasper/IMG_1031.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_0979.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_0980.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_0984.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_0985.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_0987.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_0989.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_0990.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_0997.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1005.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1006.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1007.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1008.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1011.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1014.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1016.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1017.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1019.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1020.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1025.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1026.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1028.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1030.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1032.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1034.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1039.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1040.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1043.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1044.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1045.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1046.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1049.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1050.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1051.jpg",
      caption: ""
    },
    {
      image: "jasper/IMG_1055.jpg",
      caption: ""
    },
  ],



  "maroon-mtn": [
    {
      image: "maroon-mtn/IMG_0667.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0668.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0669.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0670.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0671.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0672.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0674.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0680.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0685.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0689.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0691.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0696.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0698.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0702.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0703.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0704.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0708.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0709.jpg",
      caption: ""
    },
    {
      image: "maroon-mtn/IMG_0710.jpg",
      caption: ""
    },    
  ],



  "mont-nixon": [
    {
      image: "../images/mont-nixon/IMG_2303.jpg",
      caption: ""
    },
    {
      image: "../images/mont-nixon/IMG_2304.jpg",
      caption: ""
    },
    {
      image: "../images/mont-nixon/IMG_2305.jpg",
      caption: ""
    },
    {
      image: "../images/mont-nixon/IMG_2307.jpg",
      caption: ""
    },
    {
      image: "../images/mont-nixon/IMG_2312.jpg",
      caption: ""
    },
    {
      image: "../images/mont-nixon/IMG_2317.jpg",
      caption: ""
    },
    {
      image: "../images/mont-nixon/IMG_2319.jpg",
      caption: ""
    },
    {
      image: "../images/mont-nixon/IMG_2322.jpg",
      caption: ""
    },
    {
      image: "mont-nixon/IMG_2325.jpg",
      caption: ""
    },
    {
      image: "mont-nixon/IMG_2329.jpg",
      caption: ""
    },
    {
      image: "mont-nixon/IMG_2335.jpg",
      caption: ""
    },
    {
      image: "mont-nixon/IMG_2339.jpg",
      caption: ""
    },   
  ],



  "montagne-noire": [
    {
      image: "montagne-noire/IMG_2342.jpg",
      caption: ""
    },
    {
      image: "montagne-noire/IMG_2343.jpg",
      caption: ""
    },
    {
      image: "montagne-noire/IMG_2344.jpg",
      caption: ""
    },
    {
      image: "montagne-noire/IMG_2345.jpg",
      caption: ""
    },
    {
      image: "montagne-noire/IMG_2346.jpg",
      caption: ""
    },
    {
      image: "montagne-noire/IMG_2351.jpg",
      caption: ""
    },
    {
      image: "montagne-noire/IMG_2354.jpg",
      caption: ""
    },
    {
      image: "montagne-noire/IMG_2355.jpg",
      caption: ""
    },
    {
      image: "montagne-noire/IMG_2356.jpg",
      caption: ""
    },
    {
      image: "montagne-noire/IMG_2361.jpg",
      caption: ""
    },
    {
      image: "montagne-noire/IMG_2366.jpg",
      caption: ""
    },
  ],



  "mt-albert-edward": [
    {
      image: "mt-albert-edward/IMG_6622.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6627.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6635.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6639.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6649.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6652.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6653.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6655.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6657.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6659.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6661.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6665.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6668.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6669.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6670.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6671.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6672.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6674.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6677.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6682.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6684.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6685.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6687.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6688.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6693.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6695.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6696.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6697.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6701.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6702.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6703.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6705.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6713.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6715.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6717.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6719.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6721.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6727.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6728.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6731.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6732.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6733.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6734.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6735.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6740.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6743.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6748.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6750.jpg",
      caption: ""
    },         
  ],



  "mt-begbie": [
    {
      image: "mt-begbie/IMG_7932.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7934.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7944.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7949.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7955.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7959.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7967.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7972.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7973.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7975.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7978.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7983.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7987.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7989.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7992.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7996.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7997.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7998.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7999.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8002.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8009.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8010.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8013.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8014.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8018.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8019.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8022.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8027.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8029.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8034.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8035.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8036.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8038.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8040.jpg",
      caption: ""
    },      
  ],



  "mt-cartier": [
    {
      image: "mt-cartier/IMG_8069.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8070.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8074.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8075.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8076.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8077.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8080.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8081.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8083.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8084.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8085.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8088.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8090.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8092.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8094.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8095.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8096.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8097.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8099.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8103.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8105.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8106.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8108.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8109.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8111.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8113.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8116.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8119.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8123.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8124.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8125.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8126.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8128.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8130.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8132.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8133.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8134.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8136.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8139.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8140.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8141.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8144.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8145.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8148.jpg",
      caption: ""
    },  
  ],



  "mt-revelstoke": [
    {
      image: "mt-revelstoke/62448168733__019AEA98-30A7-4F2E-AC5C-E82CE8F4E054.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8708.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8713.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8714.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8715.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8718.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8720.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8723.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8725.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8727.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8728.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8729.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8734.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8739.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8741.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8746.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8747.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8748.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8751.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8753.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8759.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8762.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8765.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8774.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8780.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8782.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8786.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8800.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8808.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8810.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8813.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8818.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8820.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8821.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8824.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8826.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8831.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8833.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8834.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8837.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8838.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8839.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8842.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8843.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8845.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8848.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8851.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8852.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8854.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8855.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8856.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8857.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8858.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8859.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8860.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8861.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8865.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8866.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8869.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8871.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8874.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8875.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8876.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8878.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8883.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8884.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8885.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8886.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8889.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8890.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8891.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8892.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8894.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8903.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8904.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8909.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8912.jpg",
      caption: ""
    },
  ],



  "mt-temple": [
    {
      image: "mt-temple/IMG_1235.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1187.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1188.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1190.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1191.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1192.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1193.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1195.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1200.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1202.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1204.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1211.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1212.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1213.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1215.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1216.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1219.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1222.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1233.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1237.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1238.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1239.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1240.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1241.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1242.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1243.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1244.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1245.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1248.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1249.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1250.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1252.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1253.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1255.jpg",
      caption: ""
    },
    {
      image: "mt-temple/IMG_1257.jpg",
      caption: ""
    }, 
  ],



  "oliver-creek": [
    {
      image: "oliver-creek/IMG_0254.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0257.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0262.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0263.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0269.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0280.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0289.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0290.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0291.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0293.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0295.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0296.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0307.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0308.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0310.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0317.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0322.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0324.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0325.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0326.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0332.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0336.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0343.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0344.jpg",
      caption: ""
    },
    {
      image: "oliver-creek/IMG_0350.jpg",
      caption: ""
    },      
  ],



  "phillips-ridge": [
    {
      image: "phillips-ridge/IMG_7095.jpg",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7097.jpg",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7098.jpg",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7099.jpg",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7101.jpg",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7102.jpg",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7108.jpg",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7112.jpg",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7117.jpg",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7119.jpg",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7122.jpg",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7123.jpg",
      caption: ""
    },
  ],



  "seaton-ridge": [
    {
      image: "seaton-ridge/IMG_0905.jpg",
      caption: ""
    },
    {
      image: "seaton-ridge/IMG_0715.jpg",
      caption: ""
    },
    {
      image: "seaton-ridge/IMG_0717.jpg",
      caption: ""
    },
    {
      image: "seaton-ridge/IMG_0718.jpg",
      caption: ""
    },
    {
      image: "seaton-ridge/IMG_0721.jpg",
      caption: ""
    },
    {
      image: "seaton-ridge/IMG_0722.jpg",
      caption: ""
    },
    {
      image: "seaton-ridge/IMG_0727.jpg",
      caption: ""
    },
    {
      image: "seaton-ridge/IMG_0728.jpg",
      caption: ""
    },
    {
      image: "seaton-ridge/IMG_0729.jpg",
      caption: ""
    },
    {
      image: "seaton-ridge/IMG_0730.jpg",
      caption: ""
    },
    {
      image: "seaton-ridge/IMG_0731.jpg",
      caption: ""
    },
    {
      image: "seaton-ridge/IMG_0906.jpg",
      caption: ""
    },
  ],



  "silver-king": [
    {
      image: "silver-king/IMG_0467.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0470.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0482.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0484.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0487.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0488.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0491.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0493.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0494.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0495.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0496.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0498.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0502.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0505.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0506.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0507.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0508.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0509.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0762.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0764.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0765.jpg",
      caption: ""
    },
    {
      image: "silver-king/IMG_0767.jpg",
      caption: ""
    },
  ],



  "silvern-lake": [
    {
      image: "silvern-lake/IMG_0164.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0119.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0519.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0126.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0527.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0142.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0528.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0139.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0140.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0152.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0161.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0162.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0523.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0529.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0540.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0542.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0557.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0559.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0565.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0568.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0587.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0574.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0576.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0585.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0586.jpg",
      caption: ""
    },
    {
      image: "silvern-lake/IMG_0588.jpg",
      caption: ""
    },
  ],



  "six-glaciers": [
    {
      image: "six-glaciers/IMG_2110.jpg",
      caption: ""
    },
    {
      image: "six-glaciers/IMG_2112.jpg",
      caption: ""
    },
    {
      image: "six-glaciers/IMG_2115.jpg",
      caption: ""
    },
    {
      image: "six-glaciers/IMG_2117.jpg",
      caption: ""
    },
    {
      image: "six-glaciers/IMG_2120.jpg",
      caption: ""
    },
    {
      image: "six-glaciers/IMG_2123.jpg",
      caption: ""
    },
    {
      image: "six-glaciers/IMG_2124.jpg",
      caption: ""
    },        
  ],



  "tin-hat": [
    {
      image: "tin-hat/IMG_7658.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7664.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7668.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7672.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7676.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7677.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7680.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7685.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7689.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7690.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7695.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7696.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7699.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7700.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7707.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7713.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7714.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7715.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7721.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7725.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7727.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7728.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7730.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7731.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7732.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7735.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7738.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7746.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7748.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7752.jpg",
      caption: ""
    },
  ],

  "viking-ridge": [
    {
      image: "viking-ridge/IMG_0921.jpg",
      caption: ""
    },
    {
      image: "viking-ridge/IMG_0926.jpg",
      caption: ""
    },
    {
      image: "viking-ridge/IMG_0928.jpg",
      caption: ""
    },
    {
      image: "viking-ridge/IMG_0931.jpg",
      caption: ""
    },
    {
      image: "viking-ridge/IMG_0935.jpg",
      caption: ""
    },
    {
      image: "viking-ridge/IMG_0938.jpg",
      caption: ""
    },
    {
      image: "viking-ridge/IMG_0943.jpg",
      caption: ""
    },
    {
      image: "viking-ridge/IMG_0948.jpg",
      caption: ""
    },
    {
      image: "viking-ridge/IMG_0952.jpg",
      caption: ""
    },
  ],

  "mt-becher": [
    {
      image: "mt-becher/IMG_7534.jpg",
      caption: ""
    },
    {
      image: "mt-becher/IMG_7569.jpg",
      caption: ""
    },
    {
      image: "mt-becher/IMG_7573.jpg",
      caption: ""
    },
    {
      image: "mt-becher/IMG_7577.jpg",
      caption: ""
    },
    {
      image: "mt-becher/IMG_7580.jpg",
      caption: ""
    },
    {
      image: "mt-becher/IMG_7586.jpg",
      caption: ""
    },
    {
      image: "mt-becher/IMG_7588.jpg",
      caption: ""
    },
    {
      image: "mt-becher/IMG_7590.jpg",
      caption: ""
    },
    {
      image: "mt-becher/IMG_7591.jpg",
      caption: ""
    },
    {
      image: "mt-becher/IMG_7594.jpg",
      caption: ""
    },
    {
      image: "mt-becher/IMG_7601.jpg",
      caption: ""
    },
    {
      image: "mt-becher/IMG_7602.jpg",
      caption: ""
    },
  ],

}

customElements.define('my-slideshow', Slideshow);

const tnslider = tns({
  container: ".slider",
  autoWidth: true,
  gutter: 10,
  slideBy: 1,
  nav: false,
  // navPosition: "bottom",
  speed: 400,
  controlsContainer: "#controls",
  prevButton: ".previous",
  nextButton: ".next",
  rewind: true,
  mouseDrag: true,
})
