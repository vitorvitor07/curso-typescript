// Alias

/*
abstract class TipoPessoa {
  protected abstract nome: string;
  protected abstract sobrenome: string;
  protected abstract nomeCompleto(): string;
}
*/

// Usando type alias

type TipoNome = {
  nome: string;
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto: () => string;
};

// Ao invés de usar extends, se for uma classe abstrata, usa-se implements
// Também define contrato, mas apenas da "forma" e não dos valores
class Pessoa implements TipoNome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoa = new Pessoa("Vitor", "Silva");
console.log(pessoa.nomeCompleto());
