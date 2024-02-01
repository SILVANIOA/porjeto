  function processarTexto(operacao) {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var resultado = "";

    for (var i = 0; i < texto.length; i++) {
      var charCode = texto.charCodeAt(i);

      if (charCode >= 97 && charCode <= 122) {
        resultado += String.fromCharCode(((charCode - 97 + 26 + operacao) % 26) + 97);
      } else {
        resultado += texto[i];
      }
    }

    document.getElementById("resultado").textContent = resultado;
  }

  function copiarResultado() {
    var resultado = document.getElementById("resultado");
    var tempInput = document.createElement("input");
    tempInput.value = resultado.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
