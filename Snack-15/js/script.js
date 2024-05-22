//Creare un oggetto palla che abbia le seguenti proprietà.
//Nome = palla
//Peso = 10

let palla = [
    {
        nome: 'palla',
        peso: 10
    }

  
]

console.log(palla)


//Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

const userPeso = Number.parseInt(prompt('digita peso nuovo palla').trim(), 10);
while(Number.isNaN(userPeso)){
    userPeso = Number.parseInt(prompt('digita peso nuovo palla').trim(), 10);
}
 palla.peso = userPeso

console.log('userpeso', '', userPeso)