window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let timerID = setTimeout(function time() {
        let timer = document.querySelector('.main-block-title'),
            hours = new Date().getHours(),
            minutes = new Date().getMinutes(),
            seconds = new Date().getSeconds();

        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        timer.textContent = hours + ':' + minutes + ':' + seconds;
        setTimeout(time, 1000);
    });
});