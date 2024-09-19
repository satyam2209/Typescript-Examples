class UsersConstruct{
    name="";
    age=0;
    email=""
    constructor(name:string, age:number, email:string)
    {
        // console.log("constructor called");
        this.name=name;
        this.age=age;
        this.email=email;
    }
    displayVal()
    {
        console.log(this.name, this.age, this.email);
    }
}
const ex = new UsersConstruct("satyam", 22, "satyam@gmail.com");
const ex1 = new UsersConstruct("raj", 27, "raj@gmail.com");
ex.displayVal();
ex1.displayVal();