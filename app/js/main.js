$(function () {
    $('.header__btn--burger').on('click', function (){
        $('.rightside-menu').removeClass('rightside-menu--close')
    });
});
$(function () {
    $('.rightside-menu__close').on('click', function (){
        $('.rightside-menu').addClass('rightside-menu--close')
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true, 

    });
});

var email = document.querySelector('.footer__form-input');

email.addEventListener('input', changeBackground);

function changeBackground() {
    if(email.value !== ''){
        document.querySelector('.footer__form-button').style.background = '#EF4D9C';
        
    }else{
        document.querySelector('.footer__form-button').style.background = '#9B9B9C';
    
        
    }
}

let header__search = document.querySelector('.header__search');

let closeBtn = document.querySelector('.closeBtn');

let searchBox = document.querySelector('.searchBox');

header__search.onclick = function(){
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    header__search.classList.add('active');  
    
}
closeBtn.onclick = function(){
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    header__search.classList.remove('active');
}

$(function () {
    $('.feedback__form-btn').on('click', function (){
        $('.feedback__content').removeClass('feedback__content--close')
    });
});
$(function () {
    $('.feedback__content-close').on('click', function (){
        $('.feedback__content').addClass('feedback__content--close')
    });
});

$(function () {

    $('.news__slider').slick({
        dots: true,
        arrows: false,
        fade: true, 

    });

    $('.logos__slider').slick({
        slidesToShow:6,
        slidesToScroll:1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 500,
        cssEase: 'linear',
        speed: 5000,

    });
});