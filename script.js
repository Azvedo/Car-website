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

function setSlider() {
    let itemOld = container.querySelector('.list .item.active'); //Procura quem está com a classe active dentre os list items e retorna.
    itemOld.classList.remove('active');

    let dotOld = indicator.querySelector('ul li.active');
    dotOld.classList.remove('active');
    dots[active].classList.add('active');

    indicator.querySelector('.number').innerHTML = `0${active + 1}`;
}

prevButton.onclick = function () {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < 0 ? lastPosition : active - 1;
    setSlider();
    items[active].classList.add('active');
}


nextButton.onclick = function () {
    list.style.setProperty('--calculation', 1);
    active += 1;
    if (active > lastPosition) {
        active = active % items.length;
    }
    setSlider();
    items[active].classList.add('active');
}

