const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
const audio = document.querySelector("audio");
function setDate()
{
    const now = new Date();

    const seconds = now.getSeconds();
    const seconddeg = (seconds/60)*360 + 90;
    if(seconds==0)
    {
        secondHand.style.transition = "none";
    }
    else{
    secondHand.style.transform="rotate("+seconddeg+"deg)";
    }
    
    const minutes = now.getMinutes();
    const minutedeg = (minutes/60)*360 + 90;
    minuteHand.style.transform="rotate("+minutedeg+"deg)";

    const hours = now.getHours();
    const hourdeg = (hours/12)*360 + 90;
    hourHand.style.transform="rotate("+hourdeg+"deg)";
    audio.currentTime=0;
    audio.play();

}
setInterval(setDate,1000);

