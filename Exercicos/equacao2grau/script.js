function calc(){
  var res = document.getElementById('res');

  var inputA = document.getElementById('a');
  var a = Number(inputA.value);

  var inputB = document.getElementById('b');
  var b = Number(inputB.value);

  var inputC = document.getElementById('c');
  var c = Number(inputC.value);

  if (a === 0) {
    var resultado = c / b;
    console.log(resultado);
    res.innerHTML = `A solução para ${a}x² + ${b}x + ${c} <br/> Resolução: <strong>${resultado}</strong>`; 
    console.log('entrou');
  }

  if (b === 0) {
    var x1;
    var x2;
    var verificaRaiz;
  
    var verifica = -c / a;

    if (verifica < 0) {
      verificaRaiz = Math.sqrt(verifica * -1);
      x1 = `${verificaRaiz}i`;
      x2 = `${-verificaRaiz}i`;
      res.innerHTML = `A solução para ${a}x² + ${b}x + ${c} <br/> Resolução: As raizes imaginarias são <strong>${x1}</strong> e <strong>${x2}</strong> `; 
    }else{
      verificaRaiz = Math.sqrt(verifica);
      x1 = verificaRaiz;
      x2 = -verificaRaiz;
      res.innerHTML = `A solução para ${a}x² + ${b}x + ${c} <br/> Resolução: As raizes são <strong>${x1}</strong> e <strong>${x2}</strong> `; 
    }
  }

  if (c === 0) {
    var solucao = (b / a) * -1;
    // a outra raiz é 0 
    res.innerHTML = `A solução para ${a}x² + ${b}x + ${c} <br/> Resolução: As raizes são <strong>${solucao}</strong> e <strong>0</strong> `; 
  }

  var delta = b**2 - 4 * a * c;

  if (delta > 0) {
    var raiz1  = (-b -Math.sqrt(delta))/(2 * a);
    var raiz2 = (-b +Math.sqrt(delta))/(2 * a);
    res.innerHTML = `A solução para ${a}x² + ${b}x + ${c} <br/> Resolução: As raizes são <strong>${raiz1}</strong> e <strong>${raiz2}</strong> `;
  } else if (delta === 0 ) {
    var raiz = -b / (2 * a);
    //soluções iguais
    res.innerHTML = `A solução para ${a}x² + ${b}x + ${c} <br/> Resolução: As raiz é <strong>${raiz}</strong>`;
  } else{
    var alteradelta = delta * - 1;
    alteradelta = Math.sqrt(alteradelta);
    alteradelta = alteradelta / (2 * a);
    var divideb = -b / (2 * a);
    var raizImag1 = `${divideb} + ${alteradelta}i`;
    var raizImag2 = `${divideb} - ${alteradelta}i`;
    res.innerHTML = `A solução para ${a}x² + ${b}x + ${c} <br/> Resolução: As raizes imaginarias são <strong>${raizImag1}</strong> e <strong>${raizImag2}</strong> `;
  }
  
  /*
    O objeto Math em JavaScript é uma biblioteca 
    matemática padrão que contém métodos e propriedades 
    para realizar operações matemáticas básicas e avançadas. 
    Ele é utilizado para funções matemáticas comuns como 
    arredondamento, exponenciação, logaritmos, trigonometria, 
    e também para constantes matemáticas como π (PI).

    Math.sqrt(numero): Calcula a raiz quadrada de numero.
    Math.cbrt(numero): Calcula a raiz cúbica de numero.
    Math.pow(numero, 3): Calcula numero elevado à potência de 3.
    Math.round(2.5): Arredonda 2.5 para o inteiro mais próximo.
    Math.max(1, 5, 10, 20): Retorna o maior valor entre 1, 5, 10 e 20.
    Math.min(1, 5, 10, 20): Retorna o menor valor entre 1, 5, 10 e 20.
    Math.random(): Gera um número aleatório entre 0 e 1.
    Math.PI: Retorna o valor da constante matemática π.

  */

}
