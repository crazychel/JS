'use strict';

let money;
money = +prompt('Ваш бюджет на месяц?', '');

let appData = {
    budget: money
};

appData.moneyPerDay = appData.budget / 30;
alert('Ежедневный бюджет: ' + appData.moneyPerDay);

let way = +prompt('Какой способ для цыкла использовать? (1, 2, 3)', '') // будет 3 варианта, 3 цикла в одном js коде

switch (way) {
    case 1: //этот цикл из видео-обучения
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        };
        break;
    case 2: // Второй вид цикла
        switch (appData.moneyPerDay) {
            case appData.moneyPerDay < 100:
                console.log('Минимальный уровень достатка');
                break;
            case appData.moneyPerDay > 100 && appData.moneyPerDay < 2000:
                console.log('Средний уровень достатка');
                break;
            case appData.moneyPerDay > 2000:
                console.log('Высокий уровень достатка');
                break;
            default:
                console.log('Что-то пошло не так');
        };
        break;
    default:
        console.log('Ошибка');

};