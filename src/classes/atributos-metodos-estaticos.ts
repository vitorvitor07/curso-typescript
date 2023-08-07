export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = "00.000.000/0001-00";

  constructor(
    private nome: string, // Coloacando o modifcador = this.nome = nome;
    private sobrenome: string,
    private idade: number,
    private _cpf: string
  ) {}

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static logaOi(): void {
    console.log("oi");
  }
}

// Funções estáticas não necessecitam ser instânciadas
Pessoa.logaOi();
const pessoa1 = Pessoa.criaPessoa("vitor", "silva");
console.log(pessoa1);
