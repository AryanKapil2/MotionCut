// script.js
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    adjustSlides(index);
}

function adjustSlides(index) {
    slides.forEach((slide, i) => {
        const diff = i - index;
        slide.style.transform = `translateX(${diff * 100}%) scale(${diff === 0 ? 1 : 0.8})`;
        slide.style.opacity = diff === 0 ? 1 : 0.6;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

showSlide(currentIndex);
