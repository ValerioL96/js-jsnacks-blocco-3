//2.La coda dell'Array
//Cartella: array_tail

//Creiamo  un array chiedendo all'utente quanti elementi dovrà contenere e
//generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
  //1) chiedo all'utente quanti numeri deve generare 
  let userNumberEl = number.parseInt(prompt('type a number element'),10);

  if(userNumberEl> 20 || userNumberEl<1 || Number.isNaN(userNumberEl)){
    userNumberEl = 12;
  }