//Array<T>  >>> array[]

function multiplyArgs(...args: Array<number>) {
  return args.reduce((mult, valor) => mult * valor, 1);
}

const result = multiplyArgs(1, 2, 3);

console.log(result);
