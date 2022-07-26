/*
문제 9 : concat을 활용한 출력 방법
다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.
*/

let year = '2019';
let month = '04';
let day = '26';
let hour = '11';
let minute = '34';
let second = '27';

let result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second)

console.log(result); // 2019/04/26 11:34:27

//! array.prototype.concat과 사용법이 거의 같으나 문자열에서 사용하는 법은 위와 같음
