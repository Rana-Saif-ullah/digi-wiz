document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.testimonial');
    const numVisible = 2; // Number of testimonials to display at a time
    let currentSlide = 0;

    function showSlides(startIndex) {
        testimonials.forEach((testimonial, i) => {
            if (i >= startIndex && i < startIndex + numVisible) {
                testimonial.style.display = 'block';
            } else {
                testimonial.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        if (currentSlide < testimonials.length - numVisible) {
            currentSlide++;
        }
        showSlides(currentSlide);
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
        }
        showSlides(currentSlide);
    }

    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);

    showSlides(currentSlide);
});
