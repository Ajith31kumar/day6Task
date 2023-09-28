class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
 
    getFirstName() {
        return this.firstName;
    }

    setFirstName(firstName){
        this.firstName = firstName;
    }
    
    getLastName() {
        return this.lastName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    getAge() {
        return this.age;
    }

    setAge(age){
        this.age = age;
    }
    
    getEmail(){
        return this.email;
    }

    setEmail(email){
        this.email = email;
    }

    displayDetails() {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
    }
}

const person1 = new Person("Ajith", "kumar", 30, "john.doe@example.com");

// Display person details
person1.displayDetails();

// Update age and email
person1.setAge(35);
person1.setEmail("ajithkumar@example.com");

// Display updated details
person1.displayDetails();
