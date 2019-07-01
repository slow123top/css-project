function add() {
    var args = [].slice.call(arguments);

    var fn = function () {
        var arg_fn = [].slice.call(arguments);
        return add.apply(null, args.concat(arg_fn));
    }

    fn.valueOf = function() {
        return args.reduce((a, b) => a + b);
    }
    return fn;
}


console.log(Number(add(1)(2)(3)))