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
  ]

}

customElements.define('my-slideshow', Slideshow);
