
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

function atualizarPreco() {
    if (cepInput.value.length === 8) {
        precoComFrete = (precoBase * quantidade) + frete;
        ("Frete de R$9,99, adicionado ao valor do produto");
    } else {
        precoComFrete = precoBase * quantidade;
    }
    precoProdutoElem.textContent = `R$${precoComFrete.toFixed(2).replace('.', ',')}`;
}

function atualizaPreco() { 
    const mensagemFreteContainer = document.getElementById("mensagemFreteContainer");
    mensagemFreteContainer.innerHTML = "";

    if (cepInput.value.length === 8) {
        precoComFrete = (precoBase * quantidade) + frete;
        precoProdutoElem.textContent = `R$${precoComFrete.toFixed(2).replace('.', ',')}`;
        
    } else {
        precoComFrete = precoBase * quantidade;
        precoProdutoElem.textContent = `R$${precoComFrete.toFixed(2).replace('.', ',')}`;
    }
}


btnAumentar.onclick = function () {
    quantidade *= 2; 
    atualizarQuantidade();
    atualizarPreco();
};

btnDiminuir.onclick = function () {
    if (quantidade > 1) {
        quantidade /= 2; 
        atualizarQuantidade();
        atualizarPreco();
    }
};

btnRemover.onclick = function () {
    produtoCarrinho.style.display = 'none';
    restaurarProdutoBtn.style.display = 'block';
};

restaurarProdutoBtn.onclick = function () {
    produtoCarrinho.style.display = 'flex';
    restaurarProdutoBtn.style.display = 'none';
};

finalizarCompraBtn.onclick = function () {
    if (!pagamentoAdicionado) {
        const dadosCadastraisContainer = document.createElement("div");
        dadosCadastraisContainer.classList.add("container-pagamento");
        dadosCadastraisContainer.innerHTML =  `
       <div class="dados-cadastrais">
        <h2 class="titulo">Dados Cadastrais</h2>
        <div class="campoNome">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" placeholder="Digite seu nome" required>
        </div>
        <div class="campoEmail">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Digite seu email" required>
        </div>
        <div class="campoTelefone">
            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" placeholder="Digite seu telefone" required>
        </div>
    </div>
`;
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
            <div class="campoEstado">
                <label for="estado">Estado:</label>
                <input type="text" id="estado" placeholder="Estado" required>
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

        containerPagamento.appendChild(dadosCadastraisContainer);
        containerPagamento.appendChild(enderecoPagamentoContainer);

        const formPagamento = document.getElementById("formPagamento");
        formPagamento.onsubmit = function (event) {
            const formValido = formPagamento.checkValidity();
            if(!formValido){
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
        mensagemFrete.textContent = "Frete de R$9,99, adicionado ao valor do produto.";
        mensagemFrete.style.color = "var(--cinza)";
        mensagemFrete.style.fontSize = "1rem";
        mensagemFrete.style.marginTop = "10px";
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
