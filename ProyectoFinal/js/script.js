document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    // Aquí puedes enviar los datos del registro al servidor
    console.log('Registro - Nombre de usuario:', username, 'Contraseña:', password);
    // Limpia el formulario después del envío
    this.reset();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    // Aquí puedes enviar los datos de inicio de sesión al servidor
    console.log('Inicio de sesión - Nombre de usuario:', username, 'Contraseña:', password);
    // Limpia el formulario después del envío
    this.reset();
});