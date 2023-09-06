// Get all .webpage-container elements
const webpageContainers = document.querySelectorAll('.webpage-container');

// Loop through each one
webpageContainers.forEach(container => {

  // Get the corresponding .webpage-img
  const webpageImg = container.querySelector('.webpage-img');

  // Add mouseover listener
  container.addEventListener('mouseover', event => {

    const height = webpageImg.height;
  
  // Set transform style dynamically
  webpageImg.style.transform = `translate3d(0px, -${height-370}px, 0px)`; 
  });
  
  // Add mouseout listener  
  container.addEventListener('mouseout', event => {
    webpageImg.style.transform = "translate3d(0px, 0px, 0px)";
  });

});