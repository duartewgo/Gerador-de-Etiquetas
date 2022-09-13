const inputext1 = document.querySelector("#inputext1")
const button1 = document.querySelector("#btn1")
const etiqueta1 = document.querySelector("#code72_one")
const textEtiqueta1 = document.querySelector("#content_one")

const inputext2 = document.querySelector("#inputext2")
const button2 = document.querySelector("#btn2")
const etiqueta2 = document.querySelector("#code72_two")
const textEtiqueta2 = document.querySelector("#content_two")


const inputext3 = document.querySelector("#inputext3")
const button3 = document.querySelector("#btn3")
const etiqueta3 = document.querySelector("#code72_tree")
const textEtiqueta3 = document.querySelector("#content_tree")


const asterisco = "*"

button1.addEventListener("click", function() {
  etiqueta1.innerHTML = (asterisco + inputext1.value + asterisco).toUpperCase()
  textEtiqueta1.textContent = inputext1.value.toUpperCase()


  const canvas = document.getElementById('canvas');
  if (canvas.getContext) {
      const ctx = canvas.getContext('2d');  
      ctx.font = '90px codigo72';

      var comAsterisco = asterisco + inputext1.value + asterisco;
      
      const messages = [
        comAsterisco,
        inputext1.value
      ];

      y = 60;
      for (var i in messages) {
        ctx.fillText(messages[i], 0, y);
        ctx.font = '25px Arial'
        y += 108;
      }
      
  }

})


button2.addEventListener("click", function() {
    etiqueta2.innerHTML = (asterisco + inputext2.value + asterisco).toUpperCase()
    textEtiqueta2.textContent = inputext2.value.toUpperCase()

})


button3.addEventListener("click", function() {
    etiqueta3.innerHTML = (asterisco + inputext3.value + asterisco).toUpperCase()
    textEtiqueta3.textContent = inputext3.value.toUpperCase()

})

var canvas = document.getElementById("receipt");
var context = canvas.getContext("2d");

const messages = [
  "################################",
  "Central Jogos",
  "################################",
  "Apostador: test",
  "Valor apostado: R$ 5,00",
  "Valor de retorno: R$ 6,15",
  "Data da aposta: 19/02/2017 15:07",
  "Quantidade de jogos: 1",
  "--------------------------------",
  "Vasco X Flamengo",
  "Empate: 1.23",
  "10/03/2017 15:30",
  "================================",
  "Cambista: Cambista Teste",
  "Telefone: (82) 9977-8877"
];

context.font = "12px Courier new";

y = 12;
for (var i in messages) {
  context.fillText(messages[i], 0, y);
  y += 18;
}

document.getElementById("result").src = context.canvas.toDataURL();
