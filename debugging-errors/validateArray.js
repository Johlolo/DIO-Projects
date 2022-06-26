function validateArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('Send the parameters.');

        if (typeof arr !== 'object') throw new TypeError('The array must be an object type.');
    
        if (typeof num !== 'number') throw new TypeError('The number must be an number type');
    
        if (arr.length !== num) throw new RangeError('Invalid size.');

        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('This error is an ReferenceError!');
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log('This error is an TypeError!');
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log('This error is an RangeError!');
            console.log(e.message)
        } else {
            console.log('Unexpected error type: ' + e);
        }
    }
}

console.log(validateArray([1, 2, 3, 4, 5], 5));