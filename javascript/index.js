let countYay = document.getElementById("yay-count")
let countNay = document.getElementById("nay-count")
let yayCount = 0;
let nayCount = 0;


function yayVote(){
    yayCount += 1;
    countYay.textContent = yayCount;
}

function nayVote(){
    nayCount += 1;
    countNay.textContent = nayCount;
}