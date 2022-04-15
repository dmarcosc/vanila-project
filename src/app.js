
const list = require('./episodes.json')
document.querySelector('.work')
  .innerHTML = list.reduce((a, fw) => a +=
  `<a class="card" href="detail.html?${fw.mal_id}">
        <img class="card-img-top" src="${fw.images.jpg.image_url}" alt="Card image cap">
        <div class="card-body">
            <h1 class="card-title">${fw.title}</h1>
            <h2 class="card-title">${fw.title_japanese || ''}</h2>
            <p class="card-text">${fw.synopsis}</p>...
        </div>
        <div class="card-body">
            <p href="#" class="card-link">More</p>
        </div>
    </a>`, ''
);
const {Howl, Howler} = require('howler');
var sound = new Howl({
    src: ['https://rad-fox-84769a.netlify.app/dist/src/audio.mp3'],
    html5: true,
  });
  
sound.play();
  