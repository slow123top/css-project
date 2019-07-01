function _unique(objArray, field) {
    const hash = {};
    objArray = objArray.reduce(function (item, next) {
        console.log(hash);
        if (hash[next[field]]) {
            hash[next[field]] = false;
        } else {
            hash[next[field]] = true;
            item.push(next);
        }
        return item;
    }, []);
    return objArray;
}
dataSort = [
    { Code: 14, Name: '互联网13', Age: 20, birthday: '1998-5-6', idcode: '没有权限查看', postcode: '05310000', address: '地球', correct: false },
    { Code: 15, Name: '互联网14', Age: 20, birthday: '1998-5-6', idcode: '没有权限查看', postcode: '05310000', address: '地球', correct: false },
    { Code: 16, Name: '互联网15', Age: 29, birthday: '1998-5-6', idcode: '没有权限查看', postcode: '05310000', address: '地球', correct: false },
    { Code: 17, Name: '互联网16', Age: 20, birthday: '1998-5-6', idcode: '没有权限查看', postcode: '05310000', address: '地球', correct: false },
    { Code: 18, Name: '互联网17', Age: 20, birthday: '1998-5-6', idcode: '没有权限查看', postcode: '05310000', address: '地球', correct: false },
    { Code: 19, Name: '互联网18', Age: 20, birthday: '1998-5-6', idcode: '没有权限查看', postcode: '05310000', address: '地球', correct: false },
    { Code: 20, Name: '互联网19', Age: 29, birthday: '1998-5-6', idcode: '没有权限查看', postcode: '05310000', address: '地球', correct: false },
    { Code: 21, Name: '互联网20', Age: 28, birthday: '1998-5-6', idcode: '没有权限查看', postcode: '05310000', address: '地球', correct: false },
    { Code: 22, Name: '互联网21', Age: 20, birthday: '1998-5-6', idcode: '没有权限查看', postcode: '05310000', address: '地球', correct: false },
    { Code: 23, Name: '互联网22', Age: 20, birthday: '1998-5-6', idcode: '没有权限查看', postcode: '05310000', address: '地球', correct: false },
];
console.log(_unique(dataSort,'Age').length);