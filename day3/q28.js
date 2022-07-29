/*
# 문제28 : 2-gram

**2-gram**이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 

예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.
*/

const twoGram = (str) => {
    for (let i = 0; i < str.length-1; i++) {
        console.log(`${str[i]} ${str[i+1]}`);
    }
}

twoGram('Javascript');