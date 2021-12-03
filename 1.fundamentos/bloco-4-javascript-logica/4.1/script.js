/* const myName = 'Samuel';
const birthCity = 'Americana';
let birthYear = 2001;
console.log(myName);
console.log(birthCity);
console.log(birthYear);
birthYear = 2030;
console.log(birthYear);
birthCity = 'São Paulo';
console.log(birthCity); */

/* let base = 5;
let altura = 8;
let area = base * altura;
let perimetro = base + base + altura + altura;
console.log(area);
console.log(perimetro); */

/* let nota = 55.5;
if (nota >= 80) {
  console.log('Parabéns, você foi aprovada(o)!');
} else if (nota >= 60) {
  console.log('Você está na nossa lista de espera');
} else {
  console.log('Você foi reprovada(o)!');
}
 */

let estado = 'reprovado';

switch (estado) {
  case 'aprovado':
    console.log('Parabéns, você foi aprovada(o)!');
    break;
  case 'lista':
    console.log('Você está na nossa lista de espera');
    break;
  case 'reprovado':
    console.log('Você foi reprovada(o)!');
    break;
  default:
    break;
}