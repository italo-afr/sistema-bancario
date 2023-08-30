import ehUmCPF from "../criar-conta/valida-cpf.js";
import ehMaiorDeIdade from "../criar-conta/valida-idade.js";
const camposDoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const listaRespostas = {
    nome: e.target.elements["nome"].value,
    senha: e.target.elements["senha"].value,
    email: e.target.elements["email"].value,
    cpf: e.target.elements["cpf"].value,
    aniversario: e.target.elements["aniversario"].value,
  };

  localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

  window.location.href = "../pages/2-pag-cadastro.html";
});

camposDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

const tiposDeErro = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError",
];

const mensagens = {
  nome: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido.",
  },
  senha: {
    valueMissing: "O campo de senha não pode estar vazio.",
    patternMismatch: "Por favor, preencha uma senha válida.",
    tooShort: "Por favor, preencha uma senha válido.",
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um email válido.",
  },
  cpf: {
    valueMissing: "O campo de CPF não pode estar vazio.",
    patternMismatch: "Por favor, preencha um CPF válido.",
    customError: "O CPF digitado não existe.",
    tooShort: "O campo de CPF não tem caractéres suficientes.",
  },
  aniversario: {
    valueMissing: "O campo de data de nascimento não pode estar vazio.",
    customError: "Você deve ser maior que 18 anos para se cadastrar.",
  },
  termos: {
    valueMissing: "Você deve aceitar nossos termos antes de continuar.",
  },
};

// Verificação das senhas 
var password = document.getElementById("senha"),
  confirm_password = document.getElementById("confirmSenha");

function validatePassword() {
  const mensagemErro = confirm_password.parentNode.querySelector(".mensagem-erro");
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Senhas diferentes!");
    mensagemErro.textContent = "As senhas não correspondem.";
  } else {
    confirm_password.setCustomValidity("");
    mensagemErro.textContent = "";
  }
}
confirm_password.onblur = validatePassword; // Adicionar evento quando o campo de confirmSenha perde o foco
password.onchange = validatePassword; // Adicionar evento quando o campo de senha é digitado
confirm_password.onkeyup = validatePassword; // Adicionar evento quando o campo de confirmSenha é digitado


function verificaCampo(campo) {
  let mensagem = "";
  campo.setCustomValidity("");
  if (campo.name == "cpf" && campo.value.length >= 11) {
    ehUmCPF(campo);
  }
  if (campo.name == "aniversario" && campo.value != "") {
    ehMaiorDeIdade(campo);
  }
  //if (campo.name == "senha" && campo.value != "") {
  //   ehUmaSenha(campo);
  //}
  tiposDeErro.forEach((erro) => {
    if (campo.validity[erro]) {
      mensagem = mensagens[campo.name][erro];
      console.log(mensagem);
    }
  });
  const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
  const validadorDeInput = campo.checkValidity();

  if (!validadorDeInput) {
    mensagemErro.textContent = mensagem;
  } else {
    mensagemErro.textContent = "";
  }
}
