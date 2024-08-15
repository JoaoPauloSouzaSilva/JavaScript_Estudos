/*
 Operadores de tribuição lógica (desde ES2020)
  Operator      Example	      Same As
    &&=	        x &&= y	      x = x && (x = y)
    ||=	        x ||= y	      x = x || (x = y)
    ??=	        x ??= y	      x = x ?? (x = y)

Valores "truthy" são aqueles que são considerados verdadeiros em um contexto 
booleano. Em outras palavras, qualquer valor que não seja "falsy" será tratado 
como "truthy".

Valores "falsy" são aqueles que são considerados falsos em um contexto booleano.

Valores "Falsy" Comuns:
Existem apenas alguns valores que são considerados "falsy" em JavaScript:
-> false
-> 0 (o número zero)
-> -0 (o número zero negativo)
-> 0n (BigInt zero)
-> "" (uma string vazia)
-> null
-> undefined
-> NaN (Not a Number)

Qualquer valor que não esteja nesta lista é considerado "truthy".

Obs: BigInt é um tipo de dado especial em JavaScript para representar números 
inteiros muito grandes ou muito pequenos que não podem ser representados com 
precisão usando o tipo Number

*/
//______________________________________________________________________________

// AND ( &&= )
  let x1 = 10;
  x1 &&= 5;

/*
O operador de atribuição lógico AND é usado entre dois valores.
Se o primeiro valor for verdadeiro, o segundo valor será atribuído.

*/
//______________________________________________________________________________

// OR ( ||= )
let x2 = 10;
x2 ||= 5;

/*
Atribui um valor a uma variável somente se a variável for "falsy" 
(ou seja, seu valor é considerado falso em um contexto booleano).
*/
//______________________________________________________________________________

// NULL ( ??= )
let x3 = 10;
x3 ??= 5;

/*
Atribui um valor a uma variável somente se a variável for null ou undefined.
*/