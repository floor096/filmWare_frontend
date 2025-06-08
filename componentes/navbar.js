//-NUEVO------
function actualizarNavbar() {
    const userDropdown = document.getElementById("userDropdown");
    const btnLogin = document.getElementById("btnLogin");
    const btnRegister = document.getElementById("btnRegister");
    const userName = document.getElementById("userName");
    const userMenu = document.getElementById("userMenu");

    const usuario = JSON.parse(localStorage.getItem("usuarioFilmWare"));

    if (usuario) {
        btnLogin?.classList.add("d-none");
        btnRegister?.classList.add("d-none");
        userDropdown.classList.remove("d-none");
        userName.textContent = usuario.nombre;

        if (usuario.tipo === "admin" || usuario.tipo === "administrador") {
            userMenu.innerHTML = `
          <li><a class="dropdown-item" href="perfil-usuario-page.html">Perfil</a></li>
          <li><a class="dropdown-item" href="registro-sucursal.html">Registrar Cines y Sucursales</a></li>
          <li><a class="dropdown-item" href="formulario-peliculas.html">Añadir Películas</a></li>
          <li><a class="dropdown-item" href="formulario-funciones.html">Añadir Funciones</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Salir</a></li>
        `;
        } else {
            userMenu.innerHTML = `
          <li><a class="dropdown-item" href="perfil-usuario-page.html">Perfil</a></li>
          <li><a class="dropdown-item" href="tickets-compras.html">Mis Compras</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Salir</a></li>
        `;
        }
    }
}

function initNavbar() {
    // Espera a que existan los elementos para evitar problemas
    const interval = setInterval(() => {
        if (
            document.getElementById("userDropdown") &&
            document.getElementById("userName") &&
            document.getElementById("userMenu")
        ) {
            clearInterval(interval);
            actualizarNavbar();
        }
    }, 100);
}

// Si el documento ya está cargado, ejecuta la función de inmediato
if (document.readyState !== "loading") {
    initNavbar();
} else {
    document.addEventListener("DOMContentLoaded", initNavbar);
}

function cerrarSesion() {
    localStorage.removeItem("usuarioFilmWare");
    window.location.href = "index.html";
}
  