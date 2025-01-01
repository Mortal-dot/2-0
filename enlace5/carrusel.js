// Variables para controlar el carrusel
let currentIndex = 0;  // Índice de la imagen actual
const images = document.querySelectorAll('.carousel-images img');  // Seleccionamos todas las imágenes
const totalImages = images.length;  // Total de imágenes en el carrusel

// Función para cambiar la imagen mostrada
function changeImage() {
    // Calculamos el desplazamiento
    const offset = -currentIndex * 100;  // Cada imagen tiene un ancho de 100vw
    // Aplicamos el desplazamiento al contenedor de imágenes
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}vw)`;
}

// Función para mover al siguiente
function nextImage() {
    // Incrementamos el índice y lo volvemos a cero si llegamos al final
    currentIndex = (currentIndex + 1) % totalImages;
    changeImage();
}

// Función para mover a la imagen anterior
function prevImage() {
    // Decrementamos el índice y lo volvemos al final si llegamos al principio
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    changeImage();
}

// Añadir eventos a los botones
document.querySelector('.next').addEventListener('click', nextImage);
document.querySelector('.prev').addEventListener('click', prevImage);



