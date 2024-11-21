
const Categorias = Object.freeze({
    NOTEBOOKS: 'PCs e Notebooks',
    CELULARES: 'Celulares',
    TV_MONITOR: 'TVs e Monitores',
    PERIFERICOS: 'Periféricos',
    HARDWARE: 'Hardware'
});

const SubCategorias = {
    NOTEBOOKS: Object.freeze({
        ACER: 'Acer',
        LENOVO: 'Lenovo',
        ASUS: 'Asus',
        DELL: 'Dell',
        APPLE: 'Apple',
        OUTROS: 'Outros'
    }),

    CELULARES: Object.freeze({
        XIAOMI: 'Xiaomi',
        SAMSUNG: 'Samsung',
        MOTOROLA: 'Motorola',
        OUTROS: 'Outros',
        APPLE: 'Apple'
    }),

    TV_MONITOR: Object.freeze({
        SMART_TV: 'Smart TVs',
        TV_4K: 'TVs 4K',
        MONITOR_GAMERS: 'Monitores Gamers',
        ULTRA_WIDE: 'Monitores Ultra Wide',
        OUTROS: 'Outros'
    }),

    PERIFERICOS: Object.freeze({
        TECLADO: 'Teclado',
        MOUSE: 'Mouse',
        FONE_OUVIDO: 'Fone de ouvido',
        WEBCAMS: 'Webcams',
        MICROFONE: 'Microfone',
        OUTROS: 'Outros'
    }),

    HARDWARE: Object.freeze({
        PROCESSADORES: 'Processadores',
        MEMORIA_RAM: 'Memória RAM',
        PLACAS_DE_VIDEO: 'Placas de vídeo',
        HD_E_SSD: 'HD e SSD',
        PECAS_E_ACESSORIOS: 'Peças e acessórios'
    })
};

