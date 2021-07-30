$(document).ready(function(){
    $('.product-list').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    //WOW JS
    new WOW({
        animateClass: 'animate__animated',
    }).init();
    //POPUP
    $('.open-modal').click( () => {
        $('#reservation-container').css('display' , 'flex');
    });
    //КЛИК, ЧТОБЫ ВЫЙТИ ИЗ ПОПАПА
    $('#reservation-container').click( (e) => {
        if (e.target.id === 'reservation-container') {
            $('#reservation-container').hide();
        }
    });
    //ОБРАБОТЧИК ПРИ КЛИКЕ НА КНОПКУ "РАССЧИТАТЬ СТОИМОСТЬ"
    $('#reserve-button > button').click( () => {
        let name = $('#name');
        let phone = $('#phone');
        let error = $('#reserve-error');

        name.css('border-color', 'rgb(126, 123, 121)');
        phone.css('border-color', 'rgb(126, 123, 121)');
        error.hide();
        if (name.val() && phone.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    $('reservation-sent').show();
                    $('reservation-content').hide();
                },
                error: () => {
                    $('#reservation-container').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            });
        } else {
            error.show();
        }
        if (!name.val()) {
            name.css('border-color', 'red');
        }
        if (!phone.val()) {
            phone.css('border-color', 'red');
        }
    });
    //ОБРАБОТЧИК ПРИ КЛИКЕ НА КНОПКУ "ВЫЗВАТЬ ЗАМЕРЩИКА"
    $('#submit').click(function (){
        let err = $('.error-input');
        err.hide();

        let name = $('#nameO');
        let phone = $('#phoneO');
        let date = $('#date');

        let  hasError = false;
        let loader = $('#loader');
        let input = $('.order-input');
        let form = $('#order-form');

        input.css('border-color', 'rgb(126, 123, 121)');
        if (!name.val()) {
            name.siblings('.error-input').show();

            $(input[0]).css('border-color', 'red');
            hasError = true;
        }
        if (!phone.val()) {
            phone.siblings('.error-input').show();

            $(input[1]).css('border-color', 'red');
            hasError = true;
        }
        if (!date.val()) {
            date.siblings('.error-input').show();

            $(input[2]).css('border-color', 'red');
            hasError = true;
        }


        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: 'callme@kitchens.com',
                data: {name: name.val(), phone: phone.val(), date: date.val()}
            })
                .done(function (message) {
                    loader.hide();
                    console.log(message);
                    if (message.success) {
                        $('#reservation-sent').show();
                        form.css('display', 'none');
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }
                });
        }
    });

    //ОБРАБОТЧИК ДЛЯ МЕНЮ НА МАЛЕНЬКОЙ ШИРИНЕ
    $('#burger').click( () => {
        $('#header').toggleClass('menu-open');
    });

    $('#header #menu a').click( () => {
        $('#header').removeClass('menu-open');
    });
});
