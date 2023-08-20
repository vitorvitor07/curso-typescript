// Property Decorators

// Alterar as propriedades do objeto
function decorator(classPrototype: any, propertyName: string | symbol): any {
  console.log(classPrototype);
  console.log(propertyName);
  let propertyValue: any;
  return {
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === "string") {
        propertyValue = value.split("")[0].toUpperCase();
        return;
      }
      propertyValue = value;
    },
  };
}

export class OnePerson {
  @decorator
  name: string;
  @decorator
  middleName: string;
  age: number;

  constructor(name: string, middleName: string, age: number) {
    this.name = name;
    this.middleName = middleName;
    this.age = age;
  }

  method(msg: string): string {
    return `${this.name} ${this.middleName}: ${msg}`;
  }

  sayNumber(msg: string, value: number) {
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
console.log(person.CompleteName); // V S
