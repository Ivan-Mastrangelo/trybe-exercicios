//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let pecaDeXadrez = 'Rainha';

switch (pecaDeXadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Em qualquer diração, apenas uma casa');
    break;
  case 'rainha':
    console.log('Rainha-> Em qualquer direção');
    break;
  case 'bispo': 
    console.log('Bispo-> Diagonais');
    break;
  case 'cavalo':
    console.log('Cavalo-> Em "L", três casas, podendo pular as outra peças');
    break;
  case 'torre':
    console.log('Torre-> Horizontal e vertical');
    break;
  case 'peão':
    console.log('Peão-> Uma casa à frente,tem apção de andar duas casas na primeira movimentação e come a peça adversária na diagonal');
    break;
  default:
    console.log('Não há peça com esse nome') 
}