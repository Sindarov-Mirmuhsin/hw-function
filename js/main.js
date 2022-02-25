var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elResult = document.querySelector(".btn");
var elPerson = document.querySelector(".p-result");
var elVelo = document.querySelector(".v-result");
var elCar = document.querySelector(".m-result");
var elSam = document.querySelector(".s-result");

var personSpeed = 3.6;
var veloSpeed = 20.1;
var carSpeed = 70;
var samSpeed = 800;

elForm.addEventListener("submit", function (event) {
  event.preventDefault();

  personItemTime();
  veloItemTime();
  carItemTime();
  samItemTime();
})

function personItemTime() {
  var elInputVal = elInput.value;
  var resultPersonTime = elInputVal / Math.round(personSpeed);
  elPerson.textContent = Math.round(resultPersonTime) + " soat";
}

function veloItemTime() {
  var elInputVal = elInput.value;
  var resultVeloTime = elInputVal / Math.round(veloSpeed);
  elVelo.textContent = Math.round(resultVeloTime) + " soat";
}

function carItemTime() {
  var elInputVal = elInput.value;
  var resultCarTime = elInputVal / Math.round(carSpeed);
  elCar.textContent = Math.round(resultCarTime) + " soat";
}

function samItemTime() {
  var elInputVal = elInput.value;
  var resultSamTime = elInputVal / Math.round(samSpeed);
  elSam.textContent = Math.round(resultSamTime) + " soat";
}