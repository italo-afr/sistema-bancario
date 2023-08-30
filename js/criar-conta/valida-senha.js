let letraMinuscula = document.getElementById("minuscula");
let letraMaiscula = document.getElementById("maiuscula");
let umNumero = document.getElementById("numero");
let caracterEspecial = document.getElementById("especial");
let minimo8 = document.getElementById("caracteres");

function checarSenha(data) {
  const regras = [
    { regex: new RegExp("(?=.*[a-z])"), element: letraMinuscula },
    { regex: new RegExp("(?=.*[A-Z])"), element: letraMaiscula },
    { regex: new RegExp("(?=.*[0-9])"), element: umNumero },
    { regex: new RegExp("(?=.*[!@#$%^&*])"), element: caracterEspecial },
    { regex: new RegExp("(?=.{8,30})"), element: minimo8 },
  ];

  for (const regra of regras) {
    if (regra.regex.test(data)) {
      regra.element.classList.add("valid");
    } else {
      regra.element.classList.remove("valid");
    }
  }
}
