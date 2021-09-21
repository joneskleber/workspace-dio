function soma(a) {
  return function(b) {
    return a + b;
  }
};

console.log( soma (2, 5 ));
