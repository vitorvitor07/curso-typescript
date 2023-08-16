// Constrains

// type ObterChave = <O, K>(objeto: O, chave: K) => O[K];
// K pode ser muito coisa (e tbm não uma chave do Objeto O)

// Para fazer uma regra;
type ObterChave = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

// extends NESSE contexto => No máximo

const getKey: ObterChave = (object, key) => object[key];

const animal = {
  nome: "Baleia",
  cores: ["Azul", "Branco"],
};

console.log(getKey(animal, "nome"));
// Mudando as chaves o tipo do retorno também é alterado
