console.log("TESTING")

// REVERSE A STRING WITH BUILT-IN-METHODS
function reverseString(str) {
    // converts string into array ['h', 'e', 'l', 'l', 'o']
 /*    let strArr = str.split("");
    // built-in method reverses array ['o', 'l', 'l', 'e', 'h']
    let reverseStrArray = strArr.reverse();
    // built-in method "joins" array into string
    let reversedString = reverseStrArray.join("");
    return reversedString; */
 return str.split("").reverse().join("")
}

// REVERSE A STRING WITHOUT BUILT-IN METHODS
function reverseStringTwo(str) {
    let final = "";
    for (let i = str.length - 1; i >= 0; i--){
        final += str[i];
    } 
    return final;
}

console.log(reverseString("hello"));
console.log(reverseStringTwo("hello"));


// FACTORIALIZE AN INTEGER

function factorialize(num) {
    let result = 1;

    for (let i = 1; i <=num; i++) {
        result = result * i;
    }

    return result
}

console.log(factorialize(5))