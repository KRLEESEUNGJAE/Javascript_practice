let list = [
    [
        ['firstName', 'Joe'],
        ['age', 42],
        ['gender', 'male'],
    ],
    [
        ['firstName', 'Mary'],
        ['lastName', 'Jenkins'],
        ['age', 36],
        ['gender', 'female'],
    ],
    [
        ['lastName', 'Kim'],
        ['age', 40],
        ['gender', 'female'],
    ],
];

// 문제: 사람들의 정보를 담은 배열을 입력받아 조건에 맞게 각 개인의 전체 이름을 요소로 갖는 배열을 리턴해야 합니다.

function test5(arr) {
    // 3중 배열을 객체 요소가 담긴 배열로 만든다.
    let newArr = []
    arr.map(el => {
        let obj = {}
        el.reduce((acc, cur) => {
            obj[cur[0]] = cur[1]
        }, 0)
        newArr.push(obj)
    })
    // 객체의 key값 중 age를 이용해서 오름차순으로 정렬한다.
    let sortArr = newArr.sort((a, b) => {
        if (a.age > b.age) {
            return 1
        }
        if (a.age < b.age) {
            return -1
        }
    })
    // 객체의 key값 중 firstName, lastName을 이용해서 이름을 뽑는다.
    let result = []
    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i].firstName && sortArr[i].lastName) {
            result.push(`${sortArr[i].firstName} ${sortArr[i].lastName}`)
        }
        if (!sortArr[i].firstName) {
            result.push(`${sortArr[i].lastName}`)
        }
        if (!sortArr[i].lastName) {
            result.push(`${sortArr[i].firstName}`)
        }
    }

    return result;
}

console.log(test5(list));