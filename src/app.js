const axios = require('axios');

async function makeRequest() {

    const config = {
        method: 'get',
        url: 'https://api.jikan.moe/v4/anime?q=berserk&sfw'
    }

    let res = await axios(config)
    if (res.status == 200) {
        const list = res.data.data
        document.querySelector('.work')
        .innerHTML = list.reduce((a, current, index) => a +=
        `<a class="card" href="detail.html?${current.mal_id}">
                <img class="card-img-top" src="${current.images.jpg.image_url}" alt="Card image cap">
                <div class="card-body">
                    <h1 class="card-title">${current.title}</h1>
                    <h2 class="card-title">${current.title_japanese || ''}</h2>
                    <p class="card-text">${current.synopsis}</p>...
                </div>
                <div class="card-body">
                    <p href="#" class="card-link">More</p>
                </div>
            </a>`, ''
        );
    }
}
async function makeRequestById() {

    const config = {
        method: 'get',
        url: 'https://api.jikan.moe/v4/anime?q=berserk&sfw'
    }
try {
    let res = await axios(config)
    if (res.status == 200) {
        const list = res.data.data
        const id = window.location.search.substr(1)
        const detail = list.filter((x) => x.mal_id === +id)?.[0]
        const nextIndex = list.findIndex((x) => x.mal_id === +id) + 1
        const nextId = list[nextIndex]?.mal_id || list[0].mal_id
        document.querySelector('.detail').innerHTML =
            `
            <a class="link" href="detail.html?${nextId}">Next volume ></a>
            <div class="volume">
                <img class="volume-img" src="${detail?.images.jpg.image_url}" alt="Card image cap">
                <div class="volume-body">
                    <h1 class="volume-title">${detail?.title}</h1>
                    <h2 class="volume-title">${detail?.title_japanese || ''}</h2>
                    <p class="volume-text">${detail?.synopsis}</p>
                    <p>Year: ${detail?.year || 'unknown'}</p>
                </div>
            </div>
            <p>Trailer</p>
            <iframe class="volume-video" width="320" height="285" src="${detail?.trailer.embed_url || 'https://www.youtube.com/embed/ZXjaTICqRf8'}"></iframe>
            <ul class="volume-genres">Genres: ${detail?.genres.map(x => '<li>'+ x.name + '</li>').join('') || 'unknown'}</ul>`;
    } else if (res.status == "429") {
        document.querySelector('.detail').innerHTML = `<h1>Too many request, try again !</h1>`;
    } else {
        console.log(res.message)
    }
} catch (err) {
    console.log(err)
    document.querySelector('.detail').innerHTML = `<h1>Too many requests, wait a few seconds and refresh or try again !</h1>`;
}

}

window.onload = function(event) {
  if (window.location.pathname == '/detail.html') {
  makeRequestById();
  }
};
makeRequest();
  