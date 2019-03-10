let button = document.getElementById('start'),
    classresult = document.querySelectorAll('.result-table div'),
    classMass = [],
    input = document.getElementsByClassName('expenses-item'),
    confirm = document.getElementsByTagName('button'),
    confirm1 = confirm[0],
    confirm2 = confirm[1],
    calculate = confirm[2],
    optionalexpenses = document.querySelectorAll('.optionalexpenses-item'),
    chooseincome = document.querySelector('.choose-income'),
    checkbox = document.querySelector('#savings'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');


function value() {
    for (let i = 1; i < classresult.length; i = i + 2) {
        classMass[(i - 1) / 2] = classresult[i];
    }
}
value();

console.log(button);
console.log(classMass);
console.log(input);
console.log(confirm1);
console.log(confirm2);
console.log(calculate);
console.log(optionalexpenses);
console.log(chooseincome);
console.log(checkbox);
console.log(sum);
console.log(percent);
console.log(year);
console.log(month);
console.log(day);