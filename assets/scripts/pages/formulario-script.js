const subcategories = {
    NOTEBOOKS: {
        ACER: 'Acer',
        LENOVO: 'Lenovo',
        ASUS: 'Asus',
        DELL: 'Dell',
        APPLE: 'Apple',
        OUTROS: 'Outros'
    },
    CELULARES: {
        XIAOMI: 'Xiaomi',
        SAMSUNG: 'Samsung',
        MOTOROLA: 'Motorola',
        APPLE: 'Apple',
        OUTROS: 'Outros'
    },
    TV_MONITOR: {
        SMART_TV: 'Smart TVs',
        TV_4K: 'TVs 4K',
        MONITOR_GAMERS: 'Monitores Gamers',
        ULTRA_WIDE: 'Monitores Ultra Wide',
        OUTROS: 'Outros'
    },
    PERIFERICOS: {
        TECLADO: 'Teclado',
        MOUSE: 'Mouse',
        FONE_OUVIDO: 'Fone de ouvido',
        WEBCAMS: 'Webcams',
        MICROFONE: 'Microfone',
        OUTROS: 'Outros'
    },
    HARDWARE: {
        PROCESSADORES: 'Processadores',
        MEMORIA_RAM: 'Memória RAM',
        PLACAS_DE_VIDEO: 'Placas de vídeo',
        HD_E_SSD: 'HD e SSD',
        PECAS_E_ACESSORIOS: 'Peças e acessórios'
    }
};
 
document.getElementById('categoria').addEventListener('change', function () {
    const subcategoria = document.getElementById('subcategoria');
    const categoria = this.value;

    subcategoria.innerHTML = '<option value="">Selecione uma subcategoria</option>';

    if (categoria && subcategories[categoria]) {
        Object.entries(subcategories[categoria]).forEach(([key, value]) => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = value;
            subcategoria.appendChild(option);
        });
    }
});
 
document.getElementById('formulario').addEventListener('submit', function (envioProd) {
    envioProd.preventDefault();

    const produto = {
        titulo: document.getElementById('titulo').value,
        imagem: document.getElementById('imagem').value,
        preco: parseFloat(document.getElementById('preco').value),
        preco_antigo: parseFloat(document.getElementById('preco-antigo').value) || null,
        descricao: document.getElementById('descricao').value,
        categoria: document.getElementById('categoria').value,
        subcategoria: document.getElementById('subcategoria').value
    };

    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    produtos.push(produto);

    localStorage.setItem('produtos', JSON.stringify(produtos));

    alert('Produto salvo com sucesso!');
    window.location.href = '/index.html';
});