function menu() {
    const body = document.querySelector('body');
    const menuContent = document.createElement('div');
    const dish1Container = document.createElement('div');
    const dish2Container = document.createElement('div');
    const dish3Container = document.createElement('div');
    const dish4Container = document.createElement('div');
    const dish1Text = document.createElement('div');
    const dish2Text = document.createElement('div');
    const dish3Text = document.createElement('div');
    const dish4Text = document.createElement('div');
    const dish1Price = document.createElement('div');
    const dish2Price = document.createElement('div');
    const dish3Price = document.createElement('div');
    const dish4Price = document.createElement('div');

    const createMenuContent = (() => {
    menuContent.classList.add('menuContent');
    dish1Container.classList.add('dish1Container');
    dish1Text.classList.add('dish1Text');
    dish1Price.classList.add('dish1Price');
    dish1Text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, architecto hic. Nulla sequi laudantium ipsum, molestias temporibus quos recusandae deserunt!';
    dish1Price.textContent = '10'
    dish2Container.classList.add('dish2Container');
    dish2Text.classList.add('dish1Text');
    dish2Price.classList.add('dish1Price');
    dish2Text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, architecto hic. Nulla sequi laudantium ipsum, molestias temporibus quos recusandae deserunt!';
    dish2Price.textContent = '10'
    dish3Container.classList.add('dish3Container');
    dish3Text.classList.add('dish1Text');
    dish3Price.classList.add('dish1Price');
    dish3Text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, architecto hic. Nulla sequi laudantium ipsum, molestias temporibus quos recusandae deserunt!';
    dish3Price.textContent = '10'
    dish4Container.classList.add('dish4Container');
    dish4Text.classList.add('dish1Text');
    dish4Price.classList.add('dish1Price');
    dish4Text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, architecto hic. Nulla sequi laudantium ipsum, molestias temporibus quos recusandae deserunt!';
    dish4Price.textContent = '10'
    body.appendChild(menuContent);
    menuContent.appendChild(dish1Container);
    menuContent.appendChild(dish2Container);
    menuContent.appendChild(dish3Container);
    menuContent.appendChild(dish4Container);
    dish1Container.appendChild(dish1Text);
    dish1Container.appendChild(dish1Price);
    dish2Container.appendChild(dish2Text);
    dish2Container.appendChild(dish2Price);
    dish3Container.appendChild(dish3Text);
    dish3Container.appendChild(dish3Price);
    dish4Container.appendChild(dish4Text);
    dish4Container.appendChild(dish4Price);

    })();
};

export { menu };