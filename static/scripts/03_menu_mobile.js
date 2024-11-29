// ##########################          
// JavaScripts
// For: Mobile
// About: Funcionalidade do botão do menu hambuger
// ########################## 

function toggleMenu() {
    var novomenu = document.querySelector('.bars');
    var menuOptions = document.querySelector('.menu-options');
    var hambuguerIcone = document.querySelector('.hamburger-menu');
    
    if (menuOptions.style.display === 'none' || menuOptions.style.display === '') {
        novomenu.classList.add('active');
        menuOptions.style.display = 'flex';
        hambuguerIcone.style.borderRadius = 'initial';
        hambuguerIcone.style.border = 'none';
        hambuguerIcone.style.lineHeight = 'initial';
        hambuguerIcone.style.backgroundColor = 'initial';
        novomenu.style.backgroundColor = 'initial';
    } else {
        menuOptions.style.display = 'none';
        novomenu.style.backgroundColor = 'var(--cor-branco)';
        novomenu.style.borderRadius = '50px';
        novomenu.classList.remove('active');
    }
}

