document.querySelector(".nav-link")
.setAttribute("click", () => {
    document.querySelector(".navbar-nav")
    .find(".active")
    .removeClass("active")
    this.addClass("active")
})