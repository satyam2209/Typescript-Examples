class UsersPrivate{
    private name=""

    setName(name:string)
    {
        this.name=name;
    }
    displayName()
    {
        console.log(this.name)
        this.getNameLength()
    }
    private getNameLength()
    {
        console.log(this.name.length)
    }
}

const u1 = new UsersPrivate;
u1.setName("satyam singh");
// u1.name = "sidhu"; it is not accessible outside class because it is private
u1.displayName();
// u1.getNameLength(); it is also not accessible outside class because it is private