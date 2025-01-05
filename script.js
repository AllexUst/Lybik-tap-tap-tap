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
    const randomLeft = Math.random() * 220; // Значення від 0 до 100 (відсотки)
    icon.style.left = `${randomLeft}vw`; // Використовуємо vw для позиціювання в відсотках від ширини екрану    
    const icons = ['❤️', '⭐', '🔥']; // Список иконок
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    icon.textContent = randomIcon;

    // Настройка стиля и позиции
    icon.style.left = `${randomLeft}px`;
    icon.style.color = `hsl(${Math.random() * 250}, 80%, 20%)`;

    // Добавляем эффект в контейнер
    effectsContainer.appendChild(icon);

    // Удаляем иконку после завершения анимации
    setTimeout(() => {
        icon.remove();
    }, 2500);
}



let vanos
let razrab
let lybik = "./lybik.jpg";
let titarenko = "./titarenko.jpg";
let img = document.createElement('img');

img.src = lybik;
function changeBackground(){
    document.getElementById('likeButton').style.backgroundImage = `url(${lybik})`;

}
