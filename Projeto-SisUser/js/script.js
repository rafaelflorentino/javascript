
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

    let usuarios = [];


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

        // Impede a pagina de carregar
        event.preventDefault();

        // Salvando valores em variáveis
        let nome = document.querySelector("#nome").value;
        let sobrenome = document.querySelector("#sobrenome").value;
        let telefone = document.querySelector("#telefone").value;
        let cpf = document.querySelector("#cpf").value;
        let email = document.querySelector("#email").value;
        let nascimento = document.querySelector("#nascimento").value;
        let senha = document.querySelector("#senha").value;
        let confSenha = document.querySelector("#conf-senha").value;
        //let genero = document.querySelector("#genero").value;
        let foto = document.querySelector("#foto").value;

        // salvando dados na array

        let registro = new Pessoa(nome, sobrenome, telefone, cpf, email, nascimento, senha, confSenha, foto);
        usuarios.push(registro); 

        //gravarArquivo(registro);

        // Validar campos vázios

        if(nome == "" || senha ==""){
            alert("Preencha todos os campos");
        }else{
            
            alert("Usuario: "+nome +" Logado com sucesso.");

            // Limpar inputs
            document.querySelector("#nome").value="";
            document.querySelector("#senha").value="";

        }  

        // Chamando funcões

        criarObjeto(nome, sobrenome, telefone, cpf, email, nascimento, senha, confSenha, foto);

        criarSessao(nome, sobrenome, telefone, cpf, email, nascimento, senha, confSenha, foto);
    
        criarPessoa(nome, sobrenome, telefone, cpf, email, nascimento, senha, confSenha, foto);            
             
    }   
        
        
    function criarObjeto(name, surname, telephone, cpf, email, birth, password, confPassword, Photograph){
            
        // Criando um objeto
        const objeto = {
            nome: name,
            sobrenome: surname,
            telefone: telephone,
            cpf : cpf,
            email : email,
            nascimento : birth,
            senha : password,
            confSenha : confPassword,
            //genero : genero,
            foto : Photograph         
        }; 

            console.log('objeto criado: ');
            console.log(objeto);
            criaJson(objeto);
    }
    
    
    function criaJson(objeto){
        
        // Converter o objeto para uma string JSON
        const dadosJSON = JSON.stringify(objeto, null, 2); // O terceiro argumento (2) adiciona espaçamento para melhor legibilidade
        console.log("Criando Json:");
        console.log(dadosJSON);
    }

    function lerJson() {
        // Caminho do arquivo JSON
        const caminhoArquivo = 'js/arquivoJson.json';
    
        // Usando fetch para carregar o arquivo JSON
        fetch(caminhoArquivo)
            .then(response => {
                // Verifica se a resposta está OK (código 200)
                if (!response.ok) {
                    throw new Error(`Erro ao carregar o arquivo JSON. Código de resposta: ${response.status}`);
                }
                return response.json(); // Converte a resposta para JSON
            })
            .then(data => {
                console.log('Dados do arquivo JSON:', data);

                for(let i=0; i<data.length; i++){

                    var listaJson = document.getElementById('lista-json');
                    
                    // Criando um novo parágrafo para cada elemento
                    var paragrafo = document.createElement('p');
                    paragrafo.textContent = `Nome: ${data[i].nome}, sobrenome: ${data[i].sobrenome}`;
                    
                    // Adicionando o parágrafo à listaElemento
                    listaJson.appendChild(paragrafo);
                
                }
    
              
            })
            .catch(error => {
                console.error('Erro durante a leitura do arquivo JSON:', error);
            });
    }



    function criarSessao(nome, sobrenome, telefone, cpf, email, nascimento, senha, confSenha, foto){

        // Verificar se o sessionStorage já tem a chave 'pessoas'
        if (sessionStorage.getItem('pessoas')) {

            // Se já existe, recuperar os dados, adicionar o novo objeto e salvar novamente
            const pessoas = JSON.parse(sessionStorage.getItem('pessoas'));
            pessoas.push({ nome, sobrenome, telefone, cpf, email, nascimento, senha, confSenha, foto });
            sessionStorage.setItem('pessoas', JSON.stringify(pessoas));
        } else {
            // Se não existe, criar um novo array com o objeto e salvar
            const pessoas = [{ nome, sobrenome, telefone, cpf, email, nascimento, senha, confSenha, foto }];
            sessionStorage.setItem('pessoas', JSON.stringify(pessoas));
        }        
/*
             // Criando uma sessão e salvando os dados nela
             sessionStorage.setItem('nome', nome);
             sessionStorage.setItem('sobrenome', sobrenome);
             sessionStorage.setItem('telefone', telefone);
             sessionStorage.setItem('cpf', cpf);
             sessionStorage.setItem('email', email);
             sessionStorage.setItem('nascimento', nascimento);
             sessionStorage.setItem('senha', senha);
             sessionStorage.setItem('confSenha', confSenha);
             //sessionStorage.setItem('genero', genero);
             sessionStorage.setItem('foto', foto);
             recuperaSessao();
 */    
             
    }

    function exibirPessoas() {
        const listaPessoas = document.getElementById('listaPessoas');
        listaPessoas.innerHTML = ''; // Limpar a lista
      
        // Obter os dados do sessionStorage
        const pessoas = JSON.parse(sessionStorage.getItem('pessoas')) || [];
      
        // Exibir os dados na lista
        pessoas.forEach(pessoa => {
          const itemLista = document.createElement('li');
          itemLista.textContent = `Nome: ${pessoa.nome}, Sobrenome: ${pessoa.sobrenome}`;
          listaPessoas.appendChild(itemLista);
          console.log(pessoa);
        });
      }

    function recuperaSessao(){
        // Pegando valores da sessão
        var nomeSessao = sessionStorage.getItem('nome');
        var sobrenomeSessao = sessionStorage.getItem('sobrenome');
        var telefoneSessao = sessionStorage.getItem('telefone');
        var cpfSessao = sessionStorage.getItem('cpf');
        var emailSessao = sessionStorage.getItem('email');
        var nascimentoSessao = sessionStorage.getItem('nascimento');
        var senhaSessao = sessionStorage.getItem('senha');
        var confSenhaSessao = sessionStorage.getItem('confSenha');
        var fotoSessao = sessionStorage.getItem('foto');
        console.log("Nome recuperado da sessão:", nomeSessao);  
        console.log("sobrenome recuperado da sessão:", sobrenomeSessao); 
        console.log("telefone recuperado da sessão:", telefoneSessao); 
        console.log("cpf recuperado da sessão:", cpfSessao); 
        console.log("email recuperado da sessão:", emailSessao); 
        console.log("nascimento recuperado da sessão:", nascimentoSessao); 
        console.log("senha recuperado da sessão:", senhaSessao); 
        console.log("confSenha recuperado da sessão:", confSenhaSessao); 
        console.log("foto recuperado da sessão:", fotoSessao);      
    }

    function criarPessoa(nome, sobrenome, telefone, cpf, email, nascimento, senha, confSenha, foto){

        // Criando um objeto pessoa e salvando dados nela
        let pessoa = new Pessoa(nome, sobrenome, telefone, cpf, email, nascimento, senha, confSenha, foto);
        console.log("Criando pessoa:");  
        console.log(pessoa);  

          
    }
    
        
    // lista elementos a sessão na tela
    function carregarLista(){
            
        // Verificando se a sessionStorage não está vazia
        if (sessionStorage.length > 0) {

            // Obtendo a referência ao elemento onde a lista será exibida
            var listaElemento = document.getElementById('lista-sessao');

            // Iterando sobre os itens da sessionStorage e exibindo em parágrafos
            for (var i = 0; i < sessionStorage.length; i++) {
                var chave = sessionStorage.key(i);
                var valor = sessionStorage.getItem(chave);
                console.log(chave, valor);

                // Criando um novo parágrafo para cada elemento
                var paragrafo = document.createElement('p');
                paragrafo.textContent = chave + ': ' + valor;

                // Adicionando o parágrafo à listaElemento
                listaElemento.appendChild(paragrafo);

                
            }
        } else {
            console.log('sessionStorage está vazia.');
        }
    }



        // Criando classe Pessoa para salvar os dados
    class Pessoa{
        constructor(nome, sobrenome, telefone, cpf, email, nascimento, senha, confSenha, foto){
            this._nome = nome;
            this._sobrenome = sobrenome;
            this._telefone = telefone;
            this._cpf = cpf;
            this._email = email;
            this._nascimento = nascimento;
            this._senha = senha;
            this._confSenha = confSenha;
            this._foto = foto;
        }       
        
    }
  





    

   



    


