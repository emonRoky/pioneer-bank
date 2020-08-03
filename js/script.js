// Login event handeler
const sbmtbtn = document.getElementById("submit");
sbmtbtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const trans = document.getElementById("trangation");
    trans.style.display = "block";
})

// Deposit event handeler

const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click", function (){
    const depositNumber = getInputNumber("input-deposit");

    updateSpanText("currentDeposit",depositNumber);
    updateSpanText("currentBalence",depositNumber);

    document.getElementById("input-deposit").value = "";
})
// withdraw event handeler
const withdrawBtn = document.getElementById("withdrawbtn");
withdrawBtn.addEventListener("click", function (){
    const withdrawNumber = getInputNumber("input-withdraw")
    updateSpanText("currentWithdraw",withdrawNumber);
    updateSpanText("currentBalence",-1* withdrawNumber);

    document.getElementById("input-withdraw").value = "";

})

function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}    


function updateSpanText(id,depositNumber){
    const current= document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + depositNumber;
    document.getElementById(id).innerText = total;
}
