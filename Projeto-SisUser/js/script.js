    /* Escutar botões clicados e chamar metodo ajax*/

    var btnCadastro = document.getElementById("cadastro");
    btnCadastro.addEventListener("click", () =>  carregarNovoConteudo("cadastro.html"), false);

    var btnBanco = document.getElementById("banco");
    btnBanco.addEventListener("click", () =>  carregarNovoConteudo("banco.html"), false);

    var btnJson = document.getElementById("json");
    btnJson.addEventListener("click", () =>  carregarNovoConteudo("json.html"), false);

    var btnSessao = document.getElementById("sessao");
    btnSessao.addEventListener("click", () =>  carregarNovoConteudo("sessao.html"), false);

    /* Fim escuta botões */


    /* Função AJAX para carregar conteudo html externo no index */

    function carregarNovoConteudo(url) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("content").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
   
    /* Fim função AJAX */

    /* Pegar informações do formulário */

    var btnCadastrar = document.getElementById("btn-cadastra");

    function cadastrar(event) {
        event.preventDefault();
        let nome = document.querySelector("#nome").value;
        let sobrenome = document.querySelector("#sobrenome").value;
        let telefone = document.querySelector("#telefone").value;
        let cpf = document.querySelector("#cpf").value;
        let email = document.querySelector("#email").value;
        let nascimento = document.querySelector("#nascimento").value;
        let senha = document.querySelector("#senha").value;
        let conSenha = document.querySelector("#conf-senha").value;
        //let genero = document.querySelector("#genero").value;
        let foto = document.querySelector("#foto").value;

        sessionStorage.setItem('nome', nome);
        sessionStorage.setItem('sobrenome', sobrenome);
        sessionStorage.setItem('telefone', telefone);
        sessionStorage.setItem('cpf', cpf);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('nascimento', nascimento);
        sessionStorage.setItem('senha', senha);
        sessionStorage.setItem('conSenha', conSenha);
        //sessionStorage.setItem('genero', genero);
        sessionStorage.setItem('foto', foto);


        var valorRecuperado = sessionStorage.getItem('nome');
        console.log("Valor recuperado da sessão:", valorRecuperado);
   

        // Validar campos vázios

        if(nome == "" || senha ==""){
            alert("Preencha todos os campos");
        }else{
            
            alert("Usuario: "+nome +" Logado com sucesso.");

            // Limpar inputs
            document.querySelector("#nome").value="";
            document.querySelector("#senha").value="";

            }    
             
        }       

    // lista elementos a sessão na tela

        // Verificando se a sessionStorage não está vazia
        if (sessionStorage.length > 0) {

                // Obtendo a referência ao elemento onde a lista será exibida
                var listaElemento = document.getElementById('content');

                // Iterando sobre os itens da sessionStorage e exibindo em parágrafos
                for (var i = 0; i < sessionStorage.length; i++) {
                    var chave = sessionStorage.key(i);
                    var valor = sessionStorage.getItem(chave);

                    // Criando um novo parágrafo para cada elemento
                    var paragrafo = document.createElement('p');
                    paragrafo.textContent = chave + ': ' + valor;

                    // Adicionando o parágrafo à listaElemento
                    listaElemento.appendChild(paragrafo);
                }
        } else {
            console.log('sessionStorage está vazia.');
        }





    

   



    


