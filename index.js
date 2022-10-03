let countHome = 0
let countAway = 0
home = document.getElementById("countHome") 
away = document.getElementById("countAway") 

function plusOneHome() {
    countHome += 1
    home.textContent = countHome   
}

function plusTwoHome() {
    countHome += 2
    home.textContent = countHome    
}

function plusThreeHome() {
    countHome += 3
    home.textContent = countHome    
}

function plusOneAway() {
    countAway += 1
    away.textContent = countAway   
}

function plusTwoAway() {
    countAway += 2
    away.textContent = countAway    
}

function plusThreeAway() {
    countAway += 3
    away.textContent = countAway    
}

function newGame() {
    home.textContent = countHome - countHome
    away.textContent = countAway - countAway
    countHome = 0
    countAway = 0 
}
