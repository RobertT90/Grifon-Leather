import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        nav: true,
        navText: ["<img src='../img/arrow.png'>", "<img src='../img/arrow.png'>"],
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 40,
            },
            480: {
                items: 2,
                nav: false,
                margin: 40,
            },
            580: {
                items: 3,
                margin: 40,
                nav: false,
            },
            767: {
                items: 3,
                margin: 20,
            },
            1000: {
                items: 4,
                margin: 40,
            }
        }
    });
});

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

document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.menu-toggle').classList.toggle('open');
    document.querySelector('.main-menu').classList.toggle('open');
    body.classList.add('no-scroll');
});

if (document.querySelector('.check-basket')) {
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
}
