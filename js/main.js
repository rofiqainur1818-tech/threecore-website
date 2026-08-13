// ============================================
// THREECORE — MAIN JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {

  // --- Navigation Scroll Effect ---
  const nav = document.querySelector('.nav');
  let lastScroll = 0;

  function handleScroll() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Mobile Menu ---
  const mobileToggle = document.querySelector('.nav-mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    mobileClose.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Hero Animation ---
  const heroHeadline = document.querySelector('.hero-headline');
  const heroSubline = document.querySelector('.hero-subline');
  const heroCta = document.querySelector('.hero-cta');
  const heroFormula = document.querySelector('.hero-formula');

  if (heroHeadline) {
    setTimeout(() => heroHeadline.classList.add('visible'), 200);
  }
  if (heroSubline) {
    setTimeout(() => heroSubline.classList.add('visible'), 600);
  }
  if (heroCta) {
    setTimeout(() => heroCta.classList.add('visible'), 1000);
  }
  if (heroFormula) {
    setTimeout(() => heroFormula.classList.add('visible'), 1400);
  }

  // --- Philosophy Steps Animation ---
  const philosophySteps = document.querySelectorAll('.philosophy-step');
  const philosophyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 400);
        philosophyObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  philosophySteps.forEach(step => philosophyObserver.observe(step));

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // --- Coffee Finder Interaction ---
  const finderOptions = document.querySelectorAll('.finder-option');
  finderOptions.forEach(option => {
    option.addEventListener('click', function() {
      const preference = this.dataset.preference;
      const recommendation = getCoffeeRecommendation(preference);
      alert(recommendation);
    });
  });

  function getCoffeeRecommendation(preference) {
    const map = {
      'bold': 'TITAN — Full Robusta, body 5/5. For those who want presence in every cup.',
      'balanced': 'TORQUE — 50/50 Arabica-Robusta. The versatile choice for any moment.',
      'sweet': 'FORGE — The Kopi Susu Master. Milk chocolate, hazelnut, brown sugar.',
      'refined': 'PRIME — 100% Arabica. Elegant, complex, for the discerning palate.',
      'expressive': 'SPECTRUM — Multi-origin Arabica. A showcase of what coffee can be.',
      'everyday': 'VECTOR — 70% Arabica. Your daily upgrade that makes sense.'
    };
    return map[preference] || 'Explore our Espresso Series to find your match.';
  }

  // --- Parallax Effect for Hero Background ---
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }, { passive: true });
  }

  // --- Active Navigation Link ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  console.log('THREECORE website initialized.');
});
