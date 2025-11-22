const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        menuItems.forEach(i => i.classList.remove('underlined'));
        item.classList.add('underlined');
    });
});

// --- slideshow: clicking a thumbnail updates the main product image ---
// --- and ONLY slide 2 updates the background ---

const slides = document.querySelectorAll('.slideshow .slide');
const mainImage = document.querySelector('.product-image img');
const mainContainer = document.querySelector('.product-image');

if (slides.length && mainImage && mainContainer) {

    slides.forEach((slide, index) => {
        slide.style.cursor = 'pointer';

        slide.addEventListener('click', () => {

            // remove current-slide from others
            slides.forEach(s => s.classList.remove('current-slide'));

            // set current slide
            slide.classList.add('current-slide');

            // update the main image
            const img = slide.querySelector('img');
            if (img) {
                mainImage.src = img.src;
                if (img.alt) mainImage.alt = img.alt;
            }

            // --- ONLY SLIDE 2 changes background ---
            if (index === 1) {
                mainContainer.classList.add('triangle-bottom-right-bg');
            } else {
                mainContainer.classList.remove('triangle-bottom-right-bg');
            }
        });
    });
}
