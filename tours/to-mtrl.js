const pictures = [
  {
    path: "../images/to-mtrl/58774621490__9612BD0A-3DA7-4FAD-87D0-507760B9EB60.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4210.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4221.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4222.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4224.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4225.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4228.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4229.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4230.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4234.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4235.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4237.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4238.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4240.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4242.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4243.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4246.jpg",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4247.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4252.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4258.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4267.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4275.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4277.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4281.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4282.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4290.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4291.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4292.JPG",
    caption: ""
  },
  {
    path: "../images/to-mtrl/IMG_4304.JPG",
    caption: "Sainte-Anne-de-Bellevue"
  },
]

function makeCarousel(pictures) {
  let isActiveSlide = true;

  return `
    <div class="row no-gutters bg-black">
      <div id="carouselExampleControls" class="carousel slide slideshow-container" data-ride="carousel">
        <div class="carousel-inner">
          ${pictures.map((picture) => {
            if (isActiveSlide) {
              isActiveSlide=false;
              return `
              <div class="carousel-item active">
                <img class="d-block w-100" src=${picture.path}>
                <div class="carousel-caption d-none d-md-block">
                  <p>${picture.caption}</p>
                </div>
              </div>
              `;
            } else {
              return `
              <div class="carousel-item">
                <img class="d-block w-100" src=${picture.path}>
                <div class="carousel-caption d-none d-md-block">
                  <p>${picture.caption}</p>
                </div>
              </div>
              `
            }
          }).join("")}
        </div>

        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>

        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

      </div>
    </div>
  `;
}

myCarousel.innerHTML = makeCarousel(pictures)
