// ----------  MAIN Y LOGIN  ---------------------
document.addEventListener('DOMContentLoaded', function () {
    const featureCards = document.querySelectorAll('.feature-card');

    // Animación de tarjetas (index.html)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Año dinámico en el footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Tabs de Login y Registro (login.html)

    const loginTabBtn = document.getElementById('loginTabBtn');
    const registerTabBtn = document.getElementById('registerTabBtn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginTabBtn && registerTabBtn && loginForm && registerForm) {
        loginTabBtn.addEventListener('click', function () {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
            loginTabBtn.classList.remove('btn-outline-teal');
            loginTabBtn.classList.add('btn-custom-teal');
            registerTabBtn.classList.remove('btn-custom-teal');
            registerTabBtn.classList.add('btn-outline-teal');
        });

        registerTabBtn.addEventListener('click', function () {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            registerTabBtn.classList.remove('btn-outline-teal');
            registerTabBtn.classList.add('btn-custom-teal');
            loginTabBtn.classList.remove('btn-custom-teal');
            loginTabBtn.classList.add('btn-outline-teal');
        });
    }




    // Validación Login
    //const loginFormEl = document.getElementById('loginFormEl');

    // if (loginFormEl) {
    //     loginFormEl.addEventListener('submit', function (event) {
    //         event.preventDefault();

    //         const username = document.getElementById('username').value;
    //         const password = document.getElementById('password').value;

    //         if (username.trim() === '' || password.trim() === '') {
    //             alert('Por favor completa todos los campos');
    //             return;
    //         }

    //         //Lo anterior a la simulacion
    //         // console.log('Iniciando sesión con:', { username, password });
    //         // alert('Iniciando sesión... En un entorno real, esto conectaría con el servidor.');
    //         // loginFormEl.reset();

    //         // Simulación de autenticación
    //         const tipo = username === 'admin' ? 'admin' : 'cliente'; // lógica ficticia
    //         const usuario = {
    //             nombre: username,
    //             tipo: tipo
    //         };
    //         localStorage.setItem('usuarioFilmWare', JSON.stringify(usuario));
            
    //         alert("has ingresado");
    //         // Redirigir
    //         window.location.href = 'index.html';

    //     });
    // }


    // ✅ Usuarios simulados (hardcodeados para pruebas locales)
    // const usuariosSimulados = [
    //     { username: 'admin', password: '1234', tipo: 'admin' },
    //     { username: 'cliente', password: '1234', tipo: 'cliente' },
    // ];

    // if (loginFormEl) {
    //     loginFormEl.addEventListener('submit', function (event) {
    //         event.preventDefault();

    //         const username = document.getElementById('username').value.trim();
    //         const password = document.getElementById('password').value.trim();

    //         if (!username || !password) {
    //             alert('Por favor completa todos los campos');
    //             return;
    //         }

    //         // ✅ Buscar usuario válido
    //         const usuarioEncontrado = usuariosSimulados.find(
    //             u => u.username === username && u.password === password
    //         );

    //         if (!usuarioEncontrado) {
    //             alert('Usuario o contraseña incorrectos');
    //             return;
    //         }

    //         // ✅ Guardar usuario en localStorage
    //         const usuario = {
    //             nombre: usuarioEncontrado.username,
    //             tipo: usuarioEncontrado.tipo
    //         };
    //         localStorage.setItem('usuarioFilmWare', JSON.stringify(usuario));

    //         alert('Has ingresado correctamente');
    //         window.location.href = 'index.html'; // o redirigí a otra página según usuario
    //     });
    // }

    // // Validación Registro
    // const registerFormEl = document.getElementById('registerFormEl');

    // if (registerFormEl) {
    //     registerFormEl.addEventListener('submit', function (event) {
    //         event.preventDefault();

    //         const fullName = document.getElementById('fullName').value;
    //         const email = document.getElementById('email').value;
    //         const registerUsername = document.getElementById('registerUsername').value;
    //         const registerPassword = document.getElementById('registerPassword').value;
    //         const confirmPassword = document.getElementById('confirmPassword').value;
    //         const userType = document.getElementById('userType')?.value;

    //         if (
    //             !fullName || !email || !registerUsername ||
    //             !registerPassword || !confirmPassword
    //         ) {
    //             alert('Por favor completa todos los campos');
    //             return;
    //         }

    //         if (registerPassword !== confirmPassword) {
    //             alert('Las contraseñas no coinciden');
    //             return;
    //         }

    //         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //         if (!emailRegex.test(email)) {
    //             alert('Por favor ingresa un correo electrónico válido');
    //             return;
    //         }

    //         console.log('Registrando usuario:', {
    //             fullName,
    //             email,
    //             username: registerUsername,
    //             password: registerPassword,
    //             userType
    //         });

    //         alert('¡Registro exitoso! En un entorno real, esto conectaría con el servidor.');
    //         registerFormEl.reset();
    //         loginTabBtn?.click();
    //     });
    // }

    // // Registro Cine y Sucursales
    // if (registerForm) {
    //     registerForm.addEventListener("submit", function (e) {
    //         e.preventDefault(); // Evita el envío por defecto

    //         const userType = document.getElementById("userType").value;

    //         // Simulás guardar datos, mostrar mensaje, etc.
    //         alert("Registro exitoso");

    //         // Redireccionar según tipo de usuario
    //         if (userType === "administrador") {
    //             window.location.href = "registro-cine-sucursal.html";
    //         } else {
    //             window.location.href = "index.html";
    //         }
    //     });
    // }

    
    //     //postman????
    // // ========== LOGIN ==========
    // const loginFormEl = document.getElementById('loginFormEl');
    // if (loginFormEl) {
    //     loginFormEl.addEventListener('submit', function (event) {
    //         event.preventDefault();

    //         const username = document.getElementById('username').value.trim();
    //         const password = document.getElementById('password').value.trim();

    //         if (!username || !password) {
    //             alert('Por favor completa todos los campos');
    //             return;
    //         }

    //         fetch('http://localhost:4000/api/auth/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ username, password })
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.token) {
    //                     // Guardar usuario logueado en localStorage
    //                     localStorage.setItem('usuarioFilmWare', JSON.stringify(data.user));
    //                     alert('Inicio de sesión exitoso');
    //                     window.location.href = 'index.html';
    //                 } else {
    //                     alert(data.message || 'Usuario o contraseña incorrectos');
    //                 }
    //             })
    //             .catch(error => {
    //                 console.error('Error en login:', error);
    //                 alert('Error al conectar con el servidor');
    //             });
    //     });
    // }

    // // ========== REGISTRO ==========
    // const registerFormEl = document.getElementById('registerFormEl');
    // if (registerFormEl) {
    //     registerFormEl.addEventListener('submit', function (event) {
    //         event.preventDefault();

    //         const fullName = document.getElementById('fullName').value.trim();
    //         const email = document.getElementById('email').value.trim();
    //         const registerUsername = document.getElementById('registerUsername').value.trim();
    //         const registerPassword = document.getElementById('registerPassword').value;
    //         const confirmPassword = document.getElementById('confirmPassword').value;
    //         const userType = document.getElementById('userType')?.value;

    //         if (!fullName || !email || !registerUsername || !registerPassword || !confirmPassword) {
    //             alert('Por favor completa todos los campos');
    //             return;
    //         }

    //         if (registerPassword !== confirmPassword) {
    //             alert('Las contraseñas no coinciden');
    //             return;
    //         }

    //         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //         if (!emailRegex.test(email)) {
    //             alert('Correo electrónico inválido');
    //             return;
    //         }

    //         fetch('http://localhost:4000/api/auth/register', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 fullName,
    //                 email,
    //                 username: registerUsername,
    //                 password: registerPassword,
    //                 userType
    //             })
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (res.ok) {
    //                     alert('Registro exitoso');
    //                     registerFormEl.reset();
    //                     loginTabBtn?.click();
    //                 } else {
    //                     alert(data.message || 'Error al registrarse');
    //                 }
    //             })
    //             .catch(error => {
    //                 console.error('Error en registro:', error);
    //                 alert('Error al conectar con el servidor');
    //             });
    //     });
    // }

    // ---------------------------  //
    // ----FINAL -----------------  //

    const registerFormEl = document.getElementById('registerFormEl');

    if (registerFormEl) {
        registerFormEl.addEventListener('submit', async function (event) {
            event.preventDefault();

            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const username = document.getElementById('registerUsername').value.trim();
            const password = document.getElementById('registerPassword').value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();
            const userType = document.getElementById('userType')?.value;

            if (!fullName || !email || !username || !password || !confirmPassword) {
                return alert('Por favor completa todos los campos');
            }

            if (password !== confirmPassword) {
                return alert('Las contraseñas no coinciden');
            }

            try {
                const res = await fetch('http://localhost:4000/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        fullName,
                        email,
                        username,
                        password,
                        userType
                    })
                });

                const data = await res.json();

                if (res.ok) {
                    alert('¡Registro exitoso!');
                    registerFormEl.reset();
                    document.getElementById('loginTabBtn')?.click();
                } else {
                    alert(data.message || 'Error en el registro');
                }

            } catch (err) {
                console.error(err);
                alert('Error al conectar con el servidor');
            }
        });
    }

    const loginFormEl = document.getElementById('loginFormEl');

    if (loginFormEl) {
        loginFormEl.addEventListener('submit', async function (event) {
            event.preventDefault();

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (!username || !password) {
                return alert('Por favor completa todos los campos');
            }

            try {
                const res = await fetch('http://localhost:4000/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });

                const data = await res.json();

                if (res.ok) {
                    // Guardar sesión local
                    localStorage.setItem('usuarioFilmWare', JSON.stringify(data.user));
                    alert('Inicio de sesión exitoso');

                    // Redireccionar según tipo
                    if (data.user.tipo === 'admin') {
                        window.location.href = 'registro-cine-sucursal.html';
                    } else {
                        window.location.href = 'index.html';
                    }
                } else {
                    alert(data.message || 'Credenciales incorrectas');
                }
            } catch (err) {
                console.error(err);
                alert('Error al conectar con el servidor');
            }
        });
    }


});

  
