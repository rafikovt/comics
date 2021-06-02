import {getCurrentPage, setCurrentPage} from './utils';
import {nextPage, prevPage} from './const';
import {getData} from './data';

let currentPageId = getCurrentPage();

if (currentPageId == 1) {
    prevPage.disabled = true;
}

nextPage.addEventListener('click', () => {
    setCurrentPage(+currentPageId + 1);
})

prevPage.addEventListener('click', () => {
    setCurrentPage(currentPageId - 1)
})

getData(currentPageId);

