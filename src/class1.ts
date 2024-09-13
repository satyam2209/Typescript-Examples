class Users{
   name:string = "";
   email:string = "";

   addUser(user:string): string
   {
     return `${user} is Added`
   }
   removeUser(user:string): string 
   {
     return `${user} is Removed`
   }
}

let User1 = new Users;
console.log(User1.addUser('Anil'));
console.log(User1.removeUser("Anil"));
console.log(User1);
console.log(Users);