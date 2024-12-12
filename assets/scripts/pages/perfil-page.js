document.getElementById('bnome').addEventListener('click', function () {
    const nome = document.getElementById('nome');
    const entrada = document.getElementById('entrada');
    

    entrada.value = nome.textContent;
    entrada.style.width = nome.offsetWidth + 'px';
    nome.style.display = 'none';
    entrada.style.display = 'inline-block';
    entrada.focus();
});


document.getElementById('entrada').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const nome = document.getElementById('nome');
        const entrada = document.getElementById('entrada');
        

        if (entrada.value.trim() !== "") {
            nome.textContent = entrada.value;
        }
        entrada.style.display = 'none';
        nome.style.display = 'inline';
    }
});

document.getElementById('btell').addEventListener('click', function () {
    const nome = document.getElementById('tell');
    const entrada = document.getElementById('entrada3');
    
    
    entrada.value = nome.textContent;
    entrada.style.width = nome.offsetWidth + 'px'; 
    nome.style.display = 'none';
    entrada.style.display = 'inline-block';
    entrada.focus();
});


document.getElementById('entrada3').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const nome = document.getElementById('tell');
        const entrada = document.getElementById('entrada3');
        
        
        if (entrada.value.trim() !== "") {
            nome.textContent = entrada.value;
        }
        entrada.style.display = 'none';
        nome.style.display = 'inline';
    }
});

document.getElementById('entrada3').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^0-9+\- ]/g, ''); 
});

document.getElementById('bemail').addEventListener('click', function () {
    const nome = document.getElementById('email');
    const entrada = document.getElementById('entrada2');
    
    
    entrada.value = nome.textContent;
    entrada.style.width = nome.offsetWidth + 'px'; 
    nome.style.display = 'none';
    entrada.style.display = 'inline-block';
    entrada.focus();
});


document.getElementById('entrada2').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const nome = document.getElementById('email');
        const entrada = document.getElementById('entrada2');
        
        
        if (entrada.value.trim() !== "") {
            nome.textContent = entrada.value;
        }
        entrada.style.display = 'none';
        nome.style.display = 'inline';
    }
});

document.getElementById('bperfil').addEventListener('click', function() {
    document.getElementById('entrada4').click();
});

document.getElementById('entrada4').addEventListener('change', function(e) {
    const arquivo = e.target.files[0];
    if (arquivo) {
        console.log("Arquivo selecionado: ", arquivo);
        const reader = new FileReader();
        
        reader.onload = function(event) {
            console.log("Imagem carregada: ", event.target.result);
            const imagem = document.getElementById('perfil');
            imagem.src = event.target.result;
        };
        
        reader.readAsDataURL(arquivo);
    }
});

  