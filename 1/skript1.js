'use strict';

let money, time, appData, expenses, optionalExpenses, income, savings;
money = prompt('Ваш бюджет на месяц?');
time = prompt('Введите дату в формате YYYY-MM-DD');

appData = {
    money,
    time
};

income = {};
savings = false;


console.log(appData)

let button = document.querySelector('button');

button.addEventListener('click', () => {
    let appData1 = {
            expenses: {}
        },
        answerA = document.querySelectorAll('input')[0].value,
        answerB = document.querySelectorAll('input')[1].value;
    appData1.expenses.статья_расходов = answerA;
    appData1.expenses.обойдется_в = answerB;
    console.log(appData1);
    alert('Бюджет на 1 день = ' + money / 30)
});