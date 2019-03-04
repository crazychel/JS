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

// let way = +prompt('Какой способ для цыкла использовать? (1, 2, 3)', '') // будет 3 варианта, 3 цикла в одном js коде
// let x = appData.moneyPerDay // заменяю только потому что так глазу приятнее

// switch (way) {


//     case 1: //этот цикл из видео-обучения
//         if (appData.moneyPerDay < 100) {
//             console.log('Минимальный уровень достатка');
//         } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//             console.log('Средний уровень достатка');
//         } else if (appData.moneyPerDay >= 2000) {
//             console.log('Высокий уровень достатка');
//         } else {
//             console.log('Произошла ошибка');
//         };
//         break;


//     case 2: // Второй вид цикла      
//         switch (x) {
//             case (x < 100 ? x : null):
//                 console.log('Минимальный уровень достатка');
//                 break;
//             case (x > 100 && x < 2000 ? x : null):
//                 console.log('Средний уровень достатка');
//                 break;
//             case (x >= 2000 ? x : null):
//                 console.log('Высокий уровень достатка');
//                 break;
//             default:
//                 console.log('Что-то пошло не так во втором switch');
//         };
//         break;


//     case 3: // третий вид 
//         while (x < 100) {
//             console.log('Минимальный уровень достатка');
//             break;
//         };
//         while (x > 100 && x < 2000) {
//             console.log('Средний уровень достатка');
//             break;
//         };
//         while (x >= 2000) {
//             console.log('Высокий уровень достатка');
//             break;
//         };
//         break;


//     default: // вот и все) Работает!
//         console.log('Ошибка связана с way');

// };

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
    let i = 1,
        n;
    while (i < 4) {
        n = +prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = n;
        i++
        n++
    }
};
chooseOptExpenses()