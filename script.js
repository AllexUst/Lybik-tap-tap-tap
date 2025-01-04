const likeButton = document.getElementById('likeButton');
const effectsContainer = document.getElementById('effectsContainer');
const countElement = document.querySelector('.count');

// Загружаем количество натапов из LocalStorage
let count = parseInt(localStorage.getItem('taps')) || 0;
countElement.textContent = count; // Устанавливаем значение при загрузке страницы

// Обработчик кликов по кнопке
likeButton.addEventListener('click', () => {
    // Увеличиваем счётчик
    count++;
    countElement.textContent = count;

    // Сохраняем счётчик в LocalStorage
    localStorage.setItem('taps', count);

    // Создаём эффект
    createEffect();
});

// Функция для создания эффекта
function createEffect() {
    const icon = document.createElement('div');
    icon.classList.add('effect-icon');
     
    
    // Случайное положение и случайная иконка
    const randomLeft = Math.random() * 300;
    const icons = ['❤️', '⭐', '🔥']; // Список иконок
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    icon.textContent = randomIcon;

    // Настройка стиля и позиции
    icon.style.left = `${randomLeft}px`;
    icon.style.color = `hsl(${Math.random() * 360}, 80%, 60%)`;

    // Добавляем эффект в контейнер
    effectsContainer.appendChild(icon);

    // Удаляем иконку после завершения анимации
    setTimeout(() => {
        icon.remove();
    }, 2500);
}
