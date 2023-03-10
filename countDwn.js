var startBtn = document.querySelector("#startBtn")
var resetBtn = document.querySelector("#resetBtn")
var stopBtn = document.querySelector("#stopBtn")


var d = document.querySelector("#days")
var h = document.querySelector("#hours")
var m = document.querySelector("#minutes")
var s  = document.querySelector("#seconds")

var startTimer = null;

function timer(){
if(d.value == 0 && h.value == 0 && m.value == 0 &&  s.value == 0 ){
    d.value = 0;
    h.value = 0;
    m.value = 0;
    s.value = 0;
}else if( s.value != 0){
    s.value--;
}else if(m.value != 0 && s.value == 0){
    s.value= 59
    m.value--
}else if(h.value != 0 && m.value == 0 && s.value == 0){
    m.value= 59;
    h.value--
}else if(d.value != 0 && h.value == 0 && m.value == 0 && s.value == 0){
    h.value = 59;
    d.value--
}
return
}

function resetTimer(){
    clearInterval(startTimer);

}



startBtn.addEventListener("click" , function (){
    function startInterval(){
        startTimer = setInterval(function(){
            timer()
        },1000)
    }
    startInterval()
})

resetBtn.addEventListener("click" , function () {
    d.value = 0;
    h.value = 0;
    m.value = 0;
    s.value = 0;
    resetTimer()
    
} )


let dd = document.getElementById("dd")
let hh = document.getElementById("hh")
let mm = document.getElementById("mm")
let ss = document.getElementById("ss")


let dayDot = document.querySelector(".day-dot")
let hourDot = document.querySelector(".hours-dot")
let minuteDot = document.querySelector(".minutes-dot")
let secondDot = document.querySelector(".seconds-dot")





