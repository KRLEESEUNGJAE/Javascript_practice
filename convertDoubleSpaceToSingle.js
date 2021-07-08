// 문제: 문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을 모두 한 칸의 공백으로 바꾼 문자열을 리턴해야 합니다.
// caution: 두 칸을 초과하는 공백은 존재하지 않는다고 가정합니다.

// my solution
function convertDoubleSpaceToSingle(str) {
    let newArr = [];
    let split = str.split(' ');
    for (let i = 0; i < split.length; i++) {
        if (split[i].length === 0) {
            continue;
        }
        newArr.push(split[i]);
    }
    return newArr.join(' ');
}

// reference
function convertDoubleSpaceToSingle(str) {
    let result = '';
    let before = '';
    for (let i = 0; i < str.length; i++) {
        // 직전의 문자가 공백이고, 현재의 문자도 공백인 경우
        // 즉, 현재의 문자가 두 번째 공백인 경우(에만), 무시한다.
        if (before !== ' ' || str[i] !== ' ') {
            result = result + str[i];
        }
        before = str[i];
    }
    return result;
}

console.log(convertDoubleSpaceToSingle('this here string'));
console.log(convertDoubleSpaceToSingle('this here string'));
console.log(convertDoubleSpaceToSingle('you can do it'));