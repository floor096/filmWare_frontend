window.addEventListener('DOMContentLoaded', () => {
    const loadHTML = (id, file, callback) => {
        fetch(file)
            .then(res => res.text())
            .then(html => {
                document.getElementById(id).innerHTML = html;
                if (callback) callback(); // ejecuta después de insertar HTML
            });
    };

    // Cargar navbar y luego insertar su JS
    loadHTML('navbar', '/componentes/navbar.html', () => {
        const script = document.createElement('script');
        script.src = '/componentes/navbar.js';
        script.defer = true;
        document.body.appendChild(script);
    });

    // Cargar footer normalmente
    loadHTML('footer', '/componentes/footer.html');
});
