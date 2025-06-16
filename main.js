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
                const res = await fetch('http://localhost:3001/api/auth/register', {
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
                const res = await fetch('http://localhost:3001/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });

                const data = await res.json();

                // if (res.ok) {
                if (data.token) {
                    // Guarda en localStorage
                    localStorage.setItem('usuarioFilmWare', JSON.stringify(data.user));
                    localStorage.setItem('tokenFilmWare', data.token);
                    // Actualiza el estado del usuario
                    alert('Inicio de sesión exitoso');

                    // Redireccionar según tipo
                    if (data.user.tipo === 'admin') {
                        window.location.href = 'registro-sucursal.html';
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

  
