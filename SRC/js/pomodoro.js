let buttonStartPomodoro = document.getElementById("startPomodoro");
let buttonStopPomodoro = document.getElementById("stopPomodoro")
let intervalo = null;
let minutosElement = document.getElementById("minutos");
let segundosElement = document.getElementById("segundos");
let minutos = parseInt(minutosElement.textContent)
let segundos = 60
let interval = null



function iniciarPomodoro() {
    interval = setInterval(()=>{
    console.log(interval);
    
    if(interval != null ){
        segundos--
        if(segundos == 59 ){
            minutos--
        }
        minutosElement.textContent = minutos
        segundosElement.textContent = segundos
        if(minutos == 0 && segundos == 0){
            console.log(interval);
            clearInterval(interval)
            interval = null
        }
        if(segundos == 0){
            segundos = 60
        }
    }
            
    },1000)
}

function pararPomodoro(){
    if(interval != null){
        clearInterval(interval)
        interval = null
    }
}

buttonStartPomodoro.onclick = iniciarPomodoro
buttonStopPomodoro.onclick = pararPomodoro


