import Cliente from "./Cliente";
import Endereco from "./Endereco";
import Produto from "./Produto";
import Telefone from "./Telefone";
import Venda from "./Venda";

var endereco = new Endereco("Biava", 24, "Biavinha", "AC");
var telefones = [new Telefone("42", 88142692, "celular"), new Telefone("42", 34721881, "telefone fixo")];
var produtos = [new Produto(1000, "suco de laranja", 24.99), new Produto(1001, "bagaço de laranja", 0.03)];
var cliente = new Cliente("Biava Antônio Lindo Gato", 49135360445, 7032005, "?", endereco, telefones);
var venda = new Venda(1, 21012005, cliente, produtos);

console.log(endereco)
console.log(telefones)
console.log(produtos)
console.log(cliente)
console.log(venda)
console.log(venda.calcularTotal(produtos))