document.getElementById('cashout-btn').addEventListener("click", function(){
    // 1-get the agent number & validate
    const cashOutNumber = getValueFromInput("cashout-number")
    if(cashOutNumber.length !==11){
        alert("invalid Number");
        return;
    }
    // 2-get the amount 
    const CashOutAmount = getValueFromInput("cashout-amount")

    const currentBalance = getBalance()




    // blance ar notun machine banalam tai at use kkorbo na 
    // 3-get the current balance

    // const BlanceElement= document.getElementById("balance");
    // const blance = BlanceElement.innerText;
    // console.log(blance)

    // calculate blance

    // calculate balance 
    // const newBalance =Number(blance)-Number(CashOutAmount);
    const newBalance =currentBalance-Number(CashOutAmount);
    console.log(newBalance);

    if(newBalance<0){
        alert("invalid Amount");
        return;
    }

    const pin = getValueFromInput("cashout-pin");
    if(pin==="1234"){
        alert ("CashOut Successfull");
    //    BlanceElement.innerText= newBalance;
    // document.getElementById ("balance").innerText= newBalance;
        setBalance(newBalance)


    // 1-history-container ke dore niye asbo 
    const history = document.getElementById("history-container")
    //2- new div create korbo 
    const newHistory = document.createElement("div")
    //3-new div innerHtml add korbo 
    newHistory.innerHTML =`
    <div class="transactions-card p-5 bg-base-100">
    CashOut ${CashOutAmount} Taka success to ${cashOutNumber} , at ${new Date} 
    </div>
    `
    // 4- history container a newDiv apped korbo 
    history.appendChild(newHistory);



    }else{
        alert("invalid pin ");
        return;
    }

})














// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // cash out button ta dore kaj suru korbo 
// document.getElementById('cashout-btn')
// .addEventListener("click",function(){
//     // 1-prothome agent number nibo 11 digit ar & validate kina dekhbo // 11 digit ar na hole samne agaite debo na 
//     const cashOutNumberInput = document.getElementById("cashout-number");
//     const cashOutNumber = cashOutNumberInput.value;
//     console.log(cashOutNumber)
//     if(cashOutNumber.length !==11){
//         alert("Invalid Agent Number");
//         return;
//     }

//     //2- get the amount // amount number pawor cest korbo // validate , convart to number korte hobe
//     const cashOutAmountInput =document.getElementById("cashout-amount");
//     const cashOutAmount = cashOutAmountInput.value
//     console.log(cashOutAmount)


//     //3- get the current balance //current balance cest korbo // validate , convart to number korte hobe
//     const BlanceElement= document.getElementById("balance");
//     const blance =BlanceElement.innerText;
//     console.log(blance)

//     //4- calculate new Bakance
//     const newBlance = Number(blance)-Number(cashOutAmount)
//     if( newBlance<0){
//         alert("Invalid Amount")
//         return;
//     }
//     // console.log('new Blance',newBlance)

//     //5- get the PIN and verify //jodi varify hoy akta kaj korbo na korle arekta korbo
//     const cashOutPinInput =document.getElementById("cashout-pin");
//     const pin = cashOutPinInput.value;
//     if(pin==="1234"){
//         // 5-1 true:: show an alert > set balance // true hole notun Balance set korbo
//         alert("Cashout successful")
//        BlanceElement.innerText = newBlance
       
//     }else{
//         // 5-1 false:: show an error alert > return // false hole error ba Invalid pin dekhai return kore dibo 
//         alert("Invalid pin")
//         return;
//     }
    


// })


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>