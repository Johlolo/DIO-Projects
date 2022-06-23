alert("Write 2 numbers and it will compare if they are equal and if their sum is greater than 10 or less than 20.");

var firstNumber = prompt("Write the first number.");
var secondNumber = prompt("Write the second number.");

function compareNumbers(firstNumber, secondNumber) {
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
    let answer = "";
    let result = "";
    if (firstNumber === secondNumber) {
        answer = `are equal`;

    } else {
        answer = `are not equal`;
    }
    return result = `The numbers ${firstNumber} and ${secondNumber} ${answer}`;
}

function numberSums(firstNumber, secondNumber) {
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
    let sum = firstNumber + secondNumber;
    let answer10 = "";
    let answer20 = "";
    let result = "";
    if (sum > 10) {
        answer10 = `bigger then`;
    } else  if (sum < 10) {
        answer10 = `smaller then`;
    } else {
        answer10 = `equal`
    }
    if (sum > 20) {
        answer20 = `bigger then`;
    } else  if (sum < 20) {
        answer20 = `smaller then`;
    } else {
        answer20 = `equal`
    }
    return result = `Their sum is ${sum}, there is ${answer10} 10 and ${answer20} 20`
}

alert(`${compareNumbers(firstNumber, secondNumber)}. ${numberSums(firstNumber, secondNumber)}.`)