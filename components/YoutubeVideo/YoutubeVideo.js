import SQLiteViewer from '../../scripts/SQLiteViewer.js';

async function getYoutubeData(video_id){
  const viewer = new SQLiteViewer("../database.sqlite3");
  await viewer.init();

  const result = viewer.runPreparedQueryAsJSON(`
    SELECT *
    FROM youtube_video
    WHERE id = ?
    `, 
    [video_id]
  )

  return result
}

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

  async connectedCallback() {
    const youtubeDataResponse = await getYoutubeData(this.video_id)
    const video = youtubeDataResponse[0]

    this.innerHTML = `
    <div class="youtube-video"
      <div class="row no-gutters">
        <div class="col-md-8 offset-md-2 text-center" style="padding: 0;">
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