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
    this.innerHTML = `
      <h2 class="text-center">Pictures</h2>
      <div class="row no-gutters">
        <div class="col-12">
          <div class="slideshow-container">
            ${pictures[this.data_id].map((picture) => `
              <div class="mySlides my-fade">
                <div class="slide-number"></div>
                <img src=${'../images/' + picture.image}>
                <div class=caption>${picture.caption}</div>
              </div>
            `).join("")}
            <a class="prev" onclick="plusSlides(-1)">❮</a>
            <a class="next" onclick="plusSlides(1)">❯</a>
          </div>
          <br>
        </div>
      </div>
    `;
  }
}

const pictures = {
  "mccrae-peak": [
    {
      image: "mccrae-peak/IMG_8200.JPG",
      caption: "x"
    },
    {
      image: "mccrae-peak/IMG_8204.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8205.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8206.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8208.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8210.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8217.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8220.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8225.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8226.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8232.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8238.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8241.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8243.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8244.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8246.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8247.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8248.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8249.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8252.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8253.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8254.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8256.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8258.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8259.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8260.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8262.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8268.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8272.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8275.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8276.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8280.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8281.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8290.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8291.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8296.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8301.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8304.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8305.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8307.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8308.JPG",
      caption: ""
    },
    {
      image: "mccrae-peak/IMG_8309.JPG",
      caption: ""
    }
  ],



  "babine-lake": [
    {
      image: "babine-lake/64169084518__22C58F39-BA0E-4811-968D-82934B76049F.jpg",
      caption: ""
    },
    {
      image: "babine-lake/IMG_9497.jpg", 
      caption: ""
    },
    {
      image: "babine-lake/IMG_9500.jpg", 
      caption: ""
    },
    {
      image: "babine-lake/IMG_9503.jpg", 
      caption: ""
    },
    {
      image: "babine-lake/IMG_9504.jpg", 
      caption: ""
    },
    {
      image: "babine-lake/IMG_9506.jpg", 
      caption: ""
    },
    {
      image: "babine-lake/IMG_9509.jpg", 
      caption: ""
    },
    {
      image: "babine-lake/IMG_9510.jpg", 
      caption: ""
    },
    {
      image: "babine-lake/IMG_9511.jpg", 
      caption: ""
    },
    {
      image: "babine-lake/IMG_9519.jpg", 
      caption: ""
    },
    {
      image: "babine-lake/IMG_9520.jpg", 
      caption: ""
    },
    {
      image: "babine-lake/IMG_9525.jpg", 
      caption: ""
    },
    {
      image: "babine-lake/IMG_9527.jpg", 
      caption: ""
    },
    {
      image: "babine-lake/IMG_9532.jpg", 
      caption: ""
    },
    {
      image: "babine-lake/IMG_9533.jpg", 
      caption: ""
    },
    {
      image: "babine-lake/IMG_9538.jpg", 
      caption: ""
    },
    {
      image: "babine-lake/IMG_9540.jpg", 
      caption: ""
    },
  ],



  "begbie-falls": [
    {
      image: "begbie-falls/IMG_3712.jpg",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_3713.jpg",
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
      image: "begbie-falls/IMG_3733.jpg",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_3762.jpg",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_3779.jpg",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_3781.jpg",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_3792.jpg",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_8340.JPG",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_8341.JPG",
      caption: "So Fast You Can't See Me"
    },
    {
      image: "begbie-falls/IMG_8346.JPG",
      caption: "Form Is Everything"
    },
    {
      image: "begbie-falls/IMG_8347.JPG",
      caption: "120km/hr"
    },
    {
      image: "begbie-falls/IMG_8348.JPG",
      caption: "Aerodynamics"
    },
    {
      image: "begbie-falls/IMG_8359.JPG",
      caption: "Not All Birds Can Fly"
    },
    {
      image: "begbie-falls/IMG_8371.JPG",
      caption: "The Top*"
    },
    {
      image: "begbie-falls/IMG_8373.JPG",
      caption: "Natural Spring Water"
    },
    {
      image: "begbie-falls/IMG_8377.JPG",
      caption: "Take one step forward"
    },
    {
      image: "begbie-falls/IMG_8378.JPG",
      caption: "... and don't look back"
    }
  ],



  "brewster-lake": [
    {
      image: "brewster-lake/IMG_5557.JPG",
      caption: "Brewster Lake"
    },
    {
      image: "brewster-lake/IMG_5561.JPG",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5565.JPG",
      caption: "My campsite on Brewster Lake"
    },
    {
      image: "brewster-lake/IMG_5570.JPG",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5585.JPG",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5594.JPG",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5603.JPG",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5604.JPG",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5610.JPG",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5619.JPG",
      caption: "Bend in the Road"
    },
    {
      image: "brewster-lake/IMG_5621.JPG",
      caption: "Campbell Lake"
    },
    {
      image: "brewster-lake/IMG_5624.JPG",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5628.JPG",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5631.JPG",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5634.JPG",
      caption: "My Campsite on Campbell Lake"
    },
    {
      image: "brewster-lake/IMG_5641.JPG",
      caption: "Bats flew overhead as I sat by the fire"
    }
  ],



  "comox-lake": [
    {
      image: "comox-lake/IMG_6284.JPG",
      caption: ""
    },
    {
      image: "comox-lake/IMG_6289.JPG",
      caption: ""
    },
    {
      image: "comox-lake/IMG_6292.JPG",
      caption: ""
    },
    {
      image: "comox-lake/IMG_6300.JPG",
      caption: ""
    },
    {
      image: "comox-lake/IMG_6302.JPG",
      caption: "The view from my campsite"
    },
    {
      image: "comox-lake/IMG_6305.JPG",
      caption: ""
    },
    {
      image: "comox-lake/IMG_6325.JPG",
      caption: ""
    },
    {
      image: "comox-lake/IMG_6328.JPG",
      caption: ""
    },
    {
      image: "comox-lake/IMG_6336.JPG",
      caption: ""
    }   
  ],



  "downie-creek": [
    {
      image: "downie-creek/IMG_8487.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8488.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8490.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8491.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8495.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8500.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8502.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8503.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8505.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8509.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8514.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8521.jpg", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8524.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8525.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8527.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8530.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8532.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8540.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8541.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8547.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8551.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8555.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8558.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8564.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8568.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8573.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8575.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8579.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8586.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8603.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8610.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8618.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8619.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8620.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8621.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8628.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8634.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8639.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8644.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8646.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8647.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8648.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8650.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8655.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8657.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8658.JPG", 
      caption: ""
    }
  ],



  "haida-gwaii": [
    {
      image: "haida-gwaii/IMG_0817.jpg",
      caption: "Roadside stop on the way to the Prince Rupert ferry"
    },
    {
      image: "./images/haida-gwaii/IMG_0822.jpg",
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
      image: "haida-gwaii/IMG_0839.jpg",
      caption: "Driftwood"
    },
    {
      image: "haida-gwaii/IMG_0841.jpg",
      caption: "Sea bank"
    },
    {
      image: "haida-gwaii/IMG_0848.jpg",
      caption: "Mystical clouds"
    },
    {
      image: "haida-gwaii/IMG_0853.jpg",
      caption: "The Madill Steel Spar in Port Clements"
    },
    {
      image: "haida-gwaii/IMG_0855.jpg",
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
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2708.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2709.jpg",
      caption: "St. Joseph Center"
    },
    {
      image: "mtrl-sherbrooke/IMG_2710.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2711.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2712.jpg",
      caption: "Le Tarbouche in Granby"
    },
    {
      image: "mtrl-sherbrooke/IMG_2713.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2715.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2717.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2718.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2720.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2724.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2727.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2730.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2731.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2735.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2736.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2739.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2740.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2742.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2744.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2746.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2748.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2750.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2753.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2755.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2757.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2763.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2764.jpg", 
      caption: "Magog's Main Street"
    },
    {
      image: "mtrl-sherbrooke/IMG_2771.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2775.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2781.jpg", 
      caption: ""
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
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2795.jpg", 
      caption: ""
    },
    {
      image: "mtrl-sherbrooke/IMG_2805.jpg", 
      caption: ""
    }
  ],



  "nanaimo-courtenay": [
    {
      image: "nanaimo-courtenay/IMG_5119.JPG",
      caption: "Bicycle repair"
    },
    {
      image: "nanaimo-courtenay/IMG_5120.JPG",
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5121.JPG",
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5122.JPG",
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5123.JPG",
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5125.JPG",
      caption: "Cameron Lake"
    },
    {
      image: "nanaimo-courtenay/IMG_5129.JPG",
      caption: "The road to Port Alberni"
    },
    {
      image: "nanaimo-courtenay/IMG_5131.JPG",
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5140.JPG",
      caption: "The river was tidal"
    },
    {
      image: "nanaimo-courtenay/IMG_5142.JPG",
      caption: "And I got wet"
    },
    {
      image: "nanaimo-courtenay/IMG_5145.JPG", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5146.JPG", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5147.JPG", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5149.JPG", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5150.JPG", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5151.JPG", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5152.JPG", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5154.JPG", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5160.JPG", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5161.JPG", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5162.JPG",
      caption: "Comox Lake"
    },
    {
      image: "nanaimo-courtenay/IMG_5221.JPG",
      caption: "The corner I lived on in Courtenay"
    }
  ],



  "nass-valley": [
    {
      image: "nass-valley/IMG_9590.jpg", 
      caption: "Cranberry Connector FSR"
    },
    {
      image: "nass-valley/IMG_9598.jpg", 
      caption: "Kiteen River"
    },
    {
      image: "nass-valley/IMG_9600.jpg", 
      caption: "Kiteen River"
    },
    {
      image: "nass-valley/IMG_9625.jpg", 
      caption: "Dragon Lake"
    },
    {
      image: "nass-valley/IMG_9629.jpg", 
      caption: "Better half"
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
      image: "nass-valley/IMG_9690.jpg",
      caption: "Lava"
    },
    {
      image: "nass-valley/IMG_9691.jpg",
      caption: "Life returning to the lava beds"
    },
    {
      image: "nass-valley/IMG_9700.jpg",
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
      image: "nass-valley/IMG_9730.jpg",
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
      image: "nass-valley/IMG_9764.jpg",
      caption: "Nass River"
    },
    {
      image: "nass-valley/IMG_9766.jpg",
      caption: "Nass River"
    },
    {
      image: "nass-valley/IMG_9772.jpg",
      caption: "Nass River"
    },
    {
      image: "nass-valley/IMG_9774.jpg",
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
      image: "nass-valley/IMG_0083.jpg",
      caption: "Vetter Falls"
    },
    {
      image: "nass-valley/IMG_0085.jpg",
      caption: "Beaupre Falls"
    },
    {
      image: "nass-valley/IMG_0087.jpg",
      caption: "Drowned Forest"
    },
    {
      image: "nass-valley/IMG_0089.jpg",
      caption: "Lava Lake"
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
      image: "nass-valley/IMG_0106.jpg",
      caption: "Kitsumkalum Lake"
    },
    {
      image: "nass-valley/IMG_0107.jpg",
      caption: "Kitsumkalum Lake"
    },
    {
      image: "nass-valley/IMG_0117.jpg",
      caption: "Jesus was here"
    },
    {
      image: "nass-valley/RenderedImage.jpg",
      caption: "Money"
    }
  ],



  "ptit-train": [
    {
      image:"ptit-train/IMG_2464.jpg",
      caption: "Zakir & Mike ride the P'tit Train"
    },
    {
      image: "ptit-train/IMG_2537.jpg",
      caption: "A marsh near Mont Tremblant"
    },
    {
      image: "ptit-train/IMG_2538.jpg",
      caption: "All the world is green"
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
      caption: "A campsite next to the river"
    },
    {
      image: "ptit-train/IMG_2545.jpg",
      caption: "Sittin' on the bench"
    },
    {
      image: "ptit-train/IMG_2546.jpg",
      caption: "'Train stops' have water and washrooms"
    },
    {
      image: "ptit-train/IMG_2548.jpg",
      caption: "Straight and narrow"
    },
    {
      image: "ptit-train/IMG_2550.jpg",
      caption: "Marshes are the main the feature"
    },
    {
      image: "ptit-train/IMG_2551.jpg",
      caption: "Marsh eats forest"
    }
  ],



  "quadra-cortes": [
    {
      image: "quadra-cortes/IMG_6781.JPG",
      caption: "Fisherman's Wharf, Campbell River"
    },
    {
      image: "quadra-cortes/IMG_6791.JPG",
      caption: "Morte Lake"
    },
    {
      image: "quadra-cortes/IMG_6813.JPG",
      caption: "Beeches Mountain"
    },
    {
      image: "quadra-cortes/IMG_6815.JPG",
      caption: "Beeches Mountain Peak"
    },
    {
      image: "quadra-cortes/IMG_6819.JPG",
      caption: "The beach at the end of Valdez Road"
    },
    {
      image: "quadra-cortes/IMG_6824.JPG",
      caption: "Valdez Road Beach"
    },
    {
      image: "quadra-cortes/IMG_6829.JPG",
      caption: "Surge Narrows Trail"
    },
    {
      image: "quadra-cortes/IMG_6834.JPG",
      caption: "Surge Narrows"
    },
    {
      image: "quadra-cortes/IMG_6835.JPG",
      caption: "My campsite"
    },
    {
      image: "quadra-cortes/IMG_6839.JPG",
      caption: "Ferry to Cortes Island"
    },
    {
      image: "quadra-cortes/IMG_6848.JPG",
      caption: "Cortes Island Signage"
    },
    {
      image: "quadra-cortes/IMG_6855.JPG",
      caption: "Squirrel Cove"
    },
    {
      image: "quadra-cortes/IMG_6856.JPG",
      caption: "Squirrel Cove Dock"
    },
    {
      image: "quadra-cortes/IMG_6861.JPG",
      caption: "Eroding Car"
    },
    {
      image: "quadra-cortes/IMG_6866.JPG",
      caption: "Squirrel Cove Beach"
    },
    {
      image: "quadra-cortes/IMG_6868.JPG",
      caption: "Squirrel Cove Dock"
    },
    {
      image: "quadra-cortes/IMG_6875.JPG",
      caption: "Free VHS Tapes"
    },
    {
      image: "quadra-cortes/IMG_6877.JPG",
      caption: "Blind Creek Boat Ramp"
    },
    {
      image: "quadra-cortes/IMG_6903.JPG",
      caption: "Pollinator on Smelt Bay"
    },
    {
      image: "quadra-cortes/IMG_6912.JPG",
      caption: "Smelt Bay Ecological Restoration"
    },
    {
      image: "quadra-cortes/IMG_6920.JPG",
      caption: "Sweet Peas"
    },
    {
      image: "quadra-cortes/IMG_6932.JPG",
      caption: "Wal-De-Mark"
    },
    {
      image: "quadra-cortes/IMG_6936.JPG",
      caption: "Mansons Landing"
    },
    {
      image: "quadra-cortes/IMG_6950.JPG",
      caption: "Mansons Landing"
    },
    {
      image: "quadra-cortes/IMG_6954.jpg",
      caption: "Sand Dollars"
    },
    {
      image: "quadra-cortes/IMG_6958.JPG",
      caption: "Mansons Landing"
    },
    {
      image: "quadra-cortes/IMG_6963.JPG",
      caption: "Masons Landing"
    },
    {
      image: "quadra-cortes/IMG_6970.JPG",
      caption: "Rebecca Spit"
    },
    {
      image:"quadra-cortes/IMG_6974.JPG",
      caption: ""
    },
    {
        image: "quadra-cortes/IMG_6975.JPG",
      caption: "Financial District, Quadra Island"
    },
    {
      image: "quadra-cortes/IMG_6977.JPG",
      caption: "Her Majesty, The Queen of England, protects every ferry"
    },
    {
      image: "quadra-cortes/IMG_6978.JPG",
      caption: "Two-Piece Ling-Cod Dinner"
    }
  ],



  "san-josef-bay": [
    {
      image: "san-josef-bay/IMG_5234.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5236.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5243.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5244.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5254.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5263.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5290.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5293.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5296.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5303.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5307.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5311.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5313.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5319.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5321.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5323.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5330.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5333.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5340.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5352.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5353.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5354.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5363.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5384.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5387.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5421.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5422.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5426.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5454.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5459.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5460.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5462.jpg", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5469.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5471.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5472.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5473.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5475.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5481.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5485.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5486.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5495.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5497.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5509.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5510.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5515.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5519.JPG", 
      caption: ""
    }
  ],



  "texada": [
    {
      image: "texada/IMG_5777.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5788.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5797.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5800.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5808.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5815.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5832.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5839.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5841.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5848.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5854.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5855.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5856.jpg", 
      caption: ""
    },
    {
      image: "texada/IMG_5862.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5867.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5871.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5872.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5873.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5878.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5885.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5890.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5893.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5896.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5898.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5919.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5921.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5927.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5938.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5941.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5944.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5953.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5960.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5963.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5966.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5988.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5994.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6010.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6021.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6032.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6040.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6048.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6050.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6052.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6055.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6059.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6061.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6069.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6072.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6080.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6090.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6103.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6106.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6107.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6108.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6110.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6113.JPG", 
      caption: ""
    }
  ],



  "to-mtrl": [
    {
      image: "to-mtrl/field_to_lake.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4210.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4221.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4222.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4224.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4225.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4228.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4229.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4230.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4234.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4235.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4237.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4238.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4240.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4242.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4243.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4246.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4247.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4252.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4258.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4267.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4275.JPG",
      caption: ""
    },
    {
      path: "../images/to-mtrl/IMG_4277.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4281.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4282.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4290.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4291.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4292.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4304.JPG",
      caption: "Sainte-Anne-de-Bellevue"
    }
  ]

}


                        


                        

customElements.define('my-slideshow', Slideshow);
