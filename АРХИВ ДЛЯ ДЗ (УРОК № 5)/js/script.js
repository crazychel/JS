let li = document.createElement('li'),
    textmenu = document.createTextNode('Пятый пункт'),
    menu = document.querySelector('.menu'),
    sortmenu = document.querySelectorAll('.menu-item'),
    delAD = document.querySelectorAll('.column'),
    ad = document.querySelector('.adv');


li.classList.add('menu-item');
li.appendChild(textmenu);
menu.appendChild(li);
menu.insertBefore(sortmenu[2], sortmenu[1]);
document.getElementById('title').innerHTML = 'Мы продаем только подлинную технику Apple';
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
delAD[1].removeChild(ad);
document.getElementById('prompt').innerHTML = prompt('Ваше отношение к технике apple?', '');


console.log(document.getElementById('prompt'));
console.log(menu);