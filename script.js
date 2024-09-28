document.addEventListener("DOMContentLoaded", function() {
    // Показываем модальное окно
    const reminder = document.getElementById("reminder");
    const closeBtn = document.getElementById("close-btn");

    reminder.style.display = "block";

    // Закрытие окна по нажатию кнопки
    closeBtn.addEventListener("click", function() {
        reminder.style.display = "none";
    });
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel img');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndex) {
            slide.classList.add('active');
        }
    });
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

// Инициализация
showSlide(currentIndex);

