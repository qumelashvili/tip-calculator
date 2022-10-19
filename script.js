const tipContainer = document.querySelector(".tip-container");
// Creating tip buttons
const tipTypes = ["5%", "10%", "15%", "25%", "50%"];
for(var x of tipTypes){
    const tipContent = 
    `
        <button class="tip-button">
            ${x}
        </button>
    `
    tipContainer.innerHTML += tipContent
};

// Creating custom tip button
const inputContent = 
`
    <input type="number" placeholder="Custom" class="custom">
`;
tipContainer.innerHTML += inputContent;

// Custom tip button event listener
const customBtn = document.querySelector(".custom");
customBtn.addEventListener('keyup', function(){
    if(!peopleInput.value == 0){
        const tip = calPercnt(billInput.value, customBtn.value, peopleInput.value);
        const sum = total(billInput.value, tip, peopleInput.value);
        tipPerson.innerText ="$"+tip;
        totalPerson.innerText = "$"+sum;
    }
    else{
        validationError();
    }
})

// Tip Button event listeners
// people input validation
const tipBtn = document.querySelectorAll(".tip-button");
const tipPerson = document.querySelector(".amount");
const totalPerson = document.querySelector(".total-amount");
const billInput = document.querySelector(".bill");
const peopleInput = document.querySelector(".people");
const errorMessage = document.querySelector(".error-message");

for(var x of tipBtn){
    x.addEventListener('click', function(){
        if(peopleInput.value == 0){
            validationError();
        }
        else{
            errorMessage.style.display = "none";
            peopleInput.style.borderColor = "transparent";
            const btnText = this.innerText.split('%');
            const precentage = btnText[0];
            const tip = calPercnt(billInput.value, precentage, peopleInput.value);
            const sum = total(billInput.value, tip, peopleInput.value);
            tipPerson.innerText ="$"+tip;
            totalPerson.innerText = "$"+sum;
        }
    })
}

// validation function
function validationError(){
    errorMessage.style.display = "flex";
    peopleInput.style.border = "1px solid red";
}

// total and tip calculator function
function calPercnt(num, percentage, people){
    const result = (num * (percentage / 100)) / people;
    return result;
}
function total(num, result, people){
    return (num / people) + result; 
}

// reset everything
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener('click', resetBtnFunction);

function resetBtnFunction(){
    customBtn.value = '';
    errorMessage.style.display = "none";
    peopleInput.style.borderColor = "transparent";
    billInput.value = '';
    peopleInput.value = '';
    tipPerson.innerText = "$0.00";
    totalPerson.innerText = "$0.00";
}






