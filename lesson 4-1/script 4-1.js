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
    savings: true,
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay >= 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        };
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');

            appData.montIncome = (save / 100 / 12 * percent).toFixed(1);
            alert('Доход в месяц с вашего депозита: ' + appData.montIncome);
        }
    },
    chooseOptExpenses: function () {
        let i = 1; //optionalExpenses: { 1 : “ответ на вопрос”}
        while (i < 4) {
            let OptExpenses = +prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = OptExpenses;
            i++
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '')
            if ((typeof (items)) === 'string' && (typeof (items)) != null && items != '') {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort()
            } else {
                i--
            };
        };
        appData.income.forEach(function (item, i) {
            alert('Способы доп. заработка: ' + (i + 1) + ' : ' + item);
        })
    }
};

console.log(appData);

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + appData[key])
}