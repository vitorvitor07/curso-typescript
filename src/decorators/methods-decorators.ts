// Method decorator
// Alterar propriedades do objeto com decoradores de métodos
function decorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor | void
): any {
  console.log({ classPrototype });
  console.log({ methodName });
  console.log(descriptor);
  return {
    value: function (...args: any[]) {
      return args[0].toUpperCase();
    },
  };
}

export class OnePerson {
  name: string;
  middleName: string;
  age: number;

  constructor(name: string, middleName: string, age: number) {
    this.name = name;
    this.middleName = middleName;
    this.age = age;
  }

  @decorator
  method(msg: string): string {
    return `${this.name} ${this.middleName}: ${msg}`;
  }

  get CompleteName() {
    return `${this.name} ${this.middleName}`;
  }

  set CompleteName(value: string) {
    const words = value.split(/\s+/g);
    const name = words.shift();
    if (!name) return;
    this.name = name;
    this.middleName = words.join(" ");
  }
}

const person = new OnePerson("Vitor", "Silva", 30);
// pessoa.method = () => "Hello World";
console.log(person.name);
