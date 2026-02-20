console.log("login functionality comming");

// login button neye aslam akhane id deye
//click korle akta function gotbe
document.getElementById("login-btn").addEventListener("click", function(){
    // console.log('login button click')
    // 1-mobile nubertake dore niye asbo
    const numberInput=document.getElementById("input-number");
    // contact number ar input ki likche oita dekchi 
    const contactNumber = numberInput.value;
    console.log(contactNumber)
    // 2-pintake o dore niye asbo
     const inputPin = document.getElementById("input-pin");
     const pin =inputPin.value
    console.log(pin)
    // 3-match korbo mobile number & pin ke
    if(contactNumber=="01829354062" && pin=="1234"){
    // 3-1 mach kore jodi true hoy to hole home page niye jabo // ture:::>> alert >> home 
     alert("login Success");
    // sob thik thakle home page a niye jabe ata sobar last a korlam 
        // window.location.replace("/home.html")  // replace deye korle back gele ar dekha jai na home page tai 
        // assain deye korbo ta hole back korleo dekha jebe  
        window.location.assign("home.html")

    }else{
    //3.1 ar jodi false hoy teturn kore debo  // false:::>> alert >> return
    alert("login Failed")
    return;

    }
 

});
