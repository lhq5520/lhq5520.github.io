// scroll index
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for "Scroll Down" link
    document.querySelector('.scroll-down').addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
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
  });
  
//nav bar
document.addEventListener('DOMContentLoaded', () => {
  const navButton = document.querySelector('.nav-button');
  const navMenu = document.querySelector('.nav-menu');

  // Toggle menu visibility when nav button is clicked
  navButton.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Close the menu when clicking anywhere outside
  window.addEventListener('click', function(e) {
    if (!navButton.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.style.display = 'none';
    }
  });

  // Smooth scroll for anchor links
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

//language
document.addEventListener('DOMContentLoaded', () => {
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
  });

  toggleZh.addEventListener('click', () => {
      langElements.forEach(el => {
          if (el.classList.contains('zh')) {
              el.style.display = 'block';
          } else {
              el.style.display = 'none';
          }
      });
  });
});
