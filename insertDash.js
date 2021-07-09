//문제: 문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.

// my solution
function insertDash(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if ((Number(str[i]) % 2 === 1 || str[i] === 1) && (Number(str[i + 1]) % 2 === 1 || str[i + 1] === 1)) {
            result += str[i] + '-';
        } else {
            result += str[i];
        }
    }

    return result;
}

// reference
function insertDash(str) {
    let result = str[0];
    for (let i = 1; i < str.length; i++) {
        if (Number(str[i - 1]) % 2 && Number(str[i]) % 2) {
            result = result + '-';
        }
        result = result + str[i];
    }

    return result;
}

console.log(insertDash('02189'))
console.log(insertDash('0364649584527734248497490956436424513856401903589'))
console.log(insertDash('6734611997679419173'))