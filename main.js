
let stats = {
    hunger: 100,
    sleep: 100,
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

const hungerElement = document.getElementById('hunger-bar');
const sleepElement = document.getElementById('sleep-bar');
const funElement = document.getElementById('fun-bar');   
const statusTama = document.getElementById("status");
const imagsElement = document.getElementById("imags");
const hungerText = document.createElement("span");
const sleepText = document.createElement("span");
const funText = document.createElement("span");

hungerText.classList.add("progress-text");
sleepText.classList.add("progress-text");
funText.classList.add("progress-text");

hungerElement.appendChild(hungerText);
sleepElement.appendChild(sleepText);
funElement.appendChild(funText);

function updateStatus () {  
    hungerText.textContent = "Honger: " + stats['hunger'];
    sleepText.textContent = "Slaap: " + stats['sleep'];
    funText.textContent = "Plezier: " + stats['fun'];

    if (stats['hunger'] <= 50) {
        statusTama.innerText = "Ik heb honger";
        imagsElement.src = 'Imags/hounger.png';
    } else if (stats['sleep'] <= 50) {
        statusTama.innerText = "Ik ben moe";
        imagsElement.src = 'Imags/moi.png';
    } else if (stats['fun'] <= 50) {
        statusTama.innerText = "Ik wil wat leuks doen";
        imagsElement.src = 'Imags/play.png';
    } else {
        statusTama.innerText = "Ik ben blij";
        imagsElement.src = 'Imags/blij.png';
    }
    updateProgressBars(); 
};

function updateProgressBars() {
    hungerElement.style.width = stats['hunger'] + "%";
    sleepElement.style.width = stats['sleep'] + "%";
    funElement.style.width = stats['fun'] + "%";
}

function waardesomhoog(key){
    if (stats[key] < 100){
        stats[key] += 3;
        if(stats[key] > 100){
            stats[key] = 100;
        }
    }
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



