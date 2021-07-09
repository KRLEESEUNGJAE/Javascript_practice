//문제: 문자열을 입력받아 문자열 내에 아래 중 하나가 존재하는지 여부를 리턴해야 합니다.
//'a'로 시작해서 'b'로 끝나는 길이 5의 문자열
//'b'로 시작해서 'a'로 끝나는 길이 5의 문자열

//caution: 대소문자를 구분하지 않습니다. 공백도 한 글자로 취급합니다. 'a'와 'b'는 중복해서 등장할 수 있습니다.

// my solution
function ABCheck(str) {
    const lowercase = str.toLowerCase();

    if (lowercase.length === 0) return false;

    for (let i = 0; i < lowercase.length; i++) {
        if ((lowercase[i] === 'a' && lowercase[i + 4] === 'b') || (lowercase[i] === 'b' && lowercase[i + 4] === 'a')) {
            return true;
        }
    }
    return false;
}

// reference
function ABCheck(str) {
    if (str === undefined) {
        return false;
    }

    str = str.toLowerCase();

    for (let i = 4; i < str.length; i++) {
        if (
            (str[i] === 'a' && str[i - 4] === 'b') ||
            (str[i] === 'b' && str[i - 4] === 'a')
        ) {
            return true;
        }
    }

    return false;
}
console.log(ABCheck('lane borrowed'))
console.log(ABCheck('aMAJ7sBrO4CyysuoHFrgGTX'))
console.log(ABCheck('TgDrnjAz6kAbdEaxFkrKIsa'))
console.log(ABCheck('HK9J6YjrAcMbq8qKrbS3EaPRT'))
console.log(ABCheck('c'))
console.log(ABCheck('aaaaaccccbbbbb'))
console.log(ABCheck('vsZYkn LOfgbAabbHYw4tO1O'))
console.log(ABCheck('LFOMF4zJPuQQNuofLuELseY046UZy6gV'))