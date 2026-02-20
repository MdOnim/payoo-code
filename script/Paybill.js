document.getElementById("pay-bill-btn").addEventListener("click",function(){
    // get bank acount 

    const paySelect =getValueFromInput("Pay-select-bill");
    if(paySelect =="Select to Pay"){
        alert("please select a bill ");
        return;
    }

    

    // get Biller Account Number

    const billarAcoundNumber = getValueFromInput("Pay-acount-number");
    if(billarAcoundNumber.length !=11 ){
        alert("Invalid Account Number ");
        return;
    }

    // get pay amount
    
    const PaymoneyInput = getValueFromInput("Pay-money-amount")
    
    const defultAmount = getBalance();
    const newAmount= defultAmount-Number(PaymoneyInput);

    if(newAmount<0){
        alert("invalid Amount");
        return;
    }
    
    // pin verifay and ubdate valance 

        const pin= getValueFromInput("Pay-money-pin");
        if(pin== "1234"){
            alert("Pay bill Successful");
            setBalance(newAmount);



    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // ay code ta hocche trasfer a rakhar jonno 
    // 1-history-container ke dore niye asbo 
    const history = document.getElementById("history-container")
    //2- new div create korbo 
    const newHistory = document.createElement("div")
    //3-new div innerHtml add korbo 
    newHistory.innerHTML =`
    <div class="transactions-card p-5 bg-base-100">
    Pay bill Successfull ${PaymoneyInput} Taka ,at ${new Date} 
    </div>
    `
    // 4- history container a newDiv apped korbo 
    history.appendChild(newHistory);
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        }else{
            alert("Invalid Pin");
            return;
        
        }
    
    
})