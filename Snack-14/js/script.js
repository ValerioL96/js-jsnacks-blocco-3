// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

let userNumberSeconds = Number.parseInt(prompt('type to seconds'),10);

if(Number.isNaN(userNumberSeconds)|| userNumberSeconds> 12){
    userNumberSeconds = 6;
}

const timerSeconds = setInterval(function(){
    userNumberSeconds -- ;
    console.log(userNumberSeconds);
    if(userNumberSeconds = 0 ){
        clearInterval(timerSeconds);
        console.log('Finite time')
    }
}, 1000);