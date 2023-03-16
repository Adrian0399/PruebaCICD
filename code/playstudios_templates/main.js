import "./index.css";

const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebarActive = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", function () {
  sidebarActive.classList.toggle("active");
});
