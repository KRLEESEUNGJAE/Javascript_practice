function fibonacci(num) {
    let fiboNum = [];

    for (let i = 0; i <= num; i++) {
        if (i === 0) {
            fiboNum.push(0);
        } else if (i === 1) {
            fiboNum.push(1);
        } else {
            fiboNum.push(fiboNum[i - 2] + fiboNum[i - 1]);
        }
    }

    return fiboNum;
}
console.log(fibonacci(8))
console.log(fibonacci(8)[8])
console.log(fibonacci(13))
console.log(fibonacci(13)[13])

