const KEY_PIXABAY = `35768020-57bf980d1d69223dcc2d256cc`;

export default class newsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchGalleray() {
    console.log(this);
    const url = `https://pixabay.com/api/?key=${KEY_PIXABAY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=5`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.incrementPage();
      });
  }
  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

// import axios from 'axios';
// export default async function getPixabay(url) {
//   const res = await axios.get(url);
//   return res;
// }
