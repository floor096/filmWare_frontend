window.addEventListener('DOMContentLoaded', () => {
    const loadHTML = (id, file) => {
        fetch(file)
            .then(res => res.text())
            .then(html => document.getElementById(id).innerHTML = html);
    };

    loadHTML('navbar', '/componentes/navbar.html');
    loadHTML('footer', '/componentes/footer.html');
});