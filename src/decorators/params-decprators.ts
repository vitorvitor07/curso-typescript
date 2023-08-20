// Params Decorators

function decorator(
  classPrototype: any,
  methodName: string | symbol,
  index: number
) {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
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

  method(@decorator msg: string): string {
    return `${this.name} ${this.middleName}: ${msg}`;
  }

  sayNumber(@decorator msg: string, @decorator value: number) {
    console.log(msg + " " + value);
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
// person.sayNumber("hi", 2);
console.log(person);
