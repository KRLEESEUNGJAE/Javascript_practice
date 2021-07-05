// 문제: 배열을 입력받아 차례대로 배열의 첫 요소와 마지막 요소를 키와 값으로 하는 객체를 리턴해야 합니다.
// caution: 빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다.
// caution: 입력으로 받는 배열을 수정하지 않아야 합니다.

function transformFirstAndLast(arr) {
    let obj = {};

    if (arr.length > 0) {
        obj[arr[0]] = arr[arr.length - 1];
    }
    return obj;
}
console.log(transformFirstAndLast([]))
console.log(transformFirstAndLast(['same']))
console.log(transformFirstAndLast(['Marie', 'Kayla', 'Sarah', 'Wayne', 'Mary']))