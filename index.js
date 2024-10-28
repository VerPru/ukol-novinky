// 1. Vyberte element body a nastavte jeho barvu pozadí na #e9e9e9
const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = '#e9e9e9';

// 2. Vyberte element s třídou news a nastavte mu barvu pozadí a maximální šířku
const newsElement = document.querySelector('.news');
newsElement.style.backgroundColor = '#ffffff';
newsElement.style.maxWidth = '60rem';

// 3. Vyberte element h1 a nastavte mu třídu a obsah
const headingElement = document.querySelector('h1');
headingElement.className = 'news__title';
headingElement.textContent = 'Aktuální novinky';

// 4. Vyberte element obsahující první zprávu pomocí id a přidejte mu třídu post--main
const firstPostElement = document.getElementById('zprava1');
firstPostElement.classList.add('post--main');

// 5. Vyberte obrázek ve třetí zprávě a změňte jeho atribut src
const thirdPostImage = document.querySelector('#zprava3 img');
thirdPostImage.src = 'images/zprava3-novy.jpg';