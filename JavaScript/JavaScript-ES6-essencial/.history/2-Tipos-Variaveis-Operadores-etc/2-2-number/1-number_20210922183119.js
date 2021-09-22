const myNumber = 12.4052;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string:', typeof numberAsString);

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);

// Transforma uma string em float
console.log('\nString parseada para float:', parseFloat('13.22'));

// Transforma uma string em integer
console.log('\nString parseada para integer:', parseInt('13.20'));