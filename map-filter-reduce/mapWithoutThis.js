function mapWithoutThis(arr) {
    return arr.map(function(item) {
        return item * 2
    });
}

const numbers = [2, 4, 6, 8, 10];

console.log(mapWithoutThis(numbers));