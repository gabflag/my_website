// ##########################          
// JavaScripts
// For: Mobile
// About: Funcionalidade do botão Idioma
// ########################## 


function centerMenu(menuContainer) {
    menuContainer.style.position = 'fixed';
    menuContainer.style.left = '50%';
    menuContainer.style.transform = 'translateX(-50%)';
    menuContainer.style.bottom = '20px';
}
function resetMenu(menuContainer) {
    menuContainer.style.position = '';
    menuContainer.style.left = '';
    menuContainer.style.transform = '';
    menuContainer.style.bottom = '';
}


function toggleMenuIdioma(){
    var menu_concorrente = document.querySelector('.hamburger-menu');
    var menu = document.querySelector('.palavra-idioma-menu');
    var menuOptions = document.querySelector('.menu-options-idioma');
    var menuIcon = document.querySelector('.menu-icon-idioma');

    if (menuOptions.style.display === 'none' || menuOptions.style.display === '') {
        menuOptions.style.display = 'flex';
        menu.style.zIndex = '2';
        menu_concorrente.style.zIndex ='0';
        menuIcon.innerHTML = '&#10006;'; // Altera para o ícone de fechar
        menuIcon.style.color = 'var(--cor-branco)';
        centerMenu(menu);
    } else {
        menu.style.zIndex = '1';
        menuIcon.style.color = 'var(--cor-preto)';
        menu_concorrente.style.zIndex = '1';
        menuOptions.style.display = 'none';
        menuIcon.innerHTML = 'idioma'; // Altera de volta para o ícone do menu
        menuIcon.innerHTML = `
        <div class="icon_container_mobile">
        <svg class="icon_svg_mobile" viewBox="0 0 256 256" focusable="false">
            <path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path>
        </svg>
        Idioma
    </div>`;

        resetMenu(menu)
    }

}