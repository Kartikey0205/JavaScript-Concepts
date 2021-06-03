class User{

    constructor(name, email){
        this.name=name;
        this.email = email;
    }
    #courseList =[]; // by adding # we made it private
    // no function here
    getInfo(){
        return{
            name: this.name,
            email: this.email,
        }
    };
    enrollCourse(name){
        this.#courseList.push(name);
    };
    getCourseInfo(){
        return this.#courseList;
    }
    //static makes login as a private method which can't be accesss from inherited class
    static login(){
        console.log("I am in User part");
    }
}
/*
const rock = new User("rock" ,"rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Course");
console.log(rock.getCourseInfo());

*/
class subAdmin extends User{
    constructor(name,email){
        super(name,email); // super indicates the the exactness  as parent have
    }
    getAdminInfo(){
        return "I am sub Admin";
    }
    login(){
        return "I am sub - admin part";
    }
}

const tom = new subAdmin("tom","tom@jerry.com");
console.log(tom.getAdminInfo()); 
console.log(tom.login());// overridding method and if in inherited class same method is availbale then that will get the memory

console.log(tom.getInfo());// due to super we get access to the exactly same constructor as parent class have do Info is coming according to that  
