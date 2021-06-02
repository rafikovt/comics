import {title, imageContainer, description, date} from './const';

export const renderComics = (data) => {
    title.textContent = data.title;
    const image = document.createElement('img');
    image.src = data.img;
    image.alt = data.alt;
    imageContainer.append(image);
    description.textContent = data.transcript;
    date.textContent = `${data.day}-${data.month}-${data.year}`
}
