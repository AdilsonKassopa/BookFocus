/*
    Elementos do html
*/

const buttonStartPomodoro = document.getElementById("startPomodoro");
const buttonStopPomodoro = document.getElementById("stopPomodoro")
const  buttonOption = document.getElementById("button__option")
const menuOptionElement = document.getElementById("option__menu")
const minutosElement = document.getElementById("minutos");
const segundosElement = document.getElementById("segundos");
const btn_SalvarElement = document.getElementById("btn_salvar")
const txt_MinutosElement = document.getElementById("txt_Minutos")
const txt_SegundosElement = document.getElementById("txt_Segundos")
const txt_Min_Interval = document.getElementById("txt_Min_Interval")
const txt_Seg_Interval = document.getElementById("txt_Seg_Interval")
const pomodoroElement = document.getElementById("pomodoro")
const pomodoroTituloElement = document.getElementById("pomodoro__titulo")

//Variaveis do sistema 
let minutos
let segundos 
let Min_Interval 
let Seg_Interval 
let interval = null
let count = 0

if(localStorage.getItem('minutos') && localStorage.getItem('segundos')){
    minutos = minutosElement.textContent = localStorage.getItem('minutos')
    segundos =segundosElement.textContent = localStorage.getItem('segundos')
}else{
    minutos = minutosElement.textContent = '25'
    segundos = segundosElement.textContent = '00'
}

// Resetando por padrão os campos do menu opção
txt_MinutosElement.value = localStorage.getItem('minutos')
txt_SegundosElement.value = localStorage.getItem('segundos')
txt_Min_Interval.value =  localStorage.getItem('min_interval')
txt_Seg_Interval.value = localStorage.getItem('seg_interval')

// Função para iniciar o cronometro do pomodoro
function iniciarPomodoro() {
    interval = setInterval(()=>{
    
    if(interval != null ){
        if(segundos == 0){
            segundos = 60
        }
        segundos--
        if(segundos == 59 ){
            minutos--
        }
        
        minutosElement.textContent = minutos
        segundosElement.textContent = segundos
        if(minutos == 0 && segundos == 0){
            clearInterval(interval)
            interval = null
            intervalBooks()
        }
        if(segundos == 0){
            segundos = 60
        }
    }
            
    },1000)
}
//função para parar o cronomotro do pomodoro
function pararPomodoro(){
    if(interval != null){
        clearInterval(interval)
        interval = null
    }
}

//função para alternar entre  a tela do intervalBooks e o BooksFocus
function intervalBooks(){
    if(count == 0){
        pomodoroElement.style.backgroundImage = 'linear-gradient(180deg, #363467 0%, rgba(30,29,79, 0.8)100%)'
        pomodoroTituloElement.textContent = "IntervalBooks"
        buttonStartPomodoro.textContent = 'Iniciar'
        minutos = minutosElement.textContent = localStorage.getItem('min_interval')
        segundos = segundosElement.textContent = localStorage.getItem('seg_interval')
        count = 1
    }else{
        pomodoroElement.style.backgroundImage = 'none'
        pomodoroTituloElement.textContent = "BookFocus"
        buttonStartPomodoro.textContent = 'Iniciar'
        minutos = minutosElement.textContent = localStorage.getItem('minutos')
        segundos = segundosElement.textContent = localStorage.getItem('segundos')
        count = 0 
    }
    
}

buttonStartPomodoro.onclick = ()=>{
    if(buttonStartPomodoro.textContent == 'Reiniciar'){
        if(pomodoroTituloElement.textContent == 'BookFocus'){
            minutos = minutosElement.textContent = localStorage.getItem('minutos')
            segundos = segundosElement.textContent = localStorage.getItem('segundos')
        }else if(pomodoroTituloElement.textContent == 'IntervalBooks'){
            minutos = minutosElement.textContent = localStorage.getItem('min_interval')
            segundos = segundosElement.textContent = localStorage.getItem('seg_interval')

        }

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

buttonOption.onclick = ()=>{
    menuOptionElement.style.display = menuOptionElement.style.display == "flex" ? "none":"flex"
    
}

// função para a opção salvar do 

btn_SalvarElement.onclick = () => {

    //impedir de salvar se todos os campos estiverem vazios
    if(!txt_Min_Interval.value && !txt_MinutosElement.value && !txt_Seg_Interval.value && !txt_SegundosElement.value){
        alert("deves preencher os campos para salvar")
        return 
    }
    console.log(txt_MinutosElement.value);
    console.log(txt_SegundosElement.value);

    
    //Validar os campos minutos e segundos do pomodoro
    if(txt_MinutosElement.value && txt_SegundosElement.value){
        console.log("testando");
        
        if(txt_MinutosElement.value >= 0 && txt_MinutosElement.value <= 60 && txt_SegundosElement.value >= 0 && txt_SegundosElement.value <= 60){
        console.log("testando 2");
            
            localStorage.removeItem('minutos')
            localStorage.removeItem('segundos')
            
        }else{
            alert("os minutos e os segundos do Pomodoro devem estar no intervalo de 0 a 60")
            return
        }
    }else if(!txt_MinutosElement.value && txt_SegundosElement.value || txt_MinutosElement.value && !txt_SegundosElement.value){
        alert("deves preencher os dois campos do pomodoro")
        return
    }

    if(txt_Min_Interval.value && txt_Seg_Interval.value){
        if(txt_Min_Interval.value >= 0 && txt_Min_Interval.value <= 60 && txt_Seg_Interval.value >= 0 && txt_Seg_Interval.value <= 60){
            localStorage.removeItem('min_interval')
            localStorage.removeItem('seg_interval')
            localStorage.setItem('min_interval',`${txt_Min_Interval.value}`)
            localStorage.setItem('seg_interval',`${txt_Seg_Interval.value}`)
        }else{
            alert("os minutos e os segundos do Interval devem estar no intervalo de 0 a 60")
            return
        }
    }else if(!txt_Min_Interval.value && txt_Seg_Interval.value || txt_Min_Interval.value && !txt_Seg_Interval.value){
        alert("deves preencher os dois campos do Interval")
        return
    }

    localStorage.setItem('minutos',`${txt_MinutosElement.value}`)
    localStorage.setItem('segundos',`${txt_SegundosElement.value}`)
    minutosElement.textContent = localStorage.getItem('minutos')
    segundosElement.textContent = localStorage.getItem('segundos')
    menuOptionElement.style.display = 'none'

    clearInterval(interval)
    interval = null
    minutos = localStorage.getItem('minutos')
    segundos = localStorage.getItem('segundos')
    buttonStartPomodoro.textContent = 'Iniciar'
    buttonStopPomodoro.textContent = 'Parar'
    location.reload()
}