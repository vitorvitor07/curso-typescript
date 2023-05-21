import isEmail from "validator/lib/isEmail";

const SHOW_ERROR_MESSAGES = "show-error-message";

const form = document.querySelector(".form") as HTMLFormElement;
const username = document.querySelector(".username") as HTMLInputElement;
const email = document.querySelector(".email") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const password2 = document.querySelector(".password2") as HTMLInputElement;

// Usar function para o this não ter escopo global

form.addEventListener("submit", function (event) {
  event.preventDefault();
  hideErrorMessages(this); // this => form
  checkEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkPassword(password, password2);
  if (shoudSendForm(form)) {
    alert("Enviado");
  } else {
    alert("Não enviado");
  }
});

function shoudSendForm(form: HTMLFormElement): boolean {
  let send = true;

  form
    .querySelectorAll("." + SHOW_ERROR_MESSAGES)
    .forEach(() => (send = false));

  return send;
}

function checkPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement
): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, "Senhas não são iguais");
    showErrorMessage(password2, "Senhas não são iguais");
  }
}

function checkEmail(input: HTMLInputElement): void {
  const validate = isEmail(input.value);
  if (!validate) showErrorMessage(input, "Email inválido");
}

function checkEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, "Campo não pode ser vazio");
  });
}

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll("." + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formField = input.parentElement as HTMLDivElement;
  const errorMessage = formField.querySelector(
    ".error-message"
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formField.classList.add(SHOW_ERROR_MESSAGES);
}

/*
 Tipar o this

 function funcao(this: Date, arg1: string, arg2: number): void {
  console.log(this);
  console.log(arg1);
  console.log(arg2);
 }

 Chamar funcão

 funcao.call(new Date(), 'string', 30) // primeiro argumento é o This

 Ou...

 funcao.apply(new Date(), ['string', 30]); // segundo argumento é uma array com os argumentos da função

*/
