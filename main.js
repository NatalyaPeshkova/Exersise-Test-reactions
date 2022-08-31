
var timeTakenValue = document.querySelector('.timeTaken');
var start = new Date().getTime();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function makeShapeAppear() {
    document.querySelector('.shape').style.display = "block";
    start = new Date().getTime();
}

function appearAfterDelay() {
setTimeout(makeShapeAppear, Math.random() * 2000);
}
appearAfterDelay(); 

document.querySelector('.shape').onclick = function () {
    var top = Math.random() * 400;
    var left = Math.random() * 400;
    var width = Math.random() * 300;

    if ( Math.random() > 0.5) {
        document.querySelector('.shape').style.borderRadius = "50%";
    }
    
    document.querySelector('.shape').style.top = top + "px";
    document.querySelector('.shape').style.left = left + "px";
    document.querySelector('.shape').style.width = width + "px";
    document.querySelector('.shape').style.height = width + "px";
    document.querySelector('.shape').style.backgroundColor = getRandomColor();
    document.querySelector('.shape').style.borderColor = getRandomColor();
    document.querySelector('.shape').style.display = "none";
    
    var end = new Date().getTime();
    timeTaken = (end - start)/1000;
    timeTakenValue.textContent = timeTaken;
    appearAfterDelay();
}

