'use strict';

let num = 33721;
let power = eval(num.toString().split('').join('*'));
console.log(power);

let show = power ** 3;
alert(show.toString()[0]+show.toString()[1]);