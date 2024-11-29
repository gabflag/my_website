const hasSessionCookie = document.cookie.includes('sessionStarted=true');

if (!hasSessionCookie) {
    showPreLoaderScrenn();
} else {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('menus_container').style.display = 'block';
}

function showPreLoaderScrenn() {
    document.getElementById('preloader').style.display = 'flex';
    document.cookie = 'sessionStarted=true; SameSite=None; Secure';

    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        document.getElementById('menus_container').style.display = 'block';
    }, 6000);

}