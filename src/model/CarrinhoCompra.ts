import { Produto } from "./Produto";

export class CarrinhoDeCompra{
    protected readonly produtos: Produto[]= [];

    public inserirProdutos(...produtos: Produto[]): void{
        for(const produto of produtos){
            this.produtos.push(produto);
        }
    }
    public quantidadeProdutos(): number{
        return this.produtos.length;
    }
    public valorTotal(): number{
        return this.produtos.reduce((soma, produto) =>
        soma + produto.preco,0);
    }
}