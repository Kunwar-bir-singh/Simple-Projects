const time = document.getElementById("time")
greeting = document.getElementById("greeting")
Name = document.getElementById("name")
Focus = document.getElementById("focus")

function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    const amPm = hour >=12 ? 'PM' : 'AM'; //Do This With If Else
    hour = hour % 12 || 12;

    time.innerHTML = `${hour} : ${addZero(min)} : ${addZero(sec)}`
    setTimeout(showTime,1000);
}

function addZero(n)
{
    return(parseInt(n,10) <10 ? '0' : '') + n;
}

function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();
    if (hour < 12){
        //morning
        document.body.style.backgroundImage= "url('./images/Morning.jpg')";
        greeting.textContent="Good Morning";
    }
    else if(hour < 18){
        //evening
        document.body.style.backgroundImage= "url('./images/Evening.jpg')";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.color = 'white';
        greeting.textContent="Good Evening";
    }
    else{
        //night
        document.body.style.backgroundImage = "url(./images/Night.jpg)"; 
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.color = 'white';
        greeting.textContent="Good Evening";
    }
}

function getName(){
    if(localStorage.getItem('name') == null){
        Name.textContent = '[ Enter Your Name]';
    }
    else{
        Name.textContent = localStorage.getItem('name');
    } 
}

function setName(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name' , e.target.innerText);  
            Name.blur();  
        }
    }
    else{
        localStorage.setItem('name' , e.target.innerText);
    }
}
function getFocus(){
    if(localStorage.getItem('focus') == null){
        Focus.textContent = '[Enter Your Goal]';
    }
    else{
        Focus.textContent = localStorage.getItem('focus')
    } 
}

function setFocus(e){
    if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('focus' , e.target.innerText);
        Focus.blur();
    }
    else{
        localStorage.getItem('focus' , e.target.innerText);
    }
}

Name.addEventListener('keypress' , setName);
Name.addEventListener('blur' , setName);
Focus.addEventListener('keypress' , setFocus);
Focus.addEventListener('blur' , setFocus);

showTime()
setBgGreet();
getName();
getFocus();
