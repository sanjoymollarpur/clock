function realtimeclock() {
    var rt = new Date();
    var hours = rt.getHours();
    var minutes = rt.getMinutes();
    var seconds = rt.getSeconds();

    var amPm = (hours < 12) ? "AM" : "PM";
    hours = (hours > 12) ? hours - 12 : hours;
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    //console.log(hours)
    document.getElementById('tclock').innerHTML = hours;
    document.getElementById('tclock1').innerHTML = minutes;
    document.getElementById('tclock2').innerHTML = seconds;
    document.getElementById('tclock3').innerHTML = amPm;
    setTimeout(realtimeclock, 1000);

}
realtimeclock();
images1 = ['./images/morning.jpg', './images/lunch.jpg', './images/dinnerTime.jpg', './images/sleepingTime.jpg', './images/partyTime.jpg', './images/freetime.jpg'];

let image = document.getElementById('image');
/*setInterval(() => {
    let rad=Math.floor(Math.random()*4);
    image.src=images1[rad];
}, 1000);*/
let rt1 = new Date();
let hours1 = rt1.getHours();
let minuttes1 = rt1.getMinutes();
console.log(hours1);
function imageChange() {

    if ((hours1 >= 0 && hours1 < 6) || (hours1 > 22 && hours1 <= 23))
        image.src = images1[3];
    else if (hours1 >= 6 && hours1 <= 11)
        image.src = images1[0];
    else if (hours1 >= 12 && hours1 <= 14)
        image.src = images1[1];
    else if (hours1 >= 19 && hours1 <= 22)
        image.src = images1[2];
    else
        image.src = images1[5];
}
//imageChange();
setTimeout(imageChange,1000);
let pt = document.getElementById('partytime');
function changeImage() {
    image.src = images1[4];
    setTimeout(imageChange, 2000);
}

greet = ['GOOD MORNING!!', 'GOOD AFTERNOON!!', 'GOOD EVENING!!', 'GOOD NIGHT!!'];

function greetfun() {

    if ((hours1 >= 6 && hours1 <= 11) || (hours1 === 11 && minuttes1 <= 59))
        document.getElementById('gt').innerHTML = greet[0];
    else if ((hours1 >= 12 && hours1 <= 17) || (hours1 === 17 && minuttes1 <= 59))
        document.getElementById('gt').innerHTML = greet[1];
    else if ((hours1 >= 18 && hours1 <= 20) || (hours1 === 20 && minuttes1 <= 59))
        document.getElementById('gt').innerHTML = greet[2];
    else if (((hours1 >= 19 && hours1 <= 23) || (hours1 === 23 && minuttes1 <= 59)) || ((hours1 >= 0 && hours1 <= 5) || (hours1 === 5 && minuttes1 <= 59)))
        document.getElementById('gt').innerHTML = greet[3];
}
greetfun();
