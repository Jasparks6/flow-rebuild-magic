/* HandyFlow - Static HTML/JS Template */

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

// Exit Popup Functions
let exitPopupShown = false;
let exitTimerInterval;

function openExitPopup() {
  if (exitPopupShown) return;
  
  const popup = document.getElementById('exitPopup');
  if (popup) {
    popup.classList.add('open');
    document.body.style.overflow = 'hidden';
    exitPopupShown = true;
    
    // Trigger confetti
    if (typeof confetti !== 'undefined') {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

      const randomInRange = (min, max) => {
        return Math.random() * (max - min) + min;
      };

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }, 250);
    }
    
    // Start countdown timer
    startExitTimer();
  }
}

function closeExitPopup() {
  const popup = document.getElementById('exitPopup');
  if (popup) {
    popup.classList.remove('open');
    document.body.style.overflow = '';
    
    // Stop timer
    if (exitTimerInterval) {
      clearInterval(exitTimerInterval);
    }
  }
}

function startExitTimer() {
  let timeLeft = 24 * 60 * 60 - 90; // 23:58:30 in seconds
  
  const updateTimer = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    
    const timerElement = document.getElementById('exitTimer');
    if (timerElement) {
      timerElement.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    if (timeLeft <= 0) {
      clearInterval(exitTimerInterval);
      return;
    }
    
    timeLeft--;
  };
  
  updateTimer(); // Initial call
  exitTimerInterval = setInterval(updateTimer, 1000);
}

// Mouse leave detection for exit popup
document.addEventListener('mouseleave', (e) => {
  // Trigger when mouse leaves from the top of the viewport
  if (e.clientY <= 0 && !exitPopupShown) {
    openExitPopup();
  }
});

// Close modals on escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeQuoteModal();
    closeExitPopup();
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

// Handle Contact Form Submission (if exists on other pages)
function handleContactSubmit(event) {
  event.preventDefault();
  alert('Message sent! We will get back to you soon.');
  event.target.reset();
}
