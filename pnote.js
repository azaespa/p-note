const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    feelingsForm = document.querySelector(".js-feelingsForm"),
    feelingsTitle = feelingsForm.querySelector(".title");

const idealistic = [
    {
        id: "idealistic#1",
        value: "Readiness"
    },
    {
        id: "idealistic#2",
        value: "Fantasy"
    }];
const avoidance = [
    {
        id: "avoidance#1",
        value: "TestAvoidance1"
    },
    {
        id: "avoidance#2",
        value: "TestAvoidance2"
    }];
const operational = [
    {
        id: "operational#1",
        value: "TestOperational1"
    },
    {
        id: "operational#2",
        value: "TestOperational1"
    }];
const all = idealistic.concat(avoidance, operational);
const procrastination = {
    idealistic: idealistic,
    avoidance: avoidance,
    operational: operational,
    all: all
}


function paintFeelingsBtn() {
    procrastination.all.forEach(function (feeling) {
        const feelingBtn = document.createElement("input");
        feelingBtn.type = "button";
        feelingBtn.id = feeling.id;
        feelingBtn.value = feeling.value;
        feelingsForm.appendChild(feelingBtn);
    });
}

function paintFeelings(text) {
    feelingsForm.classList.add("showing");
    feelingsTitle.textContent = `${text} is what you want to do right now,
        but can't because you are procrastinating. Maybe one of these
        emotions are what holding you back from getting started with what 
        you want to do. Please choose.`;
    paintFeelingsBtn();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    toDoInput.value = "";
    paintFeelings(currentValue);
}

function init() {
    toDoForm.addEventListener("submit", handleSubmit);
}

init();