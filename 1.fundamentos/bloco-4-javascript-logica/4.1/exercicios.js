/* Exercicio 1
let a = 5;
let b = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); */

/* Exercicio 2
let num1 = 11;
let num2 = 10;
if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
} */

/* Exercicio 3
let num1 = 11;
let num2 = 10;
let num3 = 12;
if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2);
} else if (num3 > num1 && num3 > num2){
  console.log(num3);
} */

/* Exercicio 4
let valor = -45;
if (valor > 0) {
  console.log('Positive');
} else if (valor < 0) {
  console.log('Negative');
} else {
  console.log('Zero');
} */

/* Exercicio 5
let a = -1;
let b = 60;
let c = 60;
let soma = a + b + c;
if (a < 0 || b < 0 || c < 0) {
  console.log('[ERRO] Valor inválido.');
} else if (soma === 180) {
  console.log(true);
} else {
  console.log(false);
} */

/* Exercicio 6 
let pecaXadrez = 'Padre';
pecaXadrez = pecaXadrez.toLocaleLowerCase();
switch (pecaXadrez) {
  case 'torre':
    console.log('Torre -> Frente, Trás, Esquerda, Direita');
    break;
  case 'cavalo':
    console.log('Cavalo -> Anda em L');
    break;
  case 'bispo':
    console.log('Bispo -> Diagonais');
    break;
  case 'rei':
    console.log('Rei -> Todos os lados (apenas uma casa)');
    break;
  case 'rainha':
    console.log('Rainha -> Todos os lados (Quantas casas quiser)');
    break;
  case 'peao':
    console.log('Peão -> Para frente (pode andar duas casas no primeiro movimento)');
    break;
  default:
    console.log('[ERRO] Peça inválida');
    break;
} */

/* Exercicio 7
let nota = 49;
if (nota < 0 || nota > 100) {
  console.log('[ERRO] Nota inválida');
} else if (nota >= 90) {
  console.log('Nota = A');
} else if (nota >= 80) {
  console.log('Nota = B');
} else if (nota >= 70) {
  console.log('Nota = C');
} else if (nota >= 60) {
  console.log('Nota = D');
} else if (nota >= 50) {
  console.log('Nota = E');
} else {
  console.log('Nota = F');
} */

/* Exercicio 8
let a = 7;
let b = 3;
let c = 5;
if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
} */

/* Exercicio 9
let a = 2;
let b = 6;
let c = 8;
if (a % 2 == 1 || b % 2 == 1 || c % 2 == 1) {
  console.log(true);
} else {
  console.log(false);
} */

/* Exercicio 10
let custo = 100;
let valor = 150;
let lucro = valor - (custo + (custo * (20 / 100)));
if (custo < 0 || valor < 0) {
  console.log('[ERRO] Valores inválidos');
} else {
  console.log(`Lucro ao vender 1000 produtos R$ ${lucro * 1000}`);
} */

/* Exercicio 11 */
let salarioBruto = 1556.94;
let salario;
let liquido;

if (salarioBruto <= 1556.94) {
  salario = salarioBruto - (salarioBruto * (8 / 100));
} else if (salarioBruto <= 2594.92) {
  salario = salarioBruto - (salarioBruto * (9 / 100));
} else if (salarioBruto <= 5189.82) {
  salario = salarioBruto - (salarioBruto * (11 / 100));
} else {
  salario = salarioBruto - 570.88;
}

if (salario <= 1903.98) {
  console.log(`R$ ${salario.toFixed(2)}`);
} else if (salario <= 2826.65) {
  liquido = salario - (salario * (7.5 / 100) - 142.80);
  console.log(`R$ ${liquido.toFixed(2)}`);
} else if (salario <= 3751.05) {
  liquido = salario - (salario * (15 / 100) - 354.80);
  console.log(`R$ ${liquido.toFixed(2)}`);
} else if (salario <= 4664.68) {
  liquido = salario - (salario * (22.5 / 100) - 636.13);
  console.log(`R$ ${liquido.toFixed(2)}`);
} else {
  liquido = salario - (salario * (27.5 / 100) - 869.36);
  console.log(`R$ ${liquido.toFixed(2)}`);
}