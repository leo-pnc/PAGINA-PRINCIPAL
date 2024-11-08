document.addEventListener('DOMContentLoaded', () => {
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

    document.querySelectorAll('.regalo').forEach(regalo => {
        observer.observe(regalo);
    });
});
