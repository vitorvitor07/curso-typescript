// Associação - Um objeto usa outro em um determinado momento

// Escritor usa Ferramenta (Aponta para uma classe abstrata) - Inversão de dependencia
export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private nome: string) {}

  set ferramenta(ferramenta: Ferramenta) {
    this._ferramenta = ferramenta;
  }

  escrever(): void {
    if (this._ferramenta === null) {
      console.log(`Não posso escrever sem ferramenta`);
      return;
    }
    this._ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo`);
  }
}
export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando`);
  }
}

const caneta = new Caneta("Blue pen");
const escritor = new Escritor("Vitor");

escritor.ferramenta = caneta;
escritor.escrever();
