function getName() {
  return 'Jones Kleber'
}

function loFn(fn) {
  console.log(fn())
}

const logFnResult = logFn;

logFnResult(getName)
