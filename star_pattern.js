var star = '';
for (var i = 0; i < 10; i++) {
    for (var j = 0; j <= i; j++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);