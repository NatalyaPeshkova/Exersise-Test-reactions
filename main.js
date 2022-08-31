
var timeTakenValue = document.querySelector('.timeTaken');
var start = new Date().getTime();

function makeShapeAppear() {
    document.querySelector('.shape').style.display = "block";
    start = new Date().getTime();
}

function appearAfterDelay() {
setTimeout(makeShapeAppear, Math.random() * 2000);
}
appearAfterDelay(); 

document.querySelector('.shape').onclick = function () {
    document.querySelector('.shape').style.display = "none";
    var end = new Date().getTime();
    timeTaken = (end - start)/1000;
    timeTakenValue.textContent = timeTaken;
    appearAfterDelay();
}

