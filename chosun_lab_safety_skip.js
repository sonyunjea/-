/*
Chosun Univ. a script for skipping lab safety courses
https://safetylabs.chosun.ac.kr/

[사용 방법]
1. '수강하기' 버튼을 눌러 연구실 안전교육 창을 띄운다.
2. 개발자도구(F12 버튼을 눌러)를 열어 'console' 탭으로 이동한다.
3. 아래 스크립트를 붙여넣고 실행한다.
4. 모든 과목에 대해 반복한다.

ref: https://kysgh2.tistory.com/113
*/

/* -------------------- [1] 현재 페이지 번호 자동 감지 -------------------- */
function getCurrentPage() {
    let pageNumbers = [];
    for (let i = 0; i < 100; i++) {
        if (document.body.innerText.includes(i)) {
            pageNumbers.push(i);
        }
    }
    console.log("감지된 페이지 번호 목록:", pageNumbers);

    // 연속된 숫자 중 가장 큰 값을 현재 페이지 번호로 설정
    let currentPage = Math.max(...pageNumbers);
    console.log("추출된 현재 페이지 번호:", currentPage);
    return currentPage;
}

// 현재 페이지 번호 자동 설정
var nowPageNum = getCurrentPage();
var totalPageNum = 30;  // 조선대 연구실 강의의 전체 페이지 수 (필요 시 직접 확인 후 변경 가능)

console.log("현재 페이지:", nowPageNum, "전체 페이지:", totalPageNum);


/* -------------------- [2] 강의 자동 스킵 -------------------- */
var currentPage = nowPageNum;
function goNextPage() {
    if (currentPage < totalPageNum) {
        opener.PageMove(currentPage);
        console.log(`${currentPage} 페이지를 수강완료했습니다.`);
        currentPage += 1;
        setTimeout(goNextPage, 100);
    } else {
        opener.PageMove(currentPage);
        console.log('강의 수강이 완료되었습니다!');
        setTimeout(window.close, 200);
    }
}
setTimeout(goNextPage, 100);


/* -------------------- [3] 퀴즈 자동 입력 -------------------- */
/*
[사용 방법]
1. 모든 강의를 수강한 후 '평가하기' 버튼을 누른다.
2. 개발자도구(F12 버튼을 눌러)를 열어 'console' 탭으로 이동한다.
3. 아래 스크립트를 붙여넣고 실행한다.
*/

function autoSolveQuiz() {
    if (typeof SetExamAfeter === "function") {
        SetExamAfeter();
    } else {
        console.log("SetExamAfeter() 함수가 존재하지 않습니다.");
    }

    let answers = [];
    for (let i = 0; i < questionCountInExam; i++) {
        let answerElem = document.getElementById("qustionCorrectNo_" + i);
        if (answerElem) {
            answers.push(answerElem.value);
        }
    }

    if (typeof SetExamBefore === "function") {
        SetExamBefore();
    } else {
        console.log("SetExamBefore() 함수가 존재하지 않습니다.");
    }

    for (let i = 0; i < questionCountInExam; i++) {
        let ls = document.getElementsByName(`qustionAnswerList[${i}].Answer`);
        if (ls.length > 0) {
            ls[answers[i] - 1].checked = true;
        }
    }

    let saveBtn = document.getElementById("Exam_btnSave");
    if (saveBtn) {
        saveBtn.click();
    } else {
        console.log("저장 버튼을 찾을 수 없습니다.");
    }
}

// 퀴즈 자동 풀이 실행
setTimeout(autoSolveQuiz, 500);
