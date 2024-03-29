const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    feelingsContainer = document.querySelector(".js-feelingsContainer"),
    feelingsTitle = feelingsContainer.querySelector(".title"),
    feelingsForm = feelingsContainer.querySelector("form"),
    definitionContainer = document.querySelector(".js-definitionContainer");

const idealisticList = [
    {
        id: "idealistic1",
        value: "Readiness"
    },
    {
        id: "idealistic2",
        value: "Fantasy"
    }];
const avoidanceList = [
    {
        id: "avoidance1",
        value: "TestAvoidance1"
    },
    {
        id: "avoidance2",
        value: "TestAvoidance2"
    }];
const operationalList = [
    {
        id: "operational1",
        value: "TestOperational1"
    },
    {
        id: "operational2",
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
};
const SHOWING_CN = "showing";
let CLICKED_IDEALISTIC = [];
let isDefinitionPainted = false;

function paintIdealisticpDefinition(){
    const idealisticElement = document.createElement('h6');
    idealisticElement.textContent = idealisticDefinition;
    definitionContainer.appendChild(idealisticElement);
    definitionContainer.classList.add(SHOWING_CN);
}

function paintProcrastinationTypeDefinition(button){
    procrastination.idealistic.list.forEach(function(text){
        if(button.id === text.id){
            CLICKED_IDEALISTIC.push({
                btnId: button.id,
                added: button.getAttribute("added")
            });
            //SEPARATE paintProcrastinationTypeDefinition AND ERASE
        }
    });
    procrastination.avoidance.list.forEach(function(text){
        if(button.id === text.id){
            console.log(procrastination.avoidance.definition);
        }
    });
    procrastination.operational.list.forEach(function(text){
        if(button.id === text.id){
            console.log(procrastination.operational.definition);
        }
    });
}

function handleClick(event){
    let feelingBtn = event.target;
    const feelingBtnId = feelingBtn.id;
    const isAdded = feelingBtn.getAttribute("added");
    if(isAdded === 'true'){
        feelingBtn.classList.remove("clickedFeelingBtn");
        feelingBtn.setAttribute("added", "false");
    } else {
        feelingBtn.classList.add("clickedFeelingBtn");
        feelingBtn.setAttribute("added", "true");
        paintProcrastinationTypeDefinition(feelingBtn);
    }
}

function paintFeelingsBtn() {
    procrastination.all.list.forEach(function (feeling) {
        const feelingBtn = document.createElement("input");
        feelingBtn.type = "button";
        feelingBtn.id = feeling.id;
        feelingBtn.className = "feelingBtn";
        feelingBtn.value = feeling.value;
        feelingBtn.setAttribute("added", "false");
        feelingsForm.appendChild(feelingBtn);
        feelingBtn.addEventListener("click", handleClick);
    });
}

function paintFeelingsContainer(text) {
    feelingsContainer.classList.add(SHOWING_CN);
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
    paintFeelingsContainer(currentValue);
}

function init() {
    toDoForm.addEventListener("submit", handleSubmit);
}

init();