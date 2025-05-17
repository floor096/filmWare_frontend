// ========================
// Animación de tarjetas (index.html)
// ========================
document.addEventListener('DOMContentLoaded', function () {
    const featureCards = document.querySelectorAll('.feature-card');

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

    // ========================
    // Año dinámico en el footer
    // ========================
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ========================
    // Tabs de Login y Registro (login.html)
    // ========================
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

    // ========================
    // Validación Login
    // ========================
    const loginFormEl = document.getElementById('loginFormEl');

    if (loginFormEl) {
        loginFormEl.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username.trim() === '' || password.trim() === '') {
                alert('Por favor completa todos los campos');
                return;
            }

            console.log('Iniciando sesión con:', { username, password });
            alert('Iniciando sesión... En un entorno real, esto conectaría con el servidor.');
            loginFormEl.reset();
        });
    }

    // ========================
    // Validación Registro
    // ========================
    const registerFormEl = document.getElementById('registerFormEl');

    if (registerFormEl) {
        registerFormEl.addEventListener('submit', function (event) {
            event.preventDefault();

            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const registerUsername = document.getElementById('registerUsername').value;
            const registerPassword = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const userType = document.getElementById('userType')?.value;

            if (
                !fullName || !email || !registerUsername ||
                !registerPassword || !confirmPassword
            ) {
                alert('Por favor completa todos los campos');
                return;
            }

            if (registerPassword !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor ingresa un correo electrónico válido');
                return;
            }

            console.log('Registrando usuario:', {
                fullName,
                email,
                username: registerUsername,
                password: registerPassword,
                userType
            });

            alert('¡Registro exitoso! En un entorno real, esto conectaría con el servidor.');
            registerFormEl.reset();
            loginTabBtn?.click();
        });
    }

    // ========================
    // Registro Cine y Sucursales
    // ========================
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Evita el envío por defecto

            const userType = document.getElementById("userType").value;

            // Simulás guardar datos, mostrar mensaje, etc.
            alert("Registro exitoso");

            // Redireccionar según tipo de usuario
            if (userType === "administrador") {
                window.location.href = "registro-cine-sucursal.html";
            } else {
                window.location.href = "index.html";
            }
        });
    }
    
});

  
