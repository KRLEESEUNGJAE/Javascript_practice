// 문제: 문자열을 입력받아 순서가 뒤집힌 문자열을 리턴해야 합니다.

// my solution
function firstReverse(str) {
    let reverse = str.split('');
    reverse = reverse.reverse();
    reverse = reverse.join('');
    return reverse;
}

// reference
function firstReverse2(str) {
    return str.split('').reverse().join('');
}

console.log(firstReverse('ti od nac uoy'))
console.log(firstReverse('reenigne erawtfos taerg a eb lliw uoy'))
console.log('')
console.log(firstReverse2('ti od nac uoy'))
console.log(firstReverse2('reenigne erawtfos taerg a eb lliw uoy'))

// reference의 코드가 좀 더 간결하고 시인성이 좋은 코드처럼 보인다.