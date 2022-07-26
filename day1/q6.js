/*
문제 6: False
다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
다음 중 False가 아닌 True로 취급하는 것을 찾아주세요.
*/
const listObj = {
    a : NaN,
    b : 1,
    c : "",
    d : 0,
    e : undefined
}

const checkFunc = (obj) => {
    for (let i in obj) {
        obj[i] ? console.log(true) : console.log(false);
    }
}
checkFunc(listObj);

// Falshy 거짓인 값
// console.log(!!0);
// console.log(!!-0);
// console.log(!!'');
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!NaN);

// Truthy 진짜인 값
// console.log(!!1);
// console.log(!!-1);
// console.log(!!'text');
// console.log(!!{}); 들어있든 안들어있든 상관없음
// console.log(!!Infinity);
// console.log(!![]); 들어있든 안들어있든 상관없음