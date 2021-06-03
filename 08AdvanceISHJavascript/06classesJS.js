class User{
    // constructor is automatically call as soon as Object is created
    constructor(name, email){
        this.name=name;
        this.email = email;
    }
    courseList =[];
    // no function here
    getInfo(){
        return{
            name: this.name,
            email: this.email,
        }
    };
    enrollCourse(name){
        this.courseList.push(name);
    };
    getCourseInfo(){
        return this.courseList;
    }
}

// we can here also create an Object but in professional code class object is created in different 

module.exports =User;