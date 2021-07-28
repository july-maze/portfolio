window.onload = function () {
    let input = document.getElementsByTagName('input');
    console.log(input);

    input[0].onkeypress = fn;
        function fn(event) {
            let name = parseInt(event.key);
            if (!isNaN(name)) {
                event.preventDefault();
            } else{
                console.log(event.key);
            }
        }
    input[1].onkeypress = fun;
    function fun(event) {
        let username = (event.key);
        if (username === ',') {
            event.preventDefault();
        } else if (username === '.'){
            event.preventDefault();
        } else{
            console.log(event.key);
        }
    }

    let check = document.getElementsByName('check')[0];
    check.onchange = function () {
        if (check.checked) {
            console.log('Согласен');
        }
        else {
            console.log('Не согласен');
        }
    }

    let form = document.getElementsByTagName('form')[0];
    form.onsubmit = (event) => {
            if (input[0].value === '') {
                alert('Заполните поле Full Name');
                event.preventDefault();
            } else if (input[1].value === '') {
                alert('Заполните поле Your username');
                event.preventDefault();
            } else if (input[2].value === '') {
                alert('Заполните поле E-mail');
                event.preventDefault();
            } else if (input[3].value === '') {
                alert('Заполните поле Password');
                event.preventDefault();
            } else if (input[4].value === '') {
                alert('Заполните поле Repeat Password');
                event.preventDefault();
            } else if (input[4].value !== input[3].value) {
                alert('Пароли не совпадают');
                event.preventDefault();
            } else if (check.checked === false) {
                alert('Поставьте галочку напротив  Terms of Service and Privacy Statement');
                event.preventDefault();
            } else{
                alert('Всё хорошо:) Ваши данные обрабатываются');
            }
    }

    let a = document.getElementsByTagName('a')[0];
    let name = document.getElementsByClassName('input')[0];
    let mail = document.getElementsByClassName('input')[2];
    let repeat = document.getElementsByClassName('input')[4];
    let agree = document.getElementById('agree');

    a.onclick = function () {
        a.innerText = 'Log in to the system';
        name.parentNode.removeChild(name);
        mail.parentNode.removeChild(mail);
        repeat.parentNode.removeChild(repeat);
        agree.parentNode.removeChild(agree);
        a.parentNode.removeChild(a);
        document.getElementsByTagName('button')[0].innerText = 'Sign In';
        //не работает корректно форма
        form.onsubmit = (event) => {
            if (input[1].value === '') {
                alert('Заполните поле Your username');
                event.preventDefault();
            } else if (input[3].value === '') {
                alert('Заполните поле Password');
                event.preventDefault();
            } else{
                alert('Выполняется вход на сайт...');
            }
        }
    }



};

