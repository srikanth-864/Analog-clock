const hour = document.getElementById('hour-hand');
const minute = document.getElementById('minute-hand');
const second = document.getElementById('second-hand');

let h,m,s;

function setTime(){
    let date = new Date();
    h=date.getHours();
    m=date.getMinutes();
    s=date.getSeconds();
}

function setHands(){
    if(h>12){
        h = h-12;
    }

    let hRotaion = h*30 + m*0.5
    let mRotaion = 6*m;
    let sRotaion = 6*s;

    hour.style.transform = `rotate(${hRotaion}deg)`
    minute.style.transform = `rotate(${mRotaion}deg)`
    second.style.transform = `rotate(${sRotaion}deg)`

    let sound = new Audio('sound.mp3');
    sound.play();

}

setInterval(() => {
    setTime();
    setHands();
}, 1000);