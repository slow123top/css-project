function alphabetPosition(text) {
    const alphabets = [];
    // 生成字母数组
    for (let i = 0; i < 26; i++) {
        alphabets.push(String.fromCharCode(97 + i));
    }
    // 累加器
    console.log(alphabets);
    const position = text.split('').reduce((pre, current) => {
        const index = current.toLowerCase().charCodeAt();
        if (index >= 97 && index <= 122) {
            // let a = alphabets.indexOf(index);
            return pre += `${alphabets.indexOf(current.toLowerCase()) + 1} `
        }
        return pre += '';
    }, '');
    // 还有另一种方法
    return position.substring(0, position.length - 1);
}
console.log(alphabetPosition("]^os$k,a"));


