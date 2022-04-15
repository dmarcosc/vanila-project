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
    }
}

makeRequest();
  