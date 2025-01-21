
let stats = {
    hunger: 100,
    sleep: 1,
    fun: 100,
};

function waardesomlaag(statskey, tijd) {
    let intervalId = setInterval(() => {
        if (stats[statskey] > 0) {
            stats[statskey]--; 
            updateProgressBars(); 
        } else { 
            clearInterval(intervalId); 
        }
    }, tijd); 
}

const hungerElement = document.getElementById('hunger');
const sleepElement = document.getElementById('sleep');
const funElement = document.getElementById('fun');   
const statusTama = document.getElementById("status");
const imagsElement = document.getElementById("imags");
function updateStatus () {  
    hungerElement.textContent = "honger: " + stats['hunger'];
    sleepElement.textContent = "slaap: " + stats['sleep'];
    funElement.textContent = "plezier: " + stats['fun'];

    if ( stats['hunger'] <=50) {
        statusTama.innerText = "ik heb honger "
        imagsElement.src = 'Imags/hounger.png';
    }
    else if (stats['sleep'] <=50) {
        statusTama.innerText = " ik ben moe "
        imagsElement.src = 'Imags/moi.png';
    }
    else if(stats['fun'] <=50) {
        statusTama.innerText = "ik wil wat leuks doen "
        imagsElement.src = 'Imags/play.png';
    }
    else{
         statusTama.innerText = " ik ben blij "
         imagsElement.src = 'Imags/blij.png';
    }
    updateProgressBars(); 
};
function updateProgressBars() {
    hungerElement.style.width = stats['hunger'] + "%";
    document.getElementById('button').style.width = stats['sleep'] + "%";
    funElement.style.width = stats['fun'] + "%";
}

function waardesomhoog(key){

    if (stats[key] < 100){
            stats[key] += 3;

         if(stats[key] > 100){

            stats[key] =100;
         }
        

    }else if(stats[key] ==stats['hunger'] ){
        statusTama.innerText = "ik heb niet honger "

    }else if(stats[key] ==stats['sleep'] ){
        statusTama.innerText = "ik heb niet slaap "
    }
    else{
       statusTama.innerText = "ik ben blij "
    };

    updateProgressBars();      
};

document.getElementById("voed-pop").addEventListener("click", function() {
    waardesomhoog('hunger');
});
document.getElementById("laat-slaap").addEventListener("click", function() {
    waardesomhoog('sleep');
});
document.getElementById("laat-spelen").addEventListener("click", function() {
    waardesomhoog('fun');
});

waardesomlaag('hunger',10000);
waardesomlaag('sleep',8000);
waardesomlaag('fun',5000);
setInterval(updateStatus, 1000); 



