// onst name = 'Alexa'; 
// alert(name.toUpperCase()); 
// alert('Hello'.concat(" ","World!")); 
// alert('Java' + 'Script' + ' ' + 'Ninja'); 
// alert("      12313       ".trim()); 
//alert("Name".repeat(2)); 
// повторяет строку определенное количество раз 
// const name = `Siri`; 
// console.log(`Hello ${ name }!`); 
// 'Hello Siri!' // const age = 39; 
// console.log(`I will be ${ age + 1 } next year`); 
// "I will be 40 next year" 
// console.log(`This is the start ... 



// .... and this is the end`);

//// number metods

// number.toExponential(); представляем в экспоненциальном виде 
// console.log(5..toExponential());

// .toFixed(); округляет число до фиксированного количества десятичных знаков
// значение возвращается в виде строки, а не числа

// const PI = 3.1415926;
// console.log(PI.toFixed(3));
// >> 3.142;
// console.log(PI);
// >> 3.1415926;

// .toPrecision(); округляет число до фиксированного числа значащих цифр
// часто возвращает значение в экспаненциальном виде
// const a = 1234;
// console.log(a.toPrecision(2));
// >> 1.2e+3

// остаток от деления на с отрицательным числом
// console.log(-4 % 3);
// >> -1 хотя должно быть число 2

// инкремент и декремент (увеличение или уменьшение на 1)
// 2 варианта написания
// number++ и ++number
// разница в том, что number++ сначала вернет значение, а потом увеличит
// а ++number увеличит и потом вернет

// console.log(1/0); 
// >> infinity

// удивительное рядом
// console.log(typeof NaN);
// >> number

// .isFinite(); вернет true если результат отличен от Infinity , -Infinity or NaN
// const a = 1 / 0;
// console.log(Number.isFinite(a));
// >> false
// console.log(Number.isFinite(42));
// >> true

// Преобразование строки в число
// Number('312');
// >> 312
// Number("string"); преобразования не числовой строки приведет к NaN
// >> NaN

// Преобразования чисел в строки
// String(3);
// >> "3"
// так же есть метод .toString();
// 10..toString(); также в параметр функции можно написать желаемую систему счисления
// >> "10"

// parseInt() преобразование строкового значения в числовое
// parseInt('omg',36);
// << 31912
// parseInt('23',10);
// << 23
// если в строке первым стоит число, то .parseInt() будет использовать это число
// игнорируя идущий дальте текст
// const address = '221B Baker Street';
// parseInt(address, 10)
// << 221
// И если вы используете parseInt с десятичной дробью, она удалит все,
// что находится после десятичной точки

// parseFloat() преобразует строки в десятичные числа с плавающей запятой

// console.log("cool" && 18);

// Number.isNaN() проверка явл ли значение NaN

//console.log(NaN !== NaN);

// const question = "What is Superman's real name?"
// const answer = prompt(question);
// alert(`You answered ${answer}`);

/*
const heroes = [];

heroes[0] = 123;
heroes[1] = 'Wonder Woman';
heroes[2] = 'Flash';
heroes[5] = 'Aquaman';

console.log(heroes);

delete heroes[5];

console.log(heroes[5]);
*/
/*
let [x,y] = [1,2];

console.log(x);
console.log(y);

[x,y] = [y,x];

console.log(x);
console.log(y);
*/

// const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];

/*

avengers.length;

avengers[avengers.length - 1];

avengers.length = 8;

avengers

avengers.length = 3;

avengers

avengers.pop();

avengers

avengers.shift();

avengers.push('Thor');

avengers.unshift('Captain America');

avengers.concat(['Hulk','Hawkeye', 'Black Widow']);

avengers1 = [ ...avengers, ...['Hulk','Hawkeye', 'Black Widow'] ];

console.log(avengers); // спросить почему не получается присвоить массиву avengers =
console.log(avengers1); // avengers.concat(['Hulk','Hawkeye', 'Black Widow']);

console.log(avengers1.join(' & '));;

console.log(avengers1.slice(2,4));

console.log(avengers1.splice(3, 1, 'Scarlet Witch'));

avengers1.splice(4,0,'Quicksilver');

avengers1.splice(2,1);

console.log(avengers1);
*/
/*
const name = 'Mikle';

function getName() {
    const name = "Alex";
    return () => console.log(name);
};

const result = getName();

result();
*/

// Мы можем изменить порядок массива навсегда, используя метод reverse()

// console.log(avengers); 
// console.log(avengers.reverse())
// console.log(avengers)


// Мы можем отсортировать порядок массива навсегда с помощью метода sort()
// по умолчанию в алфавитном порядке

// console.log(avengers);
// console.log(avengers.sort())

// console.log(avengers.indexOf('Iron Man'));
// вернет индекс или -1 если не найдет

// возвращает логическое значение если элемент есть в массиве
// дополниельный параметр с какого индекса начинать поиск
// avengers.includes('Iron Man', 1);
// << true


//// Многомерные массивы

// const coordinates = [[1,3],[4,2]];
// console.log(coordinates[0][0]); // The first value of the first array

// Наборы

// const jla = new Set().add('Superman').add('Batman').add('Wonder Woman');
// let length = jla.size; // показывает количество значений в наборе

// console.log(length);

// проверка наличия значения в наборе 
// jla.has('Superman'); >> ture

// удаление из набора
// jla.delete('Superman');
// << true
// jla.delete('Flash');
// << false

// удаление всех значений из набора
// jla.clear();

// преобразования сета в массив
// const jlaArray = [...jla]; 1й способ
// const shoppingArray = Array.from(shoppingSet); 2й
// console.log(jlaArray);

// добавление элементов в карту 
// .set()
// const heroes = new Map([ ['Clark Kent','Superman'], ['Bruce Wayne', 'Batman'] ]);
// console.log(heroes);
/*
let bottles = 10;
while (bottles > 0){
console.log(`There were ${bottles} green bottles, hanging on
➥ a wall. And if one green bottle should accidentally fall,
➥ there'd be ${bottles-1} green bottles hanging on the wall`);
bottles--;
}
*/
/*
const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];

for (let i=0, max=avengers.length; i < max; i++){
    console.log(avengers[i]);
    }

for(const value of avengers){
console.log(value);
}
*/

let romanNumerals = new Map();
romanNumerals.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');

for(const key of romanNumerals.values()) {
    romanNumerals.values(key) = 4242;
    }