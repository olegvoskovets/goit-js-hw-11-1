const KEY_PIXABAY = `35768020-57bf980d1d69223dcc2d256cc`;
const BASE_URL = `https://pixabay.com/api/`;

export default class newsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 40;
    this.fetch = true;
  }

  fetchGalleray() {
    if (this.searchQuery === '') {
      return;
    }
    if (this.fetch) {
      const url = `${BASE_URL}?key=${KEY_PIXABAY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.per_page}`;
      return fetch(url)
        .then(res => res.json())
        .then(data => {
          this.incrementPage(data.totalHits);
          return data;
        });
    }
  }
  resetPage() {
    this.page = 1;
  }

  incrementPage(total) {
    if (total > this.page * this.per_page) {
      this.page += 1;
    } else {
      this.fetch = false;
    }
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
