// Задание 1
let i = 1;

while (i <= 2) {
    console.log('Привет');
    i++;
}

// Задание 2
let c = 1;

while (c <= 5) {
    console.log(c);
    c++;
}

// Задание 3
let p = 7;

do {
    console.log(p);
    p++;
} while (p <= 22);

// Задание 4
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
}

for (let name in obj) {
    console.log(`${name} - зарплата ${obj[name]} долларов`);
}

// Задание 5
let n = 1000;
let num = 0;

for (; n >= 50; num++) {
    n = n / 2;
}
console.log(num);
console.log(n);

// Задание 6

for (let friday = 3; friday <= 31; friday += 7) {
    console.log(`Сегодня пятница,${friday} -е число. Необходимо подготовить отчет.`);
}
