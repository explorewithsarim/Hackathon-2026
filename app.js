  const mobileNavBtn = document.getElementById("mobile-nav");
  const navItems = document.querySelector(".navitems");
  const hamIcon = document.querySelector(".ham");

  mobileNavBtn.addEventListener("click", () => {
    navItems.classList.toggle("show");
    hamIcon.classList.toggle("active");
  });