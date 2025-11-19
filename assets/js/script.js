const menuItems = document.getElementsByClassName('menu-item');

Array.from(menuItems).forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('underlined');
    })
})