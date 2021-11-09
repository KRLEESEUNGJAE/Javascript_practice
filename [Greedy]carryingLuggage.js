// *최종 수정
function movingStuff(stuff, limit) {
  // stuff 배열이 랜덤이니까 먼저 오름차순으로 정렬을 해준 뒤 진행
  let count = 0;
  let array = stuff.sort((a, b) => a - b);
  while (array.length > 0) {
    count++;
    let maxNum = array.pop();
    if (maxNum + array[0] <= limit) {
      array.shift();
    }
  }
  return count;
}

function movingStuff(stuff, limit) {
  // stuff 배열이 랜덤이니까 먼저 오름차순으로 정렬을 해준 뒤 진행
  let count = 0;
  let array = stuff.sort((a, b) => a - b);
  while (array.length > 0) {
    let maxNum = array.pop();
    if (maxNum + array[0] <= limit) {
      count++;
      array.shift();
    } else {
      count++;
    }
  }
  return count;
}

function movingStuff(stuff, limit) {
  // stuff 배열이 랜덤이니까 먼저 오름차순으로 정렬을 해준 뒤 진행
  let count = 0;
  let array = stuff.sort((a, b) => a - b);
  while (array.length > 0) {
    let maxNum = array.pop();
    let minNum = array.shift();
    count++;

    if (maxNum + minNum > limit) {
      array.unshift(minNum);
    }
  }
  return count;
}

// ! 과도기
// function movingStuff(stuff, limit) {
//   // stuff 배열이 랜덤이니까 먼저 오름차순으로 정렬을 해준 뒤 진행
//   let count = 0;
//   let array = stuff.sort((a, b) => a - b);
//   while(array.length > 0){
//     let maxNum = array.pop();
//     // let minNum = array.shift();
//     if(maxNum + array[0] <= limit){
//       array.shift();
//       count++;
//     }else if(){
//       // array.unshift(minNum);
//       count++;
//     }
//   }
//   return count;
// }

// ! 잘못 접근한 예제
// function movingStuff(stuff, limit) {
//   // stuff 배열이 랜덤이니까 먼저 오름차순으로 정렬을 해준 뒤 진행
//   let count = 0;
//   let array = stuff.sort((a, b) => a - b);
//   while (array.length > 0) {
//     let maxNum = array.pop();
//     let minNum = array.shift();
//     if (maxNum + minNum <= limit) {
//       count++;
//     } else {
//       array.unshift(minNum);
//       count++;
//     }
//   }
//   return count;
// }
// !

// Todo: Test Line
let output1 = movingStuff([70, 50, 80, 50], 100);
console.log(output1); // 3

// let output2 = movingStuff(
//   [
//     46, 231, 213, 192, 89, 94, 65, 76, 54, 65, 42, 64, 63, 75, 86, 115, 112,
//     129, 133, 149, 151, 167, 179, 183, 198, 210, 221,
//   ],
//   240
// );
// console.log(output2);
