// function parimp(param) {
//   if(param % 2 == 0){
//     return 'Par';
//   } else {
//     return 'Impar';
//   }; 
// };

// var num = parimp(32);
// console.log(num);

// function soma (n1 = 0, n2) { // n1 = 0, define um valor padrão 
//   return n1 +  n2; 
// }

function fatorial(n) {
  if (n == 1 ) {
    return 1;
  } else {
    return n * fatorial(n-1);
  };
};

var a  = fatorial(5);
console.log(a);