
// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

const persone = [
    {
        nome :'Francesco',
        cognome : 'filiberto',
        età :18
    },
    {
        nome :'Francesca',
        cognome : 'fili',
        età :30
    },
    {
        nome :'Anna',
        cognome : 'berto',
        età: 5
    },
    {
        nome :'Gino',
        cognome : 'Pasticcino',
        età:75
    },
    {
        nome :'Luis',
        cognome : 'Cava',
        età:50
    },
    {
        nome :'Francesco',
        cognome : 'filiberto',
        età :18
    },
    {
        nome :'Francesca',
        cognome : 'fili',
        età :30
    },
    {
        nome :'Anna',
        cognome : 'berto',
        età: 5
    },
    {
        nome :'Gino',
        cognome : 'Pasticcino',
        età:75
    },
    {
        nome :'Luis',
        cognome : 'Cava',
        età:50
    }
];

console.log(persone);

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const yesDriver =[];
const noDriver = [];

array.forEach(element => {
    if(element.età<18 || element.età>50){
        noDriver.push(element);
    }
    else{ yesDriver.push(element);

    }
});

console.log(yesDriver);
console.log(noDriver);