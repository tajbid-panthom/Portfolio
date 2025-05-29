document.addEventListener("DOMContentLoaded", () => {
  const siteHeader = document.getElementById("site-header");
  const mainNav = document.getElementById("main-nav");
  const mobileMenuButton = document.getElementById("mobile-menu-toggle");
  const openIcon = document.querySelector(
    ".site-header__mobile-toggle-icon--open"
  );
  const closeIcon = document.querySelector(
    ".site-header__mobile-toggle-icon--close"
  );
  const navLinks = document.querySelectorAll(".site-header__nav-link");
  const sections = document.querySelectorAll("section[id]"); // Ensure your sections have IDs

  // Mobile Menu Toggle
  if (mobileMenuButton && mainNav && openIcon && closeIcon) {
    mobileMenuButton.addEventListener("click", () => {
      const isActive = mainNav.classList.toggle("is-active");
      mobileMenuButton.setAttribute("aria-expanded", isActive);
      if (isActive) {
        openIcon.style.display = "none";
        closeIcon.style.display = "inline";
      } else {
        openIcon.style.display = "inline";
        closeIcon.style.display = "none";
      }
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (mainNav.classList.contains("is-active")) {
          mainNav.classList.remove("is-active");
          mobileMenuButton.setAttribute("aria-expanded", "false");
          openIcon.style.display = "inline";
          closeIcon.style.display = "none";
        }
      });
    });
  }

  // Active Link Highlighting on Scroll
  const headerHeight = siteHeader ? siteHeader.offsetHeight : 60; // Get header height or default

  function updateActiveLink() {
    let currentSectionId = "";
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
      // Adjust offset to account for sticky header and trigger point
      const sectionTop = section.offsetTop - headerHeight - 50;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSectionId = section.getAttribute("id");
      }
    });

    // Fallback for the last section if at the bottom of the page
    if (
      currentSectionId === "" &&
      window.innerHeight + scrollPosition >= document.body.offsetHeight - 50
    ) {
      if (sections.length > 0) {
        currentSectionId = sections[sections.length - 1].getAttribute("id");
      }
    }

    navLinks.forEach((link) => {
      link.classList.remove("site-header__nav-link--active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("site-header__nav-link--active");
      }
    });
  }

  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink(); // Initial call to set active link on page load
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".site-header__nav-link");

  function onScroll() {
    let scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const id = section.getAttribute("id");
      const offsetTop = section.offsetTop;
      const offsetHeight = section.offsetHeight;

      if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (
            link.getAttribute("href") === `./${id}.html` ||
            link.getAttribute("href") === `#${id}`
          ) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // Trigger on load
});

//for all navbar

// Hero section start

document.addEventListener("DOMContentLoaded", () => {
  // Hero section animation (optional, but requested)
  const heroElementsToAnimate = document.querySelectorAll(
    ".hero-animate-element"
  );

  if (heroElementsToAnimate.length > 0) {
    // Since hero is usually visible on load, we can animate it directly
    // or use IntersectionObserver if it might be below a preloader or something.
    // For simplicity, direct animation after a short delay for page load effect:
    setTimeout(() => {
      heroElementsToAnimate.forEach((el) => {
        el.classList.add("is-visible");
      });
    }, 100); // Small delay of 100ms
  }
});
// Hero section end

// skills & Experience Section start
// Simple reveal-on-scroll for skill cards
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");

  if (!skillCards.length) {
    return;
  }

  const revealOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Optional: Stop observing once visible
      }
    });
  };

  const options = {
    root: null, // relative to the viewport
    rootMargin: "0px",
    threshold: 0.1, // 10% of the item is visible
  };

  const observer = new IntersectionObserver(revealOnScroll, options);

  skillCards.forEach((card) => {
    observer.observe(card);
  });
});
// skills & Experience Section end

//selected work section start
// Simple reveal-on-scroll for portfolio items
document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  if (!portfolioItems.length) {
    return;
  }

  const revealOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Optional: Stop observing once visible
      }
    });
  };

  const options = {
    root: null, // relative to the viewport
    rootMargin: "0px",
    threshold: 0.1, // 10% of the item is visible (adjust as needed, 0.1-0.2 is common)
  };

  const observer = new IntersectionObserver(revealOnScroll, options);

  portfolioItems.forEach((item) => {
    observer.observe(item);
  });
});

//selected work section end

//section what I do start
// Simple reveal-on-scroll for responsibility cards
document.addEventListener("DOMContentLoaded", () => {
  const responsibilityCards = document.querySelectorAll(".responsibility-card");

  if (!responsibilityCards.length) {
    return;
  }

  const revealOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Optional: Stop observing once visible
      }
    });
  };

  const options = {
    root: null, // relative to the viewport
    rootMargin: "0px",
    threshold: 0.1, // 10% of the item is visible
  };

  const observer = new IntersectionObserver(revealOnScroll, options);

  responsibilityCards.forEach((card) => {
    observer.observe(card);
  });
});
//section what I do end

//testimonials section start
// Simple reveal-on-scroll for testimonial cards
document.addEventListener("DOMContentLoaded", () => {
  const testimonialCards = document.querySelectorAll(".testimonial-card");

  if (!testimonialCards.length) {
    return;
  }

  const revealOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Optional: Stop observing once visible
      }
    });
  };

  const options = {
    root: null, // relative to the viewport
    rootMargin: "0px",
    threshold: 0.1, // 10% of the item is visible
  };

  const observer = new IntersectionObserver(revealOnScroll, options);

  testimonialCards.forEach((card) => {
    observer.observe(card);
  });
});
//testimonials section end

// Contact footer section start for all
fetch("../../views/includes/contactFooter.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("contact-footer").innerHTML = data;
  });
// Contact footer section end

// Footer section start for all
fetch("../../views/includes/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
// JavaScript to update the year in the copyright notice
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
// Footer section end
