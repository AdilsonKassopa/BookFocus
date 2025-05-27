let buttonStartPomodoro = document.getElementById("startPomodoro");
let buttonStopPomodoro = document.getElementById("stopPomodoro")
let intervalo = null;
let minutosElement = document.getElementById("minutos");
let segundosElement = document.getElementById("segundos");
let minutos = parseInt(minutosElement.textContent)
let segundos = 60
let interval = null

console.log(buttonStartPomodoro);


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

buttonStartPomodoro.onclick = ()=>{
    if(buttonStartPomodoro.textContent == 'Reiniciar'){
        minutosElement.textContent = '25'
        segundosElement.textContent = '00'
        buttonStartPomodoro.textContent = 'Iniciar'
        buttonStopPomodoro.textContent = 'Parar'
        clearInterval(interval)
        interval = null
    }else{
        iniciarPomodoro()
        buttonStartPomodoro.textContent = 'Reiniciar'
        
    }
}
buttonStopPomodoro.onclick = ()=>{
    if (buttonStopPomodoro.textContent == 'Parar' && interval != null) {
        pararPomodoro()
        buttonStopPomodoro.textContent = 'Retomar'
    }else if(buttonStopPomodoro.textContent == 'Retomar'){
        iniciarPomodoro()
        buttonStopPomodoro.textContent = 'Parar'
    }
}


