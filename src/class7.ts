// Inheritance

class CreateAccount{
    makeEmail(user:string)
    {
        return `${user}@test.com`
    }
}

class User_s extends CreateAccount{
    addUser(user:string){
        return `${user} added as an User`;
    }
}

const use1 = new User_s();
console.log(use1.addUser("satyam"));
console.log(use1.makeEmail("satyam"));


class Employess extends CreateAccount{
    addEmployee(emp:string)
    {
        return `${emp} is added as an employee`
    }
}

const E1 = new Employess();
console.log(E1.addEmployee("Sam"));
console.log(E1.makeEmail("sam"));