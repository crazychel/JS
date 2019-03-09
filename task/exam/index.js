let secondNum, firstNum, result,
    found = [];

function getFriendlyNumbers(start, end) {
    result = [];
    if (typeof (start) != 'number' || typeof (end) != 'number' || start > end || start < 0 ||
        end < 0 || ((start ^ 0) === start) == false || ((end ^ 0) === end) == false) {
        result = false;
        return result;
    } else {
        for (secondNum = start; secondNum < end; secondNum++) {
            firstNum = Sum(Dividers(secondNum));
            if (friendly(secondNum, firstNum) == true && secondNum != firstNum && secondNum < firstNum) {
                found.push(secondNum);
                found.push(firstNum);
                result.push(found);
                found = [];
            }
        }
        return result;
    }
}
console.log(getFriendlyNumbers(1, 300));
console.log(getFriendlyNumbers(1, 1210));

function friendly(num1, num2) {
    return SumDividers(num1) == num2 && SumDividers(num2) == num1;
}

function SumDividers(num) {
    return Sum(Dividers(num));
}

function Dividers(num) {
    let arr = [];
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}

function Sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

module.exports = {
    firstName: 'Илья',
    secondName: 'Лавренюк',
    task: getFriendlyNumbers
}