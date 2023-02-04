class YoutubeVideo extends HTMLElement {
  constructor() {
      super();
      this.video_id = '';
  }

  static get observedAttributes() {
      return ['video_id'];
  }

  attributeChangedCallback(property, oldValue, newValue) {
      if (oldValue === newValue) return;
      this[ property ] = newValue; 
  }

  connectedCallback() {
    let video = videos[this.video_id];

    this.innerHTML = `
    <div class="youtube-video"
      <div class="row no-gutters">
        <div class="col-sm-12 offset-md-2 col-md-8 text-center" style="padding: 0;">
          <div class="content-container">
            <div class="youtube-video-header">
              ${video.header} 
            </div>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe 
                class="embed-responsive-item"
                width="560" 
                height="315" 
                src=${video.link} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

const videos = {

  "mont-blanc-guitar": {
    "link": "https://www.youtube.com/embed/XNsZ2biEKtU",
    "header": "Guitar At The Cottage",
  },

  "mt-becher": {
    "link": "https://www.youtube.com/embed/EyueZWLujng?mute=1",
    "header": "Views From The Top",
  },

  "downie-creek": {
    "link": "https://www.youtube.com/embed/E3qodw9z6Kg",
    "header": "Downie Creek Time-lapse",
  },

  "brewster-lake": {
    "link": "https://www.youtube.com/embed/RdZKD2_QeME",
    "header": "Sunset on Brewster Lake",
  },

  "mt-temple": {
    "link": "https://www.youtube.com/embed/vDV6G3ArF5M",
    "header": "View From Mt. Temple",
  },

  "bourgeau": {
    "link": "https://www.youtube.com/embed/ooRU0zQyXLY",
    "header": "View From Mt. Bourgeau",
  },

  "mccrae-peak": {
    "link": "https://www.youtube.com/embed/-uI1o_9BOrc",
    "header": "View From McCrae Peak",
  },

  "akolkolex-falls": {
    "link": "https://www.youtube.com/embed/3L4tsXPii_I",
    "header": "Akolkolex Falls",
  },

  "mccrae-peak-birds": {
    "link": "https://www.youtube.com/embed/SEJIrEc7Dco",
    "header": "Birds On McCrae Peak",
  },

  "mt-albert-edward": {
    "link": "https://www.youtube.com/embed/aShF5eHyf1Q",
    "header": "View Of Moat Lake From Mt. Albert Edward",
  },

  "": {
    "link": "",
    "header": "",
  },

}

customElements.define('my-youtube-video', YoutubeVideo);