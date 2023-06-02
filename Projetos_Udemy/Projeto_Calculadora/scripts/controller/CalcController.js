class CalcController {
    constructor(){ // metodo construtor chamado automaticamente quando essa classe e instânciada
        // Atributos != variáveis Funçoes != Métodos
        this._displayCalc = "0";// var == this. referencia do próprio objeto que foi intanciado.
        this._currentDate;  // _ significa que o atributo e privado, só a classe pode acessar.(encapsulamento)
        this.initialize();
    }

    initialize(){
        let displayCalcEl = document.querySelector("#display"); // El se refere ao elemento do html por covenção
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "16/12/2023";
        timeEl.innerHTML = "00:00";
        

    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this.displayCalc = valor;
    }

    get dataAtual(){
        return this._currentDate;
    }

    set dataAtual(valor){
        this._currentDate = valor;
    }
}