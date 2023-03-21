console.log('intro2');

/*let pippo =5; //proper variabile, sovrascrivibile
console.log(pippo);

var pluto= 10; //old let
console.log(pluto); //ewww

const paperino =20; //per le costanti.
console.log(paperino);


// console.log(clarabella);
// var clarabella=10;

const topolino = 12 -80;

//alert("fagioli"); //si usa poco perché blocca le interazioni con il resto della pagina. Non ritorna, quindi da undefined

//console.log('stampa x: ', topolino);
//console.log(confirm("sicuro?")); //ritorna vero o falso a seconda della scelta dell'utente

let mioNome = prompt('digita il tuo nome', 'liliana');

console.log('mio nome' ,mioNome);

let variabileBrutta = prompt('digita un altro nome', 'valore di default');

alert('il tuo nome è ' + variabileBrutta + '?');

let booleanic = isNaN('aaaaa');

console.log(booleanic);


let variabileInterattiva= prompt('digita qualcosa');
var result = isNaN(variabileInterattiva);
if(result)
    alert('non è un numero, sei umano');
  else
    alert('fking robots');

let i=0;
while(i<12)
{
    console.log(i+ '\n');
    i++;
}*/

//Write a loop that makes seven calls to console.log to output the following triangle:

 let i=0;
 let stringa;
  while(i<7)
     {   
     stringa=''; 
     let j=0;
      while(j<=i)
          {
          stringa+='#';
          j++;
          }
     console.log(stringa);
     i++;
     }

     alert('sta iniziando l\'esercizio 1');

i=1;
while(i<=100)
    {
    if(i%2===0&&i%3===0)
        console.log('FizzBuzz');
      else if(i%2===0)
        console.log('Fizz');
      else if(i%3===0)
        console.log('Buzz');
      else
        console.log(i);
    i++;
    }

alert('sta iniziando l\'esercizio 2');

let columns = prompt('Give me the width');
let rows = prompt('Give me the height');

i=0;
let row=''
while(i<columns)
    {
    row+='# ';
    i++;
    }
i=0;
while(i<rows)
    {
    if(i%2!=0)
        console.log(' '+row);
      else
        console.log(row);
    i++;
    }

    
alert('sta iniziando l\'esercizio 3');

let secretNum=5;
let attempts=1;
while(attempts<=3)
{    switch(prompt('indovina il numero magico!'))
    {   
        case '5':
            console.log('bravo!');
        default:
            attempts+=1;
        
    }
}  
if(attempts=>3)
    console.log('too late');
        