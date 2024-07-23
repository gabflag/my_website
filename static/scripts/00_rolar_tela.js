
// ##########################          
// JavaScripts
// For: Desktop and Mobile
// About: Animação slide up     
// ##########################           

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
        return (
            rect.bottom > 0 &&
            rect.right > 0 &&
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth)
        );
}

function handleScroll() {
    // Elementos com a classe .container_softwares_group
    var elements_00 = document.querySelectorAll('.container_softwares_group');
    elements_00.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('slide-in-global');
        }
    });

    // Elementos com a classe .grid-container
    var elements_01 = document.querySelectorAll('.grid-container');
    elements_01.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('slide-in-global');
        }
    });

    // Elementos com a classe .container_atuacoes
    var elements_02 = document.querySelectorAll('.container_atuacoes');
    elements_02.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('slide-in-global');
        }
    });

    // Elementos com a classe .container_equipe_gabdeveloper
    var elements_03 = document.querySelectorAll('.container_equipe_gabdeveloper');
    elements_03.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('slide-in-global');
        }
    });

    // Elementos com a classe .container_softwares
    var elements_04 = document.querySelectorAll('.container_softwares');
    elements_04.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('slide-in-global');
        }
    });


    // Elementos com a classe .container_suporte
    var elements_05 = document.querySelectorAll('.container_suporte');
    elements_05.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('slide-in-global');
        }
    });


    // Elementos com a classe .container_privacidade
    var elements_06 = document.querySelectorAll('.container_privacidade');
    elements_06.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('slide-in-global');
        }
    });
}

document.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);
