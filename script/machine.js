console.log("Machine Added")

//  machine id-> input value  //machine ke id dele o amake input value deve 

function getValueFromInput(id){
    const input= document.getElementById(id)
    const value = input.value
    console.log(id ,value);
    return value;
}


// function getValueFromInput(id){
//  const input = document.getElementById(id);
//  const value = input.value;
//  return value;

// }


// ay machine take boole koto taka ache oita deye dibe
// get blance machime 
// upore je defult taka gula ache aygular mashine ata 
// machine->balance 
// defult amount machine 
function getBalance(){
    const balanceElement = document.getElementById("balance")
    const balance = balanceElement.innerText;
    console.log("current balance",Number(balance))
    return Number(balance);


}

// joj biiyoj kore ja thekbe ata ta uporer takar satth add korbe 
// machine value -> set balance 

 function setBalance(value){
    const balanceElement = document.getElementById("balance")
    balanceElement.innerText = value;
 }



//  machine id > hide all > jei id phatobo oi id show korbe

function showOnly(id){
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const history = document.getElementById("history");
    const transferMoney = document.getElementById("Transfer-money");
    const paybill = document.getElementById("Pay-bill");
    const bonus = document.getElementById("get-bonus");
    // console.log(`add Money-${addmoney} cashOut-${cashout} `)
    // sobaike k hide kore dao
    addmoney.classList.add("hidden")
    cashout.classList.add("hidden")
    history.classList.add("hidden")
    transferMoney.classList.add("hidden")
    paybill.classList.add("hidden")
    bonus.classList.add("hidden")
    


    // id wala element ta ke tumi show kore daw 
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

}