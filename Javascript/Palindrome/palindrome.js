
// Solution 1
function verifyPalindrome(string) {
    if(!string) return "non-existent string";

    return string.split("").reverse().join("") === string;
}

console.log(verifyPalindrome(""));

// Solution 2
function verifyPalindrome2(string) {
    if(!string) return "non-existent string";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verifyPalindrome2("gato"));