function calc(){
  var res = document.getElementById('res');

  var inputA = document.getElementById('a');
  var a = Number(inputA.value);

  var inputB = document.getElementById('b');
  var b = Number(inputB.value);

  var inputC = document.getElementById('c');
  var c = Number(inputC.value);

  if (a == 0 && b == 0 && c == 0) {
    ABCzero();
  }else if (a == 0 && b != 0 && c != 0) {
    Azero();
  }else if (a != 0 && b == 0 && c !=0) {
    Bzero();
  }else if (a != 0 && b != 0 && c == 0) {
    Czero();
  }else if (a == 0 && b == 0 && c !=0) {
    ABzero();
  }else if (a == 0 && b != 0 && c == 0) {
    ACzero();
  }else if (a != 0 && b == 0 && c ==0) {
    BCzero();
  }else {
    ABCnum();
  };

  function clearinput() {
    inputA.value= '';
    inputA.focus();
    inputB.value= '';
    inputC.value= '';
  };

  function ABCzero() {
    res.innerHTML = `A solução para ${a}x² + ${b}x + ${c} <br/> Resolução: <strong>X é qualquer valor real</strong>`;
    clearinput();
  };

  function Azero() {
    let resultado = (c * -1)/ b;
    res.innerHTML = `A solução para ${a}x² + ${b}x + ${c} <br/> Resolução: <strong>${resultado}</strong>`;
    clearinput();
  };

  function Bzero() {
    let x1;
    let x2;
    let verificaRaiz;
  
    let verifica = -c / a;

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
    };
    clearinput();
  };

  function Czero() {
    let solucao = (b / a) * -1;
    res.innerHTML = `A solução para ${a}x² + ${b}x + ${c} <br/> Resolução: As raizes são <strong>${solucao}</strong> e <strong>0</strong> `;
    clearinput();
  };

  function ABzero() {
    res.innerHTML = `A solução para ${a}x² + ${b}x + ${c} <br/> Resolução: <strong>Não há valor de x que satisfaça essa equação.</strong>`;
    clearinput(); 
  };

  function ACzero() {
    res.innerHTML = `A solução para ${a}x² + ${b}x + ${c} <br/> Resolução: <strong>x = 0</strong>`;
    clearinput();
  };

  function BCzero() {
    res.innerHTML = `A solução para ${a}x² + ${b}x + ${c} <br/> Resolução: <strong>x = 0</strong>`;
    clearinput();
  };

  function ABCnum() {
    let delta = b**2 - 4 * a * c;

    if (delta > 0) {
      let raiz1  = (-b -Math.sqrt(delta))/(2 * a);
      let raiz2 = (-b +Math.sqrt(delta))/(2 * a);
      res.innerHTML = `A solução para ${a}x² + ${b}x + ${c} <br/> Resolução: As raizes são <strong>${raiz1}</strong> e <strong>${raiz2}</strong> `;

    } else if (delta === 0 ) {
      let raiz = -b / (2 * a);
      res.innerHTML = `A solução para ${a}x² + ${b}x + ${c} <br/> Resolução: A raiz única é <strong>${raiz}</strong>`;
      
    } else{
      let alteradelta = Math.sqrt(delta * - 1)/ (2 * a);
      let divideb = -b / (2 * a);
      let raizImag1 = `${divideb} + ${alteradelta}i`;
      let raizImag2 = `${divideb} - ${alteradelta}i`;
      res.innerHTML = `A solução para ${a}x² + ${b}x + ${c} <br/> Resolução: As raizes imaginarias são <strong>${raizImag1}</strong> e <strong>${raizImag2}</strong> `;

    };

    clearinput();
  };
  
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
