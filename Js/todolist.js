// 투두 입력 DOM 가져오기
const inputText = document.getElementById("text");
const button = document.getElementById("btn");
const todoboard = document.getElementById("todo-list");
const todoButton = inputText.nextElementSibling;
const count = document.getElementById("count");



button.addEventListener("click", todobutton)

function todobutton(){
    const text = inputText.value;

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type= "checkbox";
    const btn = document.createElement("button");
    const textNode = document.createTextNode(text);
    const clock = document.createElement("span");

    li.appendChild(checkbox);
    li.appendChild(textNode);
    li.appendChild(btn);
    li.appendChild(clock);

    todoboard.append(li);

    inputText.value = "";
    btn.innerHTML = "X";

    clock.innerHTML = getClock();

    checkbox.addEventListener("click", checkFun);

    btn.addEventListener("click", btnFun);

    function getClock(){
        // 현재 시간을 가져오는 객체 (함수안에 객체 넣음)
        const date = new Date();
        const hours = String(date.getHours()).padStart(2,"0");
        const minutes = String(date.getMinutes()).padStart(2,"0"); 
        const seconds = String(date.getSeconds()).padStart(2,"0");
        return `${hours}:${minutes}:${seconds}`
    }

}

function btnFun(e){
    // li요소를 삭제 (체크후삭제 추가함!)
    // parentNode: 바로위의 부모요소
    const li = e.target.parentNode;
    if(li.style.color == "gray"){
        li.remove();
    }else{
        alert("체크후 삭제버튼을 눌러주세요.")
    }


}   


// 체크박스 이벤트 리스너에 들어가는 함수
function checkFun(e) {
    const li = e.target.parentNode;
    if (e.target.checked) {
        li.style.color = "gray";
    }
    else {
        li.style.color = "white";
    }
    // 선택된 목록 가져오기
    // input 체크박스가 체크됨
    // 전체 <input> 중 type 속성값이 'checkbox'고, 
    // checked가 true인 element를 모두 찾아오라는 의미입니다.
    const checkbox = 'input[type="checkbox"]:checked';
    // 전체 체크박스 체크확인
    const check = document.querySelectorAll(checkbox);
    // 선택된 목록의 갯수 세기
    const checkCount = check.length;
    // 출력
    document.getElementById('count').innerText= `오늘 완료한 할일: ${checkCount}`;
}

