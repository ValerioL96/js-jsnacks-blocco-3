//Snack-11
//Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 

const array = [];
let userNumber  = Number.parseInt(prompt('type a number'), 10);
const somma = 0;

//Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

while( somma < 50){
     userNumber  = Number.parseInt(prompt('type a number'), 10);

     if(Number.IsNaN(userNumber) !=true){
        array.push(userNumber)
     }

}

console.log(array)
