let currentIndex = 0;
const images = document.querySelectorAll('.item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

// Lightbox Open
document.querySelectorAll('.item').forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        openLightbox(images[index].src);
    });
});

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function changeImg(n) {
    currentIndex += n;
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;
    lightboxImg.src = images[currentIndex].src;
}

// Category Filter
function filterSelection(c) {
    const items = document.getElementsByClassName("item");
    const btns = document.getElementsByClassName("btn");

    // Button active class change
    for (let btn of btns) {
        btn.classList.remove("active");
        if(btn.innerText.toLowerCase() === c) btn.classList.add("active");
    }

    for (let item of items) {
        if (c === 'all') {
            item.style.display = "block";
        } else {
            if (item.classList.contains(c)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        }
    }
}