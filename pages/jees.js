const menuRight = document.querySelector(".nav-bar");

// kalo diklik
document.querySelector(".hamburger").onclick = () => {
  menuRight.classList.toggle("active");
};
