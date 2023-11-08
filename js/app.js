// HEADER MENU ******************************************************

const headerMenu = document.querySelector('.ts-header');

console.log(headerMenu.offsetTop);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 80) {
        headerMenu.classList.add('header-fixed');
    } else {
        headerMenu.classList.remove('header-fixed');
    }
})

// TABS ******************************************************

if (document.querySelector('.ts-tabs')) {

    const tabLinks = document.querySelectorAll('.ts-tab-link');
    const tabsContent = document.querySelectorAll('.tabs-content');

    tabLinks[0].classList.add('active');

    if (document.querySelector('.tabs-content')) {
        tabsContent[0].classList.add('tab-active');
    }


    for (let i = 0; i < tabLinks.length; i++) {

        tabLinks[i].addEventListener('click', () => {


            tabLinks.forEach((tab) => tab.classList.remove('active'));
            tabLinks[i].classList.add('active');

            tabsContent.forEach((tabCont) => tabCont.classList.remove('tab-active'));
            tabsContent[i].classList.add('tab-active');

        });

    }

}


// HEADER MENU MOVIL ****************************************************

const menu = document.querySelector('.icon-menu');
const menuClose = document.querySelector('.cerrar-menu');

menu.addEventListener('click', () => {
    document.querySelector('.header-menu-movil').classList.add('active');
})

menuClose.addEventListener('click', () => {
    document.querySelector('.header-menu-movil').classList.remove('active');
})


// DESPLAZAMIENTO AUTOMATICO BANNER *************************************************

document.addEventListener("DOMContentLoaded", function () {
    const iconLink = document.querySelector(".icon-banner a");
    const scrollTarget = document.getElementById("scrollTarget");

    iconLink.addEventListener("click", function (event) {
        event.preventDefault(); // <- Evita el comportamiento de enlace predeterminado

        // Calcula la posición del elemento de destino en relación con la ventana
        const targetPosition = scrollTarget.getBoundingClientRect().top + window.scrollY;

        // Realiza un desplazamiento suave hasta la posición del elemento de destino
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth" // <- Desplazamiento suave
        });
    });
});


const tipo = document.querySelector("#tipo");
const otroDropdown = document.querySelector("#otro-dropdown");

tipo.addEventListener("change", () => {
  if (tipo.value === "otro") {
    otroDropdown.style.display = "block";
  } else {
    otroDropdown.style.display = "none";
  }
});