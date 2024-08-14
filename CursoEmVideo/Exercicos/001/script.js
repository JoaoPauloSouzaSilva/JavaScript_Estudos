function carregar() {
  var date = new Date();
  var ano = date.getFullYear();
  var nascimentodata = document.getElementById('nascimentodata'); // lembra que ta pegando o elemento não o valor
  var fano = Number(nascimentodata.value);// aqui pega valor 
  var res = document.getElementById('res');

  if (fano === 0 || fano > ano) {
    alert('Verifique os dados e tente novamente!')
  } else {
    var genero = document.getElementsByName('genero');
    var idade = ano - fano;
    var sex = '';
    var img = document.createElement('img'); // criando um novo elemento
    img.setAttribute('id', 'foto'); // definido um atributo
    if (genero[0].checked) { //verifica se a primeira opação está marcada
      sex = 'Homem';
      if (idade == 0 || idade <= 10) {
        //criança
        img.setAttribute('src', 'm-crianca.jpg');
      } else if (idade <= 20) {
        //jovem 
        img.setAttribute('src', 'm-jovem.jpg');
      } else if (idade <= 60) {
        //adulto
        img.setAttribute('src', 'm-adulto.jpg');
      } else{
        //idoso
        img.setAttribute('src', 'm-idoso.jpg');
      };
    } else {
      sex = 'Mulher';
      if (idade == 0 || idade <= 10) {
        //criança
        img.setAttribute('src', 'f-crianca.jpg');
      } else if (idade <= 20) {
        //jovem 
        img.setAttribute('src', 'f-jovem.jpg');
      } else if (idade <= 60) {
        //adulto
        img.setAttribute('src', 'f-adulto.jpg');
      } else{
        //idoso
        img.setAttribute('src', 'f-idoso.jpg');
      };
    };
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${sex} com ${idade} anos.`;
    res.appendChild(img); //adicionar elemento img é o var 
  };
};