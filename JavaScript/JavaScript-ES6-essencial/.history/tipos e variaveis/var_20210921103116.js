// escopo global
let name='marco';

function alunos() {
  // escopo local da função
  let name='Jhoyce';
  console.log(name);
};

alunos();

console.log(name);