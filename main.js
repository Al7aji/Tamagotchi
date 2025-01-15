




let hounger=90;
let sleep=0;
let fun=80 ;

const hungerElement = document.getElementById("hunger");
const sleepElement = document.getElementById("sleep");
const funElement = document.getElementById("fun");   
var statusTama = document.getElementById("status");


function updateStatus () {
    
    hungerElement.textContent= "honger:  " +hounger;
    sleepElement.textContent="slaap: "+ sleep;
    funElement.textContent="plazier: " +fun;
    if ( hounger <=50) {
        statusTama.innerText = "ik heb honger :("
    }
    else if (sleep <=50) {
        statusTama.innerText = " ik ben moe :("
    }
    else if(fun <=50) {
        statusTama.innerText = "ik wil wat leuks doen :("
    }
    else{
         statusTama.innerText = " ik ben blij :)"
    }


};

setInterval(updateStatus, 1000);
