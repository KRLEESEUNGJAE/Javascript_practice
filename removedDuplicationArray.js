// 중복된 원소를 제거해야 함.

// solution 1 
let removedDuplArray = sortArray.reduce((acc, cur) => {
    if (acc.includes(cur)) {
        return acc;
    } else {
        return [...acc, cur];
    }
})

// solution 2
let removedDuplArray = sortArray.reduce((acc, cur) => {
    if (acc.includes(cur)) {
        return acc;
    } else {
        return acc.concat(cur);
    }
}, [])