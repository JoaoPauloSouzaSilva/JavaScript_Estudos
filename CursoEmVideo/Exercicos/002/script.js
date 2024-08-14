function carregar(params) {
  var date = new Date();
  var hora =date.getHours();
  var msg = document.getElementById('msg');
  var img = document.getElementById('img');
  var msghora = document.getElementById('msghora');
  msghora.innerHTML = `Agora são: ${hora}h`;
  
  if (hora >= 0 && hora < 12) {
    msg.innerText = 'Bom Dia';
    img.src = 'images/manha.jpg';
    document.body.style.backgroundColor = '#abc2c8';
  } else if (hora >= 12 && hora < 18){
    msg.innerText = 'Boa Tarde';
    img.src = 'images/tarde.jpg';
    document.body.style.backgroundColor = '#7c7a5d';
  } else {
    msg.innerText = 'Boa Noite';
    img.src = 'images/noite.jpg';
    document.body.style.backgroundColor = '#1b2b36';
  };
};