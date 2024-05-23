// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
let alimentazione;
const auto = [
    {
        marca:'ford',
        modello:'fiesta',
        alimentazione: 'benzina'
    },
    {
        marca:'fiat',
        modello:'x',
        alimentazione:'gpl'
    },
    {
        marca:'ford',
        modello:'puma',
        alimentazione:'benzina'
    },
    {
        marca:'tesla',
        modello:'xs',
        alimentazione:'elettrico'
    },
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'metano'
    },
    {
        marca:'ford',
        modello:'fiesta',
        alimentazione: 'benzina'
    },
    {
        marca:'fiat',
        modello:'x',
        alimentazione:'gpl'
    },
    {
        marca:'ford',
        modello:'puma',
        alimentazione:'benzina'
    },
    {
        marca:'tesla',
        modello:'xs',
        alimentazione:'elettrico'
    },
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'metano'
    },
    {
        marca:'ford',
        modello:'fiesta',
        alimentazione: 'benzina'
    },
    {
        marca:'fiat',
        modello:'x',
        alimentazione:'gpl'
    },
    {
        marca:'ford',
        modello:'puma',
        alimentazione:'benzina'
    },
    {
        marca:'tesla',
        modello:'xs',
        alimentazione:'elettrico'
    },
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'metano'
    }
    
]

// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
const autoBenzina= [];
const auotDiesel = [];
const auotoDIverseAlim=[];

array.forEach(element => {
    if(alimentazione= 'benzina'){
        auto.push(autoBenzina);
    }else if(alimentazione = 'diesel'){
        auto.push(auotDiesel);
    }else{
        auto.push(auotoDIverseAlim)
    }
   console.log(autoBenzina,auotDiesel,auotoDIverseAlim)
});


// < Infine stampa separatamente i 3 array.