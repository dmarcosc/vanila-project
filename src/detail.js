
const list = require('./episodes.json')
const id = window.location.search.substr(1)
const detail = list.filter((x) => x.mal_id === +id)?.[0]
console.log(list, id, detail)
document.querySelector('.detail')
  .innerHTML =
    `<div class="volume">
        <img class="volume-img" src="${detail.images.jpg.image_url}" alt="Card image cap">
        <div class="volume-body">
            <h1 class="volume-title">${detail.title}</h1>
            <h2 class="volume-title">${detail.title_japanese || ''}</h2>
            <p class="volume-text">${detail.synopsis}</p>
            <p>Year: ${detail.year || 'unknown'}</p>
        </div>
    </div>
    <p>Trailer</p>
            <iframe width="320" height="285"src="${detail.trailer.embed_url || 'https://www.youtube.com/embed/ZXjaTICqRf8'}"></iframe>`;