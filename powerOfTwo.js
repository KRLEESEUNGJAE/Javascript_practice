// 문제: 수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.

// Reference
function powerOfTwo(num) {
    if (num === 1) {
        return true;
    }

    if (num % 2) {
        return false;
    }

    let powered = 2;
    while (powered < num) {
        powered = powered * 2;
    }

    return powered === num;
}


// my solution
function powerOfTwo(num) {
    let m = 0;
    //Math.pow(n, m) // n의 m승의 값
    while (Math.pow(2, m) <= num) {
        if (Math.pow(2, m) === num) {
            return true;
        }
        m++
    }
    return false;
}
// debugger의 힘을 제대로 느꼈다. 
console.log(powerOfTwo(1))
console.log(powerOfTwo(32))
console.log(powerOfTwo(100))
console.log(powerOfTwo(997))
console.log(powerOfTwo(36028797018964))
console.log(powerOfTwo(36028797018963970))
console.log(powerOfTwo(18446744073709551616))