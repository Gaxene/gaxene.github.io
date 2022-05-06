const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'css/tacskok.css') {
        theme.setAttribute('href', 'css/tacskok_kontraszt.css');
    } else {
        theme.setAttribute('href', 'css/tacskok.css');
    }
}
