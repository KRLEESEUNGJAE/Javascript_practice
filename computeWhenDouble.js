// 문제: 연이율을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴해야 합니다.
// input : interestRate (number 타입의 연이율 (%))

function computeWhenDouble(interestRate) {
    let year = 0;
    let principal = 1;
    interestRate = (interestRate / 100) + 1;
    while (principal < 2) {
        principal = principal * interestRate;
        year++;
    }
    return year;
}
console.log(computeWhenDouble(1))
console.log(computeWhenDouble(2.3))
console.log(computeWhenDouble(7))
console.log(computeWhenDouble(100))
console.log(computeWhenDouble(200))