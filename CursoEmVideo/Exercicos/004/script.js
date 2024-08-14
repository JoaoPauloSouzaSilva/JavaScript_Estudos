function calcular() {
  var num = document.getElementById('txtn');
  var numValue = Number(num.value);

  var tab = document.getElementById('seletab');
  
  if (num.value.length == 0 ) {
   alert('Por favor, Digite um Número.');
  } else {
    tab.innerHTML = '';
    for (let i = 1; i <= 10 ; i++) {
      let item = document.createElement('option');
      item.value = `tab${i}`;
      item.text = `${numValue} x ${i} = ${numValue * i}`;
      tab.appendChild(item);
    };
  };
};