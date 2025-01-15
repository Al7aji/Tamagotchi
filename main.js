
let hounger=0;
let sleep=0;
let fun=100 ;
const hungerElement = document.getElementById("hunger")
const sleepElement = document.getElementById("sleep")
const funElement = document.getElementById("fun")    
var statusTama = document.getElementById("status");
function updateStatus () {
    
    hungerElement.textContent= "honger: ${hunger}";
    sleepElement.textContent="slaap: ${sleep}";
    funElement.textContent="plazier: ${fun}";
    if (hunger >=50) {
        statusTama.innerText = "ik heb honger :("
    }
    if (sleep >=50) {
        statusTama.innerText = " ik ben moe :("
    }
    if (hunger <=50) {
        statusTama.innerText = "ik wil wat leuks doen :("
    }
    else{
         statusTama.innerText = " ik ben blij :)"
    }


}