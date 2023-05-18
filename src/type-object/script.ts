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

console.log(objectB);
