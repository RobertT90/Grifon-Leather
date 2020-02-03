import $ from 'jquery';

var basket = document.querySelector('.basket');
var basketCheck = document.querySelector('.basket-check');
var body = document.querySelector('body');
const catItem = document.querySelector('.cat-main__inner--item');


document.getElementById('basket-button').addEventListener('click', function () {
    basket.classList.toggle('open');
    if (document.querySelector('.basket').classList.contains('open')) {
        body.classList.add('no-scroll');
    }
});

document.querySelector('.basket-close').addEventListener('click', function () {
    basket.classList.remove('open');
    if (!document.querySelector('.basket').classList.contains('open')) {
        body.classList.remove('no-scroll');
    }
});

document.querySelector('.check-basket').addEventListener('click', function () {
    basketCheck.classList.toggle('open');
    if (document.querySelector('.basket-check').classList.contains('open')) {
        body.classList.add('no-scroll');
    }
});



document.querySelector('.basket-check__close').addEventListener('click', function () {
    basketCheck.classList.remove('open');
    if (!document.querySelector('.basket-check').classList.contains('open')) {
        body.classList.remove('no-scroll');
    }
});
