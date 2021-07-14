// 문제 : 수를 입력받아 각 자릿수를 모두 더한 값을 리턴해야 합니다.

function charToNumAndSum(num) {
    // 숫자를 문자로 변환한 뒤 스플릿으로 낱개로 분해.
    let numCharArr = String(num).split('');
    // 결과값 담아 줄 넘버 타입의 변수 생성
    let result = 0;

    if (numCharArr[0] === '-') {
        for (let i = 2; i < numCharArr.length; i++) {
            result += Number(numCharArr[i]);
        }
        result = result - Number(numCharArr[1]);
    } else {
        for (let i = 0; i < numCharArr.length; i++) {
            result += Number(numCharArr[i]);
        }
    }
    return result;
}

console.log(charToNumAndSum(0))
console.log(charToNumAndSum(142))
console.log(charToNumAndSum(100001))
console.log(charToNumAndSum(-912))