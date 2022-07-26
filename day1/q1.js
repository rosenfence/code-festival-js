/*
문제 1 : 배열의 삭제

다음 배열에서 400, 500을 삭제하는 code를 입력하세요.
*/

let nums = [100, 200, 300, 400, 500];

//! pop을 사용하면

// nums.pop(nums.pop());
// console.log(nums);

//! splice를 사용하면

nums.splice(3,4);
console.log(nums);