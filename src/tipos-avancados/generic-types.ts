// Generic types

// Tipar função type funcao = (param: type, value: number) => tipo do retorno

type FilterCallback = (
  value: unknown,
  index?: number,
  array?: unknown[]
) => boolean;

function meuFilter(array: unknown[], callbackFn: FilterCallback) {
  const newArray = [];

  for (const elementIndex in array) {
    if (callbackFn(array[elementIndex])) newArray.push(array[elementIndex]);
  }

  return newArray;
}

export const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter defini dinamicamente os tipos de arrays recebidas
const arrFilterNative = arr.filter((value) => value > 5);
console.log(arrFilterNative);

// Por value ser unknown precisamos checar o tipo
const arrFilterArtesanato = meuFilter(arr, (value) => {
  if (typeof value == "number") return value > 5;
  return false;
});
console.log(arrFilterArtesanato);

type FilterCallbackGeneric<U> = (
  // U é como uma variável onde armazena o tipo recebido por parâmetro
  value: U,
  index?: number,
  array?: U[]
) => boolean;

function meuFilterGeneric<T>(
  // T é como uma variável onde armazena o tipo do argumento recebido
  array: T[],
  callbackFn: FilterCallbackGeneric<T> //
): T[] {
  const newArray = [];

  for (const elementIndex in array) {
    if (callbackFn(array[elementIndex])) newArray.push(array[elementIndex]);
  }

  return newArray;
}

const ArrFilterGeneric = meuFilterGeneric(arr, (value) => value > 5);
console.log(ArrFilterGeneric);
