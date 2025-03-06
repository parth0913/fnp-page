// import '@splidejs/splide/css';
// import Splide from '@splidejs/splide';

// Initialize the slider
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
      type: 'loop',
      perPage: 1, // Ensure 1 slide is shown at small screen sizes
      perMove: 1,
      gap: '10px', // Adjust space between slides
      breakpoints: {
          768: { perPage: 1 }, // Show 2 slides on tablets
          480: { perPage: 1 }, // Show 1 slide on mobile
      },
      autoplay: true, 
      interval: 3000,
  }).mount();
});









// let slideIndex = 1;
// document.addEventListener("DOMContentLoaded", function () {
//     showSlides(slideIndex);
// });
// showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }