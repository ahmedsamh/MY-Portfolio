let span = document.querySelector(".menu-icon ");
let span1 = document.querySelector(".menu-icon span:first-child ");
let span2 = document.querySelector(".menu-icon span:nth-child(2)");
let span3 = document.querySelector(".menu-icon span:last-child");

span.onclick=function(){

document.querySelector(" .mega-menu").classList.toggle("app");
}

let box =document.querySelector('.header .mega-menu');
let sp = document.querySelector(".menu-icon ");
document.addEventListener('click' , (e) => {
    if (e.target !== sp && e.target !== box){
    if (box.classList.contains('app')){
    box.classList.toggle('app');
    }
    }
});

//////////////////////////////////////////////////////////////////
const text = document.querySelector(".landing .container .sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Frontend";
    }, 4000);
    setTimeout(() => {
        text.textContent = "ui ux designer";
    }, 8000); //1s = 1000 milliseconds
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 12000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 16000);

///////////////////////////////////////////
let upto = document.querySelector(".up");

window.onscroll = function () {
if (this.scrollY >= 700){
upto.classList.add("show");
}
else {
upto.classList.remove("show");
}
}

upto.onclick = function (){
    window.scrollTo({
    top :0,
    behavior:"smooth",
    });
    };
/////////////////////////////////////////////////////////////////
var scollImage = document.querySelector(".certif .container .main-scroll .cover .scroll-image")
function scrollL(){
    scollImage.scrollBy(600 , 0)
}
function scrollR(){
    scollImage.scrollBy(-600 , 0)
}

////////////// Loading ///////
var Loading = document.querySelector(".loading-page");
window.addEventListener("load"  , function (){
    Loading.style.display = "none";
});

///////////////// Mode //////////////////
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const li0 = document.querySelectorAll('.header .main-nav #re')[0];
const li1 = document.querySelectorAll('.header .main-nav #re')[1];
const li2 = document.querySelectorAll('.header .main-nav #re')[2];
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.contains('bi-moon')){
        toggle.style.color = 'white';   
    }
    else{
        toggle.style.color = 'yellow';
    }
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black'; 
        body.style.transition = '2s';
        document.querySelector('.header .mega-menu').style.background = 'white';
        li0.style.color="white";
        li1.style.color="white";
        li2.style.color="white";
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
        document.querySelector('.header .mega-menu').style.background = 'black';
        li0.style.color="black";
        li1.style.color="black";
        li2.style.color="black";
    }
});