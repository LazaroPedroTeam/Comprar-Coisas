

    let idheader = document.getElementById("header");

    idheader.innerHTML= `
        <a href="/index.html">
            <img src="/assets/images/logo/logo.png" alt="Logo da Página" id="logo">
        </a>

        <form action="" class="pesquisa">
            <input id="barra-pesquisa" type="text" placeholder="Pesquisar ...">
        </form>

        <ul>
            <li class="padrao">
                <p class="categorias">
                    Categorias 
                    <img src="/assets/images/icons/seta-icon.png" alt="icone das categorias">
                </p>
                
                <ul class="dropdown">
                    <li><a href="/index.html#pcs-notebooks">PCs e Notebooks</a></li>
                    <li><a href="/index.html#celulares">Celulares</a></li>
                    <li><a href="/index.html#perifericos">Periféricos</a></li>
                    <li class="ultimo-elem"><a href="/index.html#hardware">Hardware</a></li>
                </ul>
            </li>
        </ul>

        <nav class="buttons-nav">
            <a href="/assets/pages/login-page.html" class="icon-perfil">
                <img src="/assets/images/icons/perfil-icon.png" alt="icone de perfil"> Entrar
            </a>
            <a href="/assets/pages/carrinho-page.html" class="icon-carrinho">
                <img src="/assets/images/icons/carrinho-icon.png" alt="">
                <p>1</p>
            </a>
        </nav>


    `;







const barrainput = document.getElementById('barra-pesquisa');
barrainput.addEventListener('input', function(event) {
    const campo_pesquisa = formatarTexto(event.target.value);
    let produtos = document.getElementsByClassName('produto');
    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];
        let titulo = formatarTexto(produto.querySelector('.titulo-produto').innerText);
        if(titulo.indexOf(campo_pesquisa) !== -1){
            produto.style.display = 'flex';
        } else{
            produto.style.display = 'none';
        }

       
      }

});

function formatarTexto(valor){
return valor.toUpperCase().trim();
}