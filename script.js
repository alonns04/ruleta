(function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button'); // Cambiado el selector para el botón

    let deg = 0;

    startButton.addEventListener('click', () => {
        deg += -1000 - Math.random() * 1000;
        console.log(deg)
        wheel.style.transition = 'transform 3s ease';
        wheel.style.transform = `rotate(${deg}deg)`;
        console.log(-deg)
    });
})();
