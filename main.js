function mostrarFlores() {
  document.getElementById('title1').style.display = 'none';
  document.getElementById('title2').style = 'block';

  const finalDaPagina = document.getElementById('flowersContent');

  const opcoesScroll = {
      behavior: 'smooth',  
      block: 'end'
  };

finalDaPagina.scrollIntoView(opcoesScroll);
  const c = setTimeout(() => {
    document.getElementById('flowersContent').classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
}

function jumpscare() {
  window.location.href = 'https://www.youtube.com/watch?v=dCj1BWdFYSY';
}

function redirectScreen() {
  var input1 = document.getElementById('nomeInput').value;
  var input2 = document.getElementById('dataNascInput').value;
  var input3 = document.getElementById('anosInput').value;

  if(input1 !== null && input2 !== null && input1 !== null) {
      var queryString = `?input1=${encodeURIComponent(input1)}&input2=${encodeURIComponent(input2)}&input3=${encodeURIComponent(input3)}`;
      window.location.href = 'flowers.html' + queryString;
  }
}

function getParametros() {
    var queryString = window.location.search;
    queryString = queryString.substring(1);

    var parametros = queryString.split('&');

    var paramsObj = {};
    parametros.forEach(param => {
        var [key, value] = param.split('=');
        paramsObj[key] = decodeURIComponent(value);
    });

    return paramsObj;
}

function getNomeCompleto() {
  param = getParametros();
  param = param.input1.replaceAll('%20', ' ');
  return param;
}

function getDataNasc() {
  param = getParametros();
  return param.input2;
}

function getIdadeCalculada() {
  param = getParametros();
  dataNascimento = getDataNasc();

  var partes = dataNascimento.split('/');
  var dia = parseInt(partes[0], 10);
  var mes = parseInt(partes[1], 10) - 1;
  var ano = parseInt(partes[2], 10);

  var dataNasc = new Date(ano, mes, dia);
  var hoje = new Date();

  var idade = hoje.getFullYear() - dataNasc.getFullYear();
  var mesDiferenca = hoje.getMonth() - dataNasc.getMonth();

  // Ajustar a idade se o aniversário ainda não tiver ocorrido no ano atual
  if (mesDiferenca < 0 || (mesDiferenca === 0 && hoje.getDate() < dataNasc.getDate())) {
      idade--;
  }

  return param.input3 - idade;
}