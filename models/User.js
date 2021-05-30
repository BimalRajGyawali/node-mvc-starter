class User{
    constructor(id, firstName, middleName, lastName){
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;

    }
    setId(id){ this.id = id }
    setFirstName(firstName){ this.firstName = firstName }
    setMiddleName(middleName){ this.middleName = middleName }
    setLastName(lastName){ this.lastName = lastName }

    getId(){ return this.id }
    getFirstName(){ return this.firstName }
    getMiddleName(){ return this.middleName }
    getLastName(){ return this.lastName }

    toString(){
        return `{
        id : ${this.id}, 
        firstName: ${this.firstName}, 
        middleName: ${this.middleName}, 
        lastName: ${this.lastName}
    }`
    }
}

module.exports = User