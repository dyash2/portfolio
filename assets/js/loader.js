function loadHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => document.getElementById(id).innerHTML = data);
}

loadHTML("sidebar", "./partials/sidebar.html");
loadHTML("navbar", "./partials/navbar.html");
loadHTML("about", "./partials/about.html");
loadHTML("resume", "./partials/resume.html");
loadHTML("portfolio", "./partials/portfolio.html");
loadHTML("contact", "./partials/contact.html");
loadHTML("footer", "./partials/footer.html");