document.addEventListener("DOMContentLoaded", function() {
    // Показываем модальное окно
    const reminder = document.getElementById("reminder");
    const closeBtn = document.getElementById("close-btn");
    const redirectBtn = document.getElementById("redirect-btn");

    reminder.style.display = "block";

    // Закрытие окна по нажатию кнопки "ПОНЯТНО"
    closeBtn.addEventListener("click", function() {
        reminder.style.display = "none";
    });

    // Редирект на другой сайт при нажатии на кнопку "ТЫК СЮДА"
    redirectBtn.addEventListener("click", function() {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Ваш URL
    });
});

particlesJS.load('particles-js', 'particles-config.json', function() {
    console.log('particles.js loaded - callback');
});

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.style.display = 'block'; // Показываем контейнер

    for (let i = 0; i < 100; i++) { // Генерируем 100 кусочков конфетти
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Случайный цвет
        confettiPiece.style.left = `${Math.random() * 100}vw`; // Случайное положение по горизонтали
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`; // Случайная задержка анимации
        confettiContainer.appendChild(confettiPiece);

        // Удаляем конфетти после окончания анимации
        setTimeout(() => {
            confettiPiece.remove();
        }, 3000); // Удаляем через 3 секунды
    }
}

// Вызовите функцию createConfetti() при открытии модального окна
document.getElementById('openModalButton').onclick = function() {
    createConfetti();
    document.querySelector('.modal').style.display = 'block'; // Показываем модальное окно
};
