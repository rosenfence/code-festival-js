/*
# 문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.
*/

const reverseOutput = (str) => {
    const arr = str.split('').reverse();
    let result = '';
    for(let i=0; i<arr.length; i++){
        result = result + arr[i];
    }
    return result;
}

reverseOutput('거꾸로');
//! join method 사용하면 더 짧게 가능
/*
for(let i=arr.length-1; i === 0; i--){
    result = result + arr[i];
}
거꾸로 돌리는 반복문은 왜 안되는 걸까?
*/ 