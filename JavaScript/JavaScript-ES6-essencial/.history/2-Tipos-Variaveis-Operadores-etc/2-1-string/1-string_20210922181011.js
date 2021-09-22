// retorna o tamanho de uma variável
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// retorna uma array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);
console.log(splittedText[0]);
console.log(splittedText[1]);

// busca por um valor e substitui por outros
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor: '+replacedText);

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('n\Última letra de uma string:', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:', secondToEnd);




