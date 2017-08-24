		
/* window objeto raiz*/

function janela(){
	var largura = window.innerWidth; // innerWidth mostra a largura do browser
	console.log("largura da browser: "+largura);

	var titulo = window.document.title; // .document.title pega o título da página
	console.log("título da página: "+titulo);

}
//janela();

/* Função ligar/desligar lampada*/	

function ligar() {
	
	var imagem = document.getElementById('lampada'); //busca o elemento pelo id e salva na variável
	//var imagem = document.querySelector("#lampada");
 
	if(imagem.src == "http://localhost/js/images/lampada_desligada.png"){
		imagem.src = "images/lampada_ligada.png";
		imagem.classList.add("ligado"); // adiciona classe ao elemento
	}else{
		imagem.src = "images/lampada_desligada.png";
		imagem.classList.remove("ligado"); // remove a classe do elemento
	}
}


/* Função Pegar nome*/

function nome(){
	var nome = prompt("Qual e o seu nome? "); // abre uma janela recebendo dados
	//alert("prazer em conhecer você "+nome);
	console.log("prazer em conhecer você "+nome);
}

//nome();

/* Operador ternário e delete*/

function ternario(){
	var idade = 19;
	var x = (idade >= 18) ? "maior de idade" : "menor de idade";// se sim retorna maior, se não retorna menor
	console.log(x);


	var pessoa = {
		nome: "Fulano"
	}
	console.log("variável: "+pessoa.nome);
	delete pessoa.nome; // Deleta variável do elemento, no caso o nome objeto pessoa
	console.log("variável foi deletada: "+pessoa.nome);
}
//ternario();


/* Operador in*/

function operadorIn(){
	var pessoa = {
		nome: "Fulano"
	}

	console.log("verifica se existe nome em pessoa: "+ ("nome" in pessoa)); // verifica se exite o atributo nome dentro de pessoa
	console.log("verifica se existe telefone em pessoa: "+ ("telefone" in pessoa));
}
//operadorIn()


/* Operador new e instanceof , objeto Number */

function numbers(){

	var idade = new Number(31); // new cria um novo obeto
	var numT = new Number(31.263423);
	console.log("corta as casas decimais "+ numT.toFixed(2));// corta as casas decimais
	console.log("mostra o número inicial, com a precisão que caiba "+numT.toPrecision(8));// mostra o número inicial, com a precisão que caiba
	console.log("notação cietífica "+numT.toExponential());// retorna a notação cietífica com a precisão necesseria para representa-lo
	var abc = new String("rafael");

	console.log("verifica se o objeto e do tipo especificado: "+(idade instanceof Number)); // verifica se o objeto e do tipo especificado
	console.log("verifica se é uma instancia de String: "+(idade instanceof String));// verifica se é uma instancia de String
	console.log(abc.valueOf() );
	console.log(typeof(abc.toString() ));
	console.log(typeof(abc.valueOf() ));

}
//numbers();


/* Objeto String */

function strings(){

	var str = new String("rafael rafael fb fb");
	var reg = /fb/ ;  // regex sempre começa entre barras /dfasd/ ou //var reg = new RegExp();

	document.write(str);// .write e writeln está em desuso, imprime na página, não recomendado, por acessibilidade
	document.writeln(str.length);// length quantidade de caracteres
	document.writeln(str.charAt(2) + "<br />");// retorna um caractere na posição especifica de 0 a última posição
	document.writeln(str.charAt(str.length -1) + "<br />"); // encontra última posição
	document.writeln(str.concat(" Javascript") + "<br />");// concatena o novo texto com a string
	document.writeln(String.fromCharCode(115, 123, 234) + "<br />");// retorna o código da letra
	document.writeln(str.indexOf("fae") + "<br />");// retorna a posição onde aparece a primeira ocorrência da palavra na string
	document.writeln(str.lastIndexOf("fae") + "<br />");// onde aparece a última ocorrência
	document.writeln(str.match(reg) + "<br />");// regex, todas as ocorrências de fb
	document.writeln(str.replace("fb","florentino") + "<br />");// renomeia a primeira ocorrência de fb para florentino
	document.writeln(str+ "<br />");
	document.writeln(str.substring(5,9) + "<br />");// retorna uma nova string com texto que começa do índice 5 ao 9
	// substring começa do índice menor ate o maior: substring(5,9) ou substring(9,5) da no mesmo
	document.writeln(str.substr(0,9) + "<br />");// informa o índice inicial mais 9(8 pq 0) caracteres a frente
	document.writeln(str.slice(0,8)+ "<br />");// corta de um index ao outro
	// slice e mais rigoroso que o substring não aceita índices trocados slice(5,9)
	document.writeln(str.split(" "), str.split(" ")[3]+ "<br />");// recorta e salva em nova string, o que está entre o caractere escolhido  
	document.writeln(str.toUpperCase() + "<br />");
	document.writeln(str.toLowerCase() + "<br />");

	// Itens em desuso, muda as propriedades css do item

	document.writeln( "<br />"+ str.big() + "<br />");
	document.writeln(str.big() + "<br />");
	document.writeln(str.blink() + "<br />");
	document.writeln(str.sup() + "<br />");
	document.writeln(str.strike() + "<br />");
	document.writeln(str.bold() + "<br />");
	document.writeln(str.italics() + "<br />");
	document.writeln(str.small() + "<br />");
	document.writeln(str.link() + "<br />");
	document.writeln(str.fontcolor() + "<br />");

}
//strings();


/* Operador this e typeof */

function operadorThis(){

	console.log(this.document.title); // == window.document.title, o this referêcia o objeto
	console.log(typeof(3)); // informa o tipo do dado (3 = Number)

	var abc= "rafael"
	console.log(abc.length); //tipo primitivo string se transforma em String, ocorre o mesmo que na linha de baixo
	console.log(new String(abc).length);// trasforma em um objeto para o comando depois volta a ser primitivo
	
	var a = new String("asdd");
	console.log(typeof(a));// tipo Object String não mais primitivo string

}
//operadorThis();


/* Estrutura condicional switch */

function sexo(sex){

var sexo = sex.toLowerCase();
	switch (sexo){
		case "m":
			console.log("Macho");
			break;
		case "f":
			console.log("Fêmea");
			break;
		case "java":
		case "C":
		case "php":
			console.log("é uma linguagem de programação");
			break;			
		default:
			console.log("Indefinido");							
	}
}

//sexo("M");


/* Função que calcula IMC */

function calcularImc(){

	var formulario = document.getElementById("formulario");

	var kilos = +formulario.kilos.value;
	var metros = +formulario.metros.value;
	var centimetros = +formulario.centimetros.value;

	var altura = (metros * 100 + centimetros)/ 100;
	var imc = kilos / (altura * altura);

	formulario.imc.value = imc.toFixed(2);
	
	//var node = document.createElement("P");   // Create a <p> node
	//var textnode = document.createTextNode("Abaixo do Peso");  // Create a text node
	//node.appendChild(textnode);  // Append the text to 
	//document.getElementById("mensagem").appendChild(node);  // Append to	

	if(imc < 20){		
		alert("Abaixo do Peso");
		document.getElementById("mensagem").innerHTML="Abaixo do Peso";// mud o texto do P

	}else if(imc >= 20 && imc <= 25){
		alert("Peso ideal");
		document.getElementById("mensagem").innerHTML="Peso ideal";

	}else if(imc >= 25 && imc <= 30){
		alert("Sobrepeso");
		document.getElementById("mensagem").innerHTML="Sobrepeso";

	}else if(imc >= 30 && imc <= 35){
		alert("Obesidade Moderada");
		document.getElementById("mensagem").innerHTML="Obesidade Moderada";

	}else if(imc >= 35 && imc <= 40){
		alert("Obesidade Severa");
		document.getElementById("mensagem").innerHTML="Obesidade Severa";

	}else if(imc >= 40 && imc <= 50){
		alert("Obesidade Morbida");
		document.getElementById("mensagem").innerHTML="Obesidade Morbida";

	}else{
		alert("Super Obesidade");
		document.getElementById("mensagem").innerHTML="Super Obesidade";

	}

    //alert("Formulário enviado com sucesso");
    //document.formulario.submit();   // Submeter formulario

}

/* Função for incremental com break*/

function contar(){
	for(var i=0; i<10; i++){

		//console.log(i);

		if(i == 5){
			//console.log("FIM");
			break;
		}
		
	}
var numeros = new Array("um","dois","tres");
	for(var i=0; numeros.length; i++){//for ( i in numeros){console.log(numeros[i]);}
		console.log(numeros[i]);
	}
}

//contar();

/* Função for in*/


function carros(){

var Carro = {
	marca : "Nissan",
	modelo : "350z",
	comprimento : "3.345km/h",
	cavalos : "350"
}

var Carro2 = {

	"carros" : [ 

		{
			"marca" : "Nissan",
			"modelo" : "350z",
			"comprimento" : "3.345km/h",
			"cavalos" : "350"
		},
		{
			"marca" : "Fiat",
			"modelo" : "Paliio Weekend",
			"comprimento" : "4.565km/h",
			"cavalos" : "480"
		}

	],
	"moto" : "1100"
}

	for ( car in Carro){
		console.log(car+" = "+ Carro[car]);
	}

	for ( car in Carro2.carros){
		console.log(Carro2.carros[car]);
	}	
	
}

//carros();

/* Função while do while*/

function loop(){

var i=0;
	while( i<3){
		//console.log(i);
		i++;	
	}	


var text = "";
var i = 0;
do { //faz o primeiro loop 
    text += " The number is " + i;
    i++;
    console.log(text);
}
while (i < 5);// verifica se a condicao e verdadeira

}
//loop();

/* Tratando erros */

function erro(){

	try{
		var x = a;
		var b = x +10;
		alert(b);
	} catch(e){ // pegas os erros
	  alert(e.name+" - "+ e.message);// nome do erro e mensagem do erro
	  alert(e.toString());
	} finally { // finally serve para executar algum código, caso ocorra algum erro ou não
	  alert("entrou no finally");
	}
}
//erro();


function erro2(){

	var x = prompt("Informe um numero maior que 10");// janela de entrada de dados

	try{

		if(x < 10){
			throw "Numero menor que 10";// salva um erro, excessão
		}

		alert("numero : "+x+" aceito");
		
	} catch(e){ // catch recebe, pega os erros
	  	alert(e.toString());// imprimindo as informações do erro 
	} 
}
//erro2();


/* Comando with */


function cmdWith(){

	var Carro = {
		"marca" : "Nissan",
		"modelo" : "350z",
		"potencia" : {
			"velocidade" : "3.345km/h",
			"cavalos" : "350"
		}

	};

	with(Carro.potencia){ // with torna mais facil de chamar a variável
		alert("velocidade = "+ velocidade);
		alert("cavalos = "+ cavalos);
	}

}
//cmdWith();

function arrayObject(){

	// sitaxe tradicional

	var paises = new Array("Brasil", "Rússia", "Índia", "China", "Rússia");

	//var paises = new Array();
		paises[0]= "Brasil";
		paises[1]= "Rússia";
		paises[2]= "Índia";
		paises[3]= "China";
		paises[4]= "Rússia";


	// sitaxe literal

	var paises = ["Brasil", "Rússia", "Índia", "China", "Rússia"];

	console.log(paises[0]);// acessando país na posição 0 do array
	console.log(paises);
	paises[0]= "BRAZIL";// acessando e renomeado o conteudo sa posição 1 do array
	console.log(paises[0]);
	console.log("Quantidade de itens no array: "+paises.length);// quantidade de itens no array
	console.log("Quantidade de caracteres do ítem Brasil: "+paises[0].length);// quantidade de caracteres do ítem

	for(var i = 0; i < paises.length; i++){
		console.log(paises[i]);
	}

	console.log("Possição do primeiro index da palavra Rússia: "+paises.indexOf("Rússia"));
	console.log("Possição do ultimo index da palavra Rússia: "+paises.lastIndexOf("Rússia"));

	var palavra = "rafael";

	console.log("Imprimindo as letras, posições da palavra ");
	for(var i = 0; i < palavra.length; i++){
		console.log(palavra[i]);
	}	

	console.log("itens da arrray na ordem inversa: "+paises.reverse());// ordem inversa do array
	console.log("Ordena em ordem alfabética : "+paises.sort());// ordem alfabética 

	console.log("Alterando separador padrão ',' para ';' : "+paises.join(";"));// alterar separador padrão
	console.log("Concatenando mais países no array  "+paises.concat("EUA","Argentina"));// concatenando array

	var frutas = new Array("Banana", "Pera", "Maça", "Abacate", "Uva");

	console.log("Frutas: "+frutas);
	console.log("slice(3): "+frutas.slice(3));// elementos a partir do terceiro índice 
	console.log("slice(2,4): "+frutas.slice(2,4));// elementos do índice[2] até o índice[4] 
	console.log("removeu: "+frutas.splice(2,3,"goiaba","manga"));// remove a partir do índice[2] tres elementos, e adiciona no lugar deles goiaba e manga
	console.log("elementos que restaram agora: "+frutas);

	var pessoas = ["Rafael","Maria","Pedro","Ana"]

	console.log("Pessoas: "+pessoas);
	console.log("Adicionando Janaina: "+pessoas.push("Janaina"));// adiciona no final do array, fila
	console.log("Ficou Assim: "+pessoas);
	console.log("Removendo o primeiro elemento do array: "+pessoas.shift());// remove primeiro ítem do array, fila
	console.log("Ficou Assim: "+pessoas);
	console.log("Removendo o ultimo elemento do array: "+pessoas.pop());// remove ultimo ítem do array, fila
	console.log("Ficou Assim: "+pessoas);
	console.log("Adicionando no inicio da fila: "+pessoas.unshift("Fura Fila"));// adiciona no inicio do array, fila
	console.log("Ficou Assim: "+pessoas);	
}
//arrayObject();

function arrayAvancado(){

	// Arrays Multidimensionais "[ ]" utiliza-se colchetes

	var pessoas = new Array();
	pessoas[0] = new Array("Ricardo","M"); // Array multidimencional 2 dimensões, array dentro de array

	var pessoas = [
		["Ricardo","M"],
		["Amanda","F"],
		[["carro","Masculino"],["Moto","Feminina"]]
	];

	console.log(pessoas[0][0]);// acessando nome
	console.log(pessoas[0][1]);// acessando sexo

	console.log("Segundo elemento da matrix: pessoas[1][0]e pessoas[1][1], Nome = "+ pessoas[1][0] +" Sexo = "+ pessoas[1][1]);
	console.log("Terceiro nivel matrix: pessoas[2][0][0] e pessoas[0][0][1], Nome = "+ pessoas[2][0][0] +" Sexo = "+ pessoas[2][0][1] );
	console.log("Terceiro nivel matrix: pessoas[2][1][0] e pessoas[0][1][1], Nome = "+ pessoas[2][1][0] +" Sexo = "+ pessoas[2][1][1] );


	// Arrays Associativas "{ }" utiliza-se chaves

	var pessoa = {nome:"Beatriz", cidade:"Brasília"};

	console.log("Nome: "+pessoa.nome+" Cidade: "+pessoa.cidade); // acessando as atributos
	console.log("Nome: "+pessoa["nome"]+" Cidade: "+pessoa["cidade"]);


	

}
//arrayAvancado();

function arrayAvancadoMais(){

/* Função verifica se todos elementos da array são strings (every()) */

	var frutas2 = ["Banana", "Pera", "Maça", "Abacate", "Uva",12,"laranja" ];
	var frutas3 = ["Banana", "Pera", "Maça", "Abacate", "Uva","laranja"];

	function todos(elem, ind, obj){
		return (typeof elem == "string"); // verifica se todos são do tipo string, frutas2.every(todos)
	}

	function algum(elem, ind, obj){
		return (typeof elem == "number"); // verifica se pelo menos um item e do tipo number, frutas2.some(todos)
	}

	function filtrar(elem, ind, obj){
		return (elem.indexOf("an") > 0); // filtra e traz todos elementos que tem "an" no nome
	}

	function transformar(elem, ind, obj){
		return (elem = elem.toUpperCase()); // transforma todos os elementos em maiúsculo, frutas3.map(transformar) 
		//return (elem += "ZZZzZZZzzzZZ"); // adicionar o texto em todos elementos
		//return (elem = elem * 12);// se for array de números
	}
	console.log(frutas2);
	console.log("Verifica se todos são tipo String: "+frutas2.every(todos)); //se tiver número ou outros tipos retorna false
	console.log("Verifica se existe pelo menos um tipo number: "+frutas2.some(algum));
	console.log(frutas3); 
	console.log("Filtra e traz todos elementos que tem 'an' no nome: "+frutas3.filter(filtrar)); 
	console.log("Deixar tudo em maiúsculo: "+frutas3.map(transformar)); // nao aceita numeros na array, da erro

}
//arrayAvancadoMais();


/* Date */

function datas(){

	var dias = ["domnigo", "segunda", "terça", "quarta", "quinta", "sexta", "sabado"]
    var mes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

	var data = new Date();// criando uma data hora atual
	console.log(data);
	console.log(" ");

	var data1 = new Date("Jul/20/2011 02:30:35");
	console.log(data1);

	data1.setFullYear(2016);// inserir um novo ano na data
	data1.setDate(26);// insere outro dia do mês
	data1.setMonth(10);// outro mês
	

	console.log("Hora atual da data: "+data1.getHours());	
	console.log("Hora Universal: "+data1.getUTCHours());
	console.log("Dia do mês: "+data1.getDate());
	console.log("Dia da semana: "+data1.getDay());
	console.log("Dia da semana: "+dias[data1.getDay()]);// usando array dias pegar nome do dia
	console.log("Ano com quatro dias: "+data1.getFullYear());
	console.log("Milisegundos: "+data1.getMilliseconds());
	console.log("Minutos: "+data1.getMinutes());
	console.log("Mês: "+data1.getMonth());
	console.log("Nome do mês: "+mes[data1.getMonth()]);
	console.log("Segundos: "+data1.getSeconds());
	console.log("Quantidade total de millisegundos: "+data1.getTime());
	console.log("Diferença em minutos da hora do Brasil, para hora universal GMT: "+data1.getTimezoneOffset());
	console.log("Número de millisegundo de uma data inserida: "+Date.parse(data1));
	console.log("Converte data em uma string: "+data1.toDateString());	
	console.log("Converte data em uma string com a configuração do pais: "+data1.toLocaleDateString());	

    // formas de declarar data

	console.log(" ");console.log(" ");
	var data3 = new Date(123456); // (milisegundos) (+) futuro apartir de 01/01/1970.... (-) anteriror a essa data	
	console.log(data3);

	var data4 = new Date("Jul/20/2011 02:30:35"); // (Data String) passando a data
	console.log(data4);

	var data5 = new Date(2011, 2); //começa contar o mes na posição 0, no caso cair mes 1 não 2
	console.log(data5);

	var data6 = new Date(2011, 2, 22, 4, 35, 30, 1234); //Tue Mar 22 2011 04:35:31 
	console.log(data6);

}
//datas();


/* Math calculos */

function calculos(){

	console.log("Calculo de PI: "+2* Math.PI * 30);// 2* PI * raio
	console.log("Valor absoluto do numero: "+Math.abs(-3));
	console.log("Maior numero no conjunto: "+Math.max(-2,1,6,8,7,9));
	console.log("Maior numero no conjunto: "+Math.min(-2,3,1,6,8,7,9));
	console.log("Arredondo pro inteiro mais póximo: "+Math.round(3.7));
	console.log("Arredonda sempre pra baixo: "+Math.floor(3.3));
	console.log("Arredonda sempre pra cima: "+Math.ceil(3.3));
	console.log("Eleva a potência: "+Math.pow(2,2));
	console.log("Extrai a raiz quadrada do número: "+Math.sqrt(4));
	console.log("Numero randômico de 0 ate 1: "+Math.random());
	console.log("Numero randômico de 0 ate 10: "+Math.random()*10);
    console.log("Numero inteiro randômico de 0 ate 10 : "+Math.ceil(Math.random()*10));
	console.log("Numero inteiro de 1 ate 10 : "+Math.ceil(Math.random()*10 +1));
    console.log("Eleva o numero de Euler a potência: "+Math.exp(3));
    console.log("Extrai o logaritimo natural do número: "+Math.log(3));
    console.log("Valor do seno: "+Math.sin(3));
    console.log("Valor do coseno: "+Math.cos(3));
    console.log("Valor da tangente: "+Math.tan(3));
    console.log("Valor numérico em radiano representando o arco, cujo seno informado: "+Math.asin(0));
    console.log("Valor numérico em radiano representando o arco, cujo coseno informado: "+Math.acos(0));
	console.log("Valor numérico entre -PI/2 e PI/2 representando o arco em radianos cujo a tangente informada : "+Math.atan(3));
	console.log("Valor numérico entre -PI e PI representando o arco em radianos cujo a tangente e igual ao conciente dos 2 paramentros informada : "+Math.atan2(1,1));
}
//calculos();


/* Expressões regulares */

function regex(){

	// Funções e Modificadores

	var string = "JavaScript";
	var regex = new RegExp("JavaScript");// criando regex
	//var regex = /JavaScript/;// criando usando a sixtaxe literal
	console.log("Verifica na string se existe o padrão: "+regex.test(string));// função verifica se exite o padrão


	var regex = /javascript/i; //new RegExp("JavaScript", i);// o "i" ignora case sensitive
	console.log("Ignorar maiuculo e minusculo: "+regex.test(string));// função verifica se exite o padrão
	console.log("Forma simplificada: "+/javascript/i.test("JavaScript"));// simplificando
	console.log("Retorna só primeira ocorrêcia encontrada: "+/doce/i.exec("Qual é o Doce mais doce que o doce?"));// primeira ocorrência da palavra
    console.log("Retorna só primeira ocorrêcia encontrada mais vai ate o final com 'G': "+/doce/ig.exec("Qual é o Doce mais doce que o doce?"));
    var str = "Qual é o Doce mais doce que o doce?";
    console.log("Pega todos as referências encontradas: "+str.match(/doce/ig));

    // Metacaracteres

	console.log(" ");
    console.log("/./ Verifica se existe algum número ou caractere: "+/./.test("Pier21"));// "/./"  verifica acorrencia de algum numero ou caractere
	console.log("/\\w/ Verifica ocorrencia de caracteres: "+/\w/.test("Pier"));//  
	console.log("/\\s/ Verifica ocorrência de espaço ' ' : "+/\s/.test("Pier 21"));
	console.log("/\\d/ Verifica ocorrência de números' ' : "+/\d/.test("Pier 21"));
    console.log("/^/ Verifica ocorrência de algo no inicio da string : "+/^21/.test("21Pier 21"));
    console.log("/$/ Verifica ocorrência de algo no final da string : "+/21$/.test("21Pier21"));
    console.log("/\\d$/ Dígito no final do texto : "+/\d$/.test("21Pier21"));
    console.log("/\\d\\d$/ Dois dígitos no final do texto : "+/\d$/.test("21Pier21"));
	console.log("/^\\d\\d\\d\\d\\d-\\d\\d\\d$/ verifica CEP : "+/^\d\d\d\d\d-\d\d\d$/.test("70294-070"));

	//  Quantificadores

	console.log(" ");
	console.log("/\\d*/ Verifica 0 ou mais ocorrências dígitos : "+/\d*/.test("70294-070"));
	console.log("/\\d+/ Verifica 1 ou mais ocorrências dígitos : "+/\d+/.test("70294-070"));
	console.log("/\\d?/ Verifica 0 ou 1 ocorrências dígitos : "+/\d?/.test("70294-070"));
	console.log("/\\d{2}/ Escolhe a quantidade de vezes de ocorrências : "+/\d{2}/.test("awa702"));
	console.log("/^\\d{3}/ Três dìgitos no início : "+/^\d{3}/.test("123awa702"));
	console.log("/^\\d{5}-\\d{3}/ Verifica CEP melhor : "+/^\d{5}-\d{3}/.test("70294-070"));
	console.log("/^\\d{2}\/\\d{2}\/\\d{4}$ Validação data : "+/^\d{2}\/\d{2}\/\d{4}$/.test("12/02/1980"));
	console.log("/^\\d{2}\/\\d{2}\/\\d{4,2}$ Validação data 2 ou quatro números no final : "+/^\d{2}\/\d{2}\/\d{2,4}$/.test("12/02/80"));//erro aceita 3 080
	console.log("/\\w+@\\w+\\.\\w{2,3}/ verifica email : "+/\w+@\w+\.\w{2,3}/.test("rafael@gmail.com"));


	// Caracteres Opcionais

	console.log(" ");
	console.log("/c[ae]u/ para ceu ou cau Agrupados : "+/c[ae]u/.test("ceu"));
	console.log("/\\d[\\d\\,]*/  23,45 vários números com virgula : "+/\d[\d\,]*/.test("23,45"));

	// Buscas e substituições
	console.log(" ");
	var str2 = "Qual é o Doce mais doce que o doce?";
	console.log(str2);
    console.log(" "+str2.match(/doce/ig));// pega todas as ocorrêcias	
    console.log(" "+str2.replace(/doce/ig, "DOCINHO"));	// renomeia a ocorrência

	var str2 = "O rato roeu a roupa do rei de roma";
	console.log(" "+str2.match(/r[a-z]/ig));
	console.log(" "+str2.replace(/r[a-z]/ig, "XXXX"));

	var url ="www.xti.com.br/clientes-2011.html";
	var url2 ="www.xti.com.br/clientes-2011.html";
	//"http://www.xti.com.br/2011/clientes.jsp"

	var re= /www.xti.com.br\/\w{2,}-\d{4}\.html/;
	console.log("Buscando url: "+re.test(url));

	var reg= /(www.xti.com.br)\/(\w{2,})-(\d{4})\.html/;// /(www.xti.com.br)\ =$1 por causa dos parenteses
	// salva pedaco na variaves $1, $2, $3
	console.log(url2.replace(reg, "http://$1/$2/$3.jsp"));

}
//regex();


function validar() {
	var formulario = document.getElementById("formulario-valida");
	var cpf =  formulario.cpf;
	var email = formulario.email;

	var re_cpf = /^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/;
	var re_email=/^([\w-]+(\[\w-]+)*)@(( [\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\.[a-z]{2})?)$/i;

	if(re_cpf.test(cpf.value)){
		alert("CPF Válido");
		cpf.value = cpf.value.replace(re_cpf,"$1.$2.$3-$4");
	}else{
		alert("CPF Inválido, deve ter 11 numeros sem . ou -");
	}

	if(re_email.test(email.value)){
		alert("Email Válido");
	}else{
		alert("Email Inválido");
	}	   
}


/* Funções */


// Função Declarativa

function somar(x,y){

	console.log("Soma:"+x+"+"+y+"="+(x+y));
	return x+y;
}
//console.log(somar(2,3));


// Função Anônima

var somar2 = new Function("x","y","alert(x+y);");
//somar2(2,3);


//Função Literal

var somar3 = function(x,y){
	console.log("Soma:"+(x+y));
}
//somar3(2,5);


/* Funçâo Forma mais correta, Normalizada*/


// ------------------------------------------------------------------------------------------------------------------
	// ERRADA 

	/*document.getElementById("imagemImc").onclick = function(){
		alert("Teste");
	}*/

	// Da Erro dessa forma porque elemento img ainda não foicarregado na página, e a função ja chama o elemento
	// ou chama o arquivo .js no final da pagina,pois ja vai ter carregado tudo, ou cria a função correta
// ------------------------------------------------------------------------------------------------------------------

	// CORRETA

/*window.onload = function(){// espera toda pagina carregar para so assim executar a função
	document.getElementById("imagemImc").onclick = function(){
		alert("Teste");
	}
}*/

/*window.addEventListener ("load", function () {
	document.getElementById("imagemImc").onclick = function(){
		alert("Teste");
	}
});*/



function bom(){
	alert("você quer ser milionario");
	confirm("você quer ser milionario");// janela com botão ok e cancel
	prompt("você quer ser milionario");// janela com campo de texto e botão
	window.open("popUp.html", "xti","width=300,height=300,toobar=no,location=no");// abre um popup
	//window.resizeTo(300,300);// nao funcionou , redimenciona tamanho da janela
	//window.moveTo(300,300);// nao funcionou , muda a posição da janela
    //document.getElementById("testePop").innerHTML="<h1>TESTE DO innerHTML</h1>";// não funcionou, link popUp
	


   
// navigation

    //alert(window.navigator.platform);// informa sua plataforma
    //alert(navigator.userAgent);// seu browser
   // alert(navigator.language);// idioma usado

   var plugins = navigator.plugins;
   var p="";

   for (var i = 0; i < plugins.length; i++) {
   	p += plugins[i].name + "\n";
   }
    alert(p);// mostra os plugins instalados no navegador
  //alert(location.href);// localização do site
  //alert(location.protocol);// protocolo utilizado
  //alert(screen.width);// largura da janela
  //alert(screen.height);// altura da janela

  //alert(history.go(2));


}
//bom();


// Comentários

	/* onclick="alert('clicou');" // quando clicar dispara um evento
	   onmouseover="alert('passou por cima');" //quando mouse passar por cima dispara o evento
	   <body onload="alert('carregou');">// quando o elemento carregar dispara o evento
	*/	