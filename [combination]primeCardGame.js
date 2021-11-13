function boringBlackjack(cards) {
  // 소수 판별 함수
  function isPrime(num) {
    let sqrt = Math.sqrt(num);

    if (num === 1) {
      return false;
    }
    if (num === 2) {
      return true;
    }
    // 짝수는 무조건 2를 약수로 갖기 때문에 2로 나누어지면 false 리턴
    if (num % 2 === 0) {
      return false;
    }
    // 이제 홀수만 남음, Math.sqrt()사용해서 해결
    for (let i = 3; i <= sqrt; i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  // count(결과값) 초기화
  let count = 0;

  //Todo: 카드 3장 뽑아서 더하기
  // 카드 뽑는 방식은 첫 카드를 cards 의 0번 index 부터 고정해 놓고 1씩 뒤로 옮겨간다
  for (let i = 0; i < cards.length; i++) {
    // 두 번째 카드의 인덱스는 첫 카드 + 1에서 시작해야 하고
    for (let j = i + 1; j < cards.length; j++) {
      // 세 번째 카드의 인덱스는 두 번째 카드 + 1에서 시작해야 한다
      for (let k = j + 1; k < cards.length; k++) {
        const sum = cards[i] + cards[j] + cards[k];
        // 세 카드의 합이 소수이면 경우의 수 + 1
        if (isPrime(sum)) count++;
      }
    }
  }
  return count;
}

//! Test Line
let output = boringBlackjack([2, 3, 4, 8, 13]);
console.log(output); // 3
