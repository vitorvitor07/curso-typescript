/* eslint-disable @typescript-eslint/no-namespace */
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
