function contar() {
  var strat = document.getElementById('start');
  var stratValue = Number(strat.value);

  var end = document.getElementById('end');
  var endValue = Number(end.value);

  var stap = document.getElementById('stap');
  var stapValue = Number(stap.value);

  var res = document.getElementById('res');

  if (stratValue.length == 0 || endValue.length == 0 || stapValue.length == 0 ) { //verifica o tamanho do valor recebido
    res.innerHTML = 'Impossível contar.'; 
  }else{
    res.innerHTML = 'Contando: <br>';
    if (stapValue == 0) {
      alert('Passo inválido! Considereando PASSO 1');
      stapValue = 1;
    };
    if (stratValue < endValue) {      
      for (let i = stratValue; i <= endValue; i += stapValue) {
        res.innerHTML += ` ${i} \u{1f449}`
      };
    } else {
      for (let i = stratValue; i >= endValue; i -= stapValue) {
        res.innerHTML += ` ${i} \u{1f449}`
      };
    }
    res.innerHTML += `\u{1f3c1}`
  };

};