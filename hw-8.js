// Задание 1

const arr = [];

function sum(arr) {
    return Math.round(arr.reduce((intermediate, value) => intermediate + value));
}

function mult(arr) {
    return Math.round(arr.reduce((intermediate, value) => intermediate * value));
}

function getResult(arr, callback) {
    console.log(callback(arr));
}

getResult([3, 4, 1, 9], mult);
getResult([3, 4, 1, 9], sum);

// Задание 2

const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];

function compareAge(a, b) {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;
}

users.sort(compareAge);
console.log(users);

// Задание 3

const ar = [];

function reversAr(ar) {
    return ar.reverse();
}

function toNumberAr(ar) {
    let numAr = [];
    for (let j = 0; j < ar.length; j++) {
        ar[j] = Number(ar[j]);
        if (isNaN(ar[j]) !== true) {
            numAr.push(ar[j]);
        }
    }
    return numAr;
}


function each(ar, callback) {
    console.log(callback(ar));
}

each([1, '4', 9, 'two'], reversAr);
each([1, '4', false, 9, 'two'], toNumberAr);

// Задание 4

let timerId = setInterval(() => console.log(new Date), 3000);

setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

// Задание 5

function calling() {
    console.log('Звоню!')
}

function beeps(callback) {
    setTimeout(() => {
        let a = 'Идут гудки...';
        callback(a);
    }, 1000);
}

function talk(a) {
    console.log(a);
    console.log('Разговор');
}

calling();
let a = beeps(talk);