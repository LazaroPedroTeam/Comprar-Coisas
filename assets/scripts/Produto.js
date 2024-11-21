

class Produto{
    static contador = 0;
    constructor(titulo, imagem, preco, preco_antigo, descricao, categoria, sub_categoria){
        this.id = this.autoIncremento();
        this.titulo = titulo;
        this.imagem = imagem;
        this.preco = preco;
        this.preco_antigo = preco_antigo;
        this.descricao = descricao;
        this.categoria = categoria;
        this.sub_categoria = sub_categoria;
        this.preco = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        this.preco_antigo = preco_antigo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        this.exibirProduto();
    }
    exibirProduto() {
        let campo = document.getElementById("container-produtos");

        let ulProduto = document.createElement("ul");
        ulProduto.classList.add("produto");
        ulProduto.innerHTML = `
            <a href="/assets/pages/produto-page.html">
                <li class="imagem-produto">
                    <img src="${this.imagem}" alt="Imagem do ${this.titulo}">
                </li>
                <li class="texto-produto">
                    <div class="preco-produto">
                        <p class="preco-novo" title="${this.preco}" >${this.preco}</p>
                        <p class="preco-antigo" title="${this.preco_antigo}" >${this.preco_antigo} </p>
                    </div>
                    <div class="titulo-produto" title="${this.titulo}">
                        ${this.titulo}
                    </div>
                    <div class="descricao-produto" title="${this.descricao}">
                        <p>${this.descricao}</p>
                    </div>
                </li>
            </a>
        `;
        campo.appendChild(ulProduto);
    }
    autoIncremento(){
        return Produto.contador++;
    }
    exibirInfo() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Imagem: ${this.imagem}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Preço Antigo: R$ ${this.preco_antigo}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Categoria: ${this.categoria}`);
        console.log(`Sub-Categoria: ${this.sub_categoria}`);
    }

}

const meuProduto = new Produto(
    "MacBook Air 13\" (M1)",
    "/assets/images/imagens-dos-produtos/notebook-generico.png",
    5400.99,
    6111.10,
    "Apple notebook MacBook Air (de 13 polegadas, Processador M1 da Apple com CPU 8‑core e GPU 7‑core, 8 GB RAM, 256 GB) - Cinza espacial",
    Categorias.NOTEBOOKS, 
    SubCategorias.NOTEBOOKS.APPLE  
);
meuProduto.exibirInfo();

document.addEventListener('DOMContentLoaded', function () {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.forEach(produto => {
        new Produto(
            produto.id,
            produto.titulo,
            produto.imagem,
            produto.preco,
            produto.preco_antigo,
            produto.descricao,
            produto.categoria,
            produto.subcategoria
        );
    });
});
const meuProduto0 = new Produto(
    "MacBook Air 13\" (M1)",
    "/assets/images/imagens-dos-produtos/notebook-generico.png",
    5400.99,
    6111.10,
    "Apple notebook MacBook Air (de 13 polegadas, Processador M1 da Apple com CPU 8‑core e GPU 7‑core, 8 GB RAM, 256 GB) - Cinza espacial",
    Categorias.NOTEBOOKS, 
    SubCategorias.NOTEBOOKS.APPLE  
);const meuProduto1 = new Produto(
    "MacBook Air 13\" (M1)",
    "/assets/images/imagens-dos-produtos/notebook-generico.png",
    5400.99,
    6111.10,
    "Apple notebook MacBook Air (de 13 polegadas, Processador M1 da Apple com CPU 8‑core e GPU 7‑core, 8 GB RAM, 256 GB) - Cinza espacial",
    Categorias.NOTEBOOKS, 
    SubCategorias.NOTEBOOKS.APPLE  
);const meuProduto2 = new Produto(
    "MacBook Air 13\" (M1)",
    "/assets/images/imagens-dos-produtos/notebook-generico.png",
    5400.99,
    6111.10,
    "Apple notebook MacBook Air (de 13 polegadas, Processador M1 da Apple com CPU 8‑core e GPU 7‑core, 8 GB RAM, 256 GB) - Cinza espacial",
    Categorias.NOTEBOOKS, 
    SubCategorias.NOTEBOOKS.APPLE  
);
const meuProduto3 = new Produto(
    "MacBook Air 13\" (M1)",
    "/assets/images/imagens-dos-produtos/notebook-generico.png",
    5400.99,
    6111.10,
    "Apple notebook MacBook Air (de 13 polegadas, Processador M1 da Apple com CPU 8‑core e GPU 7‑core, 8 GB RAM, 256 GB) - Cinza espacial",
    Categorias.NOTEBOOKS, 
    SubCategorias.NOTEBOOKS.APPLE  
);