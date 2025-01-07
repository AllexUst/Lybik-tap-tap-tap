const likeButton = document.getElementById('likeButton');
const effectsContainer = document.getElementById('effectsContainer');
const countElement = document.querySelector('.count');
const tap = document.querySelector('#tap');
const lvl = document.querySelector('#goal');
const number = document.querySelector('.number');
const input = document.querySelector('#codes') 
const checkButton = document.querySelector('#checkButton')
const message = document.getElementById('message')

let coinsPerClick = 1;
let upgrade = 1; // Додаємо змінну upgrade
let sum = coinsPerClick + upgrade;
let count = parseInt(localStorage.getItem('taps')) || 1;
countElement.textContent = count;

function getCode() {
    console.log('Checking code...');
    let UserText = input.value.trim(); // Отримуємо текст
    if (UserText === "123") { // Порівнюємо текст
        message.textContent = 'Code is correct!';
        message.style.color = 'green'; // Для візуального ефекту
        
    } else {
        message.textContent = 'Code is not correct!';
        message.style.color = 'red'; // Для візуального ефекту
    }
}


likeButton.addEventListener('click', () => {
    createEffect();
    localStorage.setItem('taps', count);

    count += coinsPerClick + upgrade;
    countElement.textContent = count;
    tap.textContent = sum

    
    if (count >= 500000) {
        coinsPerClick = 10;
        lvl.textContent = 'Level 5';
        tap.textContent = `Coins per tap: ${coinsPerClick}`;
        number.textContent = 6;
        goal.textContent = '10,000,000';
    } else if (count >= 50000) {
        coinsPerClick = 5;
        lvl.textContent = 'Level 4';
        tap.textContent = `Coins per tap: ${coinsPerClick}`;
        number.textContent = 5;
        goal.textContent = '500,000';
    } else if (count >= 5000) {
        coinsPerClick = 3;
        lvl.textContent = 'Level 3';
        tap.textContent = `Coins per tap: ${sum}`;
        number.textContent = 4;
        goal.textContent = '5,000';
    } else if (count >= 1000) {
        coinsPerClick = 2;
        lvl.textContent = 'Level 2';
        tap.textContent = `Coins per tap: ${sum}`;
        number.textContent = 3;
        goal.textContent = '1,000';
    } else if (count >= 300) {
        coinsPerClick = 1;
        lvl.textContent = 'Level 1';
        tap.textContent = `Coins per tap: ${sum}`;
        number.textContent = 2;
        goal.textContent = '300';
    }
    tap.textContent = sum
    localStorage.setItem('taps', count);

    // Зберігаємо лічильник у LocalStorage
    countElement.textContent = count;
    tap.textContent = sum

    
});

// Функція для створення ефекту
function createEffect() {
    const icon = document.createElement('div');
    icon.classList.add('effect-icon');

    // Випадкове положення та іконка
    const randomLeft = Math.random() * 60;
    icon.style.left = `${randomLeft}vw`;

    const icons = ['❤️', '⭐'];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    icon.textContent = randomIcon;

    // Налаштування стилю та позиції
    icon.style.color = `hsl(${Math.random() * 100}, 50%, 50%)`;

    // Додаємо ефект у контейнер
    effectsContainer.appendChild(icon);

    // Видаляємо іконку після завершення анімації
    setTimeout(() => {
        icon.remove();
    }, 2500);
}

let vanos = "./images/vanos.jpg";
let razrab = "./images/razrab.jpg";
let lybik = "./images/lybik.jpg";
let titarenko = "./images/titarenko.jpg";
let img = document.createElement('img');
document.getElementById('likeButton').style.backgroundImage = `url(${razrab})`;

let coinsPerTap = parseFloat(document.querySelector('#tap'));
if (coinsPerTap) {
    let value = parseFloat(coinsPerTap.textContent);
    console.log(value);
    localStorage.setItem('userClick', value);
}

function changeBackground() {
    document.getElementById('likeButton').style.backgroundImage = `url(${lybik})`;
}
