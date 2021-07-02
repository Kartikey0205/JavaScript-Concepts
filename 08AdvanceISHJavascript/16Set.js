let marvels = new Set(['batman','flash','batman']);

marvels.add('superman');
marvels.add('superman');
marvels.add('hulk');

console.log(marvels);

for(marvel of marvels){
    console.log(marvel);
}

console.log(marvels.has("hero"));
console.log(marvels.has("batman"));
console.log(marvels.has("Batman"));

