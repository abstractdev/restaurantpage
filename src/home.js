function home() {
    const body = document.querySelector('body');
    const homeContent = document.createElement('div');
    const info = document.createElement('h1');

    const createHomeContent = (() => {
    homeContent.classList.add('homeContent');
    info.classList.add('info');
    info.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, architecto hic. Nulla sequi laudantium ipsum, molestias temporibus quos recusandae deserunt!'
    body.appendChild(homeContent);
    homeContent.appendChild(info);
    })();
}

export { home };