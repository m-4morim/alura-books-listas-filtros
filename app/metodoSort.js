let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}















/* let precos = [29.98, 11, undefined, 101, 110];

let precosOrdenados = precos.sort((a, b) => a - b);

console.log(precosOrdenados) 

---- [11, 29.98, 101, 110, undefined] */