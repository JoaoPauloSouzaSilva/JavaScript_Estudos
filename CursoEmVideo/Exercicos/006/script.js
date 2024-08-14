var valores = [];
let num = document.getElementById('txtn');
let tab = document.getElementById('seletab');
var res = document.getElementById('res');

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else{
    return false;
  };
};

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  }else{
    return false;
  };
};

function cadastrar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement('option');
    item.text = `Valor ${num.value} adicionado.`;
    tab.appendChild(item);
    res.innerHTML = '';
  } else{
    alert('Número inválido ou já encontrado na lista');
  };
  num.value = '';
  num.focus(); // define o foco, os cursos pisca
};

function finalizar(params) {
  if (valores.length == 0 ) {
    alert('Adicione valores para finalizar.');
  } else{
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for (const i in valores) {
      soma += valores[i];
      if (valores[i] > maior) {
        maior = valores[i];
      };
      if (valores[i] < menor) {
        menor = valores[i];
      };
    };

    media = soma / tot;

    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo, temos ${tot} números acadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi: ${maior}</p>`;
    res.innerHTML += `<p>O menor valor informado foi: ${menor}</p>`;
    res.innerHTML += `<p>A soma de todos os valores é: ${soma}</p>`;
    res.innerHTML += `<p>A média dos valores é: ${media.toFixed(2)}</p>`;
  }
};