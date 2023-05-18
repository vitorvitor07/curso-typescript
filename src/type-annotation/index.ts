/* eslint-disable @typescript-eslint/no-inferrable-types */

// Não utilizar ANY
// Tipos básicos - Inferência de tipos
const nome: string = "vitor";
const idade: number = 30;
const adulto: boolean = true;
const simbolo: symbol = Symbol("symbol");

// Arrays
const arrayDeNumeros: Array<number> = [1, 2, 3];
const arrayDeCaracteres: string[] = ["1", "2", "3"];

// Objetos
// ? Faz com que a chave seja opcional
const pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: "vitor",
  adulto: true,
  idade: 30,
};

// Funções
function soma(x: number, y: number) {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
