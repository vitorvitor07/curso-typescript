interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: string[];
}

interface Pessoa {
  readonly idade?: number; // Opcional
}

export const pessoa: Pessoa = {
  nome: "Vitor",
  sobrenome: "Silva",
  enderecos: ["Av Brasil"],
};

pessoa.enderecos.push("Rua Dois"); // Possível porque => readonly enderecos: string[]; e não readonly enderecos: READONLY string[];

console.log(pessoa);
