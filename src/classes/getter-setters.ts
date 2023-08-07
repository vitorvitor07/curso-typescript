export class Pessoa {
  constructor(
    private nome: string, // Coloacando o modifcador = this.nome = nome;
    private sobrenome: string,
    private idade: number,
    private _cpf: string
  ) {}

  getCpf(): string {
    return this._cpf;
  }
  // Ou...

  get cpf(): string {
    // Se comporta como atrinuto
    return this._cpf;
  }
  // ------------------------------------
  setCpf(cpf: string): void {
    this._cpf = cpf;
  }

  // Ou...

  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  set cpf(cpf: string) {
    // Se comporta como atrinuto
    this._cpf = cpf;
  }
}

const pessoa1 = new Pessoa("Vitor", "Silva", 30, "48898079850");
pessoa1.cpf = "489"; // " = " chama o setter
console.log(pessoa1.cpf); // chama o getter
