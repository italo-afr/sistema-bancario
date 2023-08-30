const formularioLogin = document.querySelector("[data-formulario-login]");

function mostrarMensagemSucesso(mensagem) {
  const mensagemSucesso = formularioLogin.querySelector(".mensagem-sucesso");
  mensagemSucesso.textContent = mensagem;
  // Defina um tempo para limpar a mensagem após alguns segundos (opcional)
  setTimeout(() => {
    mensagemSucesso.textContent = "";
  }, 3000); // A mensagem será removida após 3 segundos (3000 milissegundos)
}

formularioLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target.elements["email"].value;
  const senha = e.target.elements["senha"].value;

  const cadastroJSON = localStorage.getItem("cadastro");
  if (cadastroJSON) {
    const cadastro = JSON.parse(cadastroJSON);
    if (cadastro.email === email && cadastro.senha === senha) {
      // Login bem-sucedido, exibir mensagem de sucesso
      mostrarMensagemSucesso("Login realizado com sucesso!");
      // Redirecionar para a próxima página após o login
      window.location.href = "../pages/4-pag-loginsucesso.html";
    } else {
      // Credenciais incorretas, exibir mensagem de erro
      const mensagemErro = formularioLogin.querySelector(".mensagem-erro1");
      mensagemErro.textContent = "Credenciais inválidas. Por favor, tente novamente.";
      
      // Limpar mensagem de sucesso, se houver
      const mensagemSucesso = formularioLogin.querySelector(".mensagem-sucesso");
      mensagemSucesso.textContent = "";
    }
  } else {
    // Usuário não cadastrado, exibir mensagem de erro
    const mensagemErro = formularioLogin.querySelector(".mensagem-erro1");
    mensagemErro.textContent = "Usuário não cadastrado. Por favor, crie uma conta primeiro.";

    // Limpar mensagem de sucesso, se houver
    const mensagemSucesso = formularioLogin.querySelector(".mensagem-sucesso");
    mensagemSucesso.textContent = "";
  }
});
