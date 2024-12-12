document.getElementById('bnome').addEventListener('click', function () {
    const nome = document.getElementById('nome');
    const entrada = document.getElementById('entrada');
    
    // Oculta o texto e exibe o campo de entrada
    entrada.value = nome.textContent;
    entrada.style.width = nome.offsetWidth + 'px'; // Ajusta a largura do input ao tamanho do texto
    nome.style.display = 'none';
    entrada.style.display = 'inline-block';
    entrada.focus();
});

// Atualiza o texto ao pressionar Enter
document.getElementById('entrada').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const nome = document.getElementById('nome');
        const entrada = document.getElementById('entrada');
        
        // Atualiza o texto e oculta o campo de entrada
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
    
    // Oculta o texto e exibe o campo de entrada
    entrada.value = nome.textContent;
    entrada.style.width = nome.offsetWidth + 'px'; // Ajusta a largura do input ao tamanho do texto
    nome.style.display = 'none';
    entrada.style.display = 'inline-block';
    entrada.focus();
});

// Atualiza o texto ao pressionar Enter
document.getElementById('entrada3').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const nome = document.getElementById('tell');
        const entrada = document.getElementById('entrada3');
        
        // Atualiza o texto e oculta o campo de entrada
        if (entrada.value.trim() !== "") {
            nome.textContent = entrada.value;
        }
        entrada.style.display = 'none';
        nome.style.display = 'inline';
    }
});

document.getElementById('entrada3').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^0-9+\- ]/g, ''); // Permite apenas números, +, - e espaço
});

document.getElementById('bemail').addEventListener('click', function () {
    const nome = document.getElementById('email');
    const entrada = document.getElementById('entrada2');
    
    // Oculta o texto e exibe o campo de entrada
    entrada.value = nome.textContent;
    entrada.style.width = nome.offsetWidth + 'px'; // Ajusta a largura do input ao tamanho do texto
    nome.style.display = 'none';
    entrada.style.display = 'inline-block';
    entrada.focus();
});

// Atualiza o texto ao pressionar Enter
document.getElementById('entrada2').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const nome = document.getElementById('email');
        const entrada = document.getElementById('entrada2');
        
        // Atualiza o texto e oculta o campo de entrada
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

  