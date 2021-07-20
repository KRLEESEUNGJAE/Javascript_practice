// 문제
// 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 양의 정수 또는 배열을 요소로 갖는 다차원 배열 (입출력 예시 참고)

// 출력
// 배열을 리턴해야 합니다.

// 주의 사항
// 함수 flattenArr는 재귀함수의 형태로 작성합니다.
// Array Method flat()과 flatMap() 사용은 금지됩니다.
// 반복문(for, while) 사용이 가능합니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 입력으로 전달되는 다차원 배열이 중첩된 정도(중첩의 깊이)는 정해져 있지 않습니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.

// 입출력 예시
// let output = flattenArr([[1], 2, [3, 4], 5]);
// console.log(output); // --> [1, 2, 3, 4, 5]
//
// output = flattenArr([[2, [[3]]], 4, [[[5]]]);
// console.log(output); // --> [2, 3, 4, 5]

function flattenArr(arr) {
    // base case
    if (arr.length === 0) {
        return [];
    }

    // recursive case
    const head = arr[0];
    const tail = arr.slice(1);
    if (Array.isArray(head)) {
        return flattenArr([...head, ...tail]);
    } else {
        return [head].concat(flattenArr(tail));
    }
}

// 다른 풀이 방법 1
// function flattenArr(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       const flattend = flattenArr(arr[i]);
//       result.push(...flattend);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// 다른 풀이 방법 2
// function flattenArr(arr) {
//   return arr.reduce(function (result, item) {
//     if (Array.isArray(item)) {
//       const flattened = flattenArr(item);
//       return [...result, ...flattened];
//     } else {
//       return [...result, item];
//     }
//   }, []);
// }
console.log(flattenArr([1, 2, 3]))
console.log(flattenArr([[1], 2, [3, 4], 5]))
console.log(flattenArr([1, [2], [3, [[[4]]]], 5, [6, [7, [8]]]]))