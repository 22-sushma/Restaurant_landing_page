// main.js
document.addEventListener("DOMContentLoaded", () => {
  // Active link highlight
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const top = window.scrollY;
      const offset = section.offsetTop - 100;
      if (top >= offset) current = section.getAttribute("id");
    });

    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // Form validation
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value || name.value.length < 2) {
      alert("Please enter a valid name.");
      e.preventDefault();
    } else if (!email.value.includes("@")) {
      alert("Please enter a valid email.");
      e.preventDefault();
    } else if (!message.value || message.value.length < 10) {
      alert("Message must be at least 10 characters.");
      e.preventDefault();
    }
  });
});