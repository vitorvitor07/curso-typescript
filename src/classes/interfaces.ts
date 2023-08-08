// Interfaces = type alias
// Usadas para modelar objetos

// Usando type alias
/*
export type TipoNome = {
  nome: string;
  sobrenome: string;
};*/

// Usando interface
export interface TipoNome {
  nome: string;
  sobrenome: string;
}

export interface TipoNomeCompleto {
  nomeCompleto(): string;
}

export interface TipoPessoa extends TipoNome, TipoNomeCompleto {}

class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoa = new Pessoa("Vitor", "Silva");
console.log(pessoa.nomeCompleto());
