import { getCurrentPage, setCurrentPage, getRandomPageId } from './utils';
import { nextPageBtn, prevPageBtn, randomPageBtn, firstPageBtn, lastPageBtn, MAX_PAGE } from './const';
import { getData } from './data';

let currentPageId = getCurrentPage();

if (currentPageId == 1) {
    prevPageBtn.disabled = true;
    firstPageBtn.disabled = true;
}

nextPageBtn.addEventListener('click', () => {
    setCurrentPage(+currentPageId + 1);
})

prevPageBtn.addEventListener('click', () => {
    setCurrentPage(currentPageId - 1)
})

randomPageBtn.addEventListener('click', () => {
    const randomId = getRandomPageId(1, MAX_PAGE);
    setCurrentPage(randomId);
});

firstPageBtn.addEventListener('click', () => {
    setCurrentPage(1);
});

lastPageBtn.addEventListener('click', () => {
    setCurrentPage(MAX_PAGE);
});

getData(currentPageId);
