var Interval;



var container = document.getElementById("container");
var countingNumbers = document.getElementById("counting_numbers");
var buttonReplay = document.getElementById("ready_replay");
var btn = document.createElement("button");


var num1 = parseInt(countingNumbers.innerHTML) + 1;



function countDecrease() {
    countingNumbers.classList.add("counting-numbers");
    
    countingNumbers.innerText = num1;

    var num = parseInt(countingNumbers.innerHTML) + 1;
    callValue(num);

}

function callValue(num) {
    console.log(num)
    countingNumbers.innerHTML = num;
    Interval = setTimeout(decreasingValue(num), 1000);
}

countDecrease()

function decreasingValue(num) {
    var num = parseInt(countingNumbers.innerHTML);
    console.log(num);


    if (num <= 0 || isNaN(num) == true) {

        clearTimeout(Interval);
        rewind();
        countingNumbers.classList.add("stylingGo");

    }

    else {
        countingNumbers.classList.add("animatedNumbers");
        num = num - 1;
        countingNumbers.innerHTML = num;
        setTimeout(decreasingValue, 1000);
    }

}
function rewind() {
    countingNumbers.innerHTML = "GO";
    countingNumbers.classList.remove("animatedNumbers");
   
    btn.className = "repalyButton";
    btn.id = "replayIt";
    btn.setAttribute("onclick", "countDecrease()")
    btn.textContent = "Replay"
    buttonReplay.parentNode.replaceChild(btn, buttonReplay);


}

