import NewsApiService from './api/api_server';
import createCard from './templates/createCard';

import LoadMoreBtn from './button/loadMoreBtn';

//import './sass/index.scss';
export const loadMoreBtn = new LoadMoreBtn({
  // selector: '[data-action="load-more"]',
  selector: '.load-more',
  hidden: true,
});

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  // loadMore: document.querySelector('.load-more'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.searchForm.addEventListener('input', handleInput);

loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

function handleInput(e) {
  newsApiService.fetch = true;
  newsApiService.query = e.currentTarget.elements.searchQuery.value;
  newsApiService.resetPage();
}

function fetchGalleray() {
  if (newsApiService.fetch) {
    clearGallerayInnerHTML();
    newsApiService.fetchGalleray()?.then(data => {
      if (newsApiService.fetch) {
        loadMoreBtn.show();
        loadMoreBtn.disable();
      } else {
        loadMoreBtn.hide();
      }

      appendDateMarcup(data);
    });
  }
}

function onSearch(e) {
  e.preventDefault();
  fetchGalleray();
}
function onLoadMore() {
  fetchGalleray();
}

function appendDateMarcup(data) {
  const markup = data.hits
    .map(card => {
      return createCard(card);
    })
    .join('');
  loadMoreBtn.eneble();
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function clearGallerayInnerHTML() {
  if (newsApiService.page === 1) {
    refs.gallery.innerHTML = '';
  }
}
