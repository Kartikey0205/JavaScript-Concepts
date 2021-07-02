class Driver{
    constructor(name){
        this._name = name;
    }

    get myName(){
        return this._name;
    }

    set myName(val){
        this._name = val;
    }
}


let drive = new Driver("John");
console.log(drive.myName);

drive.myName = "Kartikey";
console.log(drive.myName);
