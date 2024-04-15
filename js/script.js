document.addEventListener('DOMContentLoaded',
    function () {
        const navItems = document
            .querySelectorAll('.dropdown-parent');
 
        navItems.forEach(item => {
            item.addEventListener('click',
                function () {
                    navItems.forEach(navItem => navItem
                        .classList.remove('active'));
                    this.classList.add('active');
                });
        });
    });

$('.news__card').hover(function() {
  $('.news__cards > .news__card').removeClass('active')
  $(this).addClass('active');
});

const expNav = document.querySelectorAll(".experience__nav__link");
const expContent = document.querySelectorAll(".experiences__item");
expNav.forEach((exp) => {
  exp.addEventListener("click", () => {
    removeActiveExp();
    exp.classList.add("active");
    const activeContent = document.querySelector(`#${exp.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveExp() {
  expNav.forEach((exp) => {
    exp.classList.remove("active");
  });
}
function removeActiveContent() {
    expContent.forEach((content) => {
      content.classList.remove("active");
    });
  }


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

