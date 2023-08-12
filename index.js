const months = [
    "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
  ];

  const daysOfWeek= [
    "Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"
  ];

  const countdown = document.querySelector(".countdown");
  const deadline = document.querySelector(".deadline");
  const items = document.querySelectorAll(".deadline h4");
   

let futureDate = new Date(2023,7,19,0,0)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const seconds = futureDate.getSeconds();

let month = futureDate.getMonth();

const date = futureDate.getDate()
month = months[month]

const weekday = daysOfWeek[futureDate.getDay()]



countdown.textContent = "Il 19 Agosto  si festeggia il compleanno di Kelvin, il figlio, il fratello e l'amico più incredibile che conosco!" 

const futureTime = futureDate.getTime();

    function getRemainingTime(){

    const today = new Date().getTime();
const t = futureTime - today;

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

let days = t/oneDay;
days = Math.floor(days);
let hours = Math.floor((t%oneDay)/oneHour);
let minutes = Math.floor((t%oneHour)/oneMinute);
let seconds = Math.floor((t%oneMinute)/1000);

const values = [days,hours,minutes,seconds]

function format(item){
    if(item<10) 
    {return (item = "0" + item)}
    return item
    
    }

items.forEach(function(item,index){

    item.innerHTML = format(values[index])
})
if(t<0){

    clearInterval(countdownTimer);
    deadline.innerHTML = "<h4>Auguri Kelvin!</h4>"
}
}
let countdownTimer = setInterval(getRemainingTime,1000)
getRemainingTime()