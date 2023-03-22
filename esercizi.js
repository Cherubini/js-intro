// /*

// let mioNome = prompt('digita il tuo nome', 'liliana');

// console.log('mio nome' ,mioNome);

// let variabileBrutta = prompt('digita un altro nome', 'valore di default');

// alert('il tuo nome è ' + variabileBrutta + '?');

// let booleanic = isNaN('aaaaa');

// console.log(booleanic);


// let variabileInterattiva= prompt('digita qualcosa');
// var result = isNaN(variabileInterattiva);
// if(result)
//     alert('non è un numero, sei umano');
//   else
//     alert('fking robots');

// let i=0;
// while(i<12)
// {
//     console.log(i+ '\n');
//     i++;
// }

// //Write a loop that makes seven calls to console.log to output the following triangle:
// */


// let i=0;
// let stringa;
//  while(i<7)
//     {   
//     stringa=''; 
//     let j=0;
//      while(j<=i)
//          {
//          stringa+='#';
//          j++;
//          }
//     console.log(stringa);
//     i++;
//     }

// alert('sta iniziando l\'esercizio 1');

// i=1;
// while(i<=100)
//    {
//    if(i%2===0&&i%3===0)
//        console.log('FizzBuzz');
//      else if(i%2===0)
//        console.log('Fizz');
//      else if(i%3===0)
//        console.log('Buzz');
//      else
//        console.log(i);
//    i++;
//    }




  
//  alert('sta iniziando l\'esercizio 3');
//  do
//  {
//     let secretNum=5;
//     let attempts=1;
//     let num;
//     while(attempts<=3)
//     {    switch(num=prompt('indovina il numero magico!'))
//         {   
//             case '5':                
//                 console.log('bravo!');
//                 attempts=4;
//             default:          
//                 attempts+=1;                
//                 break;
//         }
//     }  
//     if(num=!secretNum)
//         console.log('too late');
//  }while(confirm('vuoi continuare?'));

// let j=10;
// let q=0;
// for (let i = 0; i < 10; i++) 
// {
//     if(j>0)
//     {
//     console.log(j);
//     j--;
//     if(j===0)
//         i=-2;
//     }
//     if(q<11&&j===0)
//         console.log(q++);

// }  

// for (let i = 0; i < 11; i++) {
//     for (let j = 0; j < 11; j++) {
//         console.log('X: ',i,'Y: ',j);
        
//     }
// 




//  alert('sta iniziando l\'esercizio chessboard');

//  let columns = prompt('Give me the width');
//  let rows = prompt('Give me the height');
//  let row='';
//  for (let i = 1; i <= rows; i++) 
//  {
//      for (let j = 1; j <= columns; j++) 
//      {
//          if(i%2!=0)
//              row+=' '+'#';
//            else
//              row+='# ';
//      }
//      row+= '\n';  
//  }
//  console.log(row);

let columns = prompt('Give me the width');
let rows = prompt('Give me the height');
let row='';

for (let i = 1; i <= columns*rows; i++) 
{
    if ((row.length/columns)%2===0) 
        row+=' #';
      else
        row+='# ';

    if(i%columns===0)
        row+='\n';    
}
console.log(row);
