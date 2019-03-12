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

    // АНИМАЦИЯ
    let btn = document.querySelector('.start'),
        timer = document.querySelector('.main-block-title'),
        pos = 0,
        pos2 = 0;

    function myAnimation() {

        let id = setInterval(frame, 25);

        function frame() {
            if (pos == 25) {
                pos = 0;
                pos2 = 0;
                btn.style.left = 0;
                clearInterval(id);
            } else {
                pos++;
                btn.style.left = Math.pow(pos, 2) + 'px';

                timer.style.top = pos * 10 + 'px';
            }
        }
    }

    function myAnimation2() {

        let id = setInterval(frame, 25);

        function frame() {
            if (pos2 == 25) {
                btn.style.top = 0;
                clearInterval(id);
            } else {
                pos2++;
                btn.style.top = Math.pow(pos2, 3) + 'px';
            }
        }
    }
    btn.addEventListener('click', myAnimation);
    btn.addEventListener('mouseover', myAnimation2);
});