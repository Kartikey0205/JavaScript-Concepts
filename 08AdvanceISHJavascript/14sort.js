const arr = [2,6,-7,-2];
console.log( arr.sort()); // you might be thinking it will be sort like -7 -2 ...so on but the real logic behind the sort function is firstly it converts every element  into string and then according to UTF-16 it will sort every thing WHY UTF-16 only not UTF-8 the (most trending one ) the reason is that in UTF-16 more feature is introduced

function checkMyArr(a,b){
    if (a>b) {
        return 1;
    } else if (a<b) {
        return -1;
    } else{
        return 0;
    }
}

// Now EXPLICITLY we going to coorect it
console.log(arr.sort(checkMyArr));


//Another example

function batmanGameOrder(a,b){
    var batman = [
        'Arkham Origins' ,
        'Arkham Origins Blackgate',
        'Assault on Arkham' ,
        'Arkham Asylum',
        'Arkham City',
        'Arkham Knight',
    ];
    return batman.indexOf(a)- batman.indexOf(b);
}

var games =[
    'Arkham Knight',
    'Arkham Asylum',
    'Arkham Origins' ,
    'Arkham Origins Blackgate',
];
console.log(games.sort(batmanGameOrder));