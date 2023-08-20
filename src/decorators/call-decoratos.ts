// Decorator
// Decorator de Class
function inverteNomeCor<T extends new (...args: any[]) => any>(target: T): T {
  console.log("function called");
  return class extends target {
    color: string;
    name: string;

    constructor(...args: any[]) {
      super(...args);
      this.color = this.reverse(args[0]);
      this.name = this.reverse(args[1]);
    }

    reverse(string: string) {
      return string.split("").reverse().join("");
    }
  };
}

@inverteNomeCor
export class Animal {
  constructor(public color: string, public name: string) {}
}

// Ao rodar o código, a função é chamada para decorar a classe mesmo ela
// não sendo instaciada

// const animal = new Animal("Azul", "Baleia");
// console.log(animal); // Animal { color: 'luzA', name: 'aielaB' }
