// 문제 : 문자열을 입력받아 문자열에 존재하는 각 단어의 개수 정보를 담은 객체를 리턴해야 합니다.
// 주의 : 단어는 공백을 제외한 연속된 알파벳 문자열로 정의합니다. 공백은 한 칸 이상입니다. 단어가 존재하지 않는 경우, 빈 객체를 리턴해야 합니다. 대소문자를 구분하지 않습니다. str.trim 사용은 금지됩니다.

function charNumObj(str) {
    // 소문자로 변환
    let lowercase = str.toLowerCase();
    // split 사용해서 공백 기준으로 글자 나누기 
    let splitArr = lowercase.split(' ');
    // 결과 값 넣어줄 빈 객체 생성
    let result = {};

    for (let i = 0; i < splitArr.length; i++) {
        if (splitArr[i] === '') {
            continue;
        } else if (result[splitArr[i]] === undefined) {
            result[splitArr[i]] = 1;
        } else {
            result[splitArr[i]] += 1;
        }
    }
    return result;
}
console.log(charNumObj('ask a ask'))
console.log(charNumObj(' a b c d C b A '))