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
  var elInputVal = Number(elInput.value);
  var resultPersonTime = Math.round(elInputVal / personSpeed);
  var time1 = elInputVal / personSpeed;
  var m1 = resultPersonTime - time1;
  var min1 = (m1 * 60);
  var s1 = min1 - Math.round(min1);
  var sekund1 = Math.round(s1 * 60);
  elPerson.textContent = Math.round(resultPersonTime) + " soat " + Math.round(min1) + " minut " + Math.round(sekund1) + " sekund";
  if (elInputVal > 0) {
    return resultPersonTime = Math.round(elInputVal / personSpeed);
  }if (elInputVal < 0) {
    return elPerson.textContent = `Iltimos musbat son kiriting!`
  }if (elInputVal == 0) {
    return elPerson.textContent = `Iltimos 0 dan katta son kiriting!`
  }if (elInputVal = "") {
    return elPerson.textContent = `Iltimos son kiriting!`
  }else {
    return elPerson.textContent = `Iltimos keyinroq urinib ko'ring`
  }
}

function veloItemTime() {
  var elInputVal = Number(elInput.value);
  var resultVeloTime = Math.round(elInputVal / veloSpeed);
  var time2 = elInputVal / veloSpeed;
  var m2 = time2 - resultVeloTime;
  var min2 = (m2 * 60);
  var s2 = min2 - Math.round(min2);
  var sekund2 = Math.round(s2 * 60);
  elVelo.textContent = Math.round(resultVeloTime) + " soat " + Math.round(min2) + " minut " + Math.round(sekund2) + " sekund";
  if (elInputVal > 0) {
    return resultVeloTime = Math.round(elInputVal / personSpeed);
  } if (elInputVal < 0) {
    return elVelo.textContent = `Iltimos musbat son kiriting!`
  } if (elInputVal == 0) {
    return elVelo.textContent = `Iltimos 0 dan katta son kiriting!`
  } if (elInputVal = "") {
    return elVelo.textContent = `Iltimos son kiriting!`
  } else {
    return elVelo.textContent = `Iltimos keyinroq urinib ko'ring`
  }
}

function carItemTime() {
  var elInputVal = Number(elInput.value);
  var resultcarTime = Math.round(elInputVal / carSpeed);
  var time3 = elInputVal / carSpeed;
  var m3 = time3 - resultcarTime;
  var min3 = (m3 * 60);
  var s3 = min3 - Math.round(min3);
  var sekund3 = Math.round(s3 * 60);
  elCar.textContent = Math.round(resultcarTime) + " soat " + Math.round(min3) + " minut " + Math.round(sekund3) + " sekund";
  if (elInputVal > 0) {
    return resultCarTime = Math.round(elInputVal / personSpeed);
  } if (elInputVal < 0) {
    return elCar.textContent = `Iltimos musbat son kiriting!`
  } if (elInputVal == 0) {
    return elCar.textContent = `Iltimos 0 dan katta son kiriting!`
  } if (elInputVal = "") {
    return elCar.textContent = `Iltimos son kiriting!`
  } else {
    return elCar.textContent = `Iltimos keyinroq urinib ko'ring`
  }
}

function samItemTime() {
  var elInputVal = Number(elInput.value);
  var resultSamTime = Math.round(elInputVal / samSpeed);
  var time4 = elInputVal / samSpeed;
  var m4 = time4 - resultSamTime;
  var min4 = (m4 * 60);
  var s4 = min4 - Math.round(min4);
  var sekund4 = Math.round(s4 * 60);
  elSam.textContent = Math.round(resultSamTime) + " soat " + Math.round(min4) + " minut " + Math.round(sekund4) + " sekund";
  if (elInputVal > 0) {
    return resultSamTime = Math.round(elInputVal / personSpeed);
  } if (elInputVal < 0) {
    return elSam.textContent = `Iltimos musbat son kiriting!`
  } if (elInputVal == 0) {
    return elSam.textContent = `Iltimos 0 dan katta son kiriting!`
  } if (elInputVal = "") {
    return elSam.textContent = `Iltimos son kiriting!`
  } else {
    return elSam.textContent = `Iltimos keyinroq urinib ko'ring`
  }
}