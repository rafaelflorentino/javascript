/**
    window // Navegador, janela
    document // Documento, site

    alert("Hello word! 2");
    console.log("Oi");

 // Objeto ->  Método  ->       Selector ->     Propriedade
    document.querySelector("#exampleInputName").value
    document.querySelector("#exampleInputName").value = "Oi"; // muda o texto dentro do elemento
*/

/* Pegando conteudo do Formulário e pondo em Variáveis */
var name = document.querySelector("#exampleInputName");
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("exampleInputAdmin");


/* Mudando propriedades do elemento Selecionado */
var nome = document.querySelector("#exampleInputnome");
console.log(nome); // Pega o elemento inteiro
// console.log(nome.value); // Pega só o valor do elemento
// nome.style.color = "red"; // Mudar a cor do texto para vermelho

/*  Filtrando busca do formulário botão de rádio selecionado */
// querySelectorAll busca vários elementos, todos do tipo passado
var genero = document.querySelectorAll("#form-user-create [name=gender]:checked"); // [name=gender Busca elementos com name gender, e  :checked que estejam selecionados
console.log(genero);


/* Rotina para ler todos os elementos do formulario com name */
var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

// Para cada linha de código encontrada com campo name executa esse bloco de código:
fields.forEach(function(field, index){

    if(field.name == "gender"){
        if(field.checked){ //field.checked === true
            user[field.name] = field.value; // user.gender
        }
        
    }else{
        user[field.name] = field.value;
    }

   // console.log(field.id, field.name, field.value, field.checked, index); // Mostra id, nome, valor, checked, indice

});

console.log(user);

// Notação JSON
var data = { name: "Rafael", sobrenome: "Florentino", idade:29}
// console.log(data.name);
// console.log(typeof(data.idade));
