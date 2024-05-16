// Snack 12
// Dare la possibilità di inserire due parole.

const userwordA =prompt('type a word');
const userwordB =prompt('type a word');

if(wordLength(userwordA,userwordB)== true){
    console.log(userwordA,userwordB);
}else{
    if(userwordA.length > userwordB.length){
        console.log(userwordA);
    }else{
        console.log(userwordB);
    }
}
//Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. 

function wordLength(wordA,wordB){
   


//Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

    if(wordA.length == wordB.length){
        return true;
    }else{
        return false;

}
}
