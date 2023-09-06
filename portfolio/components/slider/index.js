let slideIndex = 1; 

function autoSlide() {
  plusSlides(1);
}

let timer = setInterval(autoSlide, 2000);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("dot");

  if(n > slides.length) {slideIndex = 1}
  if(n < 1) {slideIndex = slides.length}

  for(i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }

  slides[slideIndex-1].className += " active";
  
  document.getElementById("slideImg").src = "./img/img"+slideIndex+".png";
}

// Selector for the slider container 
const slider = document.querySelector('.slider');

// Slide functions...

slider.addEventListener('mouseenter', () => {
  clearInterval(timer); 
});

slider.addEventListener('mouseleave', () => {
  timer = setInterval(autoSlide, 2000);
});
