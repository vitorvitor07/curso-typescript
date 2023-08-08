type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  name: string;
  brand: Veiculo["marca"];
  year: Veiculo["ano"];
};

export const carro: Car = {
  name: "Gol",
  brand: "Volks",
  year: 2005,
};
