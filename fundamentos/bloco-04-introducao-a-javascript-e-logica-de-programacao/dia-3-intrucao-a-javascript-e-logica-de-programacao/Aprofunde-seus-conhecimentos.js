//1.Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let num = 7;
let line = '';
let ast = '*';

for (let i = 0; i < num; i += 1) {
  line = line + ast;
};
  for (let i = 0; i < num; i += 1) {
    console.log(line);
};

//2.  Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let num = 8;
let line = '';
let ast = '*';

for (let i = 0; i < num; i += 1) {
  line = line + ast;
  console.log(line);
};

//3. Agora inverta o lado do triângulo. Por exemplo:

let num = 5;
let ast = '*';
let line = '';
let position = num

for (let i = 0; i < num; i += 1) {
  for (let i = 0; i <= num; i += 1) {
    if (i < position) {
      line = line + ' ';
    } else {
      line = line + ast;
    }
  }
  console.log (line);
  line = '';
  position -= 1;
}

//4- Depois, faça uma pirâmide com n asteriscos de base:

let num = 5;
let ast = '*';
let line = '';
let middle = (num + 1) / 2;
let leftspace = middle;
let rightspace = middle;


for (let i = 0; i <= middle; i += 1) {
  for (let i = 0; i <= num; i += 1) {
    if (i > leftspace && i < rightspace) {
      line = line + ast;
    } else {
      line = line + ' ';
    }
  }
  console.log (line);
  line = '';
  rightspace += 1;
  leftspace -= 1;
}


