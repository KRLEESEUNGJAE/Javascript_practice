const fs = require('fs');

fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
        throw err; // 에러를 던집니다.
    }
    console.log(data);
});