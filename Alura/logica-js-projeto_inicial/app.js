alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) +1;
let chute;
let tentativas = 1;
console.log(numeroSecreto);

// Enquanto chuter não for igual ao numeo secreto
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // se o chute for igual ao número secreto
    if( chute ==  numeroSecreto){
       break;
    }else{      
        if(chute > numeroSecreto  ){
            alert(`O número secreto e menor que: ${chute}`);
        }else{
            alert(`O número secreto e maior que: ${chute}`);
        }
        tentativas ++;
    } 
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if(tentativas > 1 ){
//     alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativas.`);
// }else{
//     alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativa.`);
// }
