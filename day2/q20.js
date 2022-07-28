/*
# 문제20 : 몫과 나머지

공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 **그 몫과 나머지를 공백으로 구분하여 출력하세요.**
*/

const outputShareAndRest = (divided, divider) => {
    let share = Math.floor(divided/divider);
    let rest = divided%divider;
    console.log(`${share} ${rest}`);
}

outputShareAndRest(10, 2);
outputShareAndRest(10, 3);