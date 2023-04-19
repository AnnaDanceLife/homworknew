// Задание 1

const compare = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(compare(8, 4));
console.log(compare(6, 6));

// Задание 2

let n = Number(prompt('Введите любое число'));

function parityCheck() {
    if (n % 2 == 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}

parityCheck();

// Задание 3

let q = Number(prompt('Введите любое число'));
let squaring = q ** 2;

function calcConsole() {
    console.log(squaring);
}

calcConsole();

function calcReturn() {
    return squaring;
}

calcReturn();

// Задание 4

let age = Number(prompt('Сколько Вам лет?'));

let checkAge = () => {
    if (age > 0 && age < 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение');
    }
}

checkAge();

// Задание 5

let c = prompt('Введите первое число');
let d = prompt('Введите второе число');

const isNumber = (c, d) => {

    return isFinite(c) && isFinite(d) ? c * d : 'Одно или оба значения не являются числом';
}

console.log(isNumber());

// Задание 6
let num = prompt('Какое число?');
let result = num ** 3;

const cube = () => {

    isFinite(num) ? alert(`${num} в кубе равняется ${result}`) : alert('Переданный параметр не является числом');
}

cube();


// Задание 7

function getCircleArea() {
    return 3.14 * this.radius ** 2;
}

function getCirclePerimeter() {
    return 3.14 * this.radius * 2;
}

const circle1 = {
    radius: 5,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
}

const circle2 = {
    radius: 3,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
}

console.log(circle1.getArea());
console.log(circle2.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getPerimeter());