// Задание 1

let str = 'js';
str = str.toUpperCase();
console.log(str);

// Задание 2

let arrWord = [];

function searchStart(arr, word) {
    arr.forEach(element => {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            arrWord.push(element);
        }
    });
    console.log(arrWord);
}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');


// Задание 3

let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// Задание 4

let array = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...array));
console.log(Math.min(...array));

// Задание 5

function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * maxValue);
}

console.log(getRandomInt(1, 10));

// Задание 6


function getRandomArrNumbers(int) {
    const arrNumbers = [];
    const arrNumbersLength = Math.floor(int / 2);

    for (let i = 0; i < arrNumbersLength; i++) {
        arrNumbers.push(Math.round(Math.random() * (int)));
    }
    console.log(arrNumbers);
}

getRandomArrNumbers(7);

// Задание 7

function getIntRange(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

console.log(getIntRange(2, 8));

// Задание 8

let nowDate = new Date();
console.log(nowDate);

// Задание 9

let currentDate = new Date();
let installDate = currentDate.setDate(currentDate.getDate() + 73);
console.log(new Date(installDate));

// Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();
let fullDate = "Дата:" + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + "- это " + days[myDate.getDay()];

let time = "Время:" + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

console.log(fullDate, time); 