function soma(a) {
  return function(b) {
    return a + b;
  }
};

console.log( soma2(2, 5) );
