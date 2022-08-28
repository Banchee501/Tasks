'use strict';
/*
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovitaeDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.langth < 50) {
        personalMovitaeDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('Error');
        i--;
    }
}

if (personalMovitaeDB.count < 10) {
    console.log("Просмотрено мало фильмов");

} else if (personalMovitaeDB.count >= 10 && personalMovitaeDB.count < 30) {
    console.log("Вы классический зритель");

} else if (personalMovitaeDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Ошибка");
}

console.log(personalMovitaeDB);

const num = 50;
if (num < 49) {
    console.log("Small");
} else if (num > 100) {
    console.log("Big");
} else {
    console.log("Done");
}

const num = 50;

switch (num) {
    case 49:
        console.log("No");
        break;
    case 100:
        console.log("No");
        break;
    case 50:
        console.log("Yes");
        break;
    default:
        console.log("No num");
        break;
}



let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

function secondTask() {
    for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
}

function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}


function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

function fourthTask() {
    let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
}

function fifthTask() {
    const arrayOfNumbers = [];
    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[i - 5] = i;
    }
    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(result);
    return result;
}

function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof (data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof (data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }

    console.log(data);
    return data;
}
secondTask();


function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }
    console.log(result);
    return result;
}
thirdTask();



let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
}

console.log(result);


const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);


let num = 20;

function showFirstMassage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMassage("Hello");
console.log(num);



function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log("Hello");
};

logger();

const calc = (a, b) => {
    console.log('1');
    return a + b;
};


const usdCurr = 28,
    eurCurr = 32;
const discount = 0.9;


function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}
const res = convert(500, usdCurr);
promotion(res);


function doNothing() {
};
console.log(doNothing() === undefined);


function sayHello(nameUser) {
    return `Привет, ${nameUser}!`;
}
sayHello('Антон');


function returnNeighboringNumbers(number) {
    return [--number, ++number, ++number];
}

returnNeighboringNumbers(5);

function getMathResult(baseNum, progressNum) {
    if (typeof (progressNum) === "number" && progressNum > 0) {
        let res = (baseNum * progressNum);
        for (let i = 0; i = res; i++)
            return console.log(res);
    } else {
        return console.log(baseNum);
    }
}
getMathResult(5, 3);


function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    let totalPrice = orderedQuantity * pricePerDroid;
    let message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) 
    is included in total price.`;
    return message;
}
makeOrderMessage(2, 100, 50);


function checkStorage(available, ordered) {
    let message;

    if (available >= ordered) {
        message = "Not enough goods in stock!";
    } else {
        message = "Order is processed, our manager will contact you.";
    }

    return message;
}

function getSubscriptionPrice(type) {
    let price;


    switch (type) {
        case "starter":
            price = 0;
            break;

        case "professional":
            price = 20;
            break;

        case "organization":
            price = 50;
            break;
    }

    return price;
}

function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    switch (password) {
        case null:
            message = "Canceled by user!";
            break;

        case ADMIN_PASSWORD:
            message = "Welcome!";
            break;

        default:
            message = "Access denied, wrong password!";

    }
    return message;
}

function getShippingCost(country) {
    let message;
    let price;
    switch (country) {
        case "China":
            price = 100;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Chile":
            price = 250;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Australia":
            price = 170;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Jamaica":
            price = 120;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;

        default:
            message = "Sorry, there is no delivery to your country";
    }
    return message;
}

function getSubstring(string, length) {
    const substring = string.slice(0, length);

    return substring;
}

function formatMessage(message, maxLength) {
    let result;
    if (message.length <= maxLength) {
        result = message;
    } else {
        result = message.slice(0, maxLength) + '...';
    }
    return result;
}

function normalizeInput(input) {
    const normalizedInput = input.toLowerCase();

    return normalizedInput;
}

function checkForName(fullName, name) {
    const result = fullName.includes(name);
    return result;
}

function checkForSpam(message) {
    let result;
    result = message.toLowerCase().includes('sale') || message.toLowerCase().includes('spam');
    return result;
}

function getExtremeElements(array) {

    const FirseElementIndex = array[0];
    const LastElementIndex = array.length - 1;
    const newArr = [FirseElementIndex, array[LastElementIndex]];

    console.log(newArr);
    return newArr;
    
}
getExtremeElements(["Earth", "Mars", "Venus"]);

function calculateEngravingPrice(message, pricePerWord) {
    let words = message.split(" ");
    let sumWord = words.length *= pricePerWord;
    return sumWord;
}

calculateEngravingPrice("JavaScript is in my blood", 20);

function createArrayOfNumbers(min, max) {
    const numbers = [];
    for (let i = min; i <= max; i += 1) {
        numbers.push(i);
    }
    return numbers;
}

createArrayOfNumbers(1, 3);



//Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, 
//созданный из этой строки.
//Значением параметра title будут строки, слова которых разделены только пробелами
//Все символы slug должны быть в нижнем регистре
//Все слова slug должна быть разделены тире
function slugify(title) {
    return title.toLowerCase()
        .trim()
        .split(" ")
        .join("-");
}
slugify("Arrays for begginers");

//Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух 
//исходных firstArray и secondArray.
//Параметр maxLength содержит максимально допустимую длину нового массива.
//Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength.
//В противном случае функция должна вернуть новый массив целиком.
function makeArray(firstArray, secondArray, maxLength) {
    let newArray = firstArray.concat(secondArray);
    let sliceArray = newArray.slice(0, maxLength);
    if (newArray.length > maxLength) {
        return sliceArray;
    }
    console.log(newArray.length);
    return newArray;
}
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);

//Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, 
//и рассчитывает общую сумму его элементов. 
//Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
function calculateTotalPrice(order) {
    let total = 0;
    for (let i = 0; i < order.length; i++) {
        total += order[i];
    }
    return total;
}
calculateTotalPrice([412, 371, 94, 63, 176]);

//Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых 
//пробелом(параметр string) и возвращает самое длинное слово в этой строке.
function findLongestWord(string) {
    return string
        .split(/\W+/)
        .reduce(
            function (longest, word) {
                return word.length > longest.length ? word : longest;
            }
        );
}
findLongestWord("Google do a roll");

//Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает 
//новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value(число).
function filterArray(numbers, value) {
    const newArray = [];
    for (const number of numbers) {
        if (number > value) { newArray.push(number); }
    }
    return newArray;
}
filterArray([12, 24, 8, 41, 76], 38);


//Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 
//и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
function getCommonElements(array1, array2) {
    const newArray = [];
    for (let i = 0; i <= array2.length; i++) {
        if (array2.includes(array1[i])) {
            newArray.push(array1[i]);
        }
    }
    return newArray;
}
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

//Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. 
//Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).
function getEvenNumbers(start, end) {
    const newArray = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            newArray.push(i);
        }
    }
    return newArray;
}
getEvenNumbers(6, 12);

//Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - 
//проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
function includes(array, value) {
    for (let i of array) {
        if (value === i) {
            return true;
        }
    }
    return false;
}
includes([1, 2, 3, 4, 5], 3);

// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number) и возвращает сумму 
//всех целых чисел от единицы и до этого числа.
function calculateTotal(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;

}
calculateTotal(24);

// Вычислить общий процент прогресса со всех доступных курсов
let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [{

            name: 'Sam',
            progress: 10

        }]
    }
};


function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]);

// Возвести число в степень при помощи рекурсии
function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
*/