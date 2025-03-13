# 조선대학교 연구실 안전교육 자동 스킵 스크립트

## 📌 개요
조선대학교 연구실 안전교육 사이트에서 강의 진행 시간을 단축하고, 퀴즈 자동 입력을 도와주는 스크립트입니다.

- **사이트:** [조선대 연구실 안전교육](https://safetylabs.chosun.ac.kr/)

## 🚀 사용 방법
### 1. 강의 자동 스킵
1. [조선대 연구실 안전교육 사이트](https://safetylabs.chosun.ac.kr/)에 접속합니다.
2. '수강하기' 버튼을 클릭하여 강의 창을 엽니다.
3. `F12` 키를 눌러 개발자 도구를 실행하고, `Console` 탭으로 이동합니다.
4. [chosun_lab_safety_skip.js](chosun_lab_safety_skip.js) 파일의 내용을 복사하여 `Console`에 붙여넣고 실행합니다.
5. 자동으로 모든 강의 페이지가 스킵됩니다.

### 2. 퀴즈 자동 입력
1. 모든 강의를 수강한 후, '평가하기' 버튼을 클릭합니다.
2. `F12` 키를 눌러 개발자 도구를 실행하고, `Console` 탭으로 이동합니다.
3. [chosun_lab_safety_skip.js](chosun_lab_safety_skip.js) 파일의 내용을 복사하여 `Console`에 붙여넣고 실행합니다.
4. 자동으로 정답이 입력되고 저장됩니다.

## ⚠️ 주의사항
- **총 강의 페이지 수(`totalPageNum`)는 강의에 따라 다를 수 있습니다.**  
  실행 전에 강의 페이지 수를 확인하고 필요하면 스크립트의 `totalPageNum` 값을 수정하세요.
- **사이트 구조가 변경될 경우 스크립트가 정상 작동하지 않을 수 있습니다.**
- **개발자 도구(F12)에서 실행해야 정상적으로 작동합니다.**
- **이 스크립트를 사용시 책임은 사용자에게 있습니다.**

## 🛠 필요 사항
- 최신 웹 브라우저 (Chrome, Edge, Firefox)
- 개발자 도구(F12) 접근 가능

---

