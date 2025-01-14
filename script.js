// Toggle sidebar (for smaller screens)
function toggleSidebar() {

  const hamburger = document.querySelector('.hamburger-menu-container');
  hamburger.classList.toggle('open');
  const sidebar = document.getElementById("sidebar");
  const overlay = document.querySelector('.overlay');
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  } else {
    sidebar.classList.add("open");
  }
  overlay.classList.toggle('open');
}


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  document.querySelector('.slider-container').style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(changeSlide, 3000);



// loader animations
// Show the loader when a link is clicked
document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', function (e) {

    document.body.classList.add('show-loader');


    setTimeout(() => {

      window.location.href = this.href;
    }, 300);
    e.preventDefault();
  });
});

// Hiding the loader after the page is loaded
window.addEventListener('load', function () {
  document.body.classList.remove('show-loader');
});


//to check if the scroll animation is working
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.animate-on-scroll');

  function checkVisibility() {
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});




// projects

const projectImages = document.querySelectorAll('.project-image');
const bottomImageBar = document.getElementById('bottomImageBar');
const imageGallery = document.getElementById('imageGallery');
const closeBar = document.querySelector('.close-bar');

const projectImagesData = {
  project1: ['Assets/sample1.jpg', 'Assets/sample1.jpg', 'Assets/sample1.jpg', 'Assets/sample1.jpg', 'Assets/sample1.jpg', 'Assets/sample1.jpg'],
  project2: ['Assets/sample1.jpg', 'Assets/sample1.jpg', 'Assets/sample1.jpg']
};

projectImages.forEach(image => {
  image.addEventListener('click', () => {
    const project = image.parentElement.dataset.project;
    imageGallery.innerHTML = '';

    projectImagesData[project].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = "Project Image";
      imageGallery.appendChild(img);
    });

    bottomImageBar.style.bottom = '0';
  });
});

closeBar.addEventListener('click', () => {
  bottomImageBar.style.bottom = '-100%';
});


// map


var map = L.map('map').setView([51.505, -0.10], 13);

// Add OpenStreetMap tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker with a popup to the map
L.marker([51.505, -0.09]).addTo(map)
  .bindPopup("<b>Hello world!</b><br>This is a marker.")
  .openPopup();