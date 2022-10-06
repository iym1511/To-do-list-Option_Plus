const todoForm = $("#todo-form");
const todoInput = $("#todo-form #todo-input");

todoForm.on("submit", todoAdd);

const countText = $("count");


function todoAdd(e){
    // 새로고침 멈춰줌
    e.preventDefault();

    const li = $("<li>");
    const checkbox = $("<input>");
    checkbox.attr("type", "checkbox");
    const button = $("<button>");
    button.html("X");

    li.append(checkbox).append(todoInput.val()).append(button);
    // todo-board에 li 생성
    $("#todo-board").append(li);

    todoInput.val("");

    checkbox.on("click", todoCheck);
    button.on("click", todoDelete);

}

function todoCheck(){
    // attr  : html태그에 직접붙는 속성
    // prop : html객체가 가지고있는 속성
    if($(this).prop("checked")){
        $(this).parent().attr("style","color:gray");
    }else{
        $(this).parent().attr("style","color:white");
    }
    
    count = $("#todo-board li input:checked").lenght;
    countText.html(count);
}


function todoDelete(){
    $(this).parent().remove();
    countText.html(count);
}