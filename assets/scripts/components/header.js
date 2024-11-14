
function inserirHeader(){
    let idheader = document.getElementById("header");

    idheader.innerHTML= `
    
    
            <a href="/assets/home-page.html"><img src="/assets/images/logo/logo.png" alt="Logo da Página" id="logo"></a>
            <form action="" class="pesquisa">
                <input class="barra-pesquisa" type="text" placeholder="Pesquisar ..." > <button class="lupa" type="submit"><img src="/assets/images/icons/lupa-icon.png" alt="Lupa"></button>
            </form>
            <ul>
                <li class="padrao">
                    <a href="" class="categorias">Categorias 
                        <img src="/assets/images/icons/seta-icon.png" alt="icone das categorias">
                    </a>
                    
                    <ul class="dropdown">
                        <li><a href="#pcs-notebooks">PCs e Notebooks</a></li>
                        <li><a href="#celulares">Celulares</a></li>
                        <li><a href="#perifericos">Periféricos</a></li>
                        <li class="hard-ware"><a href="#hardware">Hardware</a></li>
            </ul>
            </li>
            </ul>
            <div>
                <a href="#" class="icon-perfil"><img src="/assets/images/icons/perfil-icon.png" alt="icone de perfil"> Entrar </a>
                <a href="#"class="icon-carrinho"><img src="/assets/images/icons/carrinho-icon.png" alt=""><p>1</p>
                </a>
            </div>



    `;


}

window.onload = inserirHeader;