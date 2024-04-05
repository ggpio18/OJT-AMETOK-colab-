const burgir = document.querySelector(".burger__menu");
const headerA = document.querySelector(".header__action");
burgir.addEventListener("click", () =>{
    burgir.classList.toggle("show");
    headerA.classList.toggle("show");
});

const links = document.querySelectorAll(".dropdown-parent-mobile a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.querySelector("i").classList.toggle("open");
    link.nextElementSibling.classList.toggle("open");
  });
});
