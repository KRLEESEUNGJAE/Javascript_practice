// 보드 게임
// 문제
// N * N의 크기를 가진 보드판 위에서 게임을 하려고 합니다. 게임의 룰은 다음과 같습니다.

// 좌표 왼쪽 상단(0, 0)에 말을 놓는다.
// 말은 상, 하, 좌, 우로 이동할 수 있고, 플레이어가 조작할 수 있다.
// 조작의 기회는 딱 한 번 주어진다.
// 조작할 때 U, D, L, R은 각각 상, 하, 좌, 우를 의미하며 한 줄에 띄어쓰기 없이 써야 한다.
// 예시: UDDLLRRDRR, RRRRR
// 한 번 움직일 때마다 한 칸씩 움직이게 되며, 그 칸 안의 요소인 숫자를 획득할 수 있다.
// 방문한 곳을 또 방문해도 숫자를 획득할 수 있다.
// 보드 밖을 나간 말은 OUT 처리가 된다.
// 칸 안의 숫자는 0 또는 1이다.
// 단, 좌표 왼쪽 상단(0, 0)은 항상 0이다.
// 획득한 숫자를 합산하여 숫자가 제일 큰 사람이 이기게 된다.
// 보드판이 담긴 board와 조작하려고 하는 문자열 operation이 주어질 때, 말이 해당 칸을 지나가면서 획득한 숫자의 합을 구하는 함수를 작성하세요.

// 입력
// 인자 1: board
// number 타입의 2차원 배열
// 2 <= board.length <= 1,000
// 예: [ [0, 0, 1], [1, 0, 1], [1, 1, 1] ]
// 인자 2: operation
// string 타입의 대문자 영어가 쓰여진 문자열

// 1 <= operation.length <= board.length * 2

// U, L, D, R 이외의 문자열은 없습니다.
// 출력
// Number 타입을 반환해야 합니다.
// board와 operation이 입력값의 예시 ([ [0, 0, 1], [1, 0, 1], [1, 1, 1] ], DDR)일 때, (0, 0) -> (1, 0) -> (2, 0) -> (2, 1) 순서로 이동하게 되고, 각 0, 1, 1, 1을 얻어 3을 반환합니다.
// 주의사항
// 만약, 말이 보드 밖으로 나갔다면 즉시 OUT 을 반환합니다.
// 입출력 예시
// const board1 = [
//   [0, 0, 0, 1],
//   [1, 1, 1, 0],
//   [1, 1, 0, 0],
//   [0, 0, 0, 0]
// ]
// const output1 = boardGame(board1, 'RRDLLD');
// console.log(output1); // 4


// const board2 = [
//   [0, 0, 1],
//   [1, 1, 1],
//   [1, 0, 0]
// ]
// const output2 = boardGame(board2, 'UUUDD');
// console.log(output2); // 'OUT'

// const board3 = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0]
// ]
// const output3 = boardGame(board3, 'DDRRRUDUDUD');
// console.log(output3); // 0

//Todo: my solution 
function boardGame(board, operation) {
    let result = 0;

    // 좌표 왼쪽 상단(0, 0)에 말을 놓는다.
    let dirX = 0;
    let dirY = 0;

    // 조작할 때 U, D, L, R은 각각 상, 하, 좌, 우를 의미하며 한 줄에 띄어쓰기 없이 써야 한다.
    for (let i = 0; i < operation.length; i++) {
        if (operation[i] === 'U') {
            dirX = dirX - 1;
            if (dirX < 0 || dirX >= board.length) return 'OUT';
            result = result + board[dirX][dirY];
        }
        else if (operation[i] === 'D') {
            dirX = dirX + 1;
            if (dirX < 0 || dirX >= board.length) return 'OUT';
            result = result + board[dirX][dirY];
        }
        else if (operation[i] === 'L') {
            dirY = dirY - 1;
            if (dirY < 0 || dirY >= board.length) return 'OUT';
            result = result + board[dirX][dirY];
        }
        else if (operation[i] === 'R') {
            dirY = dirY + 1;
            if (dirY < 0 || dirY >= board.length) return 'OUT';
            result = result + board[dirX][dirY];
        }
    }

    return result;
};

//Todo: reference
// LOOK UP TABLE을 사용한다면 조건문을 추상화시킬 수 있습니다.
function boardGame(board, operation) {
    // TODO: 여기에 코드를 작성하세요.
    const DIR = {
        'U': [-1, 0],
        'D': [1, 0],
        'L': [0, -1],
        'R': [0, 1]
    }
    const LEN = board.length;
    const isValid = (y, x) => 0 <= y && y < LEN && 0 <= x && x < LEN;

    let Y = 0;
    let X = 0;
    let score = 0;
    for (let i = 0; i < operation.length; i++) {
        const [dY, dX] = DIR[operation[i]];
        Y += dY;
        X += dX;
        if (isValid(Y, X) === false) return 'OUT';
        score += board[Y][X];
    }
    return score;
};