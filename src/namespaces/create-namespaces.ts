/* eslint-disable @typescript-eslint/no-namespace */

// Módulo => Namespace
// Melhor usar o sistema de módulos ES6
// É executado mesmo sem ser chamado
// Cria um escopo

namespace myNameSpace {
  // console.log(11111);
  export const name = "Vitor";

  export class PersonNameSpace {
    constructor(public name: string) {}
  }

  const person = new PersonNameSpace("Vitor");
  console.log(person);

  export namespace outherNameSpace {
    export const nameOtherNameSpace = "Vitória";
  }
}

// Para ter acess ao namespace, as variáveis precisam ter export

const personNameSpace = new myNameSpace.PersonNameSpace("Vitor");
console.log(personNameSpace);
console.log(myNameSpace.outherNameSpace.nameOtherNameSpace);
console.log(myNameSpace.name);

export default 1;
