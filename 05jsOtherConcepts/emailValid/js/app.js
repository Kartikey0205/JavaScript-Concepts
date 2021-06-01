"use strict"
console.log("hello");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
let validEmail = false;
let validPhone = false;
let validName = false;

// console.log(name,email,phone);


name.addEventListener("blur", () => {
    // console.log("called");
    let regex = /^[a-zA-Z][a-z\s+A-Z0-9]{1,14}$/
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Valid");
        name.classList.remove("is-invalid");
        validName=true;

    } else {
        console.log("Invalid");
        name.classList.add("is-invalid");
        validName=false;

    }
});


email.addEventListener("blur", () => {
    // console.log("called");
       let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){1,7}$/
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Valid");
        email.classList.remove("is-invalid");
        validEmail=true;

    } else {
        console.log("Invalid");
        email.classList.add("is-invalid");
        validEmail=false;

    }
});

phone.addEventListener("blur", () => {
    // console.log("called");
       let regex = /^([0-9]){10}$/
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Valid");
        phone.classList.remove("is-invalid");
        validPhone=true;

    } else {
        console.log("Invalid");
        phone.classList.add("is-invalid");
        validPhone=false;

    }
});


let mybutton = document.getElementById("mybtn");
mybutton.addEventListener("click",(e)=>{
    e.preventDefault();
console.log("Submit button fired");
    // let success = document.getElementById("success");
    // let failed = document.getElementById("failed");
    let messageSearch =document.getElementById("message");
if (validEmail && validName && validPhone) {
    // setInterval(()=>{

        // success.classList.add("show");
    // },1000)
    messageSearch.innerHTML = `
    <div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Success!</strong> Your form is successfully submitted
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;
    setTimeout(() => {
        messageSearch.innerHTML = ``;
        name.value=``;
        phone.value=``;
        email.value=``;
        address.value=``
;    }, 900);
} else {
    // setInterval(()=>{

        // failed.classList.add("show");
    // },1000)
    messageSearch.innerHTML = `
    <div id="failed" class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Not submitted!</strong> Please fill proper detail then submit
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
    `;
    setTimeout(() => {
        messageSearch.innerHTML = ``;
    }, 5000);
}

});