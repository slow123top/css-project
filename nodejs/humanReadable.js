function humanReadable(seconds) {
    const hour = Math.floor(seconds / 3600);
    const min = Math.floor((seconds - hour * 3600) / 60);
    const sec = seconds - hour * 3600 - min * 60;
    return format(hour) + ':' + format(min) + ':' + format(sec);
}
function format(a) {
    return a < 10 ? '0' + a : a;
}
console.log(humanReadable(359999));