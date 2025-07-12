document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion-btn");

  accordions.forEach((btn) => {
    btn.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const isOpen = content.style.display === "block";
      document.querySelectorAll(".accordion-content").forEach((c) => c.style.display = "none");
      content.style.display = isOpen ? "none" : "block";
    });
  });
});