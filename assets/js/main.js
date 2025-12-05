document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");
  let feedbackTimeout;

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (formFeedback) {
        formFeedback.textContent =
          "Message received. For urgent requests, please email info@lamassu-usa.com directly.";
        formFeedback.classList.add("show");

        clearTimeout(feedbackTimeout);
        feedbackTimeout = setTimeout(() => {
          formFeedback.classList.remove("show");
          formFeedback.textContent = "";
        }, 5000);
      }

      contactForm.reset();
    });
  }
});
