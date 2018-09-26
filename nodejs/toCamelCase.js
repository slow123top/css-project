function toCamelCase(str) {
    if (!str) {
        return '';
    }
    const index = str.split('').findIndex(element => {
        return !((code >= 65 && code <= 90) || (code >= 97 && code <= 122))
    });
    const results = str.split(str.split('')[index]);
    const temp = result.map((element, index) => {
        if (index !== 0 && element.substring(0, 1).charCodeAt() >= 97 && element.substring(0, 1).charCodeAt() <= 122) {
            return element.substring(0, 1).toUpperCase() + element.substring(1);
        }
        return element;
    });
    return temp.join('');
}
console.log(toCamelCase("the_stealth_warrior"));

