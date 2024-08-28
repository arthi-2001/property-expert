// const swiper = new Swiper(".heroslider", {
//   spaceBetween: 30,
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   effect: "fade",
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("swiper-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500); 
}



