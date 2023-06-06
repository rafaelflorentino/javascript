class CalcController { 

    constructor(){ // Método construtor chamado automaticamente quando essa classe e instânciada.
 
        // Atributos(variáveis dentro de uma classe) != Variáveis(variáveis fora de uma classe) 
        // Funçoes(Métodos dentro de uma classe) != Métodos(Métodos fora de uma classe).
        
        this._operation = []; // Atributo Array com os números e operações digitadas.
        this._locale = 'pt-BR'; // Atributo para passar o pais para depois usar na data e hora .
        this._displayCalcEl = document.querySelector("#display");// El se refere ao elemento do html por covenção, conteúdo html do elemento.
        this._dateEl = document.querySelector("#data");// Atributo para guardar o conteúdo html do elemento.
        this._timeEl = document.querySelector("#hora");// Atributo para guardar ohtml do elemento.
        this._currentDate; // Atributo para Data Atual.
        this.initialize();// Função para inicializar.
        this.initButtonsEvents(); // Função para inicializar e ficar ouvindo os eventos dos botões.

    }

    initialize(){

        this.setDisplayDateTime() // Mostra a data e hora local, pela 1° vez (para nao inicializar vazio).

        setInterval(()=>{ // Fica atualizando a data e hora local a cada 1 segundo.

            this.setDisplayDateTime(); // Mostra a data e hora na tela da calculadora.
            // this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            // this.displayTime = this.currentDate.toLocaleTimeString(this._locale);            

        }, 1000);
        // displayCalcEl.innerHTML = "4567";
        // this._dateEl.innerHTML = "16/12/2023";
        // this._timeEl.innerHTML = "00:00";  

        this.setLastNumberToDisplay(); // Mostra o valor no display, no caso zero(pois é a primeira vez).

    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => { // Split separa string em array, foreach vai passar em cada um dos eventos click e drag.

            element.addEventListener(event, fn, false); // // Impede que o evento ocorra 2 vezes(no clique e no arrasto).

        })
    
    }

    clearAll(){ // Zera a calculadora.

        this._operation = []; // Array fica vazia.

        this.setLastNumberToDisplay // Mostra na tela novo valor vazio.

    }

    clearEntry(){ // Limpa o último elemento digitado.

        this._operation.pop();

        this.setLastNumberToDisplay // Mostra na tela novo valor atualizado.

    }

    getLastOperation(){ // Pega o último caracter digitado, o último elemento da array.

        return this._operation[this._operation.length-1];

    }

    setLastOperation(value){ // Insere um novo elemento no final da array.

        this._operation[this._operation.length-1] = value;

    }

    isOperator(value){ // Verifica se é um operador.

        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);

    }

    pushOperation(value){ // Quando digitar um operador.

        this._operation.push(value);

        if (this._operation.length > 3) {

            this.calc(); // Chama a função para calcular.

        }

    }

    calc(){ // Função que calcula a operação.

        let last =''; // Deixa o ultimo elemento vazio.

        if(this._operation.length > 3){ // Caso array tenha  mais de 3 elementos realiza o igual
            last = this._operation.pop(); // Remove o último elemento(operador), e retorna o valor dele

        }

        let result = eval(this._operation.join(""));  // Junta os números digitados e tira os espaços entre eles, eval realiza o calculo das strings.

        if(last == '%'){ // Caso seja apertado o botão de porcentagem.
            result /=  100; // result = result / 100; Cálculo da porcentagem.
            this._operation = [result]; // Atualiza o resultado da porcentagem.
        }else{
            this._operation = [result]; // Guarda o resultado da operação e a última operação digitada.
            if(last) this._operation.push(last); // Caso o último seja diferente de vazio, adiciona elemento.
                
        }

        this.setLastNumberToDisplay(); // Chama função que Seta no display o resultado do calculo.

    }

    setLastNumberToDisplay(){ // Função que Seta no display o resultado do calculo.

        let lastNumber;

        for (let i = this._operation.length-1; i >= 0; i--){

            if (!this.isOperator(this._operation[i])) {

                lastNumber = this._operation[i]; // O último elemento da array recebe o valor do resultado.

                break;

            }

        }

        if(!lastNumber) lastNumber = 0 ; // Sempre que a array estiver vazia coloque o numero zero no display

        this.displayCalc = lastNumber;

    }

    addOperation(value){


        if (isNaN(this.getLastOperation())) {

            if (this.isOperator(value)) { // Trocar o operador.

                this.setLastOperation(value); // Caso seja um operador vira último item.

            } else if (isNaN(value)){ 

                console.log("outra coisa",value);

            } else { // Primeira vez que adiciona um valor na calculadora.

                this.pushOperation(value);

                this.setLastNumberToDisplay(); // Primeiro valor era Underfined não ia aparecer na tela. 

            }

        } else { // Número.

            if (this.isOperator(value)){

                this.pushOperation(value);

            } else {

                let newValue = this.getLastOperation().toString() + value.toString(); // Transforma o número em string e concatena com array para formar o número.

                this.setLastOperation(parseInt(newValue)); // Chama a função para adicionar um elemento no final da array.

                this.setLastNumberToDisplay(); // faz aparecer na tela valor.

            }

        }

    }

    setError(){ // Mensagem de erro.

        this.displayCalc = "Error"; // Vostra no visor a mensagem.
        
    }

    execBtn(value){

        switch (value) { // Verifica o botão digitado.

            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+');
                break;

            case 'subtracao':
                this.addOperation('-');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;

            case 'porcento':
                this.addOperation('%');
                break;

            case 'igual':
                this.calc();
                break;

            case 'ponto':
                this.addOperation('.');
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;

        }

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g"); // Recebe lista com vários elementos.

        buttons.forEach((btn, index)=>{ // Precisa percorrer cada elemento da lista para ouvir.

            this.addEventListenerAll(btn, "click drag", e => { // Adiciona o elemento da lista que foi clicado ou arrastado.
                // console.log(e); // Mostra o informaçoes do elemento clicado.
                // console.log(btn); // Mostra o elemento clicado a tag html completa.
                // console.log(btn.className.baseVal); // Traz a classe do elemento clicado.
                let textBtn = btn.className.baseVal.replace("btn-","");// Traz a classe e retira btn- do nome da classe.

                this.execBtn(textBtn);

            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => { // Mudar o cursor do mouse em cima dos botões.

                btn.style.cursor = "pointer";

            })

        })

    }

    setDisplayDateTime(){ // Formata data e hora para aparecer no diplay.

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){

        return this._timeEl.innerHTML;

    }

    set displayTime(value){

        return this._timeEl.innerHTML = value;

    }

    get displayDate(){

        return this._dateEl.innerHTML;

    }

    set displayDate(value){

        return this._dateEl.innerHTML = value;

    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(value){

        this._currentDate = value;

    }

}