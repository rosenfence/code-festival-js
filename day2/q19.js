/*
# 문제19 : 제곱을 구하자

공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.
*/

const outputPower = (base, exponent) => {
    console.log(Math.pow(base, exponent));
}

outputPower(2,3);
outputPower(3,4);

//! 공백으로 입력해서 쓸 수 있도록 다시