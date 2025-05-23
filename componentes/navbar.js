// ========================
// Login Usuario (nabvar)
// ========================

// Simulación de datos de sesión (esto luego vendrá del backend o localStorage)
const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioFilmWare'));
// Ejemplo: { nombre: "Ana", tipo: "cliente" } o { nombre: "Luis", tipo: "admin" }
// Guardar sesión ficticia


if (usuarioLogueado) {
    document.getElementById('btnLogin').classList.add('d-none');
    document.getElementById('btnRegister').classList.add('d-none');

    const userDropdown = document.getElementById('userDropdown');
    const userName = document.getElementById('userName');
    const userMenu = document.getElementById('userMenu');

    userName.textContent = usuarioLogueado.nombre;
    userDropdown.classList.remove('d-none');

    if (usuarioLogueado.tipo === 'cliente') {
        userMenu.innerHTML = `
            <li><a class="dropdown-item" href="perfil.html">Perfil</a></li>
            <li><a class="dropdown-item" href="compras.html">Mis Compras</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Salir</a></li>
            `;
    } else if (usuarioLogueado.tipo === 'admin') {
        userMenu.innerHTML = `
            <li><a class="dropdown-item" href="perfil.html">Perfil</a></li>
            <li><a class="dropdown-item" href="registro-cine.html">Cines y Sucursales</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Salir</a></li>
            `;
    }
}

// Función de cerrar sesión
function cerrarSesion() {
    localStorage.removeItem('usuarioFilmWare');
    window.location.href = 'index.html';
}