// Función para mostrar/ocultar el menú móvil
function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
}

// Cerrar el menú si el usuario hace clic fuera de él
document.addEventListener('click', function(event) {
    const menu = document.getElementById('mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    
    // Si el clic es fuera del menú y del icono, cerrar el menú
    if (!menu.contains(event.target) && event.target !== menuIcon) {
        menu.style.display = 'none';
    }
});
