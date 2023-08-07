// Não pode ser instanciada - serve pra "extender/moldar"
export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number
  ) {}

  atacar(alvo: Personagem): void {
    this.bordao();
    alvo.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida`);
  }

  abstract bordao(): void; // As classes devem ter esse método criado e ele precisa retornar void
}

class Guerreira extends Personagem {
  protected emoji = "🙅‍♀️";

  bordao(): void {
    console.log(this.emoji + " IAAAAA!");
  }
} // Classe concreta pode-se usar o new Guerreira();
class Monstro extends Personagem {
  protected emoji = "🐸";

  bordao(): void {
    console.log(this.emoji + " UUUUUURGH");
  }
}

const monstro = new Monstro("Troll", 200, 1000);
const guerreira = new Guerreira("Marlúcia", 150, 1000);

monstro.atacar(guerreira);
guerreira.atacar(monstro);
