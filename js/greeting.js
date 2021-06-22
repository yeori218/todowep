const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 2-1. 기본동작제어, loginForm를 다시 hidden, localStorage에 input.value값을 저장, paintGreetings 함수를 호출
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

// 2-2. localStorage에서 값을 가져와 h1태그에 Hello와 함께 출력, h1태그의 hidden 클래스를 삭제
function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
// 1.localStorage에 username 값이 있는지 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 2. 값이 없다면(null) true이므로 loginForm의 hidden 클래스를 삭제하고 submit 이벤트를 대기, onLoginSubmit 함수를 호출
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
// 3. 값이 있다면(Not null) false이므로 paintGreetings 함수를 호출, localStorage에서 값을 가져와 인자로 전달
} else{
    paintGreetings();
}

