'use strict'

let str = 'урок-3-был слишком легким';

str = str[0].toUpperCase() + str.slice(1); // 1) = 'Урок-3-был слишком легким'
console.log(str);

str = str.replace(/-/g, " "); // 2) = 'Урок 3 был слишком легким'
console.log(str);

str = str.slice(str.indexOf('легким')); // легким
str = str.replace('им', "оо"); // легкоо
console.log(str);

let arr = [20, 33, 1, 'Человек', 2, 3]; //масив
arr.splice(3, 1); // удалили "Человек"

let i = 0;
while (i < arr.length) {
    arr[i] = Math.pow(arr[i], 3); //arr = [ 8000, 35937, 1, 8, 27 ]
    i++;
};
arr = eval(arr.join('+')); //43973
console.log(Math.sqrt(arr)); // 209.69740103301234


function arbitraryName(strlesson) {
    if (typeof (strlesson) === 'string') {
        strlesson = strlesson.replace(/  /g, "");
        if (strlesson.length > 50) {
            return strlesson.slice(0, 47) + '...';
        } else {
            return strlesson;
        }
    } else {
        alert('Как аргумент передана не строка!')
    }
};
console.log(arbitraryName(prompt('Аргумент в функцию для усложненного задания 5)')));