class UsersProtected {
    protected name = ""

    setName(name: string) {
        this.name = name;
    }

    displayName() {
        console.log(this.name);
        this.getNameLength();
    }

    private getNameLength() {
        console.log(this.name.length);
    }
}

class Satyam extends UsersProtected {

    // Overrides the setName method and sets a hardcoded name "satyam"
    setName() {
        this.name = "satyam";
    }

    // Overrides displayName but calls the parent class displayName method
    displayName() {
        super.displayName();  // Calls the parent class's displayName method
    }
}

const u2 = new UsersProtected();
u2.setName("satyam singh");
// u1.name = "sidhu"; // Not accessible outside the class because it's protected
u2.displayName();
// u1.getNameLength(); // Not accessible because it's private

const u3 = new Satyam();
u3.setName();  // Sets name to "satyam"
u3.displayName();  // Calls displayName from the Satyam class
