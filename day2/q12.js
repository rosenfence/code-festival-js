/*
# 문제12 : 게임 캐릭터 클래스 만들기

다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
**주어진 소스 코드를 수정해선 안됩니다.**

*/
class Wizard {
    constructor(health, mana, armor) {
      this.health = health;
      this.mana = mana;
      this.armor = armor;
    }
    attack(){
        console.log('파이어볼');
    }
  }

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

//! 클래스 문법의 경우 클래스 선언 전에 호출 시에 호이스팅 이슈 발생하므로 반드시 먼저 선언하고 사용할 것