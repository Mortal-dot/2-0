window.onload = function() {
    var raindropsContainer = document.createElement('div');
    raindropsContainer.classList.add('raindrops');
    document.getElementById('footer').appendChild(raindropsContainer); // Agrega el contenedor de gotas al footer
    
    // Crear 100 gotas de lluvia
    for (var i = 0; i < 100; i++) {
        var raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindropsContainer.appendChild(raindrop);

        // Asignar una posición aleatoria en el eje X para las gotas
        raindrop.style.left = Math.random() * 100 + 'vw'; // 100vw significa que se puede mover en todo el ancho de la ventana

        // Asignar una duración aleatoria para la caída de la gota
        raindrop.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duración entre 2s y 5s

        // Asignar una opacidad aleatoria para crear un efecto de lluvia más natural
        raindrop.style.opacity = Math.random() * 0.5 + 0.3; // Opacidad entre 0.3 y 0.8
    }
};

