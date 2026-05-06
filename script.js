const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const year = document.querySelector("#year");
const menuModal = document.querySelector("#menu-modal");
const menuClose = document.querySelector(".menu-modal-close");
const menuLinks = document.querySelectorAll(".menu-link");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "Open menu");
  });
});

if (menuModal) {
  const openMenuModal = () => {
    menuModal.classList.add("open");
    menuModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("nav-open");
  };

  const closeMenuModal = () => {
    menuModal.classList.remove("open");
    menuModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("nav-open");
  };

  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openMenuModal();
    });
  });

  menuClose?.addEventListener("click", closeMenuModal);

  menuModal.addEventListener("click", (event) => {
    if (event.target === menuModal) {
      closeMenuModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuModal.classList.contains("open")) {
      closeMenuModal();
    }
  });
}
