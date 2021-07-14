// 문제 : 수를 입력받아 각 자리의 수를 곱한 결과물들이 한자리 수가 될 때까지 반복적으로 곱한 후, 최후의 한 자리 수를 리턴해야 합니다.

function splitMultiply(num) {
    let numArr = String(num).split('');

    while (numArr.length !== 1) {
        numArr = numArr.reduce((acc, cur) => acc * cur);

        numArr = String(numArr).split('');
    }

    return Number(numArr);
}

console.log(splitMultiply(234))
console.log(splitMultiply(786))
console.log(splitMultiply(2248))
console.log(splitMultiply(2300))