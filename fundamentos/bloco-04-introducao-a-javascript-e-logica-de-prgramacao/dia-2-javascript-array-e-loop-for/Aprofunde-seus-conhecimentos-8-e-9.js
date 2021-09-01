//8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado.
let novoArray = [];

for (let i = 1; i <= 25; i += 1) {
  novoArray.push(i);
}

console.log(novoArray);

//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let novoArray = [ 1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ];

for (let i = 0; i < novoArray.length; i += 1) {
  console.log(novoArray[i] / 2);
}


