
const finalizarCompraBtn = document.getElementById("finalizarCompra");
const produtoCarrinho = document.getElementById("produtoCarrinho");
const restaurarProdutoBtn = document.getElementById("restaurarProduto");
const precoProdutoElem = document.getElementById("precoProduto");
const cepInput = document.getElementById("cep");
const btnAumentar = document.getElementById("btnAumentar");
const btnDiminuir = document.getElementById("btnDiminuir");
const btnRemover = document.getElementById("btnRemover");
const quantidadeProdutoElem = document.getElementById("quantidadeProduto");
const containerPagamento = document.getElementById("container-pagamento");

let quantidade = 1;
const precoBase = 5400.99;
const frete = 9.99;
let precoComFrete = precoBase;
let pagamentoAdicionado = false;

function atualizarQuantidade() {
    quantidadeProdutoElem.textContent = quantidade;
}

btnAumentar.onclick = function () {
    quantidade += 1;
    atualizarQuantidade();
    atualizarPreco();
};

btnDiminuir.onclick = function () {
    if (quantidade > 1) {
        quantidade -= 1;
        atualizarQuantidade();
        atualizarPreco();
    }
};

btnRemover.onclick = function () {
    produtoCarrinho.style.display = 'none';
    restaurarProdutoBtn.style.display = 'block';


   const btnAdicionarProdutos = document.createElement("button");
    btnAdicionarProdutos.textContent = "Adicionar mais produtos";
    btnAdicionarProdutos.className = "btn-adicionarProdutos";
    btnAdicionarProdutos.onclick = function () {
        window.location.href = "/index.html"
    }

    restaurarProdutoBtn.insertAdjacentElement("afterend", btnAdicionarProdutos);

    restaurarProdutoBtn.onclick = function () {
        produtoCarrinho.style.display = 'flex';
        restaurarProdutoBtn.style.display = 'none';
        btnAdicionarProdutos.remove();
        fraseInformativa.remove();
    };
}


finalizarCompraBtn.onclick = function () {
    if (!pagamentoAdicionado) {
        const enderecoPagamentoContainer = document.createElement("div");
        enderecoPagamentoContainer.classList.add("container-pagamento");
        enderecoPagamentoContainer.innerHTML = `
            <div class="endereco-pagamento">
        <h2 class="titulo">Endereço de Entrega e Pagamento</h2>
        <form id="formPagamento">
            <div class="campoCep">
                <label for="cep">CEP:</label>
                <input type="text" id="cep" placeholder="Digite o CEP" maxlength="8" required>
            </div>
            <div class="campoEndereco">
                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" placeholder="Digite o endereço" required>
            </div>
            <div class="campoCidade">
                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" placeholder="Cidade" required>
            </div>
            <div class="campoUF">
                <label for="UF">UF:</label>
                <input type="text" id="UF" placeholder="UF" maxlength="2" required>
            </div>
            <div class="forma-pagamento">
                <h3 class="titulo-secundario">Forma de Pagamento</h3>
                <div class="campoFormapagamento">
                    <label for="pagamento">Opções:</label>
                    <select id="pagamento" required>
                        <option value="" disabled selected>Escolha uma opção</option>
                        <option value="cartao">Cartão de Crédito</option>
                        <option value="boleto">Boleto</option>
                    </select>
                </div>
            </div>
                <button class="bntfinalizar" type="submit">Finalizar compra</button>
            </form>
        `;

        containerPagamento.appendChild(enderecoPagamentoContainer);

        const formPagamento = document.getElementById("formPagamento");
        formPagamento.onsubmit = function (event) {
            const formValido = formPagamento.checkValidity();
            if (!formValido) {
                alert("Por favor, preencha todos os campos obrigatórios");
                return;
            }
            alert("Compra finalizada com sucesso!");
        };

        pagamentoAdicionado = true;
    }
};


function calcularFrete() {
    const cep = cepInput.value;
    const mensagemFreteContainer = document.getElementById("mensagemFreteContainer");
    mensagemFreteContainer.innerHTML = "";


    if (cep.length === 8) {
        precoComFrete = (precoBase * quantidade) + frete;
        precoProdutoElem.textContent = `R$${precoComFrete.toFixed(2).replace('.', ',')}`;

        const mensagemFrete = document.createElement("p");
        mensagemFrete.textContent = "Frete fixo de R$9,99, adicionado ao valor do produto.";
        mensagemFrete.style.color = "var(--cinza)";
        mensagemFrete.style.fontSize = "1rem";
        mensagemFrete.style.marginTop = "10px";
        mensagemFrete.style.fontFamily = "var(--fonte-categorias)";
        mensagemFreteContainer.appendChild(mensagemFrete);

    } else {
        precoComFrete = precoBase * quantidade;
        precoProdutoElem.textContent = `R$${precoComFrete.toFixed(2).replace('.', ',')}`;
    }
}


function finalizarPagamento() {
    alert("Compra finalizada com sucesso!");
}

atualizarQuantidade();
atualizarPreco();
