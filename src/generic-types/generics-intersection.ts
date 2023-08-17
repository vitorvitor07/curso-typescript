// Generics com intersection

function uniteObject<O1, O2>(obj1: O1, obj2: O2) {
  // return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = {
  valor1: "valor1",
  valor2: "valor2",
};

const obj2 = {
  valor3: "valor3",
  valor4: "valor4",
};

console.log(uniteObject(obj1, obj2));
