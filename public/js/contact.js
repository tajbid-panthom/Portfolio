document.addEventListener("DOMContentLoaded", () => {
  // --- Generic Animation Observer ---
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
  if (elementsToAnimate.length > 0) {
    const revealOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    };
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    const observer = new IntersectionObserver(revealOnScroll, observerOptions);
    elementsToAnimate.forEach((el) => observer.observe(el));
  }

  // --- Basic Form Handling Example ---
  const contactForm = document.getElementById("contactForm");
  const formStatusMessage = document.getElementById("form-status-message");

  if (contactForm && formStatusMessage) {
    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent default form submission

      const formData = new FormData(contactForm);
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;

      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
      formStatusMessage.textContent = "";
      formStatusMessage.className = "contact-form__status-message"; // Reset classes

      try {
        // IMPORTANT: Replace 'YOUR_FORM_ENDPOINT_HERE' in the form's action attribute
        // or directly here if you prefer.
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json", // Common for many form backends
          },
        });

        if (response.ok) {
          // const result = await response.json(); // If backend sends JSON response
          formStatusMessage.textContent =
            "Message sent successfully! Thank you.";
          formStatusMessage.classList.add("success");
          contactForm.reset(); // Clear the form
        } else {
          // Handle server errors (e.g., response.status is 4xx or 5xx)
          // const errorResult = await response.json(); // If backend sends error details in JSON
          // formStatusMessage.textContent = errorResult.message || 'Oops! Something went wrong. Please try again.';
          formStatusMessage.textContent =
            "Oops! Something went wrong. Please try again. Status: " +
            response.status;
          formStatusMessage.classList.add("error");
        }
      } catch (error) {
        // Handle network errors or other issues
        // console.error('Form submission error:', error);
        formStatusMessage.textContent =
          "A network error occurred. Please check your connection and try again.";
        formStatusMessage.classList.add("error");
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });
  }
});
