// 문제: 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.
// caution: 단어는 공백으로 구분합니다./연속된 공백이 존재할 수 있습니다./빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

// my solution
function letterCapitalize(str) {
    let split = str.split(' ')

    for (let i = 0; i < split.length; i++) {
        if (split[i][0] === undefined) {
            continue;
        } else {
            split[i] = split[i][0].toUpperCase() + split[i].slice(1);
        }
    }
    return split.join(' ');
}

// reference
function letterCapitalize2(str) {
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
    }

    str = words.join(' ');
    return str;
}

console.log(letterCapitalize('you can DO it!'))
console.log(letterCapitalize(' nEVER gIVE uP '))
console.log(letterCapitalize('you have a idea'))
console.log(letterCapitalize('what a wonderful life'))
console.log('')
console.log(letterCapitalize2('you can DO it!'))
console.log(letterCapitalize2(' nEVER gIVE uP '))
console.log(letterCapitalize2('you have a idea'))
console.log(letterCapitalize2('what a wonderful life'))