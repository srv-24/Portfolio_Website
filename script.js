document.addEventListener("DOMContentLoaded", () => {
  // 🌟 1. Scroll Fade-in Animation
  const faders = document.querySelectorAll('.fade-in-up');
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.2,
  });
  faders.forEach(fader => appearOnScroll.observe(fader));

  // 💌 2. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you! Your message has been sent.');
      this.reset();
    });
  }

  // 🍔 3. Hamburger Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
    // Close nav menu when any nav link is clicked (mobile)
const navLinks = document.querySelectorAll("#nav-menu a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

  }

  // 🌙☀️ 4. Dark Mode Toggle
  const darkToggle = document.getElementById("darkModeToggle");
  if (darkToggle) {
    // On toggle click
    darkToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Change icon accordingly
      if (document.body.classList.contains("dark-mode")) {
        darkToggle.textContent = "☀️"; // Show sun icon
      } else {
        darkToggle.textContent = "🌙"; // Show moon icon
      }
    });

    // On initial load – show correct icon
    if (document.body.classList.contains("dark-mode")) {
      darkToggle.textContent = "☀️";
    } else {
      darkToggle.textContent = "🌙";
    }
  }
});
