let Decreasebtn = document.getElementById("decrease");
let IncreaseBtn = document.getElementById("increase");
let Resetbtn = document.getElementById("reset");
const Countlabel = document.getElementById("countlabel")
let count = 0;

function updateLabel() {
    Countlabel.textContent = count;
    // optionally disable buttons at bounds
    IncreaseBtn.disabled = count >= 10;
    Decreasebtn.disabled = count <= 0;
}

IncreaseBtn.onclick = function increase() {
    if (count < 10) {
        count += 1;
        updateLabel();
        if (count === 10) {
            console.log(`You have reached the maximum: ${count}`);
        } else if (count === 9) {
            console.log("You are about to reach the end");
        } else {
            console.log(`Your value is ${count}`);
        }
    }
}

Decreasebtn.onclick = function decrease() {
    if (count > 0) {
        count -= 1;
        updateLabel();
        if (count === 0) {
            console.log(`You have reached the minimum: ${count}`);
        } else if (count === 1) {
            console.log("You are about to reach the end");
        } else {
            console.log(`Your value is ${count}`);
        }
    }
}

Resetbtn.onclick = function reset() {
    count = 0;
    updateLabel();
    console.log("Counter reset to 0");
}