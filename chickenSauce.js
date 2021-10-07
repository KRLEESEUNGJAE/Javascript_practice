function newChickenRecipe(stuffArr, choiceNum) {
    // 상한재료 버리기
    let freshArr = [];
    for (let el of stuffArr) {
        let check = String(el)
            .split('')
            .filter(el => el === '0')
        if (check.length <= 2) {
            freshArr.push(el)
        }
    }

    let result = [];

    const recursion = (arr, count, temp) => {
        if (count === 0) {
            result.push(temp);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            let choice = arr[i];
            let slice = arr.slice();
            slice.splice(i, 1)

            recursion(slice, count - 1, temp.concat(choice))
        }
    }

    recursion(freshArr, choiceNum, []);
    return result;
}
