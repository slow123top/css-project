function zeros(n) {
    const result = factorial(n);
    
    const resultArr = new Number(result).toLocaleString().split('').reverse();
    console.log(resultArr);
    let count = 0;
    for (let i = 0; i < resultArr.length; i++) {
        if (resultArr[i] !== '0') {
            return count;
        }
        ++count;
    }
    return count;
}
function factorial(n) {
    return n < 0 ? -1 : (n === 0 || n === 1 ? 1 : n * factorial(n - 1));
}
console.log(zeros(30));