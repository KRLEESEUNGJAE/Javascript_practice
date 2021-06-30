// 문제: 문자열을 입력받아 문자열을 구성하는 각 문자(letter)를 키로 갖는 객체를 리턴해야 합니다.
//      각 키의 값은 해당 문자가 문자열에서 등장하는 횟수를 의미하는 number 타입의 값이어야 합니다.

// // solution 1
// function countAllCharacters(str) {
//   let obj = {};

//   for(let i = 0; i < str.length; i++){
//     if(!(str[i] in obj)){
//       obj[str[i]] = 1;
//     }else{
//       obj[str[i]] += 1 ;
//     }
//   }
//   return obj;
// }

// solution 2
function countAllCharacters(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 0;
        }
        obj[str[i]]++;
    }
    return obj;
}

console.log(countAllCharacters('banana'));
console.log(countAllCharacters('leeseungjae'));
