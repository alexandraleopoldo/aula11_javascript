document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calcular();
  }
});

function calcular() {
  let txtv = window.document.querySelector("input#txtvel");
  let res = window.document.querySelector("div#res");
  let vel = Number(txtv.value);
  res.innerHTML = ` <p>
        Sua velocidade atual é de <strong>${vel}km/h</strong>
      </p>`;
  if (vel > 60) {
    res.innerHTML += ` <p>
          Você está <strong>MULTADO</strong> por excesso de velocidade.
        </p>`;
  } else if (vel <= 0) {
    res.innerHTML += `<p>Você está parado!</p>`;
  }
  res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`;
}

