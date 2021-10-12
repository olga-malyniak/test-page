$(document).ready(function() {
    var owl = $('.wow-screen .owl-carousel');
    owl.owlCarousel({
        loop:true,
        margin:0,
        dots: true,
        nav:false,
        items:2,
    });
    var first=document.querySelectorAll('.wow-screen .owl-item.active');
    first[0].classList.add('first-slide');
    first[1].classList.add('second-slide');

    $('.wow-screen .owl-carousel').owlCarousel();
    $('.wow-screen .slider-next').click(function() {
        owl.trigger('next.owl.carousel');
        $('.owl-item').removeClass('first-slide');
        $('.owl-item').removeClass('second-slide');
        first=document.querySelectorAll('.wow-screen .owl-item.active');
        first[0].classList.add('first-slide');
        first[1].classList.add('second-slide');
    });


    $('.wow-screen .slider-prev').click(function() {
        owl.trigger('prev.owl.carousel');
        $('.owl-item').removeClass('first-slide');
        $('.owl-item').removeClass('second-slide');
        first=document.querySelectorAll('.wow-screen .owl-item.active');
        first[0].classList.add('first-slide');
        first[1].classList.add('second-slide');
    });
    $('.wow-screen .owl-dots').insertAfter('.wow-screen .slider-next');



});
