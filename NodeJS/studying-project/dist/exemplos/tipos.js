"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input1 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return;
    }
}
console.log(somarValores(1, 5));
console.log(somarValores('Ola', ', tudo bem?'));
console.log(somarValores('1', 5));
