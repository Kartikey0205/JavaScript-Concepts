// console.log("hELLO");


// creating an array of object so that all the thing can be injected dynamically
const textToBeInjected = [
    {
        name: "Web Development Course",
        price : 4.6,
    },
    {
        name: "React JS Course",
        price : 2.3,
    },
    {
        name: "DSA Course",
        price : 8.9,
    },
    {
        name: "Front end course Course",
        price : 3.6,
    },
    {
        name: "C Course",
        price : 4.0,
    }

];


// now making a function which can access it and want to access HTML 

/*
HTML is written in this format
<ul class ="">                          ------>> we have to grab this element
    

    // insert this li in ul element 

    <li class =" ">                     ------>> we have to create this element

        Text Node                       ------>> we have to insert some text here

    // insert this span in li element 
            <span class = " ">          ------>> we have to create this element

                Text Node               ------>> we have to insert some text here

            </span>    

    </li>
</ul>
*/



function generateList() {
    // grabbing ul element
    const ul = document.querySelector(".list-group");
    
    // making ul to be empty after every call
    ul.innerHTML = "";

    // accessing array to procceed  further
    textToBeInjected.forEach((course) => {

        //created li element
       const li = document.createElement("li");
       // li m class add krna h
       li.classList.add("list-group-item");

       
       // now accessing which text to be injected inside li
       const name = document.createTextNode(course.name);
       //inserting text node in it
       li.appendChild(name);


       //similarly doing for span as li 

          //created span element
       const span = document.createElement("span");
       // span m class add krna h
       span.classList.add("float-right");

       
       // now accessing which text to be injected inside span
       const price = document.createTextNode("$ " +course.price);
       //inserting text node in it
       span.appendChild(price);


       // now injecting span into li
       li.appendChild(span);

       // now injecting li into ul
       ul.appendChild(li);

    });
};

//generateList();  -->> this is one of the best thing but we will call it in something diiferent way

window.addEventListener("load",generateList);




// now wants as we click on button it sort thing

const button1 = document.querySelector(".sort-btn-1");
button1.addEventListener("click",()=>{
    textToBeInjected.sort((a,b)=> a.price -b.price) // smaller to larger
    generateList();// calling again so that reshift according to it
});

const button2 = document.querySelector(".sort-btn-2");
button2.addEventListener("click",()=>{
    textToBeInjected.sort((a,b)=> b.price -a.price)//  larger to smaller, we are using a.price because a is one object and then b is changing according to all other object 
    generateList();// calling again so that reshift according to it
});