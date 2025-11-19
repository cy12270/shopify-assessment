const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        menuItems.forEach(i => i.classList.remove('underlined'));
        item.classList.add('underlined');
    });
});

// --- slideshow: clicking a thumbnail updates the main product image ---
const slides = document.querySelectorAll('.slideshow .slide');
const mainImage = document.querySelector('.product-image img');

if (slides && slides.length && mainImage) {
    slides.forEach(slide => {
        // make it obvious thumbnails are clickable
        slide.style.cursor = 'pointer';

        slide.addEventListener('click', () => {
            // remove current-slide from others
            slides.forEach(s => s.classList.remove('current-slide'));

            // mark this as current
            slide.classList.add('current-slide');

            // find the image inside the clicked slide and copy its src/alt
            const img = slide.querySelector('img');
            if (img) {
                // replace main product image
                mainImage.src = img.src;
                if (img.alt) mainImage.alt = img.alt;
            }
        });
    });
}