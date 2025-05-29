// Selected Work details start
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

  if (elementsToAnimate.length > 0) {
    const revealOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Optional: Add staggered delays directly in JS if CSS nth-child becomes complex
          // const delay = entry.target.dataset.animationDelay || '0s';
          // entry.target.style.transitionDelay = delay;
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the item is visible (adjust as needed)
    };

    const observer = new IntersectionObserver(revealOnScroll, options);
    elementsToAnimate.forEach((el) => {
      observer.observe(el);
    });
  }
});
// Selected Work details end
