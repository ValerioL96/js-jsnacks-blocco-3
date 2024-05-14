TuttiFrutti
Cartella array-lista

Descrizione:
Abbiamo un frigorifero pieno di frutta: 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?

Fasi
 1. creare l'array con la frutta del frigorifero:
    - Mi creo una lista della frutta che si trova all'interno del frigo (const fruitList = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']);
    - stampo in console per verificare la mia lista ;
 
 2. aggiungere la pesca all'array della frutta:
    - Usando il metodo push alla mia lista, aggiungo un valore ad essa, in questo caso aggiungerei la pesca (fruitList.push('pesca'));
    - stampo in console e verifico l'aggiunta del valore 'pesca'  nella mia lista ;

 3. verificare se nell'array di frutta c'è il cocomero:
    - L'esercizio mi pone una condizione, verificare se nella lista c'è il valore cocomero:
      Creo un ciclo della mia lista così da dare ad ogni suo elemeto un indice, questo porterà ad avere il cocomero con indice 6.
      (for(let i=0; i< fruitList.length; i++ ));

      - se c'è stampiamo: 
        se l'uguaglianza tra l'indice e il valore coccomero è vera, in console verrà stampato "Trovato! Devo solo preparare il cocktail."
        (if(i[6]== 'coccomero'){console.log('Trovato! Devo solo preparare il cocktail.')})
         
      - se non lo trovo: 
        altrimenti in console verrà stampato "Oh no, devo uscire a comprare il cocomero!"
        (else{console.log('Oh no, devo uscire a comprare il cocomero!')})