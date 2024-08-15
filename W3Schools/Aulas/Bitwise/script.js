/*
  Os operadores bitwise (ou operadores de bits) em JavaScript 
  permitem manipular os bits individuais de um número.
*/

//______________________________________________________________________________

// AND bitwise ( & )
var a = 5;
var b = 6;
var c = a & b;
console.log(`${a} & ${b} = ${c}`);
console.log(`${a.toString(2)} & ${b.toString(2)} = ${c.toString(2)}`);
/*
  Compara cada bit dos dois operandos e retorna um número onde cada bit é 1 
  se ambos os bits correspondentes dos operandos forem 1, caso contrário, 
  retorna 0.
  
  5 -> 0101
  3 -> 0011
  1 -> 0001
*/

//______________________________________________________________________________

// OR bitwise ( | )
var a1 = 5;
var b1 = 3;
var c1 = a1 | b1;
console.log(`${a1} | ${b1} = ${c1}`);
console.log(`${a1.toString(2)} | ${b1.toString(2)} = ${c1.toString(2)}`);
/*
  Compara cada bit dos dois operandos e retorna um número onde cada bit é 1 
  se ambos os bits correspondentes dos operandos forem 1, caso contrário, 
  retorna 0.
  
  5 -> 0101
  3 -> 0011
  7 -> 0111
*/

//______________________________________________________________________________

// XOR bitwise
var a2 = 5;
var b2 = 3;
var c2 = a2 ^ b2;
console.log(`${a2} ^ ${b2} = ${c2}`);
console.log(`${a2.toString(2)} ^ ${b2.toString(2)} = ${c2.toString(2)}`);
/*
  Compara cada bit dos dois operandos e retorna um número onde cada bit é 1 
  se apenas um dos bits correspondentes dos operandos for 1, mas não ambos.

5 -> 0101
3 -> 0011
6 -> 0110
*/

//______________________________________________________________________________

// NOT bitwise
var b3 = 5;
var c3 = ~b3;
console.log(`~${b3} = ${c3}`);
console.log(` ~${b3.toString(2)} = ${c3.toString(2)}`);
/*
  Inverte todos os bits de seu operando, transformando 1 em 0 e vice-versa.

5 -> 0101       5 -> 00000000 00000000 00000000 00000101 (38 bits)
-6 -> 1010     -6 -> 11111111 11111111 11111111 11111010
(abreviado)    10 -> 00000000 00000000 00000000 00001010
*/

//______________________________________________________________________________

// Deslocamento à esquerda bitwise
var a4 = 5;
var b4 = 2;
var c4 = a4 << b4;
console.log(`${a4} << ${b4} = ${c4}`);
console.log(`${a4.toString(2)} << ${b4.toString(2)} = ${c4.toString(2)}`);
/*
 Desloca os bits do primeiro operando para a esquerda pelo número de posições 
 especificadas no segundo operando. Bits vazios à direita são preenchidos com 0.

5 -> 0101
20 -> 010100
*/

//______________________________________________________________________________

// Deslocamento à direita COM sinal bitwise
var a5 = -8;
var b5 = 2;
var c5 = a5 >> b5;
console.log(`${a5} >> ${b5} = ${c5}`);
console.log(`${a5.toString(2)} >> ${b5.toString(2)} = ${c5.toString(2)}`);
/*
 Desloca os bits do primeiro operando para a direita pelo número de posições 
 especificadas no segundo operando, preservando o sinal (mantém o bit de sinal).

Preserva o bit de sinal (o bit mais significativo).
O deslocamento à direita COM sinal copia o bit de sinal à medida que move os 
bits para a direita. Isso significa que, se o número original for negativo, 
ele permanecerá negativo após o deslocamento, e se for positivo, ele permanecerá 
positivo.
 
-8 -> 1000      -8 -> 11111111 11111111 11111111 11111000 (32 bits)
-2 -> 1110      -2 -> 11111111 11111111 11111111 11111110
(abreviado)           ^^                               ^^
                      Adciona dois bits 1 no inicio e sai dois bits no final
*/

//______________________________________________________________________________

// Deslocamento à direita SEM sinal bitwise
var a6 = -8;
var b6 = 2;
var c6 = a6 >>> b6;
console.log(`${a6} >>> ${b6} = ${c6}`);
console.log(`${a6.toString(2)} >>> ${b6.toString(2)} = ${c6.toString(2)}`);
/*
 Desloca os bits do primeiro operando para a direita pelo número de posições 
 especificadas no segundo operando, sem preservar o sinal (preenche com 0 à 
 esquerda).

 O deslocamento à direita SEM sinal sempre preenche os bits vazios à esquerda 
 com 0, independentemente do valor do bit de sinal. Isso transforma qualquer 
 número em um número positivo ou zero, mesmo que o número original fosse 
 negativo.

-8 -> 11111111 11111111 11111111 11111000 (32 bits)
      ^^                               ^^
1073741822 -> 00111111 11111111 11111111 11111110
              ^^                               ^^   
*/

//______________________________________________________________________________

//Operadoresde atribuições bita a bit 
    let x = -100;
    x >>>= 5;
//     ^^ 
/*
  Operator	    Example	      Same As
    &=	        x &= y	      x = x & y
    ^=          x ^= y	      x = x ^ y
    |=          x |= y	      x = x | y
    <<=	        x <<= y	      x = x << y
    >>=	        x >>= y	      x = x >> y
    >>>=	      x >>>= y	    x = x >>> y
*/