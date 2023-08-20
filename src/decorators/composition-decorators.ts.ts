// Decorator composition

interface Contructor {
  new (...args: any[]): any;
}

function inverteNomeCor(param1: string, param2: string) {
  return function <T extends Contructor>(target: T): T {
    console.log("first decorator called");

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

function otherDecorator(target: Contructor) {
  console.log("other decoretor called");
}

@otherDecorator
@inverteNomeCor("Valor1", "Valor2")
export class Animal {
  constructor(public color: string, public name: string) {}
}

// Ao rodar o código, a função é chamada para decorar a classe mesmo ela
// não sendo instaciada

const animal = new Animal("Azul", "Baleia");
console.log(animal); // Animal { color: 'luzA', name: 'aielaB' }
