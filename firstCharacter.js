// 문제: 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자로 이루어진 문자열을 리턴해야 합니다.

// my solution
function firstCharacter(str) {
    if (str.length === 0) {
        return '';
    }

    let result = '';
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i][0];
    }
    return result
}
console.log(firstCharacter('Those who survive are strong'))
console.log(firstCharacter('never give up you can do it'))