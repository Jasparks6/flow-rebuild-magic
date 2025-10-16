/* Static HTML/JS Template - AI Automation Ready */

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  } else {
    menu.classList.add('open');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  }
}

// Footer Section Toggle (Mobile)
function toggleFooterSection(button) {
  if (window.innerWidth >= 1024) return;
  
  const content = button.nextElementSibling;
  const icon = button.querySelector('.toggle-icon');
  
  if (content.classList.contains('open')) {
    content.classList.remove('open');
    icon.style.transform = 'rotate(0deg)';
  } else {
    content.classList.add('open');
    icon.style.transform = 'rotate(180deg)';
  }
}

// Quote Modal Functions
function openQuoteModal() {
  const modal = document.getElementById('quoteModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeQuoteModal() {
  const modal = document.getElementById('quoteModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Handle Quote Form Submission
function handleQuoteSubmit(event) {
  event.preventDefault();
  alert('Quote request submitted! We will contact you shortly.');
  closeQuoteModal();
  event.target.reset();
}

// Handle Contact Form Submission
function handleContactSubmit(event) {
  event.preventDefault();
  alert('Message sent! We will get back to you soon.');
  event.target.reset();
}

// Close modal on escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeQuoteModal();
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#book') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});