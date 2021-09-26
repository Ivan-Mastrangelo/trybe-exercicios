//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const anguloA = 60;
const anguloB = 40;
const anguloC = 80;

let somaDosAngulos = anguloA + anguloB + anguloC;

let todosAngulosSaoPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0; 

if (todosAngulosSaoPositivos) {
   if (somaDosAngulos === 180) {
       console.log(true);
} else {
    console.log(false);
};
} else {
    console.log('Erro: ângulo inválido');
}
