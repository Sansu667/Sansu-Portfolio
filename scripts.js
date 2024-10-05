document.querySelector('.menu-btn').addEventListener('click', function() {
    const menu = document.querySelector('header nav ul');
    menu.classList.toggle('show-menu');
});
// Manejador de evento para cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const menu = document.querySelector('header nav ul');
    const menuBtn = document.querySelector('.menu-btn');

    // Verifica si el clic fue fuera del menú y del botón del menú
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.remove('show-menu'); // Cierra el menú
    }
});