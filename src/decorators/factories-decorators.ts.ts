// Decorator factories

// Decorators com parâmetros
// Deve-ser fazer uma função que recebe os parâmetros e retorna um decorator a partir deles

function inverteNomeCor(param1: string, param2: string) {
  // Closure
  return function <T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
      color: string;
      name: string;

      constructor(...args: any[]) {
        super(...args);
        this.color = this.reverse(args[0]);
        this.name = this.reverse(args[1]);
      }

      reverse(string: string) {
        return string.split("").reverse().join("") + ` ${param1} ${param2}`;
      }
    };
  };
}

@inverteNomeCor("Valor1", "Valor2")
export class Animal {
  constructor(public color: string, public name: string) {}
}

// Ao rodar o código, a função é chamada para decorar a classe mesmo ela
// não sendo instaciada

const animal = new Animal("Azul", "Baleia");
console.log(animal); // Animal { color: 'luzA', name: 'aielaB' }
