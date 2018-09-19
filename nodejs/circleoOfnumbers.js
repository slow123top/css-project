/**
 * 找出圆环 first对面的数据
 */
function circleOfNumbers(n, firstNumber) {
    for (let i = 0; i < n; i++) {
        if (Math.abs(i - firstNumber) === Math.floor(n / 2)) {
            return i;
        }
    }
}
console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 7));
console.log(circleOfNumbers(4, 1));
