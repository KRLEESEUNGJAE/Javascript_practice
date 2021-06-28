function createPhoneNumber(arr) {
    let head = '(010)';
    const len = arr.length;
    const body = arr.slice(len - 8, len - 4).join('');
    const tail = arr.slice(len - 4, len).join('');

    if (len === 11) {
        head = `(${arr.slice(0, 3).join('')})`;
    }

    return `${head}-${body}-${tail}`;
}
console.log(createPhoneNumber([0, 1, 0, 2, 9, 2, 4, 7, 0, 0, 2]));
console.log(createPhoneNumber([2, 9, 2, 4, 7, 0, 0, 2]));