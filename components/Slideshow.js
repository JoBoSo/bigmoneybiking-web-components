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
      image: "begbie-falls/IMG_8340.JPG",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_8346.JPG",
      caption: "Form Is Everything"
    },
    {
      image: "begbie-falls/IMG_8348.JPG",
      caption: "Aerodynamics"
    },
    {
      image: "begbie-falls/IMG_8358.JPG",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_8359.JPG",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_8360.JPG",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_8371.JPG",
      caption: "Take one step forward"
    },
    {
      image: "begbie-falls/IMG_8374.JPG",
      caption: "... and don't look back"
    },
    {
      image: "begbie-falls/IMG_8377.JPG",
      caption: ""
    },
    {
      image: "begbie-falls/IMG_8378.JPG",
      caption: ""
    },
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
      image: "brewster-lake/IMG_5605.JPG",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5610.JPG",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5618.JPG",
      caption: ""
    },
    {
      image: "brewster-lake/IMG_5619.JPG",
      caption: "Bend in the Road"
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
      image: "brewster-lake/IMG_5635.JPG",
      caption: ""
    }
  ],



  "comox-lake": [
    {
      image: "comox-lake/IMG_6286.JPG",
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
      image: "comox-lake/IMG_6310.JPG",
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
      image: "comox-lake/IMG_6331.JPG",
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
      image: "downie-creek/IMG_8505.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8507.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8521.jpg", 
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
      image: "downie-creek/IMG_8551.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8560.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8564.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8588.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8602.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8615.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8618.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8621.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8634.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8638.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8644.JPG", 
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
      image: "downie-creek/IMG_8657.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8658.JPG", 
      caption: ""
    },
    {
      image: "downie-creek/IMG_8661.JPG", 
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
      image: "nanaimo-courtenay/IMG_5149.JPG", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5150.JPG", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5154.JPG", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5157.JPG", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5158.JPG", 
      caption: ""
    },
    {
      image: "nanaimo-courtenay/IMG_5160.JPG", 
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
      image: "ptit-train/IMG_2546.jpg",
      caption: "'Train stops' have water and washrooms"
    },
    {
      image: "ptit-train/IMG_2550.jpg",
      caption: "Marshes are the main the feature"
    },
    {
      image: "ptit-train/IMG_2551.jpg",
      caption: "Marsh eats forest"
    },
    {
      image: "ptit-train/IMG_2553.jpg",
      caption: ""
    },
    {
      image: "ptit-train/IMG_2559.jpg",
      caption: ""
    },
    {
      image: "ptit-train/IMG_2571.jpg",
      caption: ""
    },
    {
      image: "ptit-train/IMG_2577.jpg",
      caption: ""
    },
    {
      image: "ptit-train/church.JPG",
      caption: ""
    }
  ],



  "quadra-cortes": [
    {
      image: "quadra-cortes/IMG_6782.jpg",
      caption: "Fisherman's Wharf, Campbell River"
    },
    {
      image: "quadra-cortes/IMG_6787.JPG",
      caption: ""
    },
    {
      image: "quadra-cortes/IMG_6791.jpg",
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
      image: "quadra-cortes/IMG_6829.JPG",
      caption: "Surge Narrows Trail"
    },
    {
      image: "quadra-cortes/IMG_6830.jpg",
      caption: "Surge Narrows"
    },
    {
      image: "quadra-cortes/IMG_6833.JPG",
      caption: "Surge Narrows"
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
      image: "quadra-cortes/IMG_6839.jpg",
      caption: "Ferry to Cortes Island"
    },
    {
      image: "quadra-cortes/IMG_6848.JPG",
      caption: "Cortes Island Signage"
    },
    {
      image: "quadra-cortes/IMG_6851.JPG",
      caption: ""
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
      image: "quadra-cortes/IMG_6866.jpg",
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
      image: "quadra-cortes/IMG_6913.jpg",
      caption: "Smelt Bay"
    },
    {
      image: "quadra-cortes/IMG_6932.JPG",
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
      image: "quadra-cortes/IMG_6958.JPG",
      caption: "Mansons Landing"
    },
    {
      image: "quadra-cortes/IMG_6963.JPG",
      caption: "Masons Landing"
    },
    {
      image: "quadra-cortes/IMG_6969.JPG",
      caption: ""
    },
    {
      image: "quadra-cortes/IMG_6970.jpg",
      caption: ""
    },
    {
      image: "quadra-cortes/IMG_6972.JPG",
      caption: ""
    },
    {
        image: "quadra-cortes/IMG_6975.JPG",
      caption: "Financial District, Quadra Island"
    },
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
      image: "san-josef-bay/IMG_5245.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5254.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5296.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5300.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5303.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5309.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5313.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5326.JPG", 
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
      image: "san-josef-bay/IMG_5396.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5400.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5406.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5411.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5416.JPG", 
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
      image: "san-josef-bay/IMG_5425.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5434.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5441.JPG", 
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
      image: "san-josef-bay/IMG_5461.JPG", 
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
      image: "san-josef-bay/IMG_5477.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5481.JPG", 
      caption: ""
    },
    {
      image: "san-josef-bay/IMG_5484.JPG", 
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
      image: "san-josef-bay/IMG_5492.JPG", 
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
      image: "san-josef-bay/IMG_5499.JPG", 
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
      image: "texada/IMG_5806.jpg", 
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
      image: "texada/IMG_5856.jpg", 
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
      image: "texada/IMG_5941.JPG", 
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
      image: "texada/IMG_5974.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_5992.JPG", 
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
      image: "texada/IMG_6015.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6027.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6029.JPG", 
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
      image: "texada/IMG_6069.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6080.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6084.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6090.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6099.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6103.JPG", 
      caption: ""
    },
    {
      image: "texada/IMG_6107.JPG", 
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
      image: "to-mtrl/IMG_4208.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4209.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4210.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4213.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4216.JPG",
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
      image: "to-mtrl/IMG_4226.JPG",
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
      image: "to-mtrl/IMG_4238.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4240.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4246.jpg",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4258.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4267.jpg",
      caption: ""
    },
    {
      path: "to-mtrl/IMG_4277.JPG",
      caption: ""
    },
    {
      path: "to-mtrl/IMG_4278.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4281.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4284.JPG",
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
      image: "to-mtrl/IMG_4301.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4303.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4304.JPG",
      caption: "Sainte-Anne-de-Bellevue"
    },
    {
      image: "to-mtrl/IMG_4307.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4312.JPG",
      caption: ""
    },
    {
      image: "to-mtrl/IMG_4313.JPG",
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
      image: "montagne-noire/IMG_2347.jpg",
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
      image: "mt-albert-edward/IMG_6639.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6649.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6652.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6653.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6655.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6657.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6659.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6661.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6665.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6668.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6669.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6670.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6671.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6672.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6674.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6677.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6682.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6684.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6685.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6687.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6688.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6693.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6695.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6696.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6697.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6701.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6702.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6703.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6705.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6713.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6715.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6717.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6719.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6721.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6727.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6728.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6731.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6732.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6733.jpg",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6734.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6735.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6740.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6743.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6748.JPG",
      caption: ""
    },
    {
      image: "mt-albert-edward/IMG_6750.JPG",
      caption: ""
    },         
  ],



  "mt-begbie": [
    {
      image: "mt-begbie/IMG_7932.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7934.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7944.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7949.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7955.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7959.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7967.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7972.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7973.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7975.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7978.JPG",
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
      image: "mt-begbie/IMG_7989.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7992.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7996.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7997.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7998.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_7999.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8002.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8009.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8010.jpg",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8013.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8014.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8018.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8019.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8022.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8027.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8029.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8034.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8035.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8036.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8038.JPG",
      caption: ""
    },
    {
      image: "mt-begbie/IMG_8040.JPG",
      caption: ""
    },      
  ],



  "mt-cartier": [
    {
      image: "mt-cartier/IMG_8069.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8070.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8074.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8075.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8076.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8077.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8080.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8081.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8083.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8084.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8085.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8088.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8090.JPG",
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
      image: "mt-cartier/IMG_8095.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8096.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8097.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8099.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8103.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8105.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8106.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8108.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8109.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8111.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8113.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8116.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8119.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8123.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8124.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8125.jpg",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8126.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8128.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8130.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8132.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8133.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8134.JPG",
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
      image: "mt-cartier/IMG_8140.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8141.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8144.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8145.JPG",
      caption: ""
    },
    {
      image: "mt-cartier/IMG_8148.JPG",
      caption: ""
    },  
  ],



  "mt-revelstoke": [
    {
      image: "mt-revelstoke/62448168733__019AEA98-30A7-4F2E-AC5C-E82CE8F4E054.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8708.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8713.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8714.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8715.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8718.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8720.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8723.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8725.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8727.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8728.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8729.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8734.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8739.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8741.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8746.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8747.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8748.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8751.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8753.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8759.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8762.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8765.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8774.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8780.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8782.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8786.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8800.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8808.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8810.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8813.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8818.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8820.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8821.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8824.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8826.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8831.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8833.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8834.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8837.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8838.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8839.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8842.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8843.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8845.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8848.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8851.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8852.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8854.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8855.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8856.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8857.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8858.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8859.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8860.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8861.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8865.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8866.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8869.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8871.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8874.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8875.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8876.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8878.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8883.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8884.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8885.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8886.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8889.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8890.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8891.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8892.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8894.jpg",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8903.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8904.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8909.JPG",
      caption: ""
    },
    {
      image: "mt-revelstoke/IMG_8912.JPG",
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
      image: "phillips-ridge/IMG_7095.JPG",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7097.JPG",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7098.JPG",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7099.JPG",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7101.JPG",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7102.JPG",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7108.JPG",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7112.JPG",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7117.JPG",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7119.JPG",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7122.JPG",
      caption: ""
    },
    {
      image: "phillips-ridge/IMG_7123.JPG",
      caption: ""
    },
  ],



  "seaton-ridge": [
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
      image: "silvern-lake/IMG_0519.JPG",
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
      image: "tin-hat/IMG_7658.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7664.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7668.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7672.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7676.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7677.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7680.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7685.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7689.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7690.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7695.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7696.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7699.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7700.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7707.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7713.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7714.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7715.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7721.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7725.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7727.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7728.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7730.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7731.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7732.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7735.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7738.jpg",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7746.JPG",
      caption: ""
    },
    {
      image: "tin-hat/IMG_7748.JPG",
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
  ]

}

customElements.define('my-slideshow', Slideshow);
