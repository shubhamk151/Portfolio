// AOS Init
AOS.init({
  duration: 1500,
  // once: true,
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

// three.js code
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(990, 500);
document.querySelector(".hero").appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 2, 2, 2, 2, 2, 22, 20);
const material = new THREE.MeshBasicMaterial({
  color: 0x4472ff,
  wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 1;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.003;
  cube.rotation.y += 0.003;
  renderer.render(scene, camera);
}
animate();
