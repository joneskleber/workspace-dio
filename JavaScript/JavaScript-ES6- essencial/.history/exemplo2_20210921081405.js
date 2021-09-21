function getName() {
  return 'Jones Kleber'
}

function logFn(fn) {
  console.log(fn())
}

const logFnResult = logFn;

const obj = {
  logFn = logFn
}

logFnResult(getName); 
