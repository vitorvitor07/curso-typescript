interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

export const pessoa: PessoaProtocolo<string, number> = {
  nome: "Vitor",
  sobrenome: "Silva",
  idade: 10,
};

// Ou

interface _PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

// Não precisa passar os parâmetros dos tipos devido a padronização dos tipos na interface
export const _pessoa: _PessoaProtocolo = {
  nome: "Vitor",
  sobrenome: "Silva",
  idade: 10,
};
