const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    //input폼에 'hidden'이라는 클래스 명을 지정.
    if (event.key !== "Enter") {
        return;// Do work
    } else {

        loginForm.classList.add(HIDDEN_CLASSNAME);
        //input태그에 입력한 유저명을 변수에 저장
        const username = loginInput.value;
        //브라우저의 로컬스토리지에 유저명을 임시 저장.
        localStorage.setItem(USERNAME_KEY, username);
        paintGreetings(username);
    }
}

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}!`;  //"Hello " + username 과 같은 의미의 문자열 결합 방법. 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

/*
function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
}
link.addEventListener("click", handleLinkClick);
*/

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //loginForm.addEventListener("submit", onLoginSubmit);
    loginInput.addEventListener("keyup", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
