export class Empresa {
  public readonly nome: string; // não está inicializado
  private readonly colaboradores: Colaborador[] = []; // para modificar o valor é recomendável fazer um método que possa validar possíveis modificações na chave do objeto
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome; // inicializa definindo o nome depois não pode ser alterado
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostraColaboradores(): void {
    // Se não houver nome, será public
    // console.log(this.colaboradores);

    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  private logaOi(): void {
    console.log("Oi");
  }
}

class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Empresa("Meta", "12.123.452/00001-20");
const cola01 = new Colaborador("Vitor", "Silva");
const cola02 = new Colaborador("Vitoria", "Caldeira");
const cola03 = new Colaborador("Matheus", "Nomuro");

empresa1.adicionaColaborador(cola01);
empresa1.adicionaColaborador(cola02);
empresa1.adicionaColaborador(cola03);
// console.log(empresa1); // Meta

empresa1.mostraColaboradores();
