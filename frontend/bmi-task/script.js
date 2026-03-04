const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

const form = select("form");
const namee = select("#name");
const heightInput = select("#height");
const weightInput = select("#weight");
const warning = select(".warning-space");
const resultCard = selectAll("#resultCard");
const resetBtn = select("#resetBtn");

//show updated history
showHistory();

// validation
function validation() {
    if (
        heightInput.value === "" ||
        weightInput.value === "" ||
        namee.value == ""
    ) {
        warning.innerText = "All fields are required";
        return false;
    }

    const heightValue = Number(heightInput.value);
    const weightValue = Number(weightInput.value);

    if (
        isNaN(heightValue) ||
        heightValue <= 0 ||
        isNaN(weightValue) ||
        weightValue <= 0
    ) {
        warning.innerText = "Enter valid positive numbers";
        return false;
    }
    const regex = /^[A-Za-z][A-Za-z0-9]*$/;
    if (!regex.test(namee.value)) {
        warning.innerText = "Name must contain only letters";
        return false;
    }

    warning.innerText = "";
    return true;
}

// Calculate BMI
function calculateBMI(height, weight) {
    let heightInMeter = height / 100;
    const bmi = weight / (heightInMeter * heightInMeter);

    return bmi.toFixed(2);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validation()) {
        console.log("Fields are correct");
        console.log("Submitted");
        let n = namee.value;
        let h = heightInput.value;
        let w = weightInput.value;

        const result = calculateBMI(h, w);

        console.log(resultCard[0].childNodes[3]);
        resultCard[0].childNodes[3].innerText = `${result}`;
        const cat = calculateCategory(result);

        //save history
        saveBMI(n, result, cat);

        showHistory();

        form.reset();
    }
});

function calculateCategory(res) {
    if (res < 18.5) {
        resultCard[0].childNodes[5].childNodes[1].innerText = `UNDERWEIGHT`;
        resultCard[0].childNodes[5].childNodes[1].style.color = "red";
        return "UW.";
    } else if (res >= 18.5 && res <= 24.9) {
        resultCard[0].childNodes[5].childNodes[1].innerText = `NORMAL WEIGHT`;
        resultCard[0].childNodes[5].childNodes[1].style.color = "green";
        return "NW.";
    } else if (res >= 25 && res <= 29.9) {
        resultCard[0].childNodes[5].childNodes[1].innerText = `OVERWEIGHT`;
        resultCard[0].childNodes[5].childNodes[1].style.color = "#c4c156";
        return "OW.";
    } else if (res >= 30) {
        resultCard[0].childNodes[5].childNodes[1].innerText = `OBESE`;
        resultCard[0].childNodes[5].childNodes[1].style.color = "maroon";
        return "OBESE";
    }
}

// Save history
function saveBMI(name, bmi, category) {
    const history = JSON.parse(localStorage.getItem("bmiHistory")) || [];

    history.push({ name, bmi: bmi, category: category });

    localStorage.setItem("bmiHistory", JSON.stringify(history));
}

// show history
function showHistory() {
    const history = JSON.parse(localStorage.getItem("bmiHistory")) || [];
    const historyList = select("#historyList");
    historyList.innerHTML = "";

    history.forEach((entry) => {
        const li = document.createElement("li");
        li.innerHTML = `${entry.name.toUpperCase()} <i class="ri-arrow-right-fill"></i> ${entry.bmi} | ${entry.category}`;
        li.style.listStyle = "none";
        li.style.fontSize = "1.2rem";
        historyList.appendChild(li);
    });
}

resetBtn.addEventListener("click", function () {
    localStorage.clear();
    showHistory();
});
