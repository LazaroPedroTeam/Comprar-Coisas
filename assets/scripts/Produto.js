class Produto{
    constructor(titulo, imagem, preco, preco_antigo, descricao){
        this.titulo = titulo;
        this.imagem = imagem;
        this.preco = preco;
        this.preco_antigo = preco_antigo;
        this.descricao = descricao;
        this.exibirProduto();
    }
    exibirProduto() {
        let campo = document.getElementById("container-produtos");

        let ulProduto = document.createElement("ul");
        ulProduto.classList.add("produto");
        ulProduto.innerHTML = `
                <a href="/assets/pages/produto-page.html">
                    <li>
                        <img src="${this.imagem}" alt="Imagem do ${this.titulo}">
                    </li>
                    <li>
                        <strong>${this.titulo}</strong>
                    </li>
                    <li>
                        <p>${this.preco}</p>
                    </li>
                    <li>
                        <p>${this.preco_antigo}</p>
                    </li>
                    <li>
                        <p>${this.descricao}</p>
                    </li>
                </a>
  
        
        `;
        campo.appendChild(ulProduto);
    }


}

new Produto(
    "Apple Notebook",
    "/assets/images/imagens-dos-produtos/macbook.png",
    5400.99,
    6111.10,
    "Apple notebook MacBook Air (de 13 polegadas, Processador M1 da Apple com CPU 8‑core e GPU 7‑core, 8 GB RAM, 256 GB) - Cinza espacial"
);

// Produto 2
new Produto(
    "Tênis Esportivo",
    "https://via.placeholder.com/150",
    199.99,
    249.99,
    "Tênis confortável para atividades físicas."
);

// Produto 3
new Produto(
    "Mochila de Couro",
    "https://via.placeholder.com/150",
    129.99,
    159.99,
    "Mochila de couro legítimo, ideal para o dia a dia."
);

// Produto 4
new Produto(
    "Relógio de Pulso",
    "https://via.placeholder.com/150",
    89.99,
    119.99,
    "Relógio moderno com design elegante e resistente à água."
);