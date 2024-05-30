let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.main_content'); //pega o a classe main_content
let items = container.querySelectorAll('.list .item'); //pega todos os elementos com classe item dentro de list 
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

let counter = 0;
let maxCount = 10; 

function setSlider() {
    let itemOld = container.querySelector('.list .item.active'); //Procura quem está com a classe active dentre os list items e retorna.
    itemOld.classList.remove('active');

    let dotOld = indicator.querySelector('ul li.active');
    dotOld.classList.remove('active');
    dots[active].classList.add('active');
}

prevButton.onclick = function () {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < 0 ? lastPosition : active - 1;
    setSlider();
    items[active].classList.add('active');
    counter = 0;
}

nextButton.onclick = function () {
    list.style.setProperty('--calculation', 1);
    active += 1;
    if (active > lastPosition) {
        active = active % items.length;
    }
    setSlider();
    items[active].classList.add('active');
    counter = 0;
}

var map = L.map('map').setView([-8.05428, -34.8813], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Para passar as imagens dos carros em ofertas
let intervalId = setInterval(function() {
    if (counter >= maxCount) {
        counter = 0;
    } else {
        console.log(counter);
        list.style.setProperty('--calculation', 1);
        active += 1;
        if (active > lastPosition) {
            active = active % items.length;
        }
        setSlider();
        items[active].classList.add('active');
        counter++;
    }
}, 7000);