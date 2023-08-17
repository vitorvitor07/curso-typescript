// Stack -> Pilha

export class Person<U, T> {
  constructor(public nome: T, public idade: U) {}
}

export class Stack<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  pop(): T | void {
    if (!this.isEmpity()) return undefined;

    this.counter--;

    const elementToPop = this.elements[this.counter];

    delete this.elements[this.counter];

    return elementToPop;
  }

  isEmpity(): boolean {
    return this.counter === 0;
  }

  showStack(): void {
    console.log(this.elements);

    for (const element in this.elements) console.log(this.elements[element]);
  }
}

const stack = new Stack<string>(); // deve inferir o Tipo
stack.push("Matheus");
stack.push("Vitor");
stack.push("Andreia");
stack.showStack();
stack.showStack();
