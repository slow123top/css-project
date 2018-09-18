/**
 * 给一个Array 找到一个位置  这个位置左边数字总和等于右边数字总合
 * @param {arr} Array  数据
 */
function findEvenIndex(arr) {
    const len = arr.length;
    let left, right;
    for (let i = 0; i < len; i++) {
        left = 0;
        right = 0;
        for (let j = 0; j < i; j++) {
            left += arr[j];
        }
        for (let x = i + 1; x < len; x++) {
            right += arr[x];
        }
        if (left === right) {
            return i;
        }
        // console.log(left, right);
    }
    return -1;
}
// 方法二  使用reduce slice等数组操作方法
function findEvenIndex1(arr) {
    const len = arr.length;
    // 定义一个累加函数
    const sum = function (a, b) {
        return a + b;
    }
    for (let i = 0; i < len; i++) {
        const leftArr = arr.slice(0, i);
        const rightArr = arr.slice(i + 1);
        const leftSum = leftArr.reduce(sum, 0);
        const rightSum = rightArr.reduce(sum, 0);
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
}
console.log(findEvenIndex1([1, 2, 3, 4, 5]));
console.log(findEvenIndex1([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex1([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex1([20, 10, 30, 10, 10, 15, 35]));
