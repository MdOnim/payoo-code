document.getElementById("Bonus-btn").addEventListener("click",function(){
    
    let coupoNumber = getValueFromInput("coupon-number")

    

    if(coupoNumber !="onim004" ){
        alert("Invalid copon Number");
        return;
     }
     if(coupoNumber== "onim004"){
        coupoNumber = 500


        alert("🎉 Congratulations! You have successfully received your bonus.");
        // setBalance(coupoNumber)
           ;}

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // ay code ta hocche trasfer a rakhar jonno 
    // 1-history-container ke dore niye asbo 
    const history = document.getElementById("history-container")
    //2- new div create korbo 
    const newHistory = document.createElement("div")
    //3-new div innerHtml add korbo 
    newHistory.innerHTML =`
    <div class="transactions-card p-5 bg-base-100">
    received your bonus Successfull ${coupoNumber} Taka ,at ${new Date} 
    </div>
    `
    // 4- history container a newDiv apped korbo 
    history.appendChild(newHistory);
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

})