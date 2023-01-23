function getUrlId(url) {
    const splitUrl = url.split('/');
    const characterId = splitUrl[splitUrl.length - 2];
    return characterId;
}

export default getUrlId;