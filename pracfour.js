alert("멋쟁이사자처럼 프론트 스터디");
const problem = Number(prompt("문제 번호를 입력하세요"));

switch (problem) {
    case 1: {
        // ### 1. 반지름을 입력 받아 원의 넓이를 구하는 코드

        // - prompt()를 사용해서 반지름 입력 받기
        // - alert()를 사용해서 원의 넓이 출력하기
        // - 넓이 = pi * 반지름 * 반지름
        // - pi는 3.14로 상수, 반지름은
        const radius = Number(prompt("반지름을 입력하세요"));
        const pi = 3.14
        const area = radius * radius * pi;
        alert(`원의 넓이는 ${area}입니다`);
    break;}

    case 2: {
        // ### 2. ‘치즈’, ‘요구르트’, ‘우유’를 포함하는 배열을 작성하고, ‘아이스크림’을 배열 맨 뒤에 추가하는 코드 작성

        // - 먼저 ‘치즈’, ‘요구르트’, ‘우유’를 포함하는 foods 배열 만들기
        // - push()를 이용해서 ‘아이스크림’ 추가하기
        const foods2 = ["치즈","요구르트","우유"];
        foods2.push(prompt("아이스크림을 입력하세요"));
        alert(foods2);
    break;}

    case 3: {
        // ### 3. 2에서 만든 배열의 [2]에 ‘빵’ 추가하는 코드 작성

        // - splice 사용해주세요
        const foods3 = ["치즈","요구르트","우유,아이스크림"];
        foods3.splice(4,0,prompt("빵을 입력하세요"));
        alert(foods3);
    break;}

    case 4: {
        // ### 4. 숫자를 입력 받아 양수, 0, 음수를 구분하는 코드 작성

        // ```jsx
        // const num = Number(prompt(’숫자를 입력하세요’));
        // // 조건식을 완성해주세요 
        // ```
        const num = Number(prompt("숫자를 입력하세요"));

        if (num > 0) {
            alert(`${num}은 양수입니다`)
        } else if (num < 0) {
            alert(`${num}은 음수입니다`)
        } else {
            alert(`${num}은 0입니다`)
        }
    break;}

    case 5: {        
        // ### 5. 숫자를 입력 받아 짝수인지 홀수인지 판단하는 코드 작성

        // ```jsx
        // const num = Number(prompt(’숫자를 입력하세요’));
        // // 조건식을 완성해주세요 
        // ```

        const oddnum = Number(prompt("숫자를 입력하세요"));

        if (oddnum === 0) {
            alert(`${oddnum}은 0입니다`)
        } else if (oddnum % 2 == 0) {
            alert(`${oddnum}은 짝수입니다`)
        } else {
            alert(`${oddnum}은 홀수입니다`)
        }
    break;}
    
    case 6: {
        // ### 6. 1~10까지 더하는 코드 작성

        // - for 반복문 또는 while 반복문 사용해서 작성해주세요

        // ```jsx
        // let num = 0;
        // // 반복문 완성해주세요 
        // ```
        let sum = 0;

        const number = Number(prompt("숫자를 입력하세요"));

        for (let i = 0; i <= number; i++) {
            sum += i;
        }

        alert(`1부터 ${number}까지의 합은 ${sum}입니다`);

    break;}

    case 7: {
        // ### 7. 5층 짜리 별 찍기 코드 작성

        // - for 반복문을 사용해주세요
        // - 반복문 안에 반복문이 있는 중첩 반복문을 사용해주세요

        const starstair = Number(prompt("줄 수를 입력하세요"));

        for (let i = 0; i<=starstair; i++) {
            let star = "";
            for (let j = 0; j<=i; j++) {
                star += "*";
            }

            console.log(star);
        }
    break;}

    case 8: {
        // ### 8. a와 b를 입력 받아 a~b까지 더하는 함수를 만드는 코드 작성

        // - 선언적 함수, 반복문을 사용해서 작성해주세요

        // ```jsx
        // let a = Number(prompt('a를 입력해주세요'));
        // let b = Number(prompt('b를 입력해주세요'));

        // // 함수 작성

        // console.log(`${num}`);
        // ```

        let a = Number(prompt('a를 입력해주세요'));
        let b = Number(prompt('b를 입력해주세요'));

        

        function sumRange(a,b) {
            let sum = 0;

            for (let i = a; i <= b; i++) {
            sum += i;
            }

        return sum;

        }

        const result = sumRange(a, b);

        alert(`${a}부터 ${b}의 합은 ${result}입니다`);

    break;}

    case 9: {
        const student = {
            name: "권윤지",
            age: 26,
            isGraduated: false,
            subjects: ["수학", "영어", "과학"],
            address: {
                city: "서울",
                street: "강남구 역삼동",
            },
            getStudentInfo: function() {
                return `$(this.name)은(는) ${this.age}세이고, ${this.address.city}에 살고 있습니다`;
            },
            addSubject: function(subject) {
                this.subjects.push(subject);
            }
        };

        alert(student.name);
        alert(student.isGraduated);
        alert(student.subjects[2]);
        alert(student.address.city);
    break;}

  default:
    alert("없는 문제 번호입니다.");
}



// 11. 주어진 함수를 function 키워드 대신 화살표 함수를 사용해 다시 작성해주세요. 
function greeting(name) {
    return `안녕하세요, ${name}님!`;
}
console.log(greeting("김미미"));
greeting ()

const greet = (name) => `안녕하세요, ${name}님!`;
console.log(greet("권윤지"));