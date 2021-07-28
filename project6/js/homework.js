$(document).ready( () => {
    $('.my-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000});
    $( "#tabs" ).tabs();
    $( "#accordion" ).accordion({
        heightStyle: "content"
    });
})