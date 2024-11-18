document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = form.querySelector('input[type="submit"]');
    const nomeField = document.getElementById('nome');
    const emailField = document.getElementById('email');
    const profissaoSelect = document.getElementById('Profissao');
    const esportesContainer = document.querySelector('.esportes');
    
    form.addEventListener('input', function() {
        const nome = nomeField.value.trim();
        const email = emailField.value.trim();
        submitButton.disabled = !nome || !email;
    });
    
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert('Formulário enviado com sucesso!');
    });

    profissaoSelect.addEventListener('change', function() {
        const selectedValue = this.value;
        if (selectedValue === 'desempregado') {
            esportesContainer.style.display = 'none';
        } else {
            esportesContainer.style.display = 'block'; 
        }
    });
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = 'lightblue'; 
        });
        input.addEventListener('blur', function() {
            this.style.borderColor = ''; 
        });
    });
});
