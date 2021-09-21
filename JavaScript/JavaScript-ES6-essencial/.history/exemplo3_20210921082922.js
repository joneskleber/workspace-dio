function soma(a) {
  return function(b) {
    return a + b;
  }
};

console.log( soma1(2, 5) );
