let buttonStartPomodoro = document.getElementById("startPomodoro");
let intervalo = null;
let minutosElement = document.getElementById("minutos");
let segundosElement = document.getElementById("segundos");
let minutos = parseInt(minutosElement.textContent)
let segundos = 60
console.log(minutos);
console.log(minutosElement);



function iniciarPomodoro() {
    setInterval(()=>{
        segundos--
        if(segundos == 59 ){
            minutos--
        }
        minutosElement.textContent = minutos
        segundosElement.textContent = segundos
        if(segundos == 0){
            segundos = 60
        }else if(minutos == 0 && segundos == 0){
            setTimeout()
        }
            
    },1000)
}

buttonStartPomodoro.onclick = iniciarPomodoro


