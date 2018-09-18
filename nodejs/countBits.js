/**
 * 给一个数字  转换成二进制  并且计算出 =1的个数
 */ 
function countBits(n) {
    const realBitsList = getBits(n).filter(item => {
        return item;
    });
    return realBitsList.length;
}
function getBits(n) {
    const bitsList = [];
    for (; n >= 1; n = Math.floor(n / 2)) {
        bitsList.push(n % 2);
    }
    return bitsList;
}
/**
 * 很棒的方法
 */
const countBits1 = (n) => {
    return n.toString(2).split('0').join('').length;
}
// console.log(getBits(0));
console.log(countBits(7));
console.log(countBits(9));
