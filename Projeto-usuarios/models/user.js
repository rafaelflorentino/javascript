class User{

    // Construtor
    constructor(name, gender, birth, country, email, password, photo, admin){
        this._name = name; // (_) diz que é uma propriedade privada e não deve ser aceesada de fora
        this._gender= gender;
        this._birth =  birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();

    }

    // Getters
    get register(){
        return this._register;
    }
    get name(){
        return this._name;
    }
    get gender(){
        return this._gender;
    }
    get birth(){
        return this._birth;
    }
    get country(){
        return this._country;
    }
    get email(){
        return this._email;
    }
    get password(){
        return this._password;
    }
    get photo(){
        return this._photo;
    }
    get admin(){
        return this._admin;
    }

    // Setters
    set photo(value){
        this._photo = value;
    }


    loadFromJSON(json){
        for(let name in json){
            switch(name){
                case '_register':
                    this[name] = new Date(json[name]); // se for register tranforma em uma data
                    break;
                default:
                    this[name] = json[name];                    
            }

            this[name] = json[name];
        }
    }
}