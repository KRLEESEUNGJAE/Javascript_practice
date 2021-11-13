function newChickenRecipe(stuffArr, choiceNum) {
  // 음식 재료 필터 만들기 (0이 3개 이상이라면 필터링하여 거른다.)
  const freshIngredient = [];
  for (let i = 0; i < stuffArr.length; i++) {
    const filter = String(stuffArr[i])
      .split("")
      .filter((el) => el === "0");
    if (filter.length < 3) {
      freshIngredient.push(stuffArr[i]);
    }
  }
  // 만든 재료 순서 정렬
  freshIngredient.sort((a, b) => a - b);

  // 주어진 재료 모두 사용할 수 없다면 빈 배열[]을 반환,
  // 사용할 수 있는 재료가 choiceNum보다 작다면 빈 배열[] 을 반환
  if (freshIngredient.length === 0 || freshIngredient.length < choiceNum)
    return [];

  // result 배열 초기화
  let result = [];

  // 순열 만들기
  const permutation = (choiceNum, freshIngredient, tempArr) => {
    if (choiceNum === 0) {
      result.push(tempArr);
      return;
    }

    for (let i = 0; i < freshIngredient.length; i++) {
      let cur = freshIngredient[i];
      // 원본 배열을 건들면 작업이 진행되지 않기 때문에 복사한 배열에서 작업을 진행한다.
      let slice = freshIngredient.slice();
      // 선택된 현재 재료는 슬라이스된 배열에서 빼준다.
      slice.splice(i, 1);
      // 재귀
      permutation(choiceNum - 1, slice, tempArr.concat(cur));
    }
  };
  // 실행
  permutation(choiceNum, freshIngredient, []);
  // 순열의 길이 반환
  return result;
}

const output1 = newChickenRecipe([1, 10, 1100, 1111], 2);
console.log(output1);
/*
  [
    [1, 10], [1, 1100], [1, 1111],
    [10, 1], [10, 1100], [10, 1111],
    [1100, 1], [1100, 10], [1100, 1111],
    [1111, 1], [1111, 10], [1111, 1100]
  ];
*/
