// Сначала определим функцию, которая будет изменять стили
function adjustLayout() {
    const width = window.innerWidth;

    // Получаем элемент, стиль которого хотим изменять
    const element = document.getElementById('myElement');

    // Проверяем ширину экрана
    if (width > 1200) {
        // Логика для больших экранов
        element.style.backgroundColor = 'blue';
    } else if (width > 768) {
        // Логика для средних экранов
        element.style.backgroundColor = 'red';
    } else {
        // Логика для маленьких экранов
        element.style.backgroundColor = 'green';
    }
}

// Вызываем функцию при загрузке страницы
window.onload = adjustLayout;

// Добавляем обработчик события при изменении размера окна
window.onresize = adjustLayout;// это же не умная верстака, это шляпа
