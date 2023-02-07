class BlogPosts extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
    let style = `
      <style>

      .blog {
        border-radius: 10px;
        border: 2px solid transparent;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        background: rgba(0, 0, 0, 0.3);
        overflow: hidden;
        margin: 10px;
      }
    
      .blog:hover {
        border: 2px solid white;
        background: rgba(0, 0, 0, 0.5);
      }
    
      .blog a {
        text-decoration: none;
      }
    
      .blog .blog-text {
        color: white;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
      }
    
      .blog .blog-title {
        font-size: 18pt;
        font-weight: bold;
      }
    
      .blog .blog-description {
        font-size: 12pt;
      }

      </style>
    `;

    this.innerHTML = style + `
      <div>
        ${posts.map((post) => `
          <div class="blog">
            <a href="blogs/${post.page}" class="img-fluid">
              <div class="row no-gutters">
                <div class="col-sm-12 offset-md-0 col-md-4 blog-img-col">
                  <img src="images/${post.image}" class="img-fluid">
                </div>
                <div class="col-sm-12 offset-md-0 col-md-8 blog-text">
                  <div class="blog-title">${post.title}</div>
                  <div class="blog-description">${post.description}</div>
                </div>
              </div>
            </a>
          </div>
        `).join('')}
      </div>
    `;
  }
}

const posts = [
  {
    "page": "mont-blanc.html",
    "image": "mont-blanc/IMG_2609.jpg",
    "title": "Life In The Laurentians",
    "description": "I lived in a cottage in the Laurentian Mountains of Quebec near Mont Blanc for two months. Here I have collections of pictures about my life in the Laurentians.",
  },
  {
    "page": "calgary.html",
    "image": "calgary/IMG_1645.jpg",
    "title": "Life In Calgary",
    "description": "I lived in Calgary for six months while doing an internship in the city. Here I have collections of pictures about my life in Calgary.",
  },
  {
    "page": "canmore.html",
    "image": "canmore/IMG_1080.jpg",
    "title": "Life In Canmore",
    "description": "I lived in Canmore for four months while studying remotely so I could hike, ski, and bike in the mountains every day. Here I have collections of pictures about my life in Canmore.",
  },
  {
    "page": "rangers-smithers.html",
    "image": "rangers-smithers/red-bluff/IMG_0598.jpg",
    "title": "Student Rangers in Northwestern BC",
    "description": "Trips my team and I went on and work we did as BC Parks Student Rangers in Northwestern BC in the summer of 2021.",
  },
  {
    "page": "revelstoke.html",
    "image": "revelstoke/town/IMG_3900.jpg",
    "title": "Life In Revelstoke",
    "description": "My sister and I lived in Revelstoke for eight months to ski and enjoy the mountains. Here I have collections of pictures taken both of us when we lived in Revelstoke.",
  },
  {
    "page": "rangers-black-creek.html",
    "image": "rangers-black-creek/denman/IMG_7141.jpg",
    "title": "Student Rangers On North Vancouver Island",
    "description": "Trips my team and I went on and work we did as BC Parks Student Rangers on North Vancouver Island and neighbouring islands in the summer of 2020.",
  },
];

customElements.define('my-blog-posts', BlogPosts);