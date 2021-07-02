function testCall(url) {
    // returning a promise 
    return new Promise(function (resolve, reject) {

        // making a request 
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var request = new XMLHttpRequest();

        // opening a request
        request.open('GET', url);

        // loading a request
        request.onload = function () {
            if (request.status == 200) {
                resolve(request.response);
            } else {
                reject(Error(request.statusText));
            }
        }

        // error 
        request.onerror = function () {
            reject(Error("Network Issue"));
        }

        // send back a response
        request.send();
    });
};


testCall('https://randomuser.me/api/')
    .then(function (response) {
        // console.log("Hurray we are Successfull!");
        console.log("Your response is ",response);
    }, function (error) {
            console.log("Error there and error is ", error);
        }
    )
    
    // .catch(function (err) {
    //     console.log("your error is ", err);
    // });