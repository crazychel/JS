window.addEventListener('DOMContentLoaded', function () {

    'use srict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // таймер

    let deadline = '2019-03-17';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            if (t.hours < 0) {
                t.hours = '00';
            } else {
                if (t.hours < 10) {
                    t.hours = '0' + t.hours;
                }
            }
            hours.textContent = t.hours;

            if (t.minutes < 0) {
                t.minutes = '00';
            } else {
                if (t.minutes < 10) {
                    t.minutes = '0' + t.minutes;
                }
            }
            minutes.textContent = t.minutes;

            if (t.seconds < 0) {
                t.seconds = '00';
            } else {
                if (t.seconds < 10) {
                    t.seconds = '0' + t.seconds;
                }
            }
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('timrer', deadline);

    //   Скролл

    // function setscroll(menuItem) {

    //     let menulink = document.querySelectorAll('ul li'),
    //         menu0 = 650,
    //         menu1 = 1932,
    //         menu2 = 4677,
    //         menu3 = 5291;

    //     for (let i = 0; i < menulink.length; i++) {
    //         menulink[i].addEventListener('click', function () {
    //             scrollTo(0, 650);
    //         });

    //         menuInterval = setInterval(scroll, 1000);
    //     }
    // }
    // setscroll();

    //   Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');


    more.addEventListener('click', modalOpen = function () {
        overlay.style.display = 'block';
        more.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });


    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let detail = document.querySelectorAll('.description-btn');

    detail.forEach(function (item) {
        item.addEventListener('click', function () {
            modalOpen();
        });
    });
});