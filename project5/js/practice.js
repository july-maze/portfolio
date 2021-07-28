$('#submit').click(function (){
    let error = $('.error-input');
    error.hide();

    let name = $('#name');
    let adress = $('#adress');
    let phone = $('#phone');

    let  hasError = false;
    let loader = $('#loader');
    let input = $('input');
    let form = $('form');

    input.css('border-color', 'rgb(185, 145, 80)');
    if (!name.val()) {
        name.siblings('.error-input').show();

        $(input[0]).css('border-color', 'red');
        hasError = true;
    }
    if (!adress.val()) {
        adress.siblings('.error-input').show();

        $(input[1]).css('border-color', 'red');
        hasError = true;
    }
    if (!phone.val()) {
        phone.siblings('.error-input').show();

        $(input[2]).css('border-color', 'red');
        hasError = true;
    }


    if (!hasError) {
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: 'https://itlogia.ru/test/checkout',
            data: {name: name.val(), adress: adress.val(), phone: phone.val()}
        })
            .done(function (message) {
                loader.hide();
                console.log(message);
                if (message.success) {
                    $('#form-valid').show();
                    form.css('display', 'none');
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
            });
    }
});

