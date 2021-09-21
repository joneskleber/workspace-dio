// escopo global
var name='marco';

function alunos() {
  // escopo local da função
  var name='Jhoyce';
  console.log(name);
};

alunos();

console.log(name);