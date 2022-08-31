
var start = new Date().getTime();

document.querySelector('.shape').onclick = function () {
    document.querySelector('.shape').style.display = "none";
    var end = new Date().getTime();
    timeTaken = (end - start)/1000;
    alert("Вам потребовалось" + timeTaken  + " секунд ");
    
}