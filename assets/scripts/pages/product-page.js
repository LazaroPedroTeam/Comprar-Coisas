// Isso daq foi eu copiando o código de Laz´ pra poder fazer uma página de Especificação de Produto dinâmica, não deu certo, como se pode observar
// Enfim, deixei aqui porque achei legal (quando fui mudar meu css morreu)

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
        this.exibirProduto();
    }

// Aqui é pra exibir os produtos (como diz o nome), aí "teoricamente" deveria ser dinâmico e mudar de acordo com o produto, aí por isso tem o this.titulo

    exibirProduto() {
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

// Aqui é a parte mais detalhada do produto, contendo preço e descrição dos coiso, além dos botões

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

// Aqui é pra selecionar o botão de adicionar no carrinho
        const adicionarCarrinhoBtn = detalhesContainer.querySelector('.adicionar_ao_carrinho');

// Aqui, basicamente, é um evento de clique, você clica e acontece um negócio 
        adicionarCarrinhoBtn.addEventListener('click', () => {
            // Exibe um alertinha
            alert('Seu produto foi adicionado ao carrinho!');

            // Alterar o texto do botão
            adicionarCarrinhoBtn.textContent = 'Produto Adicionado';
            
            // Alterar a cor do botão
            adicionarCarrinhoBtn.classList.add('adicionado');
            
            // Impede o botão de ser clicado várias vezes
            adicionarCarrinhoBtn.disabled = true;
        });
    }

// Enfim, a lição que aprendemos com isso é que se tá funcionando, não tem porque mudar, se não atrapalha, não precisa tirar. Beijos da Anitta <3

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

// Dito isso, avalie com carinho


















// PS. Avalia Geraldo com carinho tbm, mas menos q o meu