// utilizada a ferramenta yEd live para modelagem de classes

// Super | Parent class (pai)
export class Pessoa {
  constructor(
    public nome: string, // Coloacando o modifcador = this.nome = nome;
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string, // Coloacando o modifcador = this.nome = nome;
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getSuperIdade(): number {
    return super.getIdade();
  }
}

const aluno = new Aluno("Valdisney", "Silva", 3, "48898079850", "001"); // preciso passar parametros para a contrução da classe pai
console.log(aluno.getSuperIdade());
