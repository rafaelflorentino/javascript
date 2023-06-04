class CalcController {
    constructor(){ // método construtor chamado automaticamente quando essa classe e instânciada.
        // Atributos != variáveis Funçoes != Métodos.
        this._locale = 'pt-BR';
        this.operation = []; // array oara guardas os operadores
        this._displayCalcEl = document.querySelector("#display"); // El se refere ao elemento do html por covenção.
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        //this._displayCalc = "0";// var == this. referencia do próprio objeto que foi instanciado.
        this._currentDate;  // _ significa que o atributo e privado, só a classe pode acessar.(encapsulamento).
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){

        this.setDisplayDateTime();// mostra a data e hora local, pela 1° vez (para nao inicializar vazio).

        setInterval(()=> { //fica atualizando a dara e hora local a cada 1 segundo.
            this.setDisplayDateTime(); 
            //this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            // this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        },1000 );

        //displayCalcEl.innerHTML = "4567";
        //this._dateEl.innerHTML = "16/12/2023";
        // this._timeEl.innerHTML = "00:00";   
    }
// Função para pegar a data e a hora local.
    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);        
    }
    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => { // split separa string em array, foreach vai passar em cada um dos eventos click e drag.
            element.addEventListener(event, fn, false); // impede que o evento ocorra 2 vezes(no clicque e no arrasto)
        })
    }
clearAll(){ // zera a calculadora
    this._operation = [];
}

clearEntry(){ // limpa último elemento digitado
    this._operation.pop();
}
addOperation(value){
    this._operation.push(value); // push adiciona um elmento no final da array
    
    console.log(this._operation);
}
setError(){
    this.displayCalc = "Error"
}

    execBtn(value){
        switch (value) {
            case "ac":
                this.clearAll();
                break;
            case "ce":
                this.clearEntry();
                break;  
            case "soma":
                this.soma();
                break;    
            case "subtracao":
                this.subtracao();
                break;   
            case "divisao":
                this.divisao();
                break;   
            case "multiplicacao":
                this.multiplicacao();
                break;
            case "porcento":
                this.porcento();
                break;
            case "igual":
                this.igual();
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
        let buttons = document.querySelectorAll("#buttons > g, #parts > g"); // recebe lista com varios elementos

        buttons.forEach((btn, index) => { // precisa percorrer cada elementeo da lista para ouvir
            this.addEventListenerAll(btn, "click drag", e => { // adiciona o elemento da lista que foi clicado ou arrastado
                //console.log(e); // mostra o informaçoes do elemento clicado
                //console.log(btn); // mostra o elemento clicado a tag html completa
                //console.log(btn.className.baseVal); // traz a classe do elemento clicado
               let textBtn = console.log(btn.className.baseVal.replace("btn-",""));// traz a classe e retira btn- do nome da classe

               this.execBtn(textBtn);
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            });
        });
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