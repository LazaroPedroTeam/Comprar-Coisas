    const emailConfirir = document.querySelector('input[type="email"]');
    const senha = document.querySelector('input[type="password"]');
    const btnEntrar = document.querySelector('.btn-entrar');
    const btnGoogle = document.querySelector('.btn-google');
    const btnFaceBook = document.querySelector('.btn-facebook');
    const btnX = document.querySelector('.btn-X');
    
    function validaRegex(email) {
      const emailVerificador = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailVerificador.test(email);
    }
  
    function confereBotao() {
      const email = emailConfirir.value;
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

    btnGoogle.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiOr_DZz5CKAxUwBbkGHZz7GjYQFnoECBcQAQ&url=https%3A%2F%2Faccounts.google.com%2F%3Fhl%3Dpt-br&usg=AOvVaw2WqmF5H0k2I1DoAjNEpYhX&opi=89978449";
  });

  btnFaceBook.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "perfil-page.html";
});

btnX.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "perfil-page.html";
});

  