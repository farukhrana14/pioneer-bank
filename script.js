
// Button event handler to move from Login Area to Transaction Area
const bankButton = document.getElementById("submit-btn-click");
    bankButton.addEventListener("click", function(){
    const loginArea =  document.getElementById("login-Area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})


//addDeposit
addDeposit("buttonAddDeposit", "inputAddDeposit", "initialDeposit", "initialBalance");

//addWithdraw
updateWithdraw("buttonAddWithdraw", "inputAddWithdraw", "initialWithdraw", "initialBalance" );

// function to add deposit & update balance  
function addDeposit(id1, id2, id3, id4){
    const addButton = document.getElementById(id1)
    addButton.addEventListener("click", function(){
        var addAmount = document.getElementById(id2).value; 
        var addAmountNumber = parseFloat(addAmount);

        var initBal = document.getElementById(id3).innerText; 
        var initBalNumber = parseFloat(initBal);
        var totalNew = addAmountNumber + initBalNumber;
        document.getElementById(id3).innerText = totalNew;
        document.getElementById(id2).value = "";

        var initTotalBal = document.getElementById(id4).innerText;
        var initTotalBalNumber = parseFloat(initTotalBal);
        var newTotalBal = initTotalBalNumber + addAmountNumber;
        document.getElementById(id4).innerText = newTotalBal;
        
        document.getElementById(id4).value = "";



        console.log("from inside", "input", totalNew, "init", initBalNumber);
        
    })
    
}



// function to deduct withdraw & update balance  
function updateWithdraw(id1, id2, id3, id4){
    const addButton = document.getElementById(id1)
    addButton.addEventListener("click", function(){
        var addAmount = document.getElementById(id2).value; 
        var addAmountNumber = parseFloat(addAmount);

        var initBal = document.getElementById(id3).innerText; 
        var initBalNumber = parseFloat(initBal);
        var totalNew = addAmountNumber + initBalNumber;
        document.getElementById(id3).innerText = totalNew;
        document.getElementById(id2).value = "";

        var initTotalBal = document.getElementById(id4).innerText;
        var initTotalBalNumber = parseFloat(initTotalBal);
        var newTotalBal = initTotalBalNumber - addAmountNumber;
        document.getElementById(id4).innerText = newTotalBal;
        
        document.getElementById(id4).value = "";



        console.log("from inside", "input", totalNew, "init", initBalNumber);
        
    })
    
}



