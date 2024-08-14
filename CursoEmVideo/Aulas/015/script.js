//Array == Vetor

var array = [3, 5, 9]; //criou um array

array[3] = 1; //atribui 1 na posição 3 ]

array[3] == 1; //verifica se o valor do index 3 é 1 

array.indexOf(7); // retorna o index do valor, ou -1 se não achar 

array.push(7); //adciona na ultima opção

array.length; //retorna o tamanho do array

array.sort(); //ordena em ordem crescente

for (const i in array) { // mesma coisa do for, percorre o array
  console.log(array[i]);
};

