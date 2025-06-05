// ========================
// Login Usuario (nabvar)
// ========================

// // Simulación de datos de sesión (esto luego vendrá del backend o localStorage)
// const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioFilmWare'));


// if (usuarioLogueado) {
//     document.getElementById('btnLogin').classList.add('d-none');
//     document.getElementById('btnRegister').classList.add('d-none');

//     const userDropdown = document.getElementById('userDropdown');
//     const userName = document.getElementById('userName');
//     const userMenu = document.getElementById('userMenu');

//     userName.textContent = usuarioLogueado.nombre;
//     userDropdown.classList.remove('d-none');

//     if (usuarioLogueado.tipo === 'cliente') {
//         userMenu.innerHTML = `
//             <li><a class="dropdown-item" href="perfil.html">Perfil</a></li>
//             <li><a class="dropdown-item" href="compras.html">Mis Compras</a></li>
//             <li><hr class="dropdown-divider"></li>
//             <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Salir</a></li>
//             `;
//     } else if (usuarioLogueado.tipo === 'admin') {
//         userMenu.innerHTML = `
//             <li><a class="dropdown-item" href="perfil.html">Perfil</a></li>
//             <li><a class="dropdown-item" href="registro-cine.html">Cines y Sucursales</a></li>
//             <li><hr class="dropdown-divider"></li>
//             <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Salir</a></li>
//             `;
//     }
// }


// ----
// document.addEventListener("DOMContentLoaded", () => {
//     // 👉 Inyectar el CSS del navbar automáticamente al <head>
//     const link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.href = "componentes/navbar.css"; // asegurate de que esta ruta sea correcta
//     document.head.appendChild(link);

//     // Esperar a que el navbar esté cargado
//     const interval = setInterval(() => {
//         const navbarReady = document.getElementById("userDropdown");
//         if (navbarReady) {
//             clearInterval(interval);
//             const usuario = JSON.parse(localStorage.getItem("usuarioFilmWare"));

//             if (usuario) {
//                 document.getElementById("btnLogin")?.classList.add("d-none");
//                 document.getElementById("btnRegister")?.classList.add("d-none");

//                 document.getElementById("userName").textContent = usuario.nombre;
//                 document.getElementById("userDropdown").classList.remove("d-none");

//                 const userMenu = document.getElementById("userMenu");

//                 if (usuario.tipo === "admin") {
//                     userMenu.innerHTML = `
//                         <li><a class="dropdown-item" href="perfil-usuario-page.html">Perfil</a></li>
//                         <li><a class="dropdown-item" href="registro-cine-sucursal.html">Registrar Cines y Sucursales</a></li>
//                         <li><a class="dropdown-item" href="formulario-peliculas.html">Añadir Peliculas</a></li>
//                         <li><a class="dropdown-item" href="formulario-funciones.html">Añadir Funciones</a></li>
//                         <li><hr class="dropdown-divider"></li>
//                         <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Salir</a></li>
//                     `;
//                 } else {
//                     userMenu.innerHTML = `
//                         <li><a class="dropdown-item" href="perfil-usuario-page.html">Perfil</a></li>
//                         <li><a class="dropdown-item" href="#">Mis Compras</a></li>
//                         <li><hr class="dropdown-divider"></li>
//                         <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Salir</a></li>
//                     `;
//                 }
//             }
//         }
//     }, 100);
// });

// ---------------------------  //
// ----FINAL -----------------  //


document.addEventListener("DOMContentLoaded", () => {
    // Inyectar CSS del navbar (opcional si ya está en el head principal)
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "componentes/navbar.css"; // Asegurate que esta ruta sea válida
    document.head.appendChild(link);

    // Esperar a que el navbar esté cargado
    const interval = setInterval(() => {
        const userDropdown = document.getElementById("userDropdown");
        const btnLogin = document.getElementById("btnLogin");
        const btnRegister = document.getElementById("btnRegister");
        const userName = document.getElementById("userName");
        const userMenu = document.getElementById("userMenu");

        if (userDropdown && userName && userMenu) {
            clearInterval(interval);

            const usuario = JSON.parse(localStorage.getItem("usuarioFilmWare"));
            if (usuario) {
                btnLogin?.classList.add("d-none");
                btnRegister?.classList.add("d-none");
                userDropdown.classList.remove("d-none");
                userName.textContent = usuario.nombre;

                if (usuario.tipo === "admin") {
                    userMenu.innerHTML = `
                        <li><a class="dropdown-item" href="perfil-usuario-page.html">Perfil</a></li>
                        <li><a class="dropdown-item" href="registro-cine-sucursal.html">Registrar Cines y Sucursales</a></li>
                        <li><a class="dropdown-item" href="formulario-peliculas.html">Añadir Películas</a></li>
                        <li><a class="dropdown-item" href="formulario-funciones.html">Añadir Funciones</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Salir</a></li>
                    `;
                } else {
                    userMenu.innerHTML = `
                        <li><a class="dropdown-item" href="perfil-usuario-page.html">Perfil</a></li>
                        <li><a class="dropdown-item" href="#">Mis Compras</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Salir</a></li>
                    `;
                }
            }
        }
    }, 100);
});

function cerrarSesion() {
    localStorage.removeItem("usuarioFilmWare");
    window.location.href = "index.html";
}
