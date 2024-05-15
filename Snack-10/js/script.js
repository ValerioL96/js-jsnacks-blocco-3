//snack-10
//Crea due array che hanno un numero di elementi diversi.

const arrayNumberA = [1,2,3,4,5,6,7,];
const arrayNumberB = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let arrayLenghtA = arrayNumberA.length;
let arrayLenghtB = arrayNumberB.length;

//Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro

while(arrayLenghtA < arrayLenghtB){
    arrayNumberA.push(Math.round(Math.random()*100));

}

console.log(arrayNumberA,arrayNumberB);