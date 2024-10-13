document.addEventListener('DOMContentLoaded', () => {
  // Function to add smooth scroll listener to all ".scroll-down" elements
  function addScrollListener() {
    const scrollButtons = document.querySelectorAll('.scroll-down');
    scrollButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // Add scroll listener on page load
  addScrollListener();

  // Language toggle event listener
  const toggleEn = document.getElementById('toggle-en');
  const toggleZh = document.getElementById('toggle-zh');
  const langElements = document.querySelectorAll('.lang');

  toggleEn.addEventListener('click', () => {
    langElements.forEach(el => {
      if (el.classList.contains('en')) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
    addScrollListener(); // Re-add scroll listener after toggling language
  });

  toggleZh.addEventListener('click', () => {
    langElements.forEach(el => {
      if (el.classList.contains('zh')) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
    addScrollListener(); // Re-add scroll listener after toggling language
  });

  // Fade-in effect on scroll for sections
  const sections = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Navbar toggle functionality
  const navButton = document.querySelector('.nav-button');
  const navMenu = document.querySelector('.nav-menu');
  navButton.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
  });

  window.addEventListener('click', (e) => {
    if (!navButton.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.style.display = 'none';
    }
  });

  // Smooth scroll for navbar anchor links
  document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      navMenu.style.display = 'none'; // Close menu after clicking a link
    });
  });
});
