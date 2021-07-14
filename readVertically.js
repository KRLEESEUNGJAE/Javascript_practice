// function readVertically(arr) {
//     let result = '';
//     // arr[0][0], arr[1][0], arr[2][0]
//     // arr[0][1], arr[1][1], arr[2][1]
//     // 이중for문 
//     for (let i = 0; i < arr[i].length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j][i] === undefined) {
//                 continue;
//             } else {
//                 result = result + arr[j][i];
//             }
//         }
//     }
//     return result;
// }

//reference
function readVertically(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        for (let j = 0; j < str.length; j++) {
            if (temp.length === j) {
                temp.push(str[j]);
            } else {
                temp[j] = temp[j] + str[j];
            }
        }
    }

    let result = '';
    for (let i = 0; i < temp.length; i++) {
        result = result + temp[i];
    }

    return result;
}
console.log(readVertically(['ABCDE', 'abcde', 'fghij']))