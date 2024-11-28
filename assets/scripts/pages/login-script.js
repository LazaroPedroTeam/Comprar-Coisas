    const emailConfirir = document.querySelector('input[type="email"]');
    const senha = document.querySelector('input[type="password"]');
    const btnEntrar = document.querySelector('.btn-entrar');
    
    function validaRegex(email) {
      const emailVerificado = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailVerificado.test(email);
    }
  
    function confereBotao() {
      const email = emailConfirir.value.trim();
      const senhaSus = senha.value.trim();
  
      if (validaRegex(email) && senhaSus) {
        btnEntrar.disabled = false;
      } else {
        btnEntrar.disabled = true;
      }
    }
    emailConfirir.addEventListener('input', confereBotao);
    senha.addEventListener('input', confereBotao);
  
    btnEntrar.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "perfil-page.html";
    });
