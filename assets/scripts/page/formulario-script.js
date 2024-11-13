document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validar se os termos foram aceitos
    if (!document.getElementById('terms').checked) {
        alert('Você precisa aceitar os termos e condições antes de prosseguir.');
        return;
    }

    // Pegar os valores do formulário
    const productName = document.getElementById('product-name').value;
    const brandName = document.getElementById('brand-name').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const cep = document.getElementById('cep').value;
    const phone = document.getElementById('contact-phone').value;
    const email = document.getElementById('contact-email').value;
    const cpfCnpj = document.getElementById('cpf-cnpj').value;

    // Exemplo de saída no console (você pode enviar para um servidor aqui)
    console.log({
        productName,
        brandName,
        category,
        description,
        price,
        cep,
        phone,
        email,
        cpfCnpj
    });

    alert('Produto adicionado com sucesso!');
});
