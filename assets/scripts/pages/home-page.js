
let tempoRestante = 10 ;
const intervalo = setInterval(function() {

    let minutos = Math.floor(tempoRestante / 60);
    let segundos = tempoRestante % 60;
    minutos = String(minutos).padStart(2, '0');
    segundos = String(segundos).padStart(2, '0');

    

    if(tempoRestante>0){
        document.getElementById("contador").innerHTML = "0 Dias 00:" + minutos + ":" + segundos;
        tempoRestante--; 
    }
    else if(tempoRestante==0){
        document.getElementById("promocao").innerHTML = "Voçê perdeu a promoção!!"
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
   