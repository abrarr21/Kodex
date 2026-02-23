function customMap(arr = [], cb) {
    var result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(cb(arr[i], i, arr));
    }

    return result;
}

const output = customMap([1, 2, 3, 4, 5], function (num) {
    return num * num;
});

console.log(output);
