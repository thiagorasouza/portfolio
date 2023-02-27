function scrollTrigger(selector, rootMargin) {
  let elements = document.querySelectorAll(selector);
  elements = Array.from(elements);
  elements.forEach((element) => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin }
    );
    observer.observe(element);
  });
}

scrollTrigger(".section", "-25%");
scrollTrigger(".checkpoint-text", "-15%");
scrollTrigger(".project", "-15%");
scrollTrigger("#hire", "-40%");
