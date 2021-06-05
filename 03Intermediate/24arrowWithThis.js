const cameras = {
    price: 600,
    weight : 2000,
    // myDes : function(){
    //     return `This canon camera is of ${this.price}$`
    // }


    // here arrow function can't be used in this way
    /*
    myDes : () => {
        return `This canon camera is of ${this.price}$`
    }
    */

    // here arrow function is used in this way
    myDes(){
        return `This canon camera is of ${this.price}$`

    }
}
console.log(cameras.myDes());
