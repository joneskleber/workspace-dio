// function soma(a, b) {
//   return a + b;
// };
// console.log( soma(2, 5) );


function soma2(a) {
   return function(b) {
     return a + b;
   }
};
const soma2 = soma2(2);

console.log( soma2(2) );
