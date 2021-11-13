let pai = document.querySelector('#elementoOndeVoceEsta').parentElement;
    pai.style.color = '#ccc';

let filhoDoFilho = document.querySelector('#elementoOndeVoceEsta').firstElementChild;
primeiroFilho.innerHTML = 'Senhoras e senhores';

let primeiroFilhoPai = document.querySelector('#pai').firstElementChild;
let primeiroFilhoIrmao = document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
let atencao = document.querySelector('#elementoOndeVoceEsta').nextSibling;
let terceiro = document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
let terceiroPai = document.querySelector('#pai').children[2];

let paiIrmao = document.querySelector('#pai');
let irmao = document.createElement('section');
paiIrmao.appendChild(irmao);

let ondeEstou = document.querySelector('#elementoOndeVoceEsta');
let meuFilho = document.createElement('section');
ondeEstou.appendChild(meuFilho);

let filhoDoFilho2 = document.querySelector('#primeiroFilhoDoFilho');
let filhoDoFilhoDoFilho = document.createElement('section');
filhoDoFilho2.appendChild(filhoDoFilhoDoFilho);

let paiFilhoDoFilho2 = filhoDoFilho2.parentElement;

let remover1 = document.querySelector('#primeiroFilho').remove();
let remover2 = document.querySelector('#segundoEUltimoFilhoDoFilho').remove();
let remover3 = document.querySelector('#terceiroFilho').remove();
let remover4 = document.querySelector('#quartoEUltimoFilho').remove();
