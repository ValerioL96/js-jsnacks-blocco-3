//2.La coda dell'Array
//Cartella: array_tail

//Creiamo  un array chiedendo all'utente quanti elementi dovrà contenere e
//generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
  //1) chiedo all'utente quanti numeri deve generare 
  let userNumberEl = number.parseInt(prompt('type a number element'),10);

  if(userNumberEl> 20 || userNumberEl<1 || Number.isNaN(userNumberEl)){
    userNumberEl = 12;
  }

  //2) Creo un array

  const newArray = [];

  //-Creo un ciclo per quanto sono gli elementi casuali dell'utente 

  for(let i= 0 ; i < userNumberEl ; i++){
     newArray.push(Math.floor(Math.random()*100)+1);
    } 

    
//Stampiamo poi gli ultimi 5 elementi dell'Array
   //3) stampo in console

   console.log(newArray.slice(-5));

