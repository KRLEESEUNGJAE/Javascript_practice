//문제: 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴해야 합니다.

// my solution
function numberSearch(str) {
    if (str.length === 0) {
        return 0;
    }

    let noSpace = str.split(' ');
    noSpace = noSpace.join('');

    let number = 0;
    let string = 0;

    for (let i = 0; i < noSpace.length; i++) {
        if (isNaN(noSpace[i])) {
            string++;
        } else {
            number += Number(noSpace[i]);
        }
    }

    return Math.round(number / string);
}

// reference
function numberSearch(str) {
    const digits = '0123456789';

    if (str === '') {
        return 0;
    }

    let sum = 0;
    let pureStr = '';
    for (let i = 0; i < str.length; i += 1) {
        if (digits.includes(str[i])) {
            // 숫자인 경우
            sum = sum + Number(str[i]);
        } else if (str[i] !== ' ') {
            // 숫자도 공백도 아닌 경우
            pureStr = pureStr + str[i];
        }
    }

    // 결과를 반올림 한다.
    return Math.round(sum / pureStr.length);
}

console.log(numberSearch("Hello6 "))
console.log(numberSearch("8ad"))
console.log(numberSearch("Hello6 9World 2, Nic8e D7ay!"))
console.log(numberSearch("YlQO uT9"))
console.log(numberSearch("Fwe eAF 1FLOM d EEYdNWNWNPfN HGVcFWAXwzfEy hHpzF5OhAvuNqhbdY8xViTV cZzJOYpqXNSIkWO7G"))
console.log(numberSearch("Sou2bgPJkS7Lp5r2j6jeWOts8X"))