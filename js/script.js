function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('profile').classList.add('hero-intro');
});

// Function to toggle between light and dark themes
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

// Event listener for theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);