const list = [
    {
        name: 'washing powder',
        price: 30
    },
    {
        name: 'cereal',
        price: 12
    },
    {
        name: 'towel',
        price: 30
    }
];

const availableBalance = 100;

function calculateBalance(availableBalance, list) {
    return list.reduce(function(prev, current, index) {
        console.log('Round ', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.price;
    }, availableBalance);
}

console.log(calculateBalance(availableBalance, list));