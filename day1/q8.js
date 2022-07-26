/*
문제 8: 객체의 키 이름 중복
자바스크립트 객체를 다음과 같이 만들었다.
출력값을 입력하시오.(출력값은 공백을 넣지 않습니다.)
*/

const d = {
    'height' : 100,
    'weight' : 78,
    'weight' : 84,
    'temperature' : 36,
    'eyesight' : 1
};

console.log(d['weight']);

//! 84 : key가 중복되게 넣어준 값이 있으면, 뒤에 넣어준 value값을 따른다