




let hounger=90;
let sleep=90;
let fun=90 ;

const hungerElement = document.getElementById("hunger");
const sleepElement = document.getElementById("sleep");
const funElement = document.getElementById("fun");   
var statusTama = document.getElementById("status");
var imagsElement = document.getElementById("imags");

function updateStatus () {
    
    hungerElement.textContent= "honger:  " +hounger;
    sleepElement.textContent="slaap: "+ sleep;
    funElement.textContent="plazier: " +fun;
    if ( hounger <=50) {
        statusTama.innerText = "ik heb honger "
        imagsElement.src = 'Imags/hounger.png';
    }
    else if (sleep <=50) {
        statusTama.innerText = " ik ben moe "
        imagsElement.src = 'Imags/moi.png';
    }
    else if(fun <=50) {
        statusTama.innerText = "ik wil wat leuks doen "
        imagsElement.src = 'Imags/play.png';
    }
    else{
         statusTama.innerText = " ik ben blij "
         imagsElement.src = 'Imags/blij.png';
    }


};

setInterval(updateStatus, 1000);
