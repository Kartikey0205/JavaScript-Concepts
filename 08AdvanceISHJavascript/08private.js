class User{
    // constructor is automatically call as soon as Object is created
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
}

// we can here also create an Object but in professional code class object is created in different 

// module.exports =User;
const rock = new User("rock" ,"rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Course");
console.log(rock.getCourseInfo());
console.log(rock.courseList); // Normally it does the same what above log does but if cousreList is private then the result differ then no one directly can access it .

