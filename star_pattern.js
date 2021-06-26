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

// 2개씩 추가되는 별찍기
var star = '';
for (var i = 0; i < 10; i++) {
    for (var j = 0; j <= (i * 2); j++) {
        star += '*';
    }
    star += '\n';
}
console.log('<2개씩추가>');
console.log(star);