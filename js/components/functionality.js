import $ from 'jquery';

var basket = document.querySelector('.basket');
var body = document.querySelector('body');


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
})



