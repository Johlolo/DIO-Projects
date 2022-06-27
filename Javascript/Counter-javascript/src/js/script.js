var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    if(currentNumber <= 0) {
        alert("The number can't be under 0!");
        currentNumber = 0;
    } else {
        currentNumber--;
    }
    currentNumberWrapper.innerHTML = currentNumber;
}