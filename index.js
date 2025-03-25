const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    console.log('Menu toggled', navMenu.classList.contains('active')); // Debug log
}

// Open/close mobile menu
hamburger.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll events
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    
    // Add background shadow to navbar on scroll
    if (scrollPosition > 50) {
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '0.5rem 5%';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '0.7rem 5%';
    }
    
    // Active menu item on scroll
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Add event listener for DOM content loaded to ensure all elements are available
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    // Re-assign event listeners to make sure they're attached
    const hamburgerRecheck = document.querySelector('.hamburger');
    if (hamburgerRecheck) {
        hamburgerRecheck.addEventListener('click', toggleMobileMenu);
        console.log('Hamburger event listener attached');
    } else {
        console.error('Hamburger element not found');
    }
});

// Create placeholder folder structure and dummy images for demo
console.log('Cultura Coffee website loaded successfully!');

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

// Mencegah penggunaan tombol F12, Ctrl+Shift+I, dan Ctrl+Shift+J
document.addEventListener("keydown", function(event) {
    if (event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J")) ||
        (event.ctrlKey && event.key === "U")) {
        event.preventDefault();
    }
});
