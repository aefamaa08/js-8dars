// Исходный массив слов
let letterSearch = ["хлеб", "мед", "банан", "яблоко", "Азиза", "цветок", "машина"];

// Массивы для слов с буквой 'н' и без неё
let wordsWithN = [];
let wordsWithoutN = [];

// Перебираем элементы массива letterSearch
for (let i = 0; i < letterSearch.length; i++) {
    // Проверяем, содержит ли слово букву 'н' (регистр не имеет значения)
    if (letterSearch[i].toLowerCase().includes('н')) {
        wordsWithN.push(letterSearch[i]);
    } else {
        wordsWithoutN.push(letterSearch[i]);
    }
}

// Выводим оба массива в консоль
console.log("Слова с буквой 'н':", wordsWithN);
console.log("Слова без буквы 'н':", wordsWithoutN);
