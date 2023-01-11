const pictures = [
  {
    path: "../images/mccrae-peak/IMG_8200.JPG",
    caption: "x"
  },
  {
    path: "../images/mccrae-peak/IMG_8204.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8205.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8206.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8208.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8210.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8217.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8220.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8225.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8226.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8232.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8238.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8241.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8243.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8244.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8246.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8247.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8248.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8249.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8252.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8253.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8254.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8256.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8258.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8259.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8260.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8262.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8268.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8272.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8275.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8276.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8280.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8281.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8290.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8291.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8296.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8301.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8304.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8305.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8307.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8308.JPG",
    caption: ""
  },
  {
    path: "../images/mccrae-peak/IMG_8309.JPG",
    caption: ""
  }
]

// not working with slideshow.js
function makeSlideshow() {
  return `
  <div class="row no-gutters">
    <div class="col-12">
      <div class="slideshow-container">
        ${pictures.map((picture) => `
          <div class="mySlides my-fade">
            <div class="slide-number"></div>
            <img src=${picture.path}>
            <div class="caption">${picture.caption}</div>
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

mySlideshow.innerHTML = makeSlideshow(pictures);