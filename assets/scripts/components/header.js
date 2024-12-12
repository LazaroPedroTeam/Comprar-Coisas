

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



let tempoRestante = 10 *60;
const intervalo = setInterval(function() {

    let minutos = Math.floor(tempoRestante / 60);
    let segundos = tempoRestante % 60;
    minutos = String(minutos).padStart(2, '0');
    segundos = String(segundos).padStart(2, '0');

    document.getElementById("contador").innerHTML = "0 Dias 00:" + minutos + ":" + segundos;

    if(tempoRestante>0){
        tempoRestante--; 
    }
    else{
        let antigo = document.getElementsByClassName('preco-antigo');
        let novo = document.getElementsByClassName('preco-novo');

        for (let i = 0; i < novo.length; i++) {
            novo[i].style.display = 'none';
          }
        for (let i = 0; i < antigo.length; i++) {
            antigo[i].style.color = 'var(--cor-principal)';
            antigo[i].style.textDecoration = 'none';
        }
    }

    

  }, 1000);



  function filtrarCateg(cat,sub_categoria, elemento) {
    categor = {
        1: 'PCs e Notebooks',
        2: 'Celulares',
        3: 'TVs e Monitores',
        4: 'Periféricos',
        5: 'Hardware'
    }
    let ativo = document.getElementsByClassName('active-cat');
    let produtos = document.getElementsByClassName('produto');
    for (let i = 0; i < ativo.length; i++) {
        ativo[i].classList.remove('active-cat');
    }
    if (sub_categoria == 0) {
        for (let i = 0; i < produtos.length; i++) {
            produtos[i].style.display = 'flex';
        }
    } else {
        elemento.classList.add('active-cat');
        for (let i = 0; i < produtos.length; i++) {
            let sub_cat_sel = produtos[i].querySelector('.sub-categoria-sel').innerText;
            let cat_sel = produtos[i].querySelector('.categoria-sel').innerText;

            if (cat_sel == categor[cat] && sub_cat_sel == sub_categoria) {
                produtos[i].style.display = 'flex'; 
            } else {
                produtos[i].style.display = 'none';
            }
        }
    }
}
   

  
