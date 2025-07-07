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
gsap.from(["#user", "#profession", "#btn"], {
  y: 50,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
});
