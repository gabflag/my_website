document.addEventListener('DOMContentLoaded', function () {
    const toggleThemeBtn = document.getElementById('switch-theme');
    let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

    const cor_branco = '#ffffff';
    const cor_preto = '#000000';
    const cor_branco_opaco = '#ffffffa6';
    const cor_preto_opaco = '#00000088';

    const cor_verde_variavel = '#39ff14';
    const cor_verde_black = '#165b0a';

    const logoEmpresa = document.getElementById('logo_empresa');
    const logoEmpresaLInha = document.getElementById('logo_empresa_linha');

    const background_preto = '#000000';
    const background_branco = 'radial-gradient(ellipse at bottom, #ffffff 0%, #efefef 100%)';

    toggleThemeBtn.checked = isDarkMode;
    setColors(isDarkMode);
    updateLogoLink(isDarkMode);

    toggleThemeBtn.addEventListener('change', function () {
        isDarkMode = !isDarkMode;
        localStorage.setItem('isDarkMode', isDarkMode);
        setColors(isDarkMode);
        updateLogoLink(isDarkMode);
    });

    // Função para aplicar as cores
    function setColors(darkMode) {
        document.documentElement.style.setProperty('--cor-branco', darkMode ? cor_preto : cor_branco);
        document.documentElement.style.setProperty('--cor-preto', darkMode ? cor_branco : cor_preto);

        document.documentElement.style.setProperty('--cor-branco-opaco', darkMode ? cor_preto_opaco : cor_branco_opaco);
        document.documentElement.style.setProperty('--cor-preto-opaco', darkMode ? cor_branco_opaco : cor_preto_opaco);

        document.documentElement.style.setProperty('--cor-verde-variable', darkMode ? cor_verde_black : cor_verde_variavel);
        document.documentElement.style.setProperty('--cor-verde-black', darkMode ? cor_verde_variavel : cor_verde_black);

        document.documentElement.style.setProperty('--cor-verde-black', darkMode ? cor_verde_variavel : cor_verde_black);

        document.documentElement.style.setProperty('--cor-background-preto', darkMode ? background_branco : background_preto);
        document.documentElement.style.setProperty('--cor-background-branco', darkMode ? background_preto : background_branco);
    }

    function updateLogoLink(darkMode) {
        const novoLink = darkMode 
            ? '/static/images/apresentacao/logoAzul720.png' 
            : '/static/images/apresentacao/logoBranca720.png';
    
        logoEmpresa.src = novoLink;
        logoEmpresaLInha.src = novoLink;
    }

});
