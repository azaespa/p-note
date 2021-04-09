const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    feelingsContainer = document.querySelector(".js-feelingsContainer"),
    feelingsTitle = feelingsContainer.querySelector(".title"),
    feelingsForm = feelingsContainer.querySelector("form");

const idealisticList = [
    {
        id: "idealistic#1",
        value: "Readiness"
    },
    {
        id: "idealistic#2",
        value: "Fantasy"
    }];
const avoidanceList = [
    {
        id: "avoidance#1",
        value: "TestAvoidance1"
    },
    {
        id: "avoidance#2",
        value: "TestAvoidance2"
    }];
const operationalList = [
    {
        id: "operational#1",
        value: "TestOperational1"
    },
    {
        id: "operational#2",
        value: "TestOperational1"
    }];
const allProcrastinationList = idealisticList.concat(avoidanceList, operationalList);
const idealisticDefinition = "*Insert Idealistic Procrastination definition here*";
const avoidanceDefinition = "*Insert Avoidance Procrastination definition here*";
const operationalDefinition = "*Insert Operational Procrastination definition here*";
const allProcrastinationDefinition = [idealisticDefinition,avoidanceDefinition,operationalDefinition];
const procrastination = {
    idealistic: 
        {
        definition: idealisticDefinition,
        list: idealisticList
        },
    avoidance: 
        {
        definition: avoidanceDefinition,
        list: avoidanceList,
        },
    operational: 
        {
        definition: operationalDefinition,
        list: operationalList,
        },
    all: 
        {
        definition: allProcrastinationDefinition,
        list: allProcrastinationList
        }
}

function handleClick(event){
    const btnValue = event.target.value;
    console.log(btnValue);
}

function paintFeelingsBtn() {
    procrastination.all.list.forEach(function (feeling) {
        const feelingBtn = document.createElement("input");
        feelingBtn.type = "button";
        feelingBtn.id = feeling.id;
        feelingBtn.classList.add("feelingBtn");
        feelingBtn.value = feeling.value;
        feelingsForm.appendChild(feelingBtn);
    });
}

function paintFeelingsContainer(text) {
    feelingsContainer.classList.add("showing");
    feelingsTitle.textContent = `${text} is what you want to do right now,
        but can't because you are procrastinating. Maybe one of these
        emotions are what holding you back from getting started with what 
        you want to do. Please choose.`;
    paintFeelingsBtn();
    feelingsForm.addEventListener("click", handleClick);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    toDoInput.value = "";
    paintFeelingsContainer(currentValue);
}

function init() {
    toDoForm.addEventListener("submit", handleSubmit);
}

init();