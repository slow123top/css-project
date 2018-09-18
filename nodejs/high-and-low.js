/**
 * 给一字符串  找到其中个最大和最小值
 * @param {numbers} 字符串 空格隔开的数值型字符串 每个字符可以转换为正常的字符串
 */
function highAndLow(numbers) {
    // ...
    const numbersList = numbers.split(' ');
    let low = numbersList[0];
    let high = numbersList[0];
    //  let temp;
    // numbersList.forEach(item => {
    //     if (+item < +low) {
    //         low = item;
    //     }
    // });
    numbersList.forEach(item => {
        if (+item > +high) {
            high = item;
        }
    });
    low = numbersList.reduce(function (pre, current) {
        return +current <= +pre ? current : pre;
    }, low)
    return `${high} ${low}`;
}
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
