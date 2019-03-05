'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

console.log(appData)

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    };
};
chooseExpenses();


appData.moneyPerDay = (appData.budget / 30).toFixed(1);
alert('Ежедневный бюджет: ' + appData.moneyPerDay);

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.montIncome = (save / 100 / 12 * percent).toFixed(1);
        alert('Доход в месяц с вашего депозита: ' + appData.montIncome);
    }
};
checkSavings();

appData.detectDayBudget = parseFloat(appData.moneyPerDay) + parseFloat(appData.montIncome);

function detectLevel() {
    if (appData.detectDayBudget < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.detectDayBudget > 100 && appData.detectDayBudget < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.detectDayBudget >= 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    };
};
detectLevel()

alert('Расчет дневного бюджета: ' + appData.detectDayBudget);

function chooseOptExpenses() {
    let i = 1; //optionalExpenses: { 1 : “ответ на вопрос”}
    while (i < 4) {
        let OptExpenses = +prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = OptExpenses;
        i++
        OptExpenses++
    }
};
chooseOptExpenses()