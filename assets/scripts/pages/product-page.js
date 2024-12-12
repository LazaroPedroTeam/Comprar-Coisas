class Produto {
    static contador = 0;
    constructor(titulo, imagem, preco, preco_antigo, descricao, categoria, sub_categoria) {
        this.id = this.autoIncremento();
        this.titulo = titulo;
        this.imagem = imagem;
        this.preco = preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        this.preco_antigo = preco_antigo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        this.descricao = descricao;
        this.categoria = categoria;
        this.sub_categoria = sub_categoria;
        this.exibirProdutoPagina();
    }

    exibirProdutoPagina() {
        const fotoContainer = document.querySelector('.foto_do_produto');
        const detalhesContainer = document.querySelector('.detalhes_do_produto');

        fotoContainer.innerHTML = `
            <div class="imagem_do_produto">
                <img src="${this.imagem}" alt="Imagem do ${this.titulo}">
                <div class="thumbnail">
                    <img src="${this.imagem}" alt="Thumbnail ${this.titulo}">
                </div>
            </div>
        `;

        detalhesContainer.innerHTML = `
            <h1>${this.titulo}</h1>
            <p class="preco">
                <span class="preco_atual">${this.preco}</span>
                <span class="preco_antigo">De: ${this.preco_antigo}</span>
            </p>
            <div class="acoes">
                <a href="./carrinho-page.html"><button class="comprar_agora">Comprar agora</button></a>
                <button class="adicionar_ao_carrinho">Adicionar ao carrinho</button>
            </div>
            <div class="sobre_o_produto">
                <h3>Sobre este item:</h3>
                <ul>
                    <li>${this.descricao}</li>
                </ul>
            </div>
        `;
    }

    
    

    autoIncremento() {
        return Produto.contador++;
    }
}

const produto = new Produto(
    "Apple notebook MacBook Air (de 13 polegadas, Processador M1 da Apple com CPU 8-core e GPU 7-core, 8 GB RAM, 256 GB) - Cinza espacial",
    "/assets/images/imagens-dos-produtos/notebook-generico.png",
    5400.99,
    6111.10,
    "Apple notebook MacBook Air (de 13 polegadas, Processador M1 da Apple com CPU 8-core e GPU 7-core, 8 GB RAM, 256 GB) - Cinza espacial",
    "Notebooks",
    "Apple"
);

function exibirProdutoPagina() {
    const fotoContainer = document.querySelector('.foto_do_produto');
    fotoContainer.innerHTML = `
        <div class="imagem_do_produto">
            <img src="${this.imagem}" alt="${this.titulo}">
            <div class="thumbnail">
                <img src="${this.imagem}" alt="Thumbnail de ${this.titulo}">
            </div>
        </div>
    `
};
