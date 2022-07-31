/*
# 문제27 : 객체 만들기

첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

두 개를 합쳐 **학생의 이름이 key**이고 **value가 수학 점수**인 객체를 출력해주세요.
*/

const stuName = [];
const stuScore = [];

const createObj = (stu1, stu2, sco1, sco2) => {
  const result = {};

  stuName.push(stu1, stu2);
  stuScore.push(sco1, sco2);

  result[stuName[0]] = stuScore[0];
  result[stuName[1]] = stuScore[1];

  return result;
};

console.log(createObj("철수", "영희", 90, 85));
