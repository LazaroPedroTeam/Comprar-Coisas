

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
                    <p class="categoria-sel">${this.sub_categoria}</p>
                </li>
            </a>
        `;
        campo.appendChild(ulProduto);
    }
    autoIncremento(){
        return Produto.contador++;
    }


}

document.addEventListener('DOMContentLoaded', function () {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.forEach(produto => {
        const novoProduto = new Produto(
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


new Produto(
    "AMD Ryzen 7",
    "/assets/images/imagens-dos-produtos/processador.png",
    799.80,
    1200.88,
    "Processador AMD Ryzen 7Cachê 4MB, 8 Núcleos, 16 Threads, AM4 - 100-100001503WOF",
    Categorias.HARDWARE, 
    SubCategorias.HARDWARE.PROCESSADORES  
);
new Produto(
    "PlayStation 5",
    "/assets/images/imagens-dos-produtos/ps-5.png",
    2719.07,
    4299,
    "Console Sony PlayStation 5 Slim, Branco + 2 Jogos - 1000038899",
    Categorias.PERIFERICOS, 
    SubCategorias.PERIFERICOS.OUTROS  
);
new Produto(
    "Cadeira Gamer KBM",
    "/assets/images/imagens-dos-produtos/cadeira.png",
    759.90,
    1157.70,
    "Cadeira Gamer KBM! GAMING Tempest CG600,Pernas Retrátil, Reclinável - KGCG600BR",
    Categorias.PERIFERICOS, 
    SubCategorias.PERIFERICOS.CADEIRAS  
);
new Produto(
    "intel atom d525",
    "/assets/images/imagens-dos-produtos/placa-mae.png",
    123.56,
    234.78,
    "Intel Atom D525 02 cores e 04 threads, D525 3.0, memória DDRIII 02 GBytes",
    Categorias.HARDWARE, 
    SubCategorias.HARDWARE.PLACA_MAE
);
new Produto(
    "Acer Nitro 5",
    "/assets/images/imagens-dos-produtos/notebook.png",
    2999.99,
    4000,
    "Notebook Gamer Acer Nitro V ANV15-51-54DL Sistema Operacional -: Windows 11 Home CPU e Chipset: Intel Core i5-13420H de 13a geração 8 núcleos",
    Categorias.NOTEBOOKS, 
    SubCategorias.NOTEBOOKS.ACER 
);
new Produto(
    "Apple Macbook Air",
    "/assets/images/imagens-dos-produtos/notebook-generico.png",
    5400.99,
    6111.10,
    "Apple notebook MacBook Air (de 13 polegadas, Processador M1 da Apple com CPU 8‑core e GPU 7‑core, 8 GB RAM, 256 GB) - Cinza espacial",
    Categorias.NOTEBOOKS, 
    SubCategorias.NOTEBOOKS.APPLE  
);
new Produto(
    "Mouse Gamer",
    "/assets/images/imagens-dos-produtos/mouse.png",
    350,
    555.99,
    "Mouse Gamer sem fio 6 botões programáveis, Preto - 910-007198",
    Categorias.PERIFERICOS, 
    SubCategorias.PERIFERICOS.MOUSE  
);
new Produto(
    "Monitor Gamer Curvo KBM",
    "/assets/images/imagens-dos-produtos/monitor.png",
    1799.99,
    2066.66,
    "Monitor Gamer Curvo KBM! GAMIN, Adaptive Sync, Ajuste De Ângulo - KGMG32027PT",
    Categorias.TV_MONITOR, 
    SubCategorias.TV_MONITOR.ULTRA_WIDE  
);
new Produto(
    "Cadeira Gamer KBM",
    "/assets/images/imagens-dos-produtos/cadeira.png",
    759.90,
    1157.70,
    "Cadeira Gamer KBM! GAMING Tempest CG600,Pernas Retrátil, Reclinável - KGCG600BR",
    Categorias.PERIFERICOS, 
    SubCategorias.PERIFERICOS.CADEIRAS  
);
new Produto(
    "PlayStation 5",
    "/assets/images/imagens-dos-produtos/ps-5.png",
    2719.07,
    4299,
    "Console Sony PlayStation 5 Slim, Branco + 2 Jogos - 1000038899",
    Categorias.PERIFERICOS, 
    SubCategorias.PERIFERICOS.OUTROS  
);
new Produto(
    "Monitor Gamer Curvo KBM",
    "/assets/images/imagens-dos-produtos/monitor.png",
    1799.99,
    2066.66,
    "Monitor Gamer Curvo KBM! GAMIN, Adaptive Sync, Ajuste De Ângulo - KGMG32027PT",
    Categorias.TV_MONITOR, 
    SubCategorias.TV_MONITOR.ULTRA_WIDE  
);
new Produto(
    "intel atom d525",
    "/assets/images/imagens-dos-produtos/placa-mae.png",
    123.56,
    234.78,
    "Intel Atom D525 02 cores e 04 threads, D525 3.0, memória DDRIII 02 GBytes",
    Categorias.HARDWARE, 
    SubCategorias.HARDWARE.PLACA_MAE
);
new Produto(
    "Apple Macbook Air",
    "/assets/images/imagens-dos-produtos/notebook-generico.png",
    5400.99,
    6111.10,
    "Apple notebook MacBook Air (de 13 polegadas, Processador M1 da Apple com CPU 8‑core e GPU 7‑core, 8 GB RAM, 256 GB) - Cinza espacial",
    Categorias.NOTEBOOKS, 
    SubCategorias.NOTEBOOKS.APPLE  
);
new Produto(
    "Acer Nitro 5",
    "/assets/images/imagens-dos-produtos/notebook.png",
    2999.99,
    4000,
    "Notebook Gamer Acer Nitro V ANV15-51-54DL Sistema Operacional -: Windows 11 Home CPU e Chipset: Intel Core i5-13420H de 13a geração 8 núcleos",
    Categorias.NOTEBOOKS, 
    SubCategorias.NOTEBOOKS.ACER 
);
new Produto(
    "AMD Ryzen 7",
    "/assets/images/imagens-dos-produtos/processador.png",
    799.80,
    1200.88,
    "Processador AMD Ryzen 7Cachê 4MB, 8 Núcleos, 16 Threads, AM4 - 100-100001503WOF",
    Categorias.HARDWARE, 
    SubCategorias.HARDWARE.PROCESSADORES  
);
new Produto(
    "Mouse Gamer",
    "/assets/images/imagens-dos-produtos/mouse.png",
    350,
    555.99,
    "Mouse Gamer sem fio 6 botões programáveis, Preto - 910-007198",
    Categorias.PERIFERICOS, 
    SubCategorias.PERIFERICOS.MOUSE  
);