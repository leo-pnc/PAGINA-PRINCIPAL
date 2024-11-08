document.addEventListener('DOMContentLoaded', () => {
    // Observador de intersección para manejar la visibilidad de los regalos al hacer scroll
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                setTimeout(() => {
                    entry.target.classList.add('sombra');
                }, 600); // 600ms es la duración de la transición
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.remove('sombra');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observa todos los elementos con la clase 'regalo'
    document.querySelectorAll('.regalo').forEach(regalo => {
        observer.observe(regalo);

        // Agregar evento de clic para cada regalo
        regalo.addEventListener('click', () => {
            // Alternar la clase 'clicked' para mostrar los elementos dentro de la promo
            regalo.classList.toggle('clicked');
        });
    });
});
