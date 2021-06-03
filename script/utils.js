export const getCurrentPage = () => {
    let page;
    if (window.location.search) {
        const pageParams = new URLSearchParams(window.location.search);
        page = pageParams.get('page')
    } else {
        page = 1
    }
    return page;
}

export const setCurrentPage = (id) => {
    window.location.search = `page=${id}`
};

export const getRandomPageId = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
