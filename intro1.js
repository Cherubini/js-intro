console.log('This is a string', ' hello word');
console.log('this is a number', 13); 
console.log('I\' m tired' , false)

console.log(10 + 5)


console.log(10 % 3); //modulo
console.log(10**2); //potenza
console.log('radice quadrata',Math.sqrt(16));
console.log('la casa di mia nonna' + 'è molto bella');
console.log(`la somma di 5 e 10 è ${10+5}`); //stringa interpolata, con gli apici strani (backtick, alt 96), permette di infilare codice nelle stringhe

//----

console.log('uguaglianza tra numeri',10==10); //primo confronto
console.log('uguaglianza tra numeri',10===10);
console.log('uguaglianza con conversione','10' == 10); //true; forza il cambio di tipo da stringa a num e     confronta
console.log('uguaglianza senza conversione','10' === 10); //false; non forza il cambio di tipo e quindi da falso. USIAMO PRATICAMENTE SOLO QUESTO

console.log('CIAO' === 'CIAO'); //true
console.log('CIAO' === 'Ciao'); //false
console.log('10' + 5);
console.log(5 + '10');//occhio perchè alcuni interpreti si rompono con operazioni a tipo misto

console.log('disuguaglianza tra numeri', 10 !== 10);
console.log('disuguaglianza tra stringhe', 'pippo' !== 'pluto'); 
console.log('maggiore', 10 > 5);

/*operatori logici
 */

console.log('operatore not', !true);
console.log('typeof 12', typeof 12);
console.log('infinito positivo', Infinity);
console.log(' infino negativo', -Infinity );
console.log('NaN', 0/0);

console.log('undefined', undefined);//vuoto perchè senza inizializzazione/non esiste
console.log('null', null);






console.log()






