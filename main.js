var daysEl = document.getElementById('days')
var hoursEl = document.getElementById('hours')
var minutesEl = document.getElementById('minutes')
var secondsEl = document.getElementById('seconds')

function countdownTimer() {
    const countDownDate = new Date('Mar 14, 2025 13:59:26').getTime()

    //convert to seconds
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24


    //calculate every second
    const interval = setInterval(() => {
    // Get Current Date
    const now = new Date().getTime()
    const distance = countDownDate - now


    daysEl.innerText = formatNumber(Math.floor(distance / day))
    hoursEl.innerText = formatNumber(Math.floor((distance % day) / hour))
    minutesEl.innerText = formatNumber(Math.floor((distance % hour) / minute))
    secondsEl.innerText = formatNumber(Math.floor((distance % minute) / second))

    // when date is reached
    if (distance < 0) {
        document.getElementById('headline').innerText = 'Pi day has been reached!'
        document.getElementById('countdown').style.display = 'none'
        clearInterval(interval)
    }
    }, 1000)
}

function formatNumber(number){
    if (number < 10){
        return '0' + number
    }

    return number
}

countdownTimer()





// WIDTH INDICATOR -------------------------

var width = window.innerWidth;

function checkWidth() {
    if (width < 850) {
        document.getElementById('links').style.display = 'none';
        document.getElementById('menu').style.display = 'flex';
    } else {
        document.getElementById('links').style.display = 'flex';
        document.getElementById('menu').style.display = 'none';
    }
}

checkWidth();
window.addEventListener('resize', checkWidth());


// MAKE MENU OPTIONS APPEAR/DISAPPEAR ON CLICK

const menu = document.getElementById('menu');
menu.addEventListener('click', toggleMenu);
toggleMenu();

function toggleMenu() {
    var menuBar = document.getElementById('menuContent');
    var link1 = document.getElementById('menuLink1');
    var link2 = document.getElementById('menuLink2');
    var link3 = document.getElementById('menuLink3');
    if (link1.style.display === 'none') {
        link1.style.display = 'block';
        link2.style.display = 'block';
        link3.style.display = 'block';
        menuContent.style.display = 'flex';
    } else {
        link1.style.display = 'none';
        link2.style.display = 'none';
        link3.style.display = 'none';
        menuContent.style.display = 'none';
    }
}

// ADVENT CALENDAR -------------------------

const piBox = document.getElementById('piBox');

function calcHeight(){
    if (width < 725) {
        piBox.style.height = 'calc(95vw*0.8)';
    }

}

calcHeight();
window.addEventListener('resize', calcHeight);
window.onresize = calcHeight;

// CLICKING ON BOX -------------------------

const box1 = document.getElementById('door1');
box1.addEventListener('click', () => openBox(box1));
const box1Date = new Date('Mar 1, 2025 00:00:00').getTime();

const box2 = document.getElementById('door2');
box2.addEventListener('click', () => openBox(box2));
const box2Date = new Date('Mar 10, 2025 00:00:00').getTime();

const box3 = document.getElementById('door3');
box3.addEventListener('click', () => openBox(box3));
const box3Date = new Date('Mar 14, 2025 00:00:00').getTime();

const box4 = document.getElementById('door4');
box4.addEventListener('click', () => openBox(box4));
const box4Date = new Date('Mar 14, 2025 13:00:00').getTime();

const box5 = document.getElementById('door5');
box5.addEventListener('click', () => openBox(box5));
const box5Date = new Date('Mar 14, 2025 13:50:00').getTime();

const box6 = document.getElementById('door7');
box6.addEventListener('click', () => openBox(box6));
const box6Date = new Date('Mar 14, 2025 13:59:00').getTime();

const box7 = document.getElementById('door9');
box7.addEventListener('click', () => openBox(box7));
const box7Date = new Date('Mar 14, 2025 13:59:20').getTime();

const box8 = document.getElementById('door12');
box8.addEventListener('click', () => openBox(box8));
const box8Date = new Date('Mar 14, 2025 13:59:26').getTime();

const box9 = document.getElementById('door14');
box9.addEventListener('click', () => openBox(box9));
const box9Date = new Date('Mar 14, 2025 13:59:26').getTime();

const box10 = document.getElementById('door17');
box10.addEventListener('click', () => openBox(box10));
const box10Date = new Date('Mar 14, 2025 13:59:26').getTime();

const box11 = document.getElementById('door19');
box11.addEventListener('click', () => openBox(box11));
const box11Date = new Date('Mar 14, 2025 13:59:26').getTime();

const currentTime = new Date().getTime()

function openBox(box) {
    if (getComputedStyle(box).fontWeight === '700') {
        
        if (box === box1 && box1Date - currentTime < 0){
            box1.innerText = '3';
            box.style.border = '5px solid rgba(255,255,255,0)';
        box.style.fontWeight = '400';
        box.style.backgroundColor = 'rgb(255, 255, 255,0.8)';
        box.style.textShadow = 'none';
        box.style.color = 'black';
        }
        if (box === box2 && box2Date < currentTime){
            box2.innerText = '1';
            box.style.border = '5px solid rgba(255,255,255,0)';
        box.style.fontWeight = '400';
        box.style.backgroundColor = 'rgb(255, 255, 255,0.8)';
        box.style.textShadow = 'none';
        box.style.color = 'black';
        }
        if (box === box3 && box3Date < currentTime){
            box3.innerText = '4';
            box.style.border = '5px solid rgba(255,255,255,0)';
        box.style.fontWeight = '400';
        box.style.backgroundColor = 'rgb(255, 255, 255,0.8)';
        box.style.textShadow = 'none';
        box.style.color = 'black';
        }
        if (box === box4 && box4Date < currentTime){
            box4.innerText = '1';
            box.style.border = '5px solid rgba(255,255,255,0)';
        box.style.fontWeight = '400';
        box.style.backgroundColor = 'rgb(255, 255, 255,0.8)';
        box.style.textShadow = 'none';
        box.style.color = 'black';
        }
        if (box === box5 && box5Date < currentTime){
            box5.innerText = '5';
            box.style.border = '5px solid rgba(255,255,255,0)';
        box.style.fontWeight = '400';
        box.style.backgroundColor = 'rgb(255, 255, 255,0.8)';
        box.style.textShadow = 'none';
        box.style.color = 'black';
        }
        if (box === box6 && box6Date < currentTime){
            box6.innerText = '9';
            box.style.border = '5px solid rgba(255,255,255,0)';
        box.style.fontWeight = '400';
        box.style.backgroundColor = 'rgb(255, 255, 255,0.8)';
        box.style.textShadow = 'none';
        box.style.color = 'black';
        }
        if (box === box7 && box7Date < currentTime){
            box7.innerText = '2';
            box.style.border = '5px solid rgba(255,255,255,0)';
        box.style.fontWeight = '400';
        box.style.backgroundColor = 'rgb(255, 255, 255,0.8)';
        box.style.textShadow = 'none';
        box.style.color = 'black';
        }
        if (box === box8 && box8Date < currentTime){
            box8.innerText = '6';
            box.style.border = '5px solid rgba(255,255,255,0)';
        box.style.fontWeight = '400';
        box.style.backgroundColor = 'rgb(255, 255, 255,0.8)';
        box.style.textShadow = 'none';
        box.style.color = 'black';
        }
        if (box === box9 && box9Date < currentTime){
            box9.innerText = '5';
            box.style.border = '5px solid rgba(255,255,255,0)';
        box.style.fontWeight = '400';
        box.style.backgroundColor = 'rgb(255, 255, 255,0.8)';
        box.style.textShadow = 'none';
        box.style.color = 'black';
        }
        if (box === box10 && box10Date < currentTime){
            box10.innerText = '3';
            box.style.border = '5px solid rgba(255,255,255,0)';
        box.style.fontWeight = '400';
        box.style.backgroundColor = 'rgb(255, 255, 255,0.8)';
        box.style.textShadow = 'none';
        box.style.color = 'black';
        }
        if (box === box11 && box11Date < currentTime){
            box11.innerText = '5';
            box.style.border = '5px solid rgba(255,255,255,0)';
        box.style.fontWeight = '400';
        box.style.backgroundColor = 'rgb(255, 255, 255,0.8)';
        box.style.textShadow = 'none';
        box.style.color = 'black';
        }
    } else {
        box.style.borderLeft = '5px dashed black';
        box.style.borderRight = '5px solid black';
        box.style.borderTop = '5px solid black';
        box.style.borderBottom = '5px solid black';
        box.style.fontWeight = '700';
        box.style.backgroundColor = 'rgba(255, 255, 255,0.5)';
        box.style.textShadow = '2px 2px rgb(0,0,0)';
        box.style.color = 'white';
        if (box == box1){
            box1.innerText = '1';
        }
        if (box == box2){
            box2.innerText = '2';
        }
        if (box == box3){
            box3.innerText = '3';
        }
        if (box == box4){
            box4.innerText = '4';
        }
        if (box == box5){
            box5.innerText = '5';
        }
        if (box == box6){
            box6.innerText = '6';
        }
        if (box == box7){
            box7.innerText = '7';
        }
        if (box == box8){
            box8.innerText = '8';
        }
        if (box == box9){
            box9.innerText = '9';
        }
        if (box == box10){
            box10.innerText = '10';
        }   
        if (box == box11){
            box11.innerText = '11';
        } 

    }
}

function smallScreen(){

    const mainTitle = document.getElementById('headerText2');
    const countBox = document.getElementById('countBox');
    const headline = document.getElementById('headline');
    const subtitle = document.getElementById("subtitle");
    const countNums = document.getElementsByClassName('countNum')
    const separators = document.getElementsByClassName('separator')
    const doors = document.getElementsByClassName('door');
    const howTitle = document.getElementById('howTitle');
    const howText = document.getElementById('howText');
    const firstDiv = document.getElementById('firstDiv');

    if (width < 505){
       mainTitle.style.fontSize = '5vw';
       countBox.style.width = '80%';
       headline.style.fontSize = '4vw';
       subtitle.style.fontSize = '3vw';

       Array.from(countNums).forEach((element) => {
           element.style.fontSize = '11vw';
        });

        Array.from(separators).forEach((element) => {
            element.style.fontSize = '11vw';
        });

        Array.from(doors).forEach((element) => {
            element.style.fontSize = '8vw';
        }); 
       

        


    

       
    } 
}

smallScreen();







