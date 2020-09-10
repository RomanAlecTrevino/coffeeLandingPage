export const renderWelcome = () => {
    const siteCard = document.querySelector('.site-card');
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title-div');
    titleDiv.classList.add('page-container');
    
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerHTML = `Flowers Coffee`

    const logLine = document.createElement('div');
    logLine.classList.add('log-line');
    logLine.innerText = `Where Dreams Come True`

    title.appendChild(logLine);

    titleDiv.appendChild(title);

    siteCard.appendChild(titleDiv);

    return titleDiv;
}