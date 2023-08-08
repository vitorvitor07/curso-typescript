// Type guard ⬇️
// Refinar tipos

function add(a: unknown, b: unknown) {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
  // Usando ternário
  // return typeof a === "number" && typeof b === "number" ? a + b : `${a}${b}`
}

add("3", "5");

export type Pessoa = { nome: string };
type Animal = { cor: string };
type PessoaAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor(public nome: string) {}
}

export class _Animal implements Animal {
  constructor(public cor: string) {}
}

function mostraNome(obj: PessoaAnimal) {
  // if ("nome" in obj) return obj.nome;
  // Ou... Usando instanceof
  if (obj instanceof Aluno) return obj.nome;
  if (obj instanceof _Animal) return obj.cor;
}

console.log(mostraNome(new Aluno("Vitor")));
console.log(
  mostraNome({
    cor: "Vermelho",
  })
);
