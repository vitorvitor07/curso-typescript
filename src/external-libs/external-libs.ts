// Utulizando biblioteca de terceiros em TS
// Precisa-se instalar a tipagem de algumas libs
// npm i validator
// npm i @types/validator -D

import validator from "validator";

const email = "vitor.silva@krolik.com.br";

console.log(validator.isEmail(email));
