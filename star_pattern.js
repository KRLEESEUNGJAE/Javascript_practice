// 기본 별찍기
var star = '';
for (var i = 0; i < 10; i++) {
    for (var j = 0; j <= i; j++) {
        star += '*';
    }
    star += '\n';
}
console.log('<기본>');
console.log(star);

// 2개씩 추가
var star = '';
for (var i = 0; i < 10; i++) {
    for (var j = 0; j <= (i * 2); j++) {
        star += '*';
    }
    star += '\n';
}
console.log('<2개씩추가>');
console.log(star);

// 역삼각형 
var star = '';
for (var i = 10; i >= 0; i--) {
    for (var j = 0; j <= i; j++) {
        star += '*';
    }
    star += '\n';
}
console.log('<역삼각형>')
console.log(star)

// 가운데 정렬 삼각형
var star = '';
for (var i = 0; i < 10; i++) {
    for (var j = 9; j > i; j--) {
        star += ' ';
    }
    for (var k = 0; k <= (i * 2); k++) {
        star += '*';
    }
    star += '\n';
}
console.log('가운데정렬')
console.log(star)