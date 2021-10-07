function rockPaperScissors(round) {
    let result = [];
    round = round || 3;
    const rps = ['rock', 'paper', 'scissors'];

    // 재귀를 이용해서 푼다.
    let recursion = function (round, temp) {
        if (round === 0) {
            result.push(temp);
            return;
        }

        for (let i = 0; i < rps.length; i++) {
            let cur = rps[i];
            recursion(round - 1, temp.concat(cur))
        }
    }

    recursion(round, []);
    return result;
};


console.log(rockPaperScissors())