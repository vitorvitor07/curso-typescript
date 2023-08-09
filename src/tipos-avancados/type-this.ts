export class Calculadora {
  constructor(public numero: number) { }

  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }

  mul(n: number): this {
    this.numero *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calc = new SubCalculadora(10);

calc.add(5).div(3).pow(2);
console.log(calc);

// Padrão de projeto Builder
// Precisa inciar um objeto com um construtor muito grande
// Inicia o objeto por partes

export class RequestBuilder {
  private method: "get" | "post" | null = null;
  private url: string | null = null;

  setMethod(method: "get" | "post"): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(
      `Requisição enviada com o método ${this.method} para ${this.url}`
    );
  }
}

const _fetch = new RequestBuilder();
_fetch.setMethod("post").setUrl("http://localhost:3000/send").send();
