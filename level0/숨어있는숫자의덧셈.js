//문자열 my_string이 매개변수로 주어집니다.
//  my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_sting) {
  let answer = 0;
  answer = my_sting.match(/\d/g).reduce((a, b) => Number(a) + Number(b), 0);
  console.log(answer);
}

solution("aAb1B2cC34oOp");
solution("1a2b3c4d123");
