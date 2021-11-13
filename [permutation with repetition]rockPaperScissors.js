// ?질문: temp에 concat말고 push는 왜 안될까?
// *해답: push는 실행하면 temp에 담긴 배열의 내용을 출력하지 않고 temp에 담긴 배열의 개수를 출력해 주기 때문이다.
// *우리가 필요한 건 temp에 담긴 배열이다. => concat() 사용.
// 중복순열
function rockPaperScissors(rounds) {
  let result = [];
  rounds = rounds || 3;
  const rps = ["rock", "paper", "scissors"];

  // 재귀를 이용해서 푼다.
  let recursion = function (rounds, temp) {
    if (rounds === 0) {
      result.push(temp);
      return;
    }

    for (let i = 0; i < rps.length; i++) {
      let cur = rps[i];
      recursion(rounds - 1, temp.concat(cur)); //? 질문
    }
  };

  recursion(rounds, []);
  return result;
}

console.log(rockPaperScissors());
