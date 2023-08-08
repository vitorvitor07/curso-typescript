// Typeof e Keyof
const cores = {
  vermelho: "red",
  verde: "green",
  azul: "blue",
};

// Passar typeof na tipagem do parâmetro
// Pegar tipo do objeto dinamicamente => typeof cores
function traduzCor(cor: "vermelho" | "verde" | "azul", coresRGB: typeof cores) {
  return coresRGB[cor];
}

console.log(traduzCor("azul", cores));

// Pegar chaves do objeto a partir do tipo

const coresSec = {
  laranja: "orange",
  amarelo: "yellow",
  marrom: "brown",
};

type CoresSec = typeof coresSec;
type CoresSecType = keyof CoresSec;
