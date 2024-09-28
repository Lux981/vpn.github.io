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
