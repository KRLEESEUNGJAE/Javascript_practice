function flattenArr(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];

    for (let el of arr) {
        if (typeof el === 'number') {
            result.push(el);
        }
        if (Array.isArray(el)) {
            const temp = flattenArr(el);
            result.push(...temp);
        }
    }
    return result;
}


console.log(flattenArr([[1], 2, [3, 4], 5]))