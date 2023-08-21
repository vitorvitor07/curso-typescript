/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modules.ts"/>

// MyNameSpace is not defined
// Deve-se alterar "module": "AMD"
// Deve-se alterar "outFile": "./"
console.log(myNameSpace.name);

// Para importar um arquivo JS para o TS
// Precisamos alterar "allowJS": true
