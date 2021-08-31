//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 5;
let ast;
let linha = '';
let quadrado;
for (let i_l = 1; i_l <= n; i_l += 1) {
    ast = ast + "*"
   
}
for (let i_ast = 1; i_ast <= n; i_ast += 1) {
    let quadrado = linha + ast;
    console.log(quadrado);    
}