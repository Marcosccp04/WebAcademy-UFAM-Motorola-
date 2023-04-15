function gerarCorAleatoria() {
  var hexa = "0123456789ABCDEF";
  var cor = "#";
  var i = 0;
  for (i; i < 6; i++) {
    cor += hexa[Math.floor(Math.random() * 16)];
  }
  return cor;
}

function popula() {
  var div, corBackground, corTitulo, contador;
  contador = parseInt(
    prompt("Informe a quantidade de tabuadas (entre 1 e 10): ")
  );
  
  while (contador < 1 || contador > 10)
    contador = parseInt(
      prompt("Informe a quantidade de tabuadas (entre 1 e 10): ")
    );

  const cls = document.querySelector(".tabuada");

  for (j = 1; j < contador + 1; j++) {
    corBackground = gerarCorAleatoria();
    corTitulo = gerarCorAleatoria();

    while (corBackground == corTitulo) corTitulo = gerarCorAleatoria();

    div = document.createElement("div");
    div.classList.add(".tab");
    div.style.backgroundColor = corBackground;
    div.innerHTML += `<p class="titulo" style="color:${corTitulo};">${j}</p>`;

    for (k = 1; k < 11; k++) {
      total = j * k;
      div.innerHTML += `<p class="conteudoTabuada">${j} X ${k} = ${total}</p>`;
    }
    cls.appendChild(div);
  }
}
