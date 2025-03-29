// Toggle sidebar (for smaller screens)
function toggleSidebar() {
  const hamburger = document.querySelector(".hamburger-menu-container");
  hamburger.classList.toggle("open");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.querySelector(".overlay");
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  } else {
    sidebar.classList.add("open");
  }
  overlay.classList.toggle("open");
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function changeSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  document.querySelector(".slider-container").style.transform = `translateX(-${currentSlide * 100
    }%)`;
}

setInterval(changeSlide, 3000);

// loader animations
// Show the loader when a link is clicked
document.querySelectorAll(".nav-item").forEach((link) => {
  link.addEventListener("click", function (e) {
    document.body.classList.add("show-loader");

    setTimeout(() => {
      window.location.href = this.href;
    }, 300);
    e.preventDefault();
  });
});

// Hiding the loader after the page is loaded
window.addEventListener("load", function () {
  document.body.classList.remove("show-loader");
});

//to check if the scroll animation is working
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");

  function checkVisibility() {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});













// projects
let currentImageIndex = 0;
let currentProject = null;
let touchStartX = 0;
let touchEndX = 0;

const projectsData = {
  project1: {
    title: "Nonna's Restaurant",
    location: "Koramangala, Bengaluru",
    images: Array.from({ length: 6 }, (_, i) =>
      `Assets/Sites/Nonnas-kormangala/nonnas-outlet (${i + 1}).jpeg`)
  },
  project2: {
    title: "Nonna's Restaurant",
    location: "Phoenix Mall, Mumbai",
    images: [
      'Assets/Sites/Nonna\'s-outlet/nonnas (19).jpeg',
      'Assets/Sites/Nonna\'s-outlet/nonnas (18).jpeg',
      'Assets/Sites/Nonna\'s-outlet/nonnas (17).jpeg',
      'Assets/Sites/Nonna\'s-outlet/nonnas (16).jpeg',
      'Assets/Sites/Nonna\'s-outlet/nonnas (15).jpeg',
      'Assets/Sites/Nonna\'s-outlet/nonnas (9).jpeg',
      'Assets/Sites/Nonna\'s-outlet/nonnas (8).jpeg',
      'Assets/Sites/Nonna\'s-outlet/nonnas (7).jpeg',
      'Assets/Sites/Nonna\'s-outlet/nonnas (6).jpeg',
      'Assets/Sites/Nonna\'s-outlet/nonnas (5).jpeg',
      'Assets/Sites/Nonna\'s-outlet/nonnas (4).jpeg',
      'Assets/Sites/Nonna\'s-outlet/nonnas (3).jpeg',
 
    ]
  },
  project3: {
    title: "Starbucks Cafe",
    location: "MRC Nagar, Chennai",
    images: Array.from({ length: 7 }, (_, i) =>
      `Assets/Sites/Starbucks-Chennai/starbucks-chennai (${i + 1}).jpeg`)
  },
  project4: {
    title: "VRK Heritage",
    location: "Jayanagar, Bengaluru",
    images: [
      'Assets/Sites/vrk-heritage-jayanagar/vrk-heritage-banglore (1).jpg',
      'Assets/Sites/vrk-heritage-jayanagar/vrk-heritage-banglore (1).webp',
      'Assets/Sites/vrk-heritage-jayanagar/vrk-heritage-banglore (2).jpg',
      'Assets/Sites/vrk-heritage-jayanagar/vrk-heritage-banglore (3).jpg',
      'Assets/Sites/vrk-heritage-jayanagar/vrk-heritage-banglore (4).jpg',
      'Assets/Sites/vrk-heritage-jayanagar/vrk-heritage-banglore (5).jpg',
      'Assets/Sites/vrk-heritage-jayanagar/vrk-heritage-banglore (6).jpg',
      
    ]
  },

  project5: {
    title: "Avantra By Trends",
    location: "Jayanagar, Bengaluru",
    images: [
      'Assets/Sites/avantra-trends/avantra-trends (1).jpg',
      'Assets/Sites/avantra-trends/avantra-trends (2).jpg',
      'Assets/Sites/avantra-trends/avantra-trends (3).jpg',
      'Assets/Sites/avantra-trends/avantra-trends (4).jpg',
      'Assets/Sites/avantra-trends/avantra-trends (5).jpg',
      'Assets/Sites/avantra-trends/avantra-trends (6).jpg',

      
    ]
  },

  project6: {
    title: "VLCC",
    location: "Sahakar Nagar, Bengaluru",
    images: [
      'Assets/Sites/vlcc/vlcc-sahakar-nagar (1).jpg',
      'Assets/Sites/vlcc/vlcc-sahakar-nagar (2).jpg',
      'Assets/Sites/vlcc/vlcc-sahakar-nagar (3).jpg',
      'Assets/Sites/vlcc/vlcc-sahakar-nagar (4).jpg',
      'Assets/Sites/vlcc/vlcc-sahakar-nagar (5).jpg',
      'Assets/Sites/vlcc/vlcc-sahakar-nagar (6).jpg',
      'Assets/Sites/vlcc/vlcc-sahakar-nagar (7).jpg',
      'Assets/Sites/vlcc/vlcc-sahakar-nagar (8).jpg',
      'Assets/Sites/vlcc/vlcc-sahakar-nagar (9).jpg',

      
    ]
  },

  project7: {
    title: "Anand Sweets",
    location: "Hennur Gardens, Bengaluru",
    images: [
      'Assets/Sites/anand-sweets/anand-sweets (1).jpg',
      'Assets/Sites/anand-sweets/anand-sweets (2).jpg',
      'Assets/Sites/anand-sweets/anand-sweets (3).jpg',
      'Assets/Sites/anand-sweets/anand-sweets (4).jpg',
      'Assets/Sites/anand-sweets/anand-sweets (5).jpg',
      'Assets/Sites/anand-sweets/anand-sweets (6).jpg',
      'Assets/Sites/anand-sweets/anand-sweets (7).jpg',
      'Assets/Sites/anand-sweets/anand-sweets (8).jpg',
      'Assets/Sites/anand-sweets/anand-sweets (9).jpg',
      'Assets/Sites/anand-sweets/anand-sweets (10).jpg',

      
    ]
  },

  project8: {
    title: "McDonald's",
    location: "Attibele, Bengaluru",
    images: [
      'Assets/Sites/mcdonald-attibele/Mcdonald-attibele (1).jpg',
      'Assets/Sites/mcdonald-attibele/Mcdonald-attibele (2).jpg',
      'Assets/Sites/mcdonald-attibele/Mcdonald-attibele (3).jpg',
      'Assets/Sites/mcdonald-attibele/Mcdonald-attibele (4).jpg',
      'Assets/Sites/mcdonald-attibele/Mcdonald-attibele (5).jpg',
      'Assets/Sites/mcdonald-attibele/Mcdonald-attibele (6).jpg',
      'Assets/Sites/mcdonald-attibele/Mcdonald-attibele (7).jpg',
      'Assets/Sites/mcdonald-attibele/Mcdonald-attibele (8).jpg',
      'Assets/Sites/mcdonald-attibele/Mcdonald-attibele (9).jpg',

      
    ]
  },

  project9: {
    title: "Pizza Express",
    location: "Indiranagar, Bengaluru",
    images: [
      'Assets/Sites/pizzaexpress-indranagar/pizzaExpress (1).JPG',
      'Assets/Sites/pizzaexpress-indranagar/pizzaExpress (2).JPG',
      'Assets/Sites/pizzaexpress-indranagar/pizzaExpress (3).JPG',
      'Assets/Sites/pizzaexpress-indranagar/pizzaExpress (4).JPG',
      'Assets/Sites/pizzaexpress-indranagar/pizzaExpress (5).JPG',
      'Assets/Sites/pizzaexpress-indranagar/pizzaExpress (6).JPG',
      'Assets/Sites/pizzaexpress-indranagar/pizzaExpress (7).JPG',

      
    ]
  },

  project10: {
    title: "Starbucks Cafe",
    location: "Popur, Chennai",
    images: [
      'Assets/Sites/starbucks-popur/starbucks-popur (1).jpg',
      'Assets/Sites/starbucks-popur/starbucks-popur (2).jpg',
      'Assets/Sites/starbucks-popur/starbucks-popur (3).jpg',
      'Assets/Sites/starbucks-popur/starbucks-popur (4).jpg',
      'Assets/Sites/starbucks-popur/starbucks-popur (5).jpg',
      'Assets/Sites/starbucks-popur/starbucks-popur (6).jpg',
      'Assets/Sites/starbucks-popur/starbucks-popur (7).jpg',
      
    ]
  },

  project11: {
    title: "John Jacobs",
    location: "Indiranagar, Bengaluru",
    images: [
      'Assets/Sites/john-jacobs/john-jacobs (1).jpg',
      'Assets/Sites/john-jacobs/john-jacobs (2).jpg',
      'Assets/Sites/john-jacobs/john-jacobs (3).jpg',
      'Assets/Sites/john-jacobs/john-jacobs (4).jpg',
      'Assets/Sites/john-jacobs/john-jacobs (5).jpg',
      'Assets/Sites/john-jacobs/john-jacobs (6).jpg',
      
    ]
  },
};

// DOM elements
const galleryModal = document.getElementById('galleryModal');
const closeButton = document.getElementById('closeGallery');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const mainImage = document.getElementById('galleryMainImage');
const thumbnailsContainer = document.getElementById('galleryThumbnails');
const projectTitle = document.getElementById('galleryProjectTitle');
const projectLocation = document.getElementById('galleryProjectLocation');
const swipeLeft = document.getElementById('swipeLeft');
const swipeRight = document.getElementById('swipeRight');

function openGallery(projectId) {
  currentProject = projectsData[projectId];
  if (!currentProject) return;

  currentImageIndex = 0;
  updateGallery();

  galleryModal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Add slight delay for the image to load before animation
  setTimeout(() => {
    mainImage.classList.add('active');
  }, 50);
}

function closeGallery() {
  galleryModal.classList.remove('active');
  mainImage.classList.remove('active');
  document.body.style.overflow = '';
}

function nextImage() {
  if (!currentProject) return;
  currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
  updateGallery();
}

function prevImage() {
  if (!currentProject) return;
  currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
  updateGallery();
}

function updateGallery() {
  // Reset animation
  mainImage.classList.remove('active');

  // Update main image after a slight delay
  setTimeout(() => {
    mainImage.src = currentProject.images[currentImageIndex];
    mainImage.alt = `${currentProject.title} - Image ${currentImageIndex + 1}`;
    mainImage.classList.add('active');
  }, 200);

  // Update project info
  projectTitle.textContent = currentProject.title;
  projectLocation.textContent = currentProject.location;

  // Update thumbnails
  thumbnailsContainer.innerHTML = '';
  currentProject.images.forEach((imgSrc, index) => {
    const thumb = document.createElement('img');
    thumb.src = imgSrc;
    thumb.className = 'thumbnail' + (index === currentImageIndex ? ' active' : '');
    thumb.alt = `Thumbnail ${index + 1}`;
    thumb.addEventListener('click', () => {
      currentImageIndex = index;
      updateGallery();
    });
    thumbnailsContainer.appendChild(thumb);
  });
}

// Event Listeners
closeButton.addEventListener('click', closeGallery);
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

// Touch events for mobile swipe
galleryModal.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

galleryModal.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const threshold = 50; // Minimum swipe distance
  const difference = touchStartX - touchEndX;

  if (difference > threshold) {
    // Swipe left - next image
    nextImage();
  } else if (difference < -threshold) {
    // Swipe right - previous image
    prevImage();
  }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (galleryModal.classList.contains('active')) {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeGallery();
  }
});

// Click on swipe areas (fallback for some mobile browsers)
swipeLeft.addEventListener('click', prevImage);
swipeRight.addEventListener('click', nextImage);










// map

var map = L.map("map").setView([51.505, -0.1], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Add a marker with a popup to the map
L.marker([51.505, -0.09])
  .addTo(map)
  .bindPopup("<b>Hello world!</b><br>This is a marker.")
  .openPopup();

// Scroll animation handler
function handleScrollAnimations() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      element.classList.add("visible");
    }
  });
}

// Initialize on load and scroll
window.addEventListener("load", handleScrollAnimations);
window.addEventListener("scroll", handleScrollAnimations);
