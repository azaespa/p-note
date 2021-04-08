const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input");

function handleSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
}

function init(){
    toDoForm.addEventListener("submit", handleSubmit);
}

init();