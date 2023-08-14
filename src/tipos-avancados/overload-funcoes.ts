// Overload
// Fazer uma funçãi se compotar de maneira diferente de acordo com os parâmetros

type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

// Y opcional porque o objeto pode ser igual a primeira assinatura

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(2, 5, 6, 1));
