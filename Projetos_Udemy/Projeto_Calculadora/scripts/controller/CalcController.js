class CalcController {
    constructor(){ // método construtor chamado automaticamente quando essa classe e instânciada.
        // Atributos != variáveis Funçoes != Métodos.

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display"); // El se refere ao elemento do html por covenção.
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        //this._displayCalc = "0";// var == this. referencia do próprio objeto que foi instanciado.
        this._currentDate;  // _ significa que o atributo e privado, só a classe pode acessar.(encapsulamento).
        this.initialize();
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