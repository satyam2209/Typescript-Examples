"use strict";
class Users {
    constructor() {
        this.name = "";
        this.email = "";
    }
    addUser(user) {
        return `${user} is Added`;
    }
}
let User1 = new Users;
const retFn = User1.addUser('Anil');
console.log(User1);
console.log(retFn);
