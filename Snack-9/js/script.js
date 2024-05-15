//Snack9 Crea un array vuoto. 

const array = [];

//Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
 //se è dispari inseriscilo nell'array.

 let  number = Number.parseInt(prompt('Type number'), 10);

 while( array.length<5){
    number = Number.parseInt(prompt('Type number'), 10);
    if(Number.isNaN(number)!= true &&  number%2 == 1){
      array.push(number);
    }
    
 }
 console.log(array);
