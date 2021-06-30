// 문제: 배열과 객체를 입력받아 배열의 각 요소들을 객체의 키로 했을 때 그 값을 추출하여 만든 새로운 객체를 리턴해야 합니다.
// 주의 사항: 입력받은 객체에 존재하지 않는 키는 무시합니다.
//          입력받은 객체를 수정하지 않아야 합니다.

// // solution 1
// function select(arr, obj) {
//   let newObj = {};

//   for(let key of arr){
//     if(key in obj){
//       newObj[key] = obj[key]
//     }
//   }
//   return newObj;
// }

// // solution 2
// function select(arr, obj) {
//   let newObj = {};

//   for(let i = 0; i < arr.length; i++){
//     for(let key in obj){
//       if(arr[i] === key){
//         newObj[key] = obj[key]
//       }
//     }
//   }
//   return newObj;
// }

// solution 3
function select(arr, obj) {
    let newObj = {};

    for (let key in obj) {
        for (let i = 0; i < arr.length; i++) {
            if (key === arr[i]) {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}
console.log(select(['a', 'c', 'e'], { a: 1, b: 2, c: 3, d: 4 }))
console.log(select(['d', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 }))
