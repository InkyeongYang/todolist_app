const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDoViewBtn = document.getElementById("todo-view");
const toDoModal = document.getElementById("todo-modal");
const TODOS_KEY = "todos";
let toDos = [];


if (localStorage.getItem("username") !== null) {
    toDoForm.classList.remove("hidden"); 
}


function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
    //↑요기 한줄로 선언한 내용에서 괄호 안은 아래 주석 문단에 있는 sexyFilter() 내용과 동일.
}

/**
 * .filter() 는 반드시 true를 반환해야한다. 새로 생성되는 array를 원래 값으로 유지시키고 싶다면.
const todos = [{text: "aaaa", id: 11111234}, {text: "bbb", id: 2355}, {text: "cccc", id: 35566}];
function sexyFilter(todo) {
     return todo.id !== 11111234;
    }
todos.filter(sexyFilter);
//result: [{text: "bbb", id: 2355}, {text: "cccc", id: 35566}]
// return 조건문에서 일치하는 경우 !== 조건에 의해 false가 반환되므로
// 일치하는 오브젝트를 제외한 true의 경우 모두 반환.
*/

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const delButton = document.createElement("button"); 
    delButton.innerText = "X";
    delButton.addEventListener("click", deleteToDo);
    
    li.appendChild(span);
    li.appendChild(delButton);
    toDoList.appendChild(li);

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDosObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDosObj);
    paintToDo(newToDosObj);
    saveToDos();
    toDoViewBtn.classList.remove("hidden");
}
toDoForm.addEventListener("submit", handleToDoSubmit);

//todo 리스트 모달윈도우 여닫기 이벤트 추가
function handleToDoShow() {
    toDoModal.style.display = "flex";
}
toDoViewBtn.addEventListener("click", handleToDoShow);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //parsedToDos.forEach(sayHello);
    //line54의 내용을 arrow function을 사용해서 축약해서 쓸 수 있다! 
    //parsedToDos.forEach((item) => console.log("this is the turn of", item));  
    parsedToDos.forEach(paintToDo);
    toDoViewBtn.classList.remove("hidden");
}

//모달윈도우 닫기
document.querySelector(".modal-close-btn").onclick = function() {
    toDoModal.style.display = "none";
}
