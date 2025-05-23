/**
 * Eksempel 1
 * Tilføjer/fjerner en css klasse med større skrifttype til alle elementer
 * Benytter metoden addEventListener til at lytte på et onclick event på knappen
 */
document.getElementById("example1").addEventListener("click", function () {
  //Henter array med alle child elementer til #contentarea
  let elements = document.querySelectorAll("#contentarea *");
  //Lopper array med elementer
  for (let i = 0; i < elements.length; i++) {
    //Tilføj klassen tx-big hvis den ikke eksisterer i et elements classList
    if (!elements[i].classList.contains("tx-big")) {
      elements[i].classList.add("tx-big");
    } else {
      //Ellers fjern klassen hvis den eksisterer i elementets classList
      elements[i].classList.remove("tx-big");
    }
  }
});

/**
 * Eksempel 2
 * Toggler en css klasse med større skrifttype til alle elementer
 * Anvender onclick metode direkte på getElementById metoden
 * Anvender forEach metode til at loope array med
 */
document.getElementById("example2").onclick = function () {
  //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet
  document.querySelectorAll("#contentarea *").forEach(function (element) {
    //Toggler class tx-big til elementernes classList
    element.classList.toggle("tx-big");
  });
};

function skiftTekst() {
  const heading = document.getElementById("myHeading");
  if (heading.innerText === "Javascript - Opgaver 1") {
    heading.innerText = "Jeg Ændrede Mig Altså Lige";
  } else {
    heading.innerText = "Javascript - Opgaver 1";
  }
}

function skiftParagraf() {
  const alleParagraffer = document.querySelectorAll("p");
  alleParagraffer.forEach(function (paragraf) {
    paragraf.style.color = "red";
  });
}

function roterLi() {
  const roterList = document.querySelectorAll("li");
  roterList.forEach(function (li) {
    li.classList.add("transform");
  });
}
