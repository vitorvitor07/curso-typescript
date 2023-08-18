// Types predicate

// função original
// Type script infere o tipo da função somente no escopo atual da função
// Por isso quando usado dentro de outra função o ts não refina
/*export function isNumber(value: unknown): boolean {
  return typeof value === "number";
}*/

// Para o typescript entender
// O tipo do retorno indica que se for true o value será um number
// Se não, não é um number, ou seja, falso
export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export function sum<T>(...args: T[]): number | null {
  const _sum = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) return value + sum;
    return sum;
  }, 0);

  return _sum;
}

// console.log(isNumber(3)); true
// console.log(isNumber("3")); false

console.log(sum("a", "b", "c"));
console.log(sum(1, 2, 3));
console.log(sum([1, 2, 3, "3", "5"]));
