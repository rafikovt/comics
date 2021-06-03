import { title, imageContainer, description, date } from './const';

export const renderComics = (data) => {
    title.textContent = data.title;
    const image = document.createElement('img');
    image.src = data.img;
    image.alt = data.alt;
    imageContainer.append(image);
    description.textContent = data.transcript;
    date.textContent = `Дата создания: ${data.day}-${data.month}-${data.year}`
}

export const renderLoader = () => {
    title.textContent = 'Загружаем...';
}

export const renderErrorPage = () => {
    title.textContent = 'Произошла ошибка при загрузке, либо данный комикс отсутствует на сервере';
    title.classList.add('danger')
}
