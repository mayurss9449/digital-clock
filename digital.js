const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener("DOMContentLoaded", ()=>{
    setInterval(showTime, 1000);

})

const showTime = ()=>{
    let data = new Date();

    let hr = data.getHours();
    let min = data.getMinutes();
    let secs = data.getSeconds();

    hr = hr<10 ? `0${hr}` : hr ;
    min = min < 10 ? `0${min}` : min ;
    secs =  secs < 10 ? `0${secs}` : secs ; 
    
    // console.log("hours" + hr + "min" + min + 'secs' + secs)
    time.innerHTML =  `${hr} : ${min} : ${secs}`;

    timeformat.innerHTML = hr > 12 ? "PM" : "AM"

}