// Default generics

// Recoord, define tipo da chave e do valor do objeto
const objeto1: Record<string, string> = {
  nome: "vitor",
  // idade: 3, reclama
  altura: "1.5",
};

console.log(objeto1);

// Atributos opcionais
type PersonProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Tornar obrigatórios
type PersonProtocolRequired = Required<PersonProtocol>;

const objeto2: PersonProtocolRequired = {
  nome: "vitor",
  sobrenome: "silva",
  idade: 1.8,
};

console.log(objeto2);

// Tornar readonly
type PersonProtocolReadonly = Readonly<PersonProtocol>;

const objeto3: PersonProtocolReadonly = {
  nome: "vitor",
  sobrenome: "silva",
  idade: 1.8,
};

console.log(objeto3);

// Escolher atributos
type PersonPick = Pick<PersonProtocol, "nome" | "idade">;

const objeto4: PersonPick = {
  nome: "vitor",
  idade: 1.8,
};

console.log(objeto4);

// Extrat e Exclude
type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";

// Exclude computa tudo de CDE que não está em ABC
type TypeExclude = Exclude<ABC, CDE>;

// Extract
/* Computa todos os tipo que estão em ABC
e que podem ser atribuídos em CDE*/
type TypeExtract = Extract<ABC, CDE>;

const objeto5: TypeExclude = "A";

console.log(objeto5);

const objeto6: TypeExtract = "C";

console.log(objeto6);

// Exemplificando

type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

/*type AccountApi = {
  id: string;
  name: string;
  age: number;
};*/

// Tirar o _
export function mapAccount(account: AccountMongo): AccountApi {
  const { _id, ...accountData } = account;
  return { id: _id, ...accountData };
}

// Ou...
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, "_id">> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: "sdaisdhuasd",
  name: "vitor",
  age: 23,
};

const accountApi = mapAccount(accountMongo);

console.log(accountApi);
