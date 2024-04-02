import timelines from './TimelineData.js';

class Timeline extends HTMLElement {
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

      .my-timeline ul {
        list-style-type: none;
        position: relative;
        padding-left: 0px; 
      }
      
        /* vertical line */
      .my-timeline ul:before {
        content: ' ';
        background: white;
        display: inline-block;
        position: absolute;
        left: 0px;
        width: 1.5px;
        height: auto; /*auto for line on top dot*/
        top: 16px; /*16px for on the top dot*/
        bottom: 20px; 
        z-index: 400;
        border-radius: 50%;
      }
      
      .my-timeline-item {
        margin-left: 0px;
        margin-top: 10px;
        margin-bottom: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        background-color: rgba(0, 0, 0, 0.2);
      }
      
      /* Timeline item circle marker */
      .my-timeline-item::before {
        content: ' ';
        background: #FDB813;
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 1.5px solid white;
        left: -6px;
        width: 14px;
        height: 14px;
        z-index: 400;
        /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); */
        margin-top: 11px;
      }
      
      .my-timeline-header {
        font-size: 18pt;
        margin-left: 20px;
      }

      .my-timeline-description {
        padding-left: 20px !important;
        padding-right: 13px !important;
        background: none !important;
        text-align: justify;
      }
      
      .my-timeline-bullets {
        list-style-type: circle !important;
        padding-left: 46px !important;
        background: none !important;
      }
      
      .my-timeline-bullets::before {
        background: none !important;
      }

      #timeline-slider-section {
        margin-top: -10px;
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
      
      .slide {
        width: auto;
        height: fit-content;
      }
      
      .slide img {
        width: 100%;
        height: 263px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }

      @media (max-width: 576px) {
        .slide img {
          width: auto;
          height: 237px;
        }
      }

      .slide .caption {
        width: 100%; 
        height: auto;
        padding: 5px;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        text-align: center;
        background: rgba(0, 0, 0, 0.2);
      }
      
      #controls i {
        color: white;
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

    let tripData = timelines[this.data_id];

    this.innerHTML = style + `
      <div class="my-timeline">
        <ul>
          ${tripData.map((item) => `
            <li class="my-timeline-item">
              <p class="my-timeline-header">
                <b>
                  ${item.day !== null ? 'Day ' + item.day + ' | ' : ''}
                  <span style='font-size:16pt;'> 
                    ${item.distance !== null ? item.distance + ' km' : ''} 
                    ${item.destination !== null ? ' &#8212; ' + item.destination : ''} 
                    ${item.start !== null ? "<span style='font-size: 12pt'>from</span> " + item.start : ''} 
                    ${item.end !== null ? "<span style='font-size: 12pt'>to</span> " + item.end : ''} 
                  </span>
                </b>
              </p>

              <p class="my-timeline-description">${item.description !== null ? item.description : ''}</p>

              <ul class="my-timeline-bullets">
                ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
              </ul>

              ${item.photos.length < 1 ? `` : `
                <section id="timeline-slider-section">
                  <div class="container">
                    <div class="subcontainer">
                      <div class="slider-wrapper">
                        <div class="slider">
                          ${item.photos.map((photo) => `
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
              `}

            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }
}

customElements.define('my-timeline', Timeline);

let sliders = document.querySelectorAll('.slider');
let controls = document.querySelectorAll('#controls');
let previous = document.querySelectorAll('.previous');
let next = document.querySelectorAll('.next');
for (let i = 0; i < sliders.length; i++) {
  tns({
    container: sliders[i],
    autoWidth: true,
    gutter: 12,
    slideBy: 1,
    nav: false,
    speed: 400,
    controlsContainer: controls[i],
    prevButton: previous[i],
    nextButton: next[i],
    rewind: true,
    mouseDrag: true,
    swipeAngle: 30,
    preventScrollOnTouch: "auto",
  });
};