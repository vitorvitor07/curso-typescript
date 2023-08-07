export class Empresa {
  public readonly nome: string; // não está inicializado
  private readonly cnpj: string;
  // Para modificar o valor é recomendável fazer um método que possa validar possíveis modificações na chave do objeto
  protected readonly colaboradores: Colaborador[] = [];
  // Uso do protected faz com que seja encapsulado como private mas pode ser acessado por suas classes filhas

  constructor(nome: string, cnpj: string) {
    this.nome = nome; // inicializa definindo o nome depois não pode ser alterado
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostraColaboradores(): void {
    // Se não houver nome, será public
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

class Meta extends Empresa {
  constructor() {
    super("Meta", "12.123.456/0001-10");
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Meta();

const cola01 = new Colaborador("Vitor", "Silva");
const cola02 = new Colaborador("Vitoria", "Caldeira");
const cola03 = new Colaborador("Matheus", "Nomuro");

empresa1.adicionaColaborador(cola01);
empresa1.adicionaColaborador(cola02);
empresa1.adicionaColaborador(cola03);
console.log(empresa1); // Meta

const colaboradorRemovido = empresa1.popColaborador();

console.log(colaboradorRemovido); // Meta
