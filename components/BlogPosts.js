class BlogPosts extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
    this.innerHTML = `
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
    "page": "rangers-smithers.html",
    "image": "rangers-smithers/red-bluff/IMG_0598.jpg",
    "title": "Student Rangers in Northwestern BC",
    "description": "Trips my team and I went on and work we did as BC Parks Student Rangers in Northwestern BC in the summer of 2021.",
  },
  {
    "page": "revelstoke.html",
    "image": "revelstoke/town/IMG_3900.jpg",
    "title": "Life In Revelstoke",
    "description": "Collections of pictures taken by my sister and I when we lived in Revelstoke.",
  },
  {
    "page": "rangers-black-creek.html",
    "image": "rangers-black-creek/denman/IMG_7141.jpg",
    "title": "Student Rangers On North Vancouver Island",
    "description": "Trips my team and I went on and work we did as BC Parks Student Rangers on North Vancouver Island and neighbouring islands in the summer of 2020.",
  },
];

customElements.define('my-blog-posts', BlogPosts);