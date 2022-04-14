
const list = require('./episodes.json')
const id = window.location.search.substr(1)
const detail = list.filter((x) => x.mal_id === 32379)[0]
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