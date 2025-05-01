let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(n) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Reset to first slide if at end
    currentSlide = (n + slides.length) % slides.length;
    
    // Show current slide
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto advance slides every 5 seconds
setInterval(nextSlide, 5000);