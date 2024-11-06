// // Image carousel functionality
// let currentSlide = 10;
// const slides = document.querySelectorAll('.hero-slide');
// const totalSlides = slides.length;

// function nextSlide() {
//     // Move to the next slide and loop back to the first slide if needed
//     currentSlide = (currentSlide + 1) % totalSlides;
//     const offset = -100 * currentSlide; // Calculate the offset to shift to the next slide
//     document.querySelector('.hero-slider').style.transform = `translateX(${offset}%)`;
// }

// // Change image every 10 seconds (10000 milliseconds)
// setInterval(nextSlide, 10000); // This will trigger nextSlide function every 10 seconds
