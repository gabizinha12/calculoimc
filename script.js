
const res = document.getElementById("res");

function analisar() {
  let peso = parseFloat(document.getElementById("inputPeso").value);
  let altura = parseFloat(document.getElementById("inputAltura").value);
  const imc = (peso / altura * altura);
  res.innerHTML = ''
  if (imc < 18.5) {
    res.innerHTML += `Abaixo do peso`;
  } else if (imc == 18.5 && 24.9) {
    res.innerHTML += `Peso normal`;
  } else if (imc == 25 && 29.9) {
    res.innerHTML += `Sobrepeso`;
  }
  if (imc == 35 && 39.9) {
    res.innerHTML += `Obesidade 2`;
  } else if (imc > 40.0) {
    res.innerHTML += `Obesidade 3`;
  }
   res.innerHTML += `   Seu IMC é de ${imc} `
}
