const clock = document.querySelector("h2#clock");

function getClock(){
// 1. new Date()로 현재 날짜 및 시간을 호출
    const date = new Date();
// 2-1. getHours()를 하면 값은 Number, String으로 바꾸기위해 String()으로 변환
// 2-2. 2자리수로 만들고 앞에 0를 붙이기위해 padStart(2, "0")으로 수정
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// 3. 페이지가 load되었을때 바로 시간을 표시하기위해 함수를 호출
getClock();
// 4. setInterval로 매 초마다 getClock를 실행
setInterval(getClock, 1000);