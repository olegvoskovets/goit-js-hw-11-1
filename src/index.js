import NewsApiService from './api/api_server';

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.searchForm.addEventListener('input', handleInput);
refs.loadMore.addEventListener('click', onLoadMore);

function handleInput(e) {
  newsApiService.query = e.currentTarget.elements.searchQuery.value;
  newsApiService.resetPage();
}

function onSearch(e) {
  e.preventDefault();

  newsApiService.fetchGalleray();
}
function onLoadMore() {
  newsApiService.fetchGalleray();
}
