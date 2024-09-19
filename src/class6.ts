// Diff bw read only and private

class Example{
    readonly name='anil';
    private age = 12;
}

const exa = new Example();
// exa.name="peter";  it is readonly thats why i cannot update its value but i can access this property outside class
// exa.age;  it is private thats why i cannot acess this property outside class and also cannot update itsvalue
console.log(exa.name);
// console.log(exa.age);