class UserController {

    constructor(formId, tableId) { // Precisa de um formulário(Receber dados dele), Precisa de uma tabela(Imprimir dados nela)

        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit() // Chama o método sem passar nenhum parâmetro

    }
    // Método para toda vez que for enviado o formulário
    onSubmit() {

        // Como na arrow function não tem a palavra function, o this irá fazer referência direto ao formulário thi.forEl
        this.formEl.addEventListener("submit", event => { 
            event.preventDefault(); // Não deixa a página atualizar, apos apertat o botão
            
            //let user = this.getValues(); // Chama método que pega os valores do formulário.

            let values = this.getValues();

            // Gera uma nova imagem com os dados da imagem enviado no upload
            this.getPhoto((content) =>{

                values.photo = content;
                this.addLine(values);

            });

            
        });


    // Outro jeito
     /*  let _this = this;  // Pega o formulário e salva nessa variavel interna, para ser acessada mais a frente
    
       // Fica ouvindo o formulário caso seja submetido
       this.formEl.addEventListener("submit", function (event) { // this.formEl = document.getElementById("form-user-create")

            event.preventDefault(); // Não deixa a página atualizar, apos apertat o botão
            // _this e necessário por estar dentro de uma function, para poder chamr o formulário e nao o evento da função
            _this.getValues(); // Chama o Método para pegar os valores dos campos do formulário
            // this.getValues(); iria referenciar apenas a função que ele esta dentro e não pegaria o formulário, por causa do escopo
          
        });*/
    }
    // Método para pegar a foto que foi enviada e gerar uma nova foto com os dados da foto original
    getPhoto(callback){
        let fileReader = new FileReader();

        let elements = [...this.formEl.elements].filter(item=>{
            if(item.name === 'photo'){
                return item;
            }
        });
        // [0] pega o primeiro elemento da array, e [0] pega o primeiro arquivo da array
        let file = elements[0].files[0];

        fileReader.onload = ()=>{ // função de callback, quando terminar de carregar a imagem chama a função

            
            callback(fileReader.result);

        };

        fileReader.readAsDataURL(file);
    }


    // Método para pegar os valores dos campos do formulário
    getValues() {

        // user por enquanto e apenas um JSON contendo dados para criar um objeto mais na frente, não é um objeto
        let user = {}; // Essa variável só vai existir dentro desse método

        // Percorre cada linha de código encontrada na propriedade elements do formulário

        //[this.formEl.elements[0], this.formEl.elements[1], this.formEl.elements[2]]forEach(function (field, index) {
        [...this.formEl.elements].forEach(function (field, index) { // ... spread  //ler objeto e diferente de ler array

            if (field.name == "gender") {
                if (field.checked) { //field.checked === true
                    user[field.name] = field.value; // user.gender
                }

            } else {
                user[field.name] = field.value;
            }

        });

        // Cria um objeto instância da clase User.js
        var objectUser = new User(user.name, user.gender, user.birth, user.country, user.email, user.password, user.photo, user.admin);

        // Retorna o objeto
        return objectUser;
        // Ou return new User(user.name, user.gender, user.birth, user.country, user.email, user.password, user.photo, user.admin);
    }

    addLine(dataUser){// tableId = recebe o id de onde irá por os elemento do dataUser
        
        this.tableEl.innerHTML= `  
        <tr>
            <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${dataUser.birth}</td>
            <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        </tr>    
        `;
        // document.getElementById("table-users").appendChild(tr);
    }
}