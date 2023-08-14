// Encadeamento opcional e Operador de coalescência nula
// Evitar vários Ifs

// Encadeamento opcional => ?

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const doc: Documento = {
  titulo: "Dora",
  texto: "Está andando pela rua",
};

console.log(doc.data?.toDateString()); // Se não existir, da undefined, não quebra o código

// Operador de coalescência nula => ??
// verifica se é null ou undefined = Não valor
console.log(doc.data?.toDateString() ?? "Dado não existe");
console.log(undefined ?? "Dado não existe");
console.log(null ?? "Dado não existe");
console.log(3 ?? "Dado não existe");
console.log(false ?? "Dado não existe");
console.log("" ?? "Dado não existe");
