// Criar uma função que exibe "Olá, mundo!" no console.
function ola(){
    console.log('Olá, Mundo!');
}
ola();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function boasVindas(nome){
    console.log(`Olá ${nome}`);
}
boasVindas('Ana');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
numero = 10;
function dobro(num){
    return numero * 2;
}
console.log(dobro(numero));

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
let num1 = 9, num2 = 9, num3 = 10;
function media(num1, num2, num3){
    return  (num1 + num2 + num3) / 3;
}
let mediaNumeros = media(num1, num2, num3);
console.log(mediaNumeros);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
let primeiro = 8;
let segundo = 8;
function maior(num1, num2){
    if(num1 > num2){
        return num1;
    }else if(num2> num1){
        return num2
    }else{
        return `Os números são iguais: ${num1}`;
    }
}
console.log(maior(primeiro,segundo));

// com ternário
function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumero = encontrarMaior(15, 9);
  console.log('O numero maior e: '+maiorNumero);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplica(numero){
    return numero * numero;
}
let numeroEscolhido = multiplica(5)
console.log(numeroEscolhido);

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculaIMC(altura, peso){

    let imc = peso / (alturaMetros * alturaMetros);
  }
// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Exemplo de uso
  numero = 3;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 6.10;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
  
  // Exemplo de uso
  let valorEmDolar = 50;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  // Exemplo de uso
  let altura = 3; // em metros
  let largura = 5; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  numero = 7;
  mostrarTabuada(numero);

// Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
 linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
nomes = ['JavaScript', 'Python', 'Go'];
console.log(nomes[0]);

// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
nomes = ['JavaScript', 'Python', 'Go'];
console.log(nomes[1]);

// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
nomes = ['JavaScript', 'Python', 'Go'];
console.log(nomes[2]);