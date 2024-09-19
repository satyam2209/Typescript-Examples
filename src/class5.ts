// shorthand Initialization

class shortHand{
    constructor(public name:string, public age:number, public email:string ){  }

    displayValue(){
        console.log(this.name, this.age, this.email);
    }
}

const sh = new shortHand("satyam", 22, "satyam@123");
const sh1 = new shortHand("raj", 27, "raj@gmail.com");

sh.displayValue();
sh1.displayValue();