function validParentheses(params) {
    const paramsArr = params.split('');
    return paramsArr.filter(element => {
        return element === '(';
    }).length === paramsArr.filter(element => {
        return element === ')';
    }).length;
}
console.log(validParentheses( "())"));