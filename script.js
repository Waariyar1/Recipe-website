// Initialize AOS Animation Library
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
  });

  // Initialize Back to Top Button
  initBackToTop();

  // Initialize Google Translate
  loadGoogleTranslateScript();

  // Initialize Recipe Ratings
  initRecipeRatings();

  // Initialize Newsletter Form
  initNewsletterForm();
});

// Initialize Back To Top Button
function initBackToTop() {
  const backToTopButton = document.getElementById('backToTop');

  if (backToTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
      } else {
        backToTopButton.style.display = 'none';
      }
    });

    // Scroll to top on click
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
}

// Toggle Menu for Mobile
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.classList.toggle('active');
  }
}

// Print Recipe
function printRecipe() {
  window.print();
}

// Initialize Google Translate
function loadGoogleTranslate() {
  if (typeof google !== 'undefined' && google.translate) {
    new google.translate.TranslateElement(
      {
        pageLanguage: 'en', // Default language of your website
        includedLanguages: 'es,fr,de,zh-CN,hi', // Add languages you want to support
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      'google_translate_element' // ID of the div where the translator will appear
    );
  } else {
    console.error('Google Translate API is not loaded.');
  }
}

// Translate Recipe (Trigger Google Translate)
function translateRecipe() {
  const translateElement = document.getElementById('google_translate_element');
  if (translateElement) {
    const combo = translateElement.querySelector('.goog-te-combo');
    if (combo) {
      combo.click(); // Open the language dropdown
    } else {
      console.error('Google Translate dropdown not found.');
    }
  } else {
    console.error('Google Translate element not found.');
  }
}

// Buy Ingredients (Redirect to E-commerce Store)
function buyIngredients() {
  const ecommerceUrl = 'https://your-ecommerce-store.com'; // Replace with your store URL
  window.open(ecommerceUrl, '_blank');
}

// Load Google Translate API
function loadGoogleTranslateScript() {
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate';
  script.async = true;
  script.onerror = () => {
    console.error('Failed to load Google Translate script.');
  };
  document.body.appendChild(script);
}

// Recipe Rating Interaction
function initRecipeRatings() {
  const ratingStars = document.querySelectorAll('.recipe-rating i');

  if (ratingStars.length > 0) {
    ratingStars.forEach((star) => {
      star.addEventListener('mouseover', function () {
        // Get all stars in this rating
        const parentRating = this.parentElement;
        const stars = parentRating.querySelectorAll('i');
        const currentIndex = Array.from(stars).indexOf(this);

        // Add hover class to current and previous stars
        for (let i = 0; i <= currentIndex; i++) {
          stars[i].classList.add('star-hover');
        }
      });

      star.addEventListener('mouseout', function () {
        // Remove hover class from all stars
        const parentRating = this.parentElement;
        const stars = parentRating.querySelectorAll('i');

        stars.forEach((s) => s.classList.remove('star-hover'));
      });

      star.addEventListener('click', function () {
        // Handle click (e.g., submit rating)
        alert('Thank you for rating this recipe!');
      });
    });
  }
}

// Newsletter Form Submission
function initNewsletterForm() {
  const newsletterForm = document.querySelector('.newsletter-form');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const checkboxInput = this.querySelector('input[type="checkbox"]');

      if (!emailInput || !checkboxInput) {
        alert('Form elements are missing.');
        return;
      }

      if (emailInput.value.trim() === '') {
        alert('Please enter your email address.');
        return;
      }

      if (!checkboxInput.checked) {
        alert('Please agree to receive updates.');
        return;
      }

      // Normally we would submit to a server here
      alert('Thank you for subscribing to our newsletter!');
      emailInput.value = '';
      checkboxInput.checked = false;
    });
  }
}


