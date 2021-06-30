// 문제: 문자열을 입력받아 가장 많이 반복되는 문자(letter)를 리턴해야 합니다.
//  - 띄어쓰기는 제외합니다.
//  - 가장 많이 반복되는 문자가 다수일 경우, 가장 먼저 해당 횟수에 도달한 문자를 리턴해야 합니다.
//  - 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

function mostFrequentCharacter(str) {
    let obj = { mostCount: 0, mostChar: '' };

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        }
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++;
        }
        if (obj[str[i]] > obj['mostCount']) {
            obj['mostCount'] = obj[str[i]];
            obj['mostChar'] = str[i];
        }
    }
    return obj['mostChar'];
}

console.log(mostFrequentCharacter('aabbb'));
console.log(mostFrequentCharacter('abcddcba'));
console.log(mostFrequentCharacter('really bad apple'));
console.log(mostFrequentCharacter(' '));