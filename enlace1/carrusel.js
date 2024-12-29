let currentIndex = 0;  // Índice de la imagen actual

// Función para mover las imágenes
function moveSlide(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    currentIndex += direction;

    // Si el índice excede, volvemos al principio o al final
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    // Mueve el carrusel con la propiedad `transform: translateX`
    const newTransformValue = -currentIndex * 100; // Desplaza el carrusel al índice actual
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}%)`;
}




