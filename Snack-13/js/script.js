// Snack-13
// Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321



function reverseUserNumber(number){
    const string = number.toString();
    let reverseString = '';

    for(let i = string.length- 1 ; i >00; i--){
        reverseString+= string[i];
    }
    return reverseString;
}


const userNumber = Number.parseInt(prompt('type a number'),10);
console.log(userNumber)
let reverseNumber = reverseUserNumber(userNumber);
console.log(reverseNumber);