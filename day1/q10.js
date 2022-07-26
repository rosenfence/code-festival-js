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

    // 받은 숫자 만큼 찍어보기
    for (let i = 0; i < e; i++) {
        let star = '';
        for (let j = 0; j < e-i; j++) {
            star = star + ' ';
        }
        for (let k=0; k<2*i+1; k++) {
            star = star + '*';
        }
        output = output + star + '\n'
    }
    return output;
}

console.log(chrismasTree(5));
console.log(chrismasTree(7));
console.log(chrismasTree(3));