
function inserirHeader(){
    let idheader = document.getElementById("header");

    idheader.innerHTML= `
    
    
    <a href="/home-page.html">
        <img src="/assets/images/logo/logo.png" alt="Logo da Página" id="logo">
    </a>

    <form action="" class="pesquisa">
        <input class="barra-pesquisa" type="text" placeholder="Pesquisar ...">
        <button class="lupa" type="submit">
            <img src="/assets/images/icons/lupa-icon.png" alt="Lupa">
        </button>
    </form>

    <ul>
        <li class="padrao">
            <p class="categorias">
                Categorias 
                <img src="/assets/images/icons/seta-icon.png" alt="icone das categorias">
            </p>
            
            <ul class="dropdown">
                <li><a href="/home-page.html#pcs-notebooks">PCs e Notebooks</a></li>
                <li><a href="/home-page.html#celulares">Celulares</a></li>
                <li><a href="/home-page.html#perifericos">Periféricos</a></li>
                <li class="ultimo-elem"><a href="/home-page.html#hardware">Hardware</a></li>
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


}

window.onload = inserirHeader;