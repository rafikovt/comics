import {renderComics} from './render';

export const getData = (id) => {
    const BASE_URL = id > 0 
    ? `http://xkcd.com/${id}/info.0.json`
    : `http://xkcd.com/info.0.json`

    fetch(`https://api.allorigins.win/raw?url=${BASE_URL}`)
        .then(response => response.json())
        .then(data => renderComics(data))
};
