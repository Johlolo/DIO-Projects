type input = number | string;

function somarValores(input1: input, input2: input) {
    if (typeof input1 === 'string' || typeof input1 === 'string') {
        return input1.toString() + input2.toString();
    } else {
        return;
    }
}

console.log(somarValores(1, 5));
console.log(somarValores('Ola', ', tudo bem?'));
console.log(somarValores('1', 5));
