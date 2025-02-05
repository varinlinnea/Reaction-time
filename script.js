const app = document.getElementById("app");
let selectedLamp;
let startTime;
let finishTime;
let spentMilliseconds;
let spentSeconds = 0;
let clickCounter = 0;
let timeList = [];

function updateView() {
    app.innerHTML = /*HTML*/ `
    <div class="container">
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
        <div class="lamp"></div>
    </div>
    <div>
        <div class="timeDisplay">Time: ${spentSeconds}</div>
        <ol id="timeList">${printTimeList()}</ol>
    </div>
    `
}

lightUpNewLamp();

function selectRandomLamp() {
    let selectedLampIndex = Math.floor(Math.random() * 25);
    let lamps = document.querySelectorAll(".container .lamp");
    return lamps[selectedLampIndex];
}

function toggleLampAndOnclick(randomLamp) {
    if (selectedLamp) {
        selectedLamp.classList.remove("lightOn");
        selectedLamp.removeEventListener("click", lightUpNewLamp);
    }
    randomLamp.classList.add("lightOn");
    randomLamp.addEventListener("click", lightUpNewLamp);
    selectedLamp = randomLamp;
    startTime = new Date().getTime();
}

function printTimeList() {
    let text = "";
    if (timeList.length > 0) {
        for (let i = 0; i < timeList.length; i++) {
            text += `<li>${timeList[i]}</li>`;
        }
    }
    return text;
}

function lightUpNewLamp() {
    if (clickCounter > 0) {
        finishTime = new Date().getTime();
        spentMilliseconds = Math.floor(finishTime - startTime);
        spentSeconds = spentMilliseconds / 1000;
        timeList.push(spentSeconds);
    }
    clickCounter++;
    updateView();
    toggleLampAndOnclick(selectRandomLamp());
}
