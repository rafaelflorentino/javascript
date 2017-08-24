
//----Pega todas as divs na página---------
 
/* jQuery */
$("div")
 
/* Equivalente nativo */
document.getElementsByTagName("div")
 
//----Pega todos pela classe CSS---------
 
/* jQuery */
$(".my-class")
 
/* Equivalente nativo */
document.querySelectorAll(".my-class")
 
/* Equivalente nativo RÁPIDO */
document.getElementsByClassName("my-class")
 
//----Pega pelo seletor CSS----------
 
/* jQuery */
$(".my-class li:first-child")
 
/* Equivalente nativo */
document.querySelectorAll(".my-class li:first-child")
 
//----Pega o primeiro elemento pelo seletor CSS----
 
/* jQuery */
$(".my-class").get(0)
 
/* Equivalente nativo */
document.querySelector(".my-class")


// ------------------------------ ########### ---------------------------------------------- //


//----"Anexa" (append) elementos HTML----
 
/* jQuery */
$(document.body).append("<div id='myDiv'><img src='im.gif'/></div>");
 
/* Equivalente nativo ruim */
document.body.innerHTML += "<div id='myDiv'><img src='im.gif'/></div>";
 
/* Equivalente nativo MUITO MELHOR */
var frag = document.createDocumentFragment();
 
var myDiv = document.createElement("div");
myDiv.id = "myDiv";
 
var im = document.createElement("img");
im.src = "im.gif";
 
myDiv.appendChild(im);
frag.appendChild(myDiv);
 
document.body.appendChild(frag);
 
//----"Precede" (prepend) elementos HTML----
 
// Mesmo que o acima, exceto pela última linha
document.body.insertBefore(frag, document.body.firstChild);


// ------------------------------ ########### ---------------------------------------------- //


// Pegando a referência do elemento no DOM


var el = document.querySelector(".main-content");
 
//----Adicionando uma classe------
 
/* jQuery */
$(el).addClass("someClass");
 
/* Equivalente nativo */
el.classList.add("someClass");
 
//----Removendo uma classe-----
 
/* jQuery */
$(el).removeClass("someClass");
 
/* Equivalente nativo */
el.classList.remove("someClass");
 
//----Verificando se tem uma classe---
 
/* jQuery */
if($(el).hasClass("someClass"))
 
/* Equivalente nativo */
if(el.classList.contains("someClass"))


// ------------------------------ ########### ---------------------------------------------- //


// Pegando a referência do elemento no DOM
var el = document.querySelector(".main-content");
 
//----Especificando múltiplas propriedades CSS----
 
/* jQuery */
$(el).css({
  background: "#FF0000",
  "box-shadow": "1px 1px 5px 5px red",
  width: "100px",
  height: "100px",
  display: "block"
});
 
/* Equivalente nativo */
el.style.background = "#FF0000";
el.style.width      = "100px";
el.style.height     = "100px";
el.style.display    = "block";
el.style.boxShadow  = "1px 1px 5px 5px red";