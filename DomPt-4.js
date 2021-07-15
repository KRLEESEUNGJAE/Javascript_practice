// 문제 : 사원들의 정보를 배열로 입력받아 HTML 엘리먼트의 형태로 변형해서 ul#container에 append 합니다.

function printRole(user) {
    // Joe Blow를 클릭하면 clerk 이
    // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
    // 이 함수는 수정하지 마십시오.
    console.log(user.role);
}

function test4(arr) {
    // 반복문 생성 
    for (let i = 0; i < arr.length; i++) {
        // list 생성 변수
        let list = document.createElement('li');
        // a 생성 변수 
        let name = document.createElement('a');

        name.textContent = arr[i].firstName + ' ' + arr[i].lastName;
        name.setAttribute('class', 'name');
        name.addEventListener('click', () => { printRole(arr[i]) });
        list.append(name);

        // div 생성 변수 
        let age = document.createElement('div');

        age.textContent = arr[i].age;
        age.setAttribute('class', 'age');
        list.append(age);
        // 마지막에 ul에 한번에 붙이기 
        document.querySelector('#container').append(list);
    }
}
