document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let scrollAmount = 0;
    const scrollStep = 300; // Ajuste o valor conforme necessário

    // Avançar
    nextButton.addEventListener('click', function() {
        if (scrollAmount < carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount += scrollStep;
            carousel.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });

    // Voltar
    prevButton.addEventListener('click', function() {
        if (scrollAmount > 0) {
            scrollAmount -= scrollStep;
            carousel.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });
});
