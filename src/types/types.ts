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

// Type Any

function falaOi(msg: any): any {
  return msg;
}

// Pode ser enviado dados de qualquer tipo
// Utilizar apenas em último caso

// Type array
// : Array<T> || T[]

function multipicaArgumento(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

function contatenaString(...args: string[]): string {
  return args.reduce((acc, valor) => acc + " " + valor);
}

function upperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

// console.log(multipicaArgumento(1, 2, 3, 4));
// console.log(contatenaString("ola", "bom", "dia"));
// console.log(upperCase("ola", "bom", "dia"));

// Type Enum
// Enumerar coisas

enum Cores {
  vermelho, // pode definir qual o valor => vermelho = 10 // se não definir => 0
  azul, // 1
  verde, // 2
}

// console.log(Cores);
// console.log(Cores.vermelho);

// Type never
// Nunca vai retornar nada

export function criaerro(): never {
  throw new Error("Algum erro...");
}

// Type null and unefined
// Funcões podem retornar null | undefined propositalmente
// Type script reclama quando a função pode retornar null

function createPerson(
  firstName: string,
  lastName?: string // ? => opcional
): {
  firstName: string;
  lastName?: string; // opcional devido ao fato de que o segundo argumento pode não existir
} {
  return { firstName, lastName };
}

// Type object

const objectA = {
  chave: "valor",
};

// objectA.nome = "teste"; não consegue pois o tipo já foi inferido

// inferir tipo manualmente

const objectB: {
  readonly chave1: string; // não pode ter valor alterado
  chaveb?: string; // ? para torná-lo opcional, consegue definir valor posteriomente
  [key: string]: unknown;
} = {
  chave1: "valor1",
};

// Type tuple
// Objetos com chaves fixas

const dadosClientes: [number, string] = [1, "vitor"];

dadosClientes[0] = 100;

// Types void
// Funções que não retornam nada

function _log(...args: string[]): void {
  // console.log(args.join(" "));
}

_log("eu", "sou", "feliz");

// Type unknownw

let x: unknown;

x = 10;
x = "1";

const y = 100;

// console.log(x + y); // Reclama por quê o X não é conhecido, requer checagem atentes, aí permite 👀

// Union type
// Uma funcão que pode retornar mais que um tipo
// Para fazer a união
// Função abaixo considerada má prática

function addOrConcat(x: number | string, y: number | string) {
  // Fazer checagem para não dar erro
  if (typeof x == "number" && typeof y == "number") return x + y;
  return `${x}${y}`;
}

// Literal types

let num: 100 = 100; // eslint-disable-line
// num = 120; Erro pois a variável só pode valer 100

// outra forma
let numero = 100 as const; // eslint-disable-line
// const numero = 100 => mais fácil

// Pode ser usado em funções

function escolhaCor(cor: "Vermelho" | "Verde" | "Azul"): string {
  return cor;
}

// Type alias

type CorRgb = "Vermelho" | "Verde" | "Azul";
type CorBw = "Branco" | "Preto";
type Cor = CorBw | CorRgb;
type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  cor?: Cor;
};

const _pessoa: Pessoa = {
  nome: "vitor",
  idade: 2_0,
};

function setCorFav(pessoa: Pessoa, cor: Cor) {
  return { ...pessoa, cor };
}

console.log(setCorFav(_pessoa, "Vermelho"));
