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

