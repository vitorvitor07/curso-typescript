// Types void
// Funções que não retornam nada

function _log(...args: string[]): void {
  console.log(args.join(" "));
}

_log("eu", "sou", "feliz");
