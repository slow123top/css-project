function printerErroe(s) {
    return s.split('').filter(element => {
        return element.charCodeAt() >= 110;
    }).length + '/' + s.split('').length;
}