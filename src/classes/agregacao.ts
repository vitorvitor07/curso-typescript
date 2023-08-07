class CarrinhoCompras {
  private produtos: Array<Produto> = [];

  inserirProdutos(...produtos: Produto[]): void {
    produtos.forEach((produto: Produto) => this.produtos.push(produto));
  }

  listaProdutos(): void {
    for (const produto of this.produtos) {
      console.log(produto);
    }
  }

  get quantidade(): number {
    return this.produtos.length;
  }

  get total(): number {
    return this.produtos.reduce((acc, produto) => (acc += produto.preco), 0);
  }
}

class Produto {
  constructor(public nome: string, public preco: number) {}
}

const carrinho1 = new CarrinhoCompras();
carrinho1.inserirProdutos(new Produto("Cerveja", 10), new Produto("Pomada", 5));
console.log("quantidade: " + carrinho1.quantidade);
console.log("total: " + carrinho1.total);
carrinho1.listaProdutos();
