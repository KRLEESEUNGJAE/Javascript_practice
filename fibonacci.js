// function fibonacci(num) {
//     let fiboNum = [];

//     for (let i = 0; i <= num; i++) {
//         if (i === 0) {
//             fiboNum.push(0);
//         } else if (i === 1) {
//             fiboNum.push(1);
//         } else {
//             fiboNum.push(fiboNum[i - 2] + fiboNum[i - 1]);
//         }
//     }

//     return fiboNum;
// }

function fibonacci(num) {
    let result = [0, 1]

    if (num === 0) {
        return [0];
    } else if (num === 1) {
        return [0, 1];
    }

    for (let i = 2; i <= num; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}

console.log(fibonacci(8))
console.log(fibonacci(8)[8])
console.log(fibonacci(13))
console.log(fibonacci(13)[13])

