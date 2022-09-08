'use strict';
/*
/* Массив в строку ----------------------------------------------------------------------------------------------------------------------------------------
let words = ['hello', 'world', 'this', 'is', 'great'];
function smash(words) {
    console.log(words.join(" "))
}
smash(words)
*/

/* Строку в число ----------------------------------------------------------------------------------------------------------------------------------------
const stringToNumber = function (str) {
    return parseInt(str);
}
*/

/* Сумма до числа ----------------------------------------------------------------------------------------------------------------------------------------
var summation = function (num) {
    let sum = 0
    for(let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}
*/

/* Задача вычисления ----------------------------------------------------------------------------------------------------------------------------------------
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (mpg * fuelLeft - distanceToPump >= 0) {
        return true
    } else {
        return false
    }
}
*/

/* Считаем овец ----------------------------------------------------------------------------------------------------------------------------------------
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}
*/

/* Максимум и минимум ----------------------------------------------------------------------------------------------------------------------------------------
var min = function(list){
    return Math.min.apply(null,list);
}

var max = function(list){
    return Math.max.apply(null,list);
}
*/

/* Индекс массы ----------------------------------------------------------------------------------------------------------------------------------------
function bmi(weight, height) {
    let bmi = weight / (height ** 2);
    if (bmi <= 18.5) {
        return "Underweight";
    } else if
        (bmi <= 25.0) {
        return "Normal";
    } else if
        (bmi <= 30.0) {
        return "Overweight";
    } else {
        (bmi > 30) 
        return "Obese";
    }
}
 */

/* Делится или нет ----------------------------------------------------------------------------------------------------------------------------------------
function isDivideBy(n, a, b) {
  return !(n % a || n % b);
} 
*/

/* Да или нет ----------------------------------------------------------------------------------------------------------------------------------------
function boolToWord( bool ){
const str = bool === true ? "Yes" : "No"
return str
}
  */

/* Первая буква ----------------------------------------------------------------------------------------------------------------------------------------
function areYouPlayingBanjo(name) {
 if (name[0] === "R" || name[0] === "r") {
   return name + " plays banjo" 
 } else {
   return name + " does not play banjo"
 }
}
 */

/* Среднее арифметическое true ----------------------------------------------------------------------------------------------------------------------------------------
 function betterThanAverage(classPoints, yourPoints) {
 const average = classPoints.reduce ((x, y) => x + y, 0) / classPoints.length;
  return average > yourPoints ? false : true
} 
*/

/* Босс или гость ----------------------------------------------------------------------------------------------------------------------------------------
function greet (name, owner) {
  return name === owner ? 'Hello boss' :  'Hello guest';
}
*/

/* Обратный массив ----------------------------------------------------------------------------------------------------------------------------------------
const reverseSeq = n => {
    let arr = [];
    for (let i = n; i >= 1; i--) {
        arr.push(i);
    }
   return arr;
};
*/

/* Обьем и площадб куба ----------------------------------------------------------------------------------------------------------------------------------------
Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба:
function calculateVolumeAndArea(length) {
    if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
    return "При вычислении произошла ошибка";
}
let V = length * length * length;
let S = 6 * (length * length);
return `Объем куба: ${V}, площадь всей поверхности: ${S}`;
}
*/

/* Определить номер купе по номеру места ----------------------------------------------------------------------------------------------------------------------------------------
function getCoupeNumber(coupeNumber) {
if (typeof(coupeNumber) !== 'number' || coupeNumber < 0 || !Number.isInteger(coupeNumber)) {
 return "Ошибка. Проверьте правильность введенного номера места";
 }
 if (coupeNumber === 0 || coupeNumber > 36) {
 return "Таких мест в вагоне не существует";
 }
 for (let i = 4; i <= 36; i = i + 4) {
  if (coupeNumber <= i) {
  return Math.ceil(i / 4);
  }
 }
}
*/

/* Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. ----------------------------------------------------------------------------------------------------------------------------------------
function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}
*/

/* Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них.
Если один из аргументов не является числом или их меньше 4 - возвращается 0. ----------------------------------------------------------------------------------------------------------------------------------------

function findMaxNumber(num1, num2, num3, num4) {
    if (num1, num2, num3, num4 !== 'number' || num1, num2, num3, num4 < 0) {
        return 0;
    }
    return Math.max();
}

findMaxNumber(1, 5, '6', '10');
*/


/* Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. 
Причем, их количество должно быть равно переданному аргументу.
Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии. ----------------------------------------------------------------------------------------------------------------------------------------

function fib(num) {
    if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}
*/

/* Массив из обьекта и его длина ----------------------------------------------------------------------------------------------------------------------------------------
const user = {
    name: 'Ross',
    age: 26,
    weigth: 62,
    heigth: 165,
    makeTest: function () {
        console.log("test");
    }
}
    user.makeTest();
    
console.log(Object.keys(user).length);

*/

/* Напишите функцию, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом. ----------------------------------------------------------------------------------------------------------------------------------------
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function () {
        const lang = personalPlanPeter.skills.languages.join(' ').toUpperCase();
        return console.log(`Мне ${personalPlanPeter.age} и я владею языками: ${lang}`);
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const { exp } = plan.skills;
    console.log(exp);
    return exp;
}
showExperience(personalPlanPeter);
*/

/* Напишите функцию showProgrammingLangs, которая будет принимать 
в себя объект со всеми данными и возвращать строку в нужном виде. ----------------------------------------------------------------------------------------------------------------------------------------

function showProgrammingLangs(plan) {
    let str = '';
    const { programmingLangs } = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}

*/

/* Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста' ----------------------------------------------------------------------------------------------------------------------------------------

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        return 'Семья пуста';
    }
    return `Семья состоит из: ${arr.join(' ')}`
}
*/

/* напишите функцию standardizeStrings, которая будет принимать в себя массив строк 
и будет выводить в консоль эти строки в нижнем регистре. ----------------------------------------------------------------------------------------------------------------------------------------

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(str => {
        console.log(str.toLowerCase());
    });
}
standardizeStrings(favoriteCities);
*/

/* Напишите функцию reverse, которая принимает в себя строку 
и возвращает эту строку в обратном порядке. ----------------------------------------------------------------------------------------------------------------------------------------

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!"
    }
    let reversStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversStr += str[i];
    }
    return reversStr;
}

OR ----------------------------------------------------------------------------------------------------------------------------------------

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    return str.split('').reverse().join('');
*/

/*
создать функцию, которая принимает два аргумента: 
первый - это массив со всеми доступными валютами из двух банков сразу, 
второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. 
Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. ----------------------------------------------------------------------------------------------------------------------------------------

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];


function availableCurr(arr, missingCurr) {
    let str = '';
    if (arr.length === 0) {
        return 'Нет доступных валют';
    }
    str = `Доступные валюты:\n`;
    arr.forEach(function (curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')

*/

/* Написать функцию isBudgetEnough, которая буде возвращать строку. 
Если бюджета хватает для отопления всего объема торгового центра - 
выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'.----------------------------------------------------------------------------------------------------------------------------------------

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let volume = 0;

    data.shops.forEach(shop => {
        volume += (shop.width * shop.length) * data.height;
    });


    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    }
    return 'Бюджета недостаточно';
}
*/

/* Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
Внутри она сначала сортирует имена по алфавиту. 
Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. 
Эти группы должны быть массивами. Как итог, функция возвращает новый массив 
с тремя командами и строкой как 4й элемент. ----------------------------------------------------------------------------------------------------------------------------------------

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const group = [], a = [], b = [], c = [], rest = [];
    for (let i in arr) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}
sortStudentsByGroups(students);
*/

/*  Напишите функцию showGoodFilms, которая будет принимать массив, 
а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8. ----------------------------------------------------------------------------------------------------------------------------------------

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];
function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);
}
showGoodFilms(films);
*/

/*  Напишите функцию showListOfFilms, которая будет принимать этот же массив, 
а возвращать будет строку, которая содержит названия фильмов через запятую. ----------------------------------------------------------------------------------------------------------------------------------------

function showListOfFilms(arr) {
    return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}
showListOfFilms(films);
*/

/*
Напишите функцию setFilmsIds, которая будет принимать этот же массив, 
а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. 
Значение этого поля установите по нумерации фильма. ----------------------------------------------------------------------------------------------------------------------------------------


function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}
setFilmsIds(films);
*/

/* Запишите результат предыдущей функции в переменную tranformedArray.Напишите функцию checkFilms,
которая будет проверять, что в каждом из фильмов есть поле id.Если это так - функция возвращает true. ----------------------------------------------------------------------------------------------------------------------------------------

const tranformedArray = setFilmsIds(films);
function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false)
}
checkFilms(tranformedArray);
*/

/* Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, 
и возвращает slug, созданный из этой строки.
Значением параметра title будут строки, слова которых разделены только пробелами
Все символы slug должны быть в нижнем регистре
Все слова slug должна быть разделены тире----------------------------------------------------------------------------------------------------------------------------------------

function slugify(title) {
    return title.toLowerCase()
        .trim()
        .split(" ")
        .join("-");
}
slugify("Arrays for begginers");
*/

/* Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух 
исходных firstArray и secondArray.
Параметр maxLength содержит максимально допустимую длину нового массива.
Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength.
В противном случае функция должна вернуть новый массив целиком. ----------------------------------------------------------------------------------------------------------------------------------------

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
*/

/* Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, 
и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться 
в переменной total, которая возвращается, как результат работы функции. ----------------------------------------------------------------------------------------------------------------------------------------

function calculateTotalPrice(order) {
    let total = 0;
    for (let i = 0; i < order.length; i++) {
        total += order[i];
    }
    return total;
}
calculateTotalPrice([412, 371, 94, 63, 176]);
*/

/* Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых 
пробелом(параметр string) и возвращает самое длинное слово в этой строке. ----------------------------------------------------------------------------------------------------------------------------------------

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
*/

/* Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает 
новый массив, в котором будут только те элементы массива numbers, которые больше чем значение 
параметра value(число). ----------------------------------------------------------------------------------------------------------------------------------------

function filterArray(numbers, value) {
    const newArray = [];
    for (const number of numbers) {
        if (number > value) { newArray.push(number); }
    }
    return newArray;
}
filterArray([12, 24, 8, 41, 76], 38);
*/

/*Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 
и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах. ----------------------------------------------------------------------------------------------------------------------------------------

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
*/

/* Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. 
Чётным считается число которое делится на 2 без остатка(10 % 2 === 0). ----------------------------------------------------------------------------------------------------------------------------------------

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
*/

/* Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - 
проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае. ----------------------------------------------------------------------------------------------------------------------------------------

function includes(array, value) {
    for (let i of array) {
        if (value === i) {
            return true;
        }
    }
    return false;
}
includes([1, 2, 3, 4, 5], 3);
*/

/* Напиши функцию calculateTotal(number), которая принимает целое число(параметр number) и возвращает сумму 
всех целых чисел от единицы и до этого числа. ----------------------------------------------------------------------------------------------------------------------------------------

function calculateTotal(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;

}
calculateTotal(24);
*/

/* Вычислить общий процент прогресса со всех доступных курсов ----------------------------------------------------------------------------------------------------------------------------------------

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
*/

/* Возвести число в степень при помощи рекурсии ----------------------------------------------------------------------------------------------------------------------------------------

function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
*/

/* Напишите функцию, которая вычисляет факториал. ----------------------------------------------------------------------------------------------------------------------------------------

function factorial(n) {
    if (typeof (n) !== 'number' || !Number.isInteger(n)) {
        return 'Ошибка, значение не число!';
    } else if (n <= 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(4));
*/