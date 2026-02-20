
document.getElementById("add-money-btn").addEventListener("click",function(){
//  1-bank acount get  mane back acount select na korle samne agaite debe na 
    const bankAcount = getValueFromInput("add-money-bank");
    if(bankAcount=="Select a bank"){
        alert("please select a bank");
        return;
    }

//  2-get bank acount number 
const accno = getValueFromInput("add-money-number")
if(accno.length !=11){
    alert("Invalid acc no");
    return;
}

// get amount 

const amount = getValueFromInput("add-money-amount");
const currentBalance = getBalance()
const newBlance =currentBalance +Number(amount)
const pin = getValueFromInput("add-money-pin")

if(pin=="1234"){
    alert(`add Money success from ${bankAcount} at ${new Date} `);
    setBalance(newBlance)

    // 1-history-container ke dore niye asbo 
    const history = document.getElementById("history-container")
    //2- new div create korbo 
    const newHistory = document.createElement("div")
    //3-new div innerHtml add korbo 
    newHistory.innerHTML =`
    <div class="transactions-card p-5 bg-base-100">
    add Money success from ${bankAcount} ,acc-no ${accno} at ${new Date} 
    </div>
    `
    // 4- history container a newDiv apped korbo 
    history.appendChild(newHistory);
    
}else{
    alert("Invalid Pin");
    return;
}








})
