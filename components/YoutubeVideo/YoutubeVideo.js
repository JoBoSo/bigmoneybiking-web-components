import videos from './YoutubeVideoData.js';

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

customElements.define('my-youtube-video', YoutubeVideo);