
document.getElementById("Transfer-btn").addEventListener("click",function(){
    // User Account Number
     const acountNumber = getValueFromInput("Transfer-number")
     if(acountNumber.length !=11 ){
        alert("Invalid Account Number");
        return;
     }


    //  Amount input get 
    
    const transferAmount = getValueFromInput("Transfer-amount");
    const defultAmout = getBalance()
    const newtransferAmount = defultAmout - Number(transferAmount)

    // jei balance ache tar beshi utaite chai ta hole invalid valance dekhane 

    if(newtransferAmount<0){
        alert("invalid Amount");
        return;
    }
    
    const pinNumber = getValueFromInput("Transfer-pin")
    if(pinNumber==="1234"){
        alert("Transfer Money Successfull")
        setBalance(newtransferAmount)
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // ay code ta hocche trasfer a rakhar jonno 
    // 1-history-container ke dore niye asbo 
    const history = document.getElementById("history-container")
    //2- new div create korbo 
    const newHistory = document.createElement("div")
    //3-new div innerHtml add korbo 
    newHistory.innerHTML =`
    <div class="transactions-card p-5 bg-base-100">
    Transfer Money Successfull ${transferAmount} Taka ,at ${new Date} 
    </div>
    `
    // 4- history container a newDiv apped korbo 
    history.appendChild(newHistory);
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
    }else{
        alert("Invalid Pin")
        return;
    }

})