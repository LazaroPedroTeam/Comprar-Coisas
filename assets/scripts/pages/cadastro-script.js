const btnCadastro = document.querySelector('.btn-cadastro');
const email = document.querySelector('input[type="email"]');
const senha = document.querySelector('input[type="password"]');
const nome = document.querySelector('.nome');
const sobreNome = document.querySelector('.sobrenome');

function validaRegex(emailVeri) {
    const emailVerificador = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailVerificador.test(emailVeri);
}
function confereBotao() {
    const emailVeri = email.value;
    const senhaVeri = senha.value.trim();
    const nomeVeri = nome.value.trim();
    const sobreVeri = sobreNome.value.trim();

    if (validaRegex(emailVeri) && senhaVeri && nomeVeri && sobreVeri) {
      btnCadastro.disabled = false;
    } else {
      btnCadastro.disabled = true;
    }
  }
  email.addEventListener('input', confereBotao);
  senha.addEventListener('input', confereBotao);
  nome.addEventListener('input', confereBotao);
  sobreNome.addEventListener('input', confereBotao);

  btnCadastro.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "perfil-page.html";
  });
