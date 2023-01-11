const tiles = [
    {
        title: "Montagne Noire",
        subtitle: "The Crash Site of a Military Plane",
        image: "images/montagne-noire/IMG_2361.jpg",
        page: "hikes/montagne-noire.html"
    },
    {
        title: "Mont Nixon",
        subtitle: "The Best Viewpoints in The Laurentians",
        image: "images/mont-nixon/IMG_2325.jpg",
        page: "hikes/mont-nixon.html"
    },
    {
        title: "Plain of Six Glaciers Teahouse",
        subtitle: "Looking Down on Lake Louise",
        image: "images/six-glaciers/IMG_2112.jpg",
        page: "hikes/six-glaciers.html"
    },
    {
        title: "Grotto Mountain",
        subtitle: "Sculpted Rock",
        image: "images/grotto-mtn/IMG_1305.jpg",
        page: "hikes/grotto-mtn.html"
    },
    {
        title: "Mt Temple",
        subtitle: "Outer Space",
        image: "images/mt-temple/IMG_1215.jpg",
        page: "hikes/mt-temple.html"
    },
    {
        title: "Mt. Bourgeau",
        subtitle: "A Spiral Stairway to Heaven",
        image: "images/bourgeau/IMG_1177.jpg",
        page: "hikes/bourgeau.html"
    },
    {
        title: "Cory Pass",
        subtitle: "Between Two Mountains",
        image: "images/cory-pass/IMG_1124.jpg",
        page: "hikes/cory-pass.html"
    },
    {
        title: "Ha Ling",
        subtitle: "Canmore's Iconic Peak",
        image: "images/ha-ling/IMG_1071.jpg",
        page: "hikes/ha-ling.html"
    },
    {
        title: "Jasper",
        subtitle: "Wild Mountain Honey",
        image: "images/jasper/IMG_1051.jpg",
        page: "hikes/jasper.html"
    },
    {
        title: "Viking Ridge",
        subtitle: "One Big Bowl",
        image: "images/viking-ridge/IMG_0926.jpg",
        page: "hikes/viking-ridge.html"
    },
    {
        title: "Seaton Ridge",
        subtitle: "A Splattering of Green",
        image: "images/seaton-ridge/IMG_0727.jpg",
        page: "hikes/seaton-ridge.html"
    },
    {
        title: "Maroon Mountain",
        subtitle: "Amoung the Clouds",
        image: "images/maroon-mtn/IMG_0680.jpg",
        page: "hikes/maroon-mtn.html"
    },
    {
        title: "Silvern Lake",
        subtitle: "In Two Seasons",
        image: "images/silvern-lake/IMG_0542.jpg",
        page: "hikes/silvern-lake.html"
    },
    {
        title: "Silver King Basin",
        subtitle: "The Hills Are Alive",
        image: "images/silver-king/IMG_0467.jpg",
        page: "hikes/silver-king.html"
    },
    {
        title: "Gunsight Lake",
        subtitle: "I Forgot My Skates",
        image: "images/gunsight/IMG_0370.jpg",
        page: "hikes/gunsight.html"
    },
    {
        title: "Oliver Creek Trail",
        subtitle: "Views of the Seven Sisters Peaks",
        image: "images/oliver-creek/IMG_0263.jpg",
        page: "hikes/oliver-creek.html"
    },
    {
        title: "Mt. Revelstoke",
        subtitle: "Inside The Shroom Lagoon",
        image: "images/mt-revelstoke/IMG_8845.JPG",
        page: "hikes/mt-revelstoke.html"
    },
    {
        title: "McCrae Peak",
        subtitle: "Sunbeam City",
        image: "images/mccrae-peak/IMG_8307.JPG",
        page: "hikes/mccrae-peak.html"
    },
    {
        title: "Mt. Cartier",
        subtitle: "Mountains Upon Mountains",
        image: "images/mt-cartier/IMG_8090.JPG",
        page: "hikes/mt-cartier.html"
    },
    {
        title: "Mt. Begbie",
        subtitle: "A Walk in the Garden",
        image: "images/mt-begbie/IMG_7959.JPG",
        page: "hikes/mt-begbie.html"
    },
    {
        title: "Tin Hat Mountain",
        subtitle: "There's Some Tin Up Here",
        image: "images/tin-hat/IMG_7721.JPG",
        page: "hikes/tin-hat.html"
    },
    {
        title: "Phillips Ridge",
        subtitle: "Who Put That Mountain There?",
        image: "images/phillips-ridge/IMG_7102.JPG",
        page: "hikes/phillips-ridge.html"
    },
    {
        title: "Mt. Albert Edward",
        subtitle: "A Walk Up A Mountain",
        image: "images/mt-albert-edward/IMG_6713.JPG",
        page: "hikes/mt-albert-edward.html"
    },
]

function makeTiles(tiles) {
    return `
        <div id="card-row" class="row no-gutters">
            ${tiles.map((tile) => `
                <div class="col-12 col-md-4">
                    <div class="card border-0 card-corners">
                        <a href=${tile.page}>
                            <div class="content">
                                <div class="content-overlay"></div>
                                <img class="content-image img-fluid" src=${tile.image} height="300px">
                                <div class="content-details">
                                    <h3 class="content-title text-white">
                                        ${tile.title}
                                    </h3>
                                    <p class="content-text text-white">
                                        ${tile.subtitle}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            `).join("")}
        </div>
    `;
}

hike_tiles.innerHTML = makeTiles(tiles);
