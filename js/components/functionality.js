import $ from 'jquery';

var basket = document.querySelector('.basket');
var body = document.querySelector('body');

document.getElementById('basket-button').addEventListener('click', function () {
    basket.classList.toggle('open');
    body.classList.toggle('no-scroll');
});
document.getElementById('basket-close').addEventListener('click', function () {
    basket.classList.remove('open');
    body.classList.remove('no-scroll');
})
