// Type array
// : Array<T> || T[]

function multipicaArgumento(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

function contatenaString(...args: string[]): string {
  return args.reduce((acc, valor) => acc + " " + valor);
}

function upperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

console.log(multipicaArgumento(1, 2, 3, 4));
console.log(contatenaString("ola", "bom", "dia"));
console.log(upperCase("ola", "bom", "dia"));
