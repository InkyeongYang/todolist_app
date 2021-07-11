const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//브라우저가 열리자마자 현재 시간을 표시. 
//1초 간격으로 현재시간을 갱신한다.
getClock();
/**
 * setInterval : 주어진 시간 간격마다 지정한 함수를 실행. 
 * 첫번째 인자: 실행시킬 함수
 * 두번째 인자: 실행 간격 - 단위:ms. 예) 1000 = 1초.
 */
setInterval(getClock, 1000);

/**
 * setTimeout : 주어진 시간 동안만 함수를 실행.
 */
// 첫번째 인자: 실행시킬 함수, 두번째 인자 : 실행 간격. interval과 동일.
//setTimeout(sayHello, 5000);
