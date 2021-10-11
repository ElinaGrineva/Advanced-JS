// < !-- * Создать форму обратной связи с полями: Имя, Телефон, E - mail, текст, кнопка Отправить.При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
// a.Имя содержит только буквы.
//     b.Телефон имеет вид + 7(000)000 - 0000.
//         c.E - mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my - mail@mail.ru.
//             d.Текст произвольный.
//                 e.Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке. -- >

function checkName() {
    let userName = document.querySelector(".name").value;
    let userPhone = document.querySelector(".phone").value;
    let userEmail = document.querySelector(".email").value;
    if (!userName.match(/^[a-zа-яё]+$/i)) {
        document.querySelector(".name").classList.add('invalid');
        alert('Некорректное имя пользователя');
    } else if (!userPhone.match(/^\+7\(\d{3}\)\d{3}-\d{4}$/)) {
        document.querySelector(".phone").classList.add('invalid');
        alert('Телефон нужно ввести по шаблону +7(000)000-0000');
    } else if (!userEmail.match(/^[\w._-]+@\w+\.[a-z]{2,4}$/i)) {
        document.querySelector(".email").classList.add('invalid');
        alert('E-mail нужно ввести по шаблону mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru');
    } else {
        document.querySelector(".name").classList.remove('invalid');
        document.querySelector(".phone").classList.remove('invalid');
        document.querySelector(".email").classList.remove('invalid');
    }
}

document.querySelector(".form-btn").onclick = checkName;