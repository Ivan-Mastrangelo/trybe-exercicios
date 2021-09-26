function changeText() {
  let paragraph = document.getElementsByTagName("p")[1];
  paragraph.innerText =
  "Em dois anos me vejo trabalhando para uma empresa bem situada no mercado de técnologia e com a qual meus valores casam com os da empresa. Será um trabalho realizado em um sistema híbrido,presencial e home-ofice. E o salário será justo.";
}
changeText();

function changeSquaresColors() {
  let squares = document.getElementsByClassName("main-content")[0];
  squares.style.backgroundColor =
  "rgb(76,164,109)";
}
changeSquaresColors();

function changeRectangleColor() {
  let rectangle = document.getElementsByClassName("center-content")[0];
  rectangle.style.backgroundColor =
  "white";
}
changeRectangleColor();

function correctTitle() {
  let title = document.getElementsByTagName("h1")[0];
  title.innerText = "Exercício 5.1 - JavaScript";
}
correctTitle();

function uppercaseParagraph() {
  let letters = document.getElementsByTagName("p")[0];
  letters.innerText = letters.innerText.toUpperCase();
}
uppercaseParagraph();

function showParagraphsConsole() {
  let allParagraphs = document.getElementsByTagName("p");

for (let i = 0; i < allParagraphs.length; i += 1) {
  console.log(allParagraphs[i].innerHTML);
}
}
showParagraphsConsole();

