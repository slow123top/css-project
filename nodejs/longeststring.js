function longestConsec(strarr, k) {
    // your code
    if (!strarr || !strarr.length || k <= 0 || k > strarr.length) {
        return '';
    }
    let temp = [];
    for (let i = 0; i < strarr.length; i++) {
        if (i + k - strarr.length > 0) {
            break;
        }
        if (strarr.slice(i, i + k).join('').length > temp.join('').length) {
            temp = strarr.slice(i, i + k); 
        }
    }
    return temp.join('');
}
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3));
