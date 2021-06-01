var counter = (function () {
    var addOne = 1;
    return function () {
        return addOne += 1;
    }
})();

console.log(counter());