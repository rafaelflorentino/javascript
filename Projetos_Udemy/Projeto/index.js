var helloWorld = "Hello World:!"; // variável comum.
let a = 10; // variável temporaria so acessa dentro do arquivo.
const b = "10"; // = variaves contante valor nunca muda.

console.log(helloWorld);
console.log('Olá mundo!');
//alert("Hello World!") // Caixa de mensagem na pagina

let c = 10; // = de atribuição.
// Comparação
console.log(a == b); // == comparar o valor de duas expressões.
console.log(a === b); // === irá comparar o valor e o tipo de dados.
console.log(a != b); // Verifica se é diferente.

console.log(a == b && typeof b == 'string'); // E logico.
console.log(a == b || typeof a == 'string'); // OU lógico.

// Controle de Fluxo

// IF ElSE 
let cor = "verde";

if (cor === "verde") { // Compara valor e tipo
    console.log("Siga");
} else if (cor === "amarelo") {
    console.log("Atenção");
} else {
    console.log("Pare");
}

// Switch
cor = "vermelho";
switch (cor) {
    case "verde":
        console.log("Siga");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "vermelho":
        console.log("Pare");
        break;
    default:
        console.log("Não sei");
        break; // não necessário no deafault
}

// For
let n= 7;
for (let i = 0; i <= 10; i++) {
    console.log(`${i} X ${n} = ${i*n}`); // Template string
    //console.log(i +" X "+  n + " = " +  (i*n)); // Equivalente concatenando
}

// Funções
function somar(x1, x2){
    return x1 + x2;
}
let resultado = somar(1,2);
console.log(resultado)
console.log(somar(5,2));

// Usando eval
function calc(x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`); // eval interpreta a string como codigo, soma, subitrai etc depededo do sinal passado
}
console.log(calc(5,5,"+"));

// Função anônima
(function(x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`);
})(1, 2, "*");
console.log(resultado);

// Arrow function
let calculo = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`)
}

let resultado3 = calc(1, 2, "*");
console.log(resultado3);


// Eventos

// Focus (caso perca o foco e retorne na pagina ativa)
// window (janela navegador) 
window.addEventListener('focus', event =>{ // fica esperando escuntadno accontecer addEventListener um evento para disparar
    console.log("focus");
})

// document (dentro do corpo)
document.addEventListener('click', event =>{
    console.log("click");
})

// Date

let agora = Date.now(); // Unix Timestamp (quantidade de segundos contados até agora desde 01/01/1970)
console.log(agora);// esta em milisegundos

let data = new Date();
console.log(data); // vêm em inglês
console.log(data.getDate()); // pega só o dia
console.log(data.getFullYear()); // pega só o ano
console.log(data.getMonth()); // pega só o mes começa a contaar do 0 (0 = janeiro, 1 = fevereiro etc)

console.log(data.toLocaleDateString("pt-BR")); // formata data no padrao do pais que vc dej
