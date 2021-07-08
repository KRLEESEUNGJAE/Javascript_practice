// 문제: 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴해야 합니다.
// caution: 중복되는 키의 경우, 초기의 값을 사용합니다. 빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다. arr[i]의 길이가 0인 경우, 무시합니다.

// my solution
function convertListToObject(arr) {
    let obj = {};

    if (arr.length === 0) {
        return {};
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 0) {
            continue;
        }

        if (obj[arr[i][0]] === undefined) {
            obj[arr[i][0]] = arr[i][1];
        }
    }
    return obj;
}

// reference
function convertListToObject(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 0 && result[arr[i][0]] === undefined) {
            result[arr[i][0]] = arr[i][1];
        }
    }

    return result;
}


console.log(convertListToObject([[]]))
console.log(convertListToObject([['some', 'like']]))
console.log(convertListToObject([[], ['some', 'like'], []]))
console.log(convertListToObject([['some', 'like'], ['some', 'dislike']]))
console.log(convertListToObject([['some', 'like'], ['first', 'second'], ['melee', 'brawl']]))
console.log(convertListToObject([['some', 'like'], ['first', 'second'], ['mike', 'ike'], ['first', 'Fox'], ['melee', 'brawl']]))
