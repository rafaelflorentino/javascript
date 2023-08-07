/**
    window // Navegador, janela
    document // Documento, site

    alert("Hello word! 2");
    console.log("Oi");

 // Objeto ->  Método  ->       Selector ->     Propriedade
    document.querySelector("#exampleInputName").value
    document.querySelector("#exampleInputName").value = "Oi"; // muda o texto dentro do elemento
*/

var nome = document.querySelector("#exampleInputName");
console.log(nome); // Pega o elemento inteiro
console.log(nome.value); // Pega só o valor do elemento
nome.style.color = "red"; // Mudar a cor do texto para vermelho