function sortArray(array) {
    // const oddArr = new Array(array.length).fill(0);
    let oddArr = [];
    array.forEach((element) => {
        if (isOdd(element)) {
            oddArr.push(element);
        }
    });
    oddArr = oddArr.sort(ascending);
    array.forEach((element, index) => {
        if (!isOdd(element)) {
            oddArr.splice(index, 0, element);
        }
    });
    return oddArr;
}
function isOdd(number) {
    return number % 2 ? true : false;
}
function ascending(x, y) {
    return x - y;
}


function sortOdd2(array) {
    const oddArr = array.filter(ele => {
        return ele % 2
    }).sort((a, b) => { return a - b })
    return array.map(ele => {
       return ele % 2 ? oddArr.shift() : ele
    })
}

console.log(sortOdd2([5, 3, 2, 8, 1, 4]));
