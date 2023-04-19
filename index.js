const chooseSeason = () => {
    let monthNumber = Number(prompt('Введите номер месяца (от 1 до 12)'));

    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        return 'Зима';
    } else if (monthNumber > 2 && monthNumber <= 5) {
        return 'Весна';
    } else if (monthNumber > 5 && monthNumber <= 8) {
        return 'Лето';
    } else if (monthNumber > 8 && monthNumber <= 11) {
        return 'Осень';
    } else {
        return 'Такого номера месяца не существует. Попробуйте еще раз.';
    }
}

console.log(chooseSeason());

const rememberWord = () => {
    let word = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    word = word.sort(() => Math.random() - 0.5);
    alert(word);

    let firstel = String(prompt('Чему равнялся первый элемент массива?'));
    let lastel = String(prompt('Чему равнялся последний элемент массива?'));

    if (firstel === word[0] && lastel === word[6]) {
        return 'Поздравляем! Вы угадали оба элемента.';
    } else if (firstel === word[0] || lastel === word[6]) {
        return 'Вы были близки к победе!';
    } else {
        return 'Вы ответили неверно.';
    }
}

console.log(rememberWord());