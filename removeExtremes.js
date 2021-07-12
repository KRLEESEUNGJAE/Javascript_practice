//문제: 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.
// 주의: 가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다. 가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.

// my solution
function removeExtremes(arr) {
    let longest = arr[0];
    let shortest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length >= longest.length) {
            longest = arr[i];
        }
        if (arr[i].length <= shortest.length) {
            shortest = arr[i];
        }
    }
    let longestIndex = arr.indexOf(longest);
    arr.splice(longestIndex, 1);

    let shortestIndex = arr.indexOf(shortest);
    arr.splice(shortestIndex, 1);

    return arr;
}

// reference
function removeExtremes(arr) {
    let shortestLen = 20;
    let longestLen = 0;
    let shortestIdx = 0;
    let longestIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= longestLen) {
            longestLen = arr[i].length;
            longestIdx = i;
        }

        if (arr[i].length <= shortestLen) {
            shortestLen = arr[i].length;
            shortestIdx = i;
        }
    }

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== shortestIdx && i !== longestIdx) {
            result.push(arr[i]);
        }
    }

    return result;
}
console.log(removeExtremes(['a', 'c', 'def']))
console.log(removeExtremes(['where', 'is', 'the', 'longest', 'word']))
console.log(removeExtremes(['iAmLongest', 'iAmNotShortest', 'iAmLongest', 'long']))