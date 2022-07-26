/*
문제 10: 별 찍기

아래처럼 별을 콘솔에 출력해보세요!

input : 5

output:

    *
   ***
  *****
 *******
*********
*/

const chrismasTree = (e) => {
    //리턴하고 별 찍을 도화지 선언
    let output = ''

    // 받은 숫자(e) 만큼 줄 반복
    for (let i = 0; i < e; i++) {
        // 찍을 별 선언
        let star = '';
        // 받은 숫자에서 상위 루프 차수를 뺀 만큼 공백 추가
        for (let j = 0; j < e-i; j++) {
            star = star + ' ';
        }
        // i=0 일때는 1개, 이후 1일때는 3개, 2일때는 5개 ...
        for (let k=0; k<2*i+1; k++) {
            star = star + '*';
        }
        // 줄띄우기
        output = output + star + '\n'
    }
    return output;
}

console.log(chrismasTree(5));
console.log(chrismasTree(7));
console.log(chrismasTree(3));
console.log(chrismasTree(8));