// app.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Load saved preference or default to light mode
  const savedMode = localStorage.getItem("dvdArchiveDarkMode");
  if (savedMode === "dark") {
    body.classList.add("dark-mode");
    toggle.checked = true;
  } else {
    body.classList.add("light-mode");
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      localStorage.setItem("dvdArchiveDarkMode", "dark");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      localStorage.setItem("dvdArchiveDarkMode", "light");
    }
  });
});
