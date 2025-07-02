AOS.init({
  duration: 1500,
});

// toggle menu
const toggle_menu = document.getElementById("menu-toggle");
const nav_links = document.getElementById("nav-links");

toggle_menu.addEventListener("click", () => {
  nav_links.classList.toggle("show");
});

// gsap animation
gsap.from(".hero h2", { duration: 1, y: -50, opacity: 0 });
gsap.from(".hero p", { duration: 1.2, y: 50, opacity: 0, delay: 0.5 });
gsap.from(".btn", { duration: 1.4, opacity: 0, delay: 1 });
