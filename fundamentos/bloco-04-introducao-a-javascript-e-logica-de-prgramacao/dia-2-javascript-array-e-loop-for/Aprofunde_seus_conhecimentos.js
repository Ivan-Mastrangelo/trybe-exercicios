//1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  for (let i = 0; i < numbers.length; i += 1){
    console.log(numbers[i]);
  }
//2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let sum = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  for (let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
  }
    console.log(sum);

  //3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
  }
    console.log(sum / numbers.length);

//4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
};
if (sum > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
};

//5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNum = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (maiorNum < numbers[i]) {
    maiorNum = numbers[i]
  }
}
console.log(maiorNum);

//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numImpares = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    numImpares += 1;
  }
}
if (numImpares === 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(numImpares);
}

//7. Utilizando for , descubra qual o menor valor contido no array e imprima-o; 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNum = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menorNum) {
    menorNum = numbers[i]
  }
}
console.log(menorNum);







  

