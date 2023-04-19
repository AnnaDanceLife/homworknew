let password = 'пароль';
let userAnswer = prompt('Введите пароль');

if (userAnswer === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}


let c = 5;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


let d = 5;
let e = 10;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


let a = Number('2');
let b = Number('3');
alert(a + b);


let monthNumber = Number(prompt('Введите номер месяца в году'));

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Месяц принадлежит к сезону - зима')
        break;
    case 3:
    case 4:
    case 5:
        alert('Месяц принадлежит к сезону - весна')
        break;
    case 6:
    case 7:
    case 8:
        alert('Месяц принадлежит к сезону - лето')
        break;
    case 9:
    case 10:
    case 11:
        alert('Месяц принадлежит к сезону - осень')
        break;
    default:
        alert('Введите корректный номер месяца')
        break;
}


let userNumber = prompt('Пожалуйста, введите любое число');

if (isNaN(userNumber)) {
    alert('Это не число')
}
else if (userNumber % 2 === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

let clientOS = Number(prompt('Введите 0, если вы пользуетесь iOS или 1, если вы пользуетесь Android'));

if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
} else {
    console.log('Введите 0 или 1');
}


let userOS = Number(prompt('Введите 0, если вы пользуетесь iOS или 1, если вы пользуетесь Android'));
let clientDeviceYear = Number(prompt('Введите год производства вашего телефона'));

if (userOS === 0 && clientDeviceYear >= 2015) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (userOS === 0 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (userOS === 1 && clientDeviceYear >= 2015) {
    console.log('Установите версию приложения для Android по ссылке');
} else if (userOS === 1 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
} else {
    console.log('Введите корректные данные');
}