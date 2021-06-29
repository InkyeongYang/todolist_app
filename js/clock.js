const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//브라우저가 열리자마자 현재 시간을 표시. 
//그리고 매 1초 마다 현재시간을 갱신해서 표시하도록 하기 위해 아래처럼 두 줄에 나눠서 작성..
getClock();
/**
 * interval : 매번 일어나야 하는 무언가. 
 */
//첫번째 인자: 실행시킬 함수, 두번째 인자: 실행 간격 - ms단위. 예) 5000는 5초 간격을 뜻 함.
setInterval(getClock, 1000);

/**
 * timeout : 
 */
// 첫번째 인자: 실행시킬 함수, 두번째 인자 : 실행 간격. interval과 동일.
//setTimeout(sayHello, 5000);
