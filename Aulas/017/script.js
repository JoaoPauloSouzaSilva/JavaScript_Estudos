let amigo = {
  nome: 'joao',
  sexo: 'M',
  peso : 85.4,
  engordar(p=0){
    this.peso += p;
  }
};

console.log(amigo.peso);
amigo.engordar(2);
console.log(amigo.peso);