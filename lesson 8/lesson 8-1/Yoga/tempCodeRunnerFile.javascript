function clock(hours, minutes) {
    let hoursArrow = hours + (minutes / 60),
        minutesArrow = minutes / 5,
        result = (minutesArrow - hoursArrow) * 30;
    if (result < 0) {
        result = result * (-1);
    }
    if (result > 180) {
        result = 360 - result;
    }
    console.log(result);
    console.log(minutesArrow);
    console.log(hoursArrow);
}
clock(3, 30)