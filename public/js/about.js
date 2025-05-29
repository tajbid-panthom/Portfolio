//Frontend deveopment start
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector(
    ".skills-progress-animate-section"
  );

  if (skillsSection) {
    const animateSkills = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate the section itself (fade/slide in)
          entry.target.classList.add("is-visible");

          // Animate the progress bars and percentage text within the section
          const skillItems = entry.target.querySelectorAll(".skill-item");
          skillItems.forEach((item) => {
            const targetPercentage = parseInt(item.dataset.percentage, 10);
            const progressBarFilled = item.querySelector(
              ".skill-item__progress-bar-filled"
            );
            const percentageTextElement = item.querySelector(
              ".skill-item__percentage"
            );

            if (
              isNaN(targetPercentage) ||
              !progressBarFilled ||
              !percentageTextElement
            ) {
              // console.error("Missing data or elements for skill item:", item);
              return; // Skip this item if data is bad
            }

            // 1. Animate progress bar width (triggers CSS transition)
            // Using a small timeout to ensure the transition occurs after the element is visible
            setTimeout(() => {
              progressBarFilled.style.width = targetPercentage + "%";
            }, 100); // Small delay

            // 2. Animate percentage text count-up
            let startTimestamp = null;
            const animationDuration = 1200; // ms, should match CSS transition duration for the bar

            function step(timestamp) {
              if (!startTimestamp) startTimestamp = timestamp;

              // Calculate progress of the animation (0 to 1)
              const elapsedTime = timestamp - startTimestamp;
              let progress = elapsedTime / animationDuration;
              progress = Math.min(progress, 1); // Cap progress at 1 (100%)

              const currentValue = Math.floor(progress * targetPercentage);
              percentageTextElement.textContent = currentValue + "%";

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                // Ensure final value is exact
                percentageTextElement.textContent = targetPercentage + "%";
              }
            }
            // Start the text animation, slight delay to sync with bar visually
            setTimeout(() => {
              requestAnimationFrame(step);
            }, 100); // Start text animation around the same time as bar
          });
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the section is visible
    };

    const skillsObserver = new IntersectionObserver(
      animateSkills,
      observerOptions
    );
    skillsObserver.observe(skillsSection);
  }
});

//Frontend development start

//Backend development start
document.addEventListener("DOMContentLoaded", () => {
  // Select ALL sections that need this skill progress animation
  const skillProgressSections = document.querySelectorAll(
    ".skills-progress-animate-section"
  );

  if (skillProgressSections.length > 0) {
    const animateSkillsInSection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate the section container itself (fade/slide in)
          entry.target.classList.add("is-visible");

          // Animate the progress bars and percentage text within THIS specific section
          const skillItems = entry.target.querySelectorAll(".skill-item");
          skillItems.forEach((item) => {
            const targetPercentage = parseInt(item.dataset.percentage, 10);
            const progressBarFilled = item.querySelector(
              ".skill-item__progress-bar-filled"
            );
            const percentageTextElement = item.querySelector(
              ".skill-item__percentage"
            );

            if (
              isNaN(targetPercentage) ||
              !progressBarFilled ||
              !percentageTextElement
            ) {
              // console.error("Missing data or elements for skill item:", item);
              return; // Skip this item
            }

            // 1. Animate progress bar width
            setTimeout(() => {
              progressBarFilled.style.width = targetPercentage + "%";
            }, 100);

            // 2. Animate percentage text count-up
            let startTimestamp = null;
            const animationDuration = 1200; // ms

            function step(timestamp) {
              if (!startTimestamp) startTimestamp = timestamp;
              const elapsedTime = timestamp - startTimestamp;
              let progress = Math.min(elapsedTime / animationDuration, 1);

              const currentValue = Math.floor(progress * targetPercentage);
              percentageTextElement.textContent = currentValue + "%";

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                percentageTextElement.textContent = targetPercentage + "%"; // Ensure final value
              }
            }
            setTimeout(() => {
              requestAnimationFrame(step);
            }, 100);
          });
          observer.unobserve(entry.target); // Stop observing this section once animated
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the section is visible
    };

    // Create one observer and observe ALL relevant sections
    const skillsObserver = new IntersectionObserver(
      animateSkillsInSection,
      observerOptions
    );
    skillProgressSections.forEach((section) => {
      skillsObserver.observe(section);
    });
  }
});
//Backend development end

// Database Skills Section Start
document.addEventListener("DOMContentLoaded", () => {
  // Select ALL sections that need this skill progress animation
  const skillProgressSections = document.querySelectorAll(
    ".skills-progress-animate-section"
  );

  if (skillProgressSections.length > 0) {
    const animateSkillsInSection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate the section container itself (fade/slide in)
          entry.target.classList.add("is-visible");

          // Animate the progress bars and percentage text within THIS specific section
          const skillItems = entry.target.querySelectorAll(".skill-item");
          skillItems.forEach((item) => {
            const targetPercentage = parseInt(item.dataset.percentage, 10);
            const progressBarFilled = item.querySelector(
              ".skill-item__progress-bar-filled"
            );
            const percentageTextElement = item.querySelector(
              ".skill-item__percentage"
            );

            if (
              isNaN(targetPercentage) ||
              !progressBarFilled ||
              !percentageTextElement
            ) {
              return; // Skip this item
            }

            // 1. Animate progress bar width
            setTimeout(() => {
              progressBarFilled.style.width = targetPercentage + "%";
            }, 100);

            // 2. Animate percentage text count-up
            let startTimestamp = null;
            const animationDuration = 1200; // ms

            function step(timestamp) {
              if (!startTimestamp) startTimestamp = timestamp;
              const elapsedTime = timestamp - startTimestamp;
              let progress = Math.min(elapsedTime / animationDuration, 1);

              const currentValue = Math.floor(progress * targetPercentage);
              percentageTextElement.textContent = currentValue + "%";

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                percentageTextElement.textContent = targetPercentage + "%"; // Ensure final value
              }
            }
            setTimeout(() => {
              requestAnimationFrame(step);
            }, 100);
          });
          observer.unobserve(entry.target); // Stop observing this section once animated
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the section is visible
    };

    // Create one observer and observe ALL relevant sections
    const skillsObserver = new IntersectionObserver(
      animateSkillsInSection,
      observerOptions
    );
    skillProgressSections.forEach((section) => {
      skillsObserver.observe(section);
    });
  }
});

// Database Skills Section end

// Tools Skills Section start
document.addEventListener("DOMContentLoaded", () => {
  // Select ALL sections that need this skill progress animation
  const skillProgressSections = document.querySelectorAll(
    ".skills-progress-animate-section"
  );

  if (skillProgressSections.length > 0) {
    const animateSkillsInSection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate the section container itself (fade/slide in)
          entry.target.classList.add("is-visible");

          // Animate the progress bars and percentage text within THIS specific section
          const skillItems = entry.target.querySelectorAll(".skill-item");
          skillItems.forEach((item) => {
            const targetPercentage = parseInt(item.dataset.percentage, 10);
            const progressBarFilled = item.querySelector(
              ".skill-item__progress-bar-filled"
            );
            const percentageTextElement = item.querySelector(
              ".skill-item__percentage"
            );

            if (
              isNaN(targetPercentage) ||
              !progressBarFilled ||
              !percentageTextElement
            ) {
              return; // Skip this item
            }

            // 1. Animate progress bar width
            setTimeout(() => {
              progressBarFilled.style.width = targetPercentage + "%";
            }, 100);

            // 2. Animate percentage text count-up
            let startTimestamp = null;
            const animationDuration = 1200; // ms

            function step(timestamp) {
              if (!startTimestamp) startTimestamp = timestamp;
              const elapsedTime = timestamp - startTimestamp;
              let progress = Math.min(elapsedTime / animationDuration, 1);

              const currentValue = Math.floor(progress * targetPercentage);
              percentageTextElement.textContent = currentValue + "%";

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                percentageTextElement.textContent = targetPercentage + "%"; // Ensure final value
              }
            }
            setTimeout(() => {
              requestAnimationFrame(step);
            }, 100);
          });
          observer.unobserve(entry.target); // Stop observing this section once animated
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the section is visible
    };

    // Create one observer and observe ALL relevant sections
    const skillsObserver = new IntersectionObserver(
      animateSkillsInSection,
      observerOptions
    );
    skillProgressSections.forEach((section) => {
      skillsObserver.observe(section);
    });
  }
});

// Tools Skills Section end

// skill card start
document.addEventListener("DOMContentLoaded", () => {
  // Generic reveal-on-scroll for elements with 'animate-on-scroll' class
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

  if (elementsToAnimate.length > 0) {
    const revealOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    };

    const options = {
      root: null, // relative to the viewport
      rootMargin: "0px",
      threshold: 0.1, // 10% of the item is visible (adjust as needed)
    };

    const observer = new IntersectionObserver(revealOnScroll, options);

    elementsToAnimate.forEach((el) => {
      observer.observe(el);
    });
  }
});
// skill card end
