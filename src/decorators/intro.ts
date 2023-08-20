// Decorator => Objeto impostor

// Decorator de Class
@decorator
export class Animal {
  constructor(public color: string, public name: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
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

// Sem decorator
/*
const AnimalDecoreted = decorator(Animal);
const animal = new AnimalDecoreted("Azul", "Baleia");
*/

// Com decorator
const animal = new Animal("Azul", "Baleia");
console.log(animal); // Animal { color: 'luzA', name: 'aielaB' }
