// Задание 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let element = 0; element < numbs.length; element++) {
    if (numbs[element] == 10) {
        console.log(numbs[element]);
        break;
    }
    console.log(numbs[element]);
}

// Задание 2

const numbers = [1, 5, 4, 10, 0, 3];

console.log(numbers.indexOf(4));

// Задание 3

const arr = [1, 3, 5, 10, 20];

console.log(arr.join([' ']));

// Задание 4

const array = [];

for (let i = 0; i <= 2; i++) {
    array.push([]);

    for (let j = 0; j <= 2; j++) {
        array[i][j] = 1;
    }
}

console.log(array);

// Задание 5

const num = [1, 1, 1];

num.push(2, 2, 2);

console.log(num);

// Задание 6

const arrNum = [9, 8, 7, 'a', 6, 5];
arrNum.sort();
arrNum.pop();

console.log(arrNum);

// Задание 7

const arrNumber = [9, 8, 7, 6, 5];
let userNum = Number(prompt('Введите число от 1 до 10'));

let search = arrNumber.includes(userNum);

if (search) {
    console.log('Это число есть в массиве');
} else {
    console.log('Такого числа в массиве нет');
}

// Задание 8

let arrOfString = 'abcdef';

arrOfString = arrOfString.split('');
arrOfString = arrOfString.reverse();
arrOfString = arrOfString.join('');
console.log(String(arrOfString));


// Задание 9

let multiArray = [[1, 2, 3,], [4, 5, 6]];

multiArray = multiArray.join([',']);
console.log(multiArray);

// Задание 10

function funcSum(...arbitArr) {
    let sum = 0;
    for (let item of arbitArr) {
        sum += item;
    }
    return sum;
}

console.log(funcSum(1, 5, 2, 8, 10, 3, 7));

// Задание 11

const squareNumberArray = [2, 5, 7, 3];

let result = squareNumberArray.map(item => (item ** 2));

console.log(result);

// Задание 12

let wordArray = ['слово', '', 'слог', 'длинное предложение', 'буква'];

let getWords = wordArray.map(item => (item.split('')));
let lengthWords = getWords.map(element => element.length);

console.log(lengthWords);

// Задание 13

const integer = [15, 48, 98, 45, 13, 2, 100];

let negativeNum = integer.map(item => (-item));

console.log(negativeNum);