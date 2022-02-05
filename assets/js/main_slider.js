let a = document.getElementById("slide1");
let b = document.getElementById("slide2");
let c = document.getElementById("slide3");
let index = 1;

a.style.display = "block";
b.style.display = "none";
c.style.display = "none";

let changeSlideLeft = function() {
    if (index%3==0) {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "block";
    }
    else if (index%2==0){
        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none";
    }
    else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
    }
    index--;
} 

let changeSlideRight = function() {
    if (index%3==0) {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "block";
    }
    else if (index%2==0){
        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none";
    }
    else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
    }
    index++;
} 



setInterval(() => {
    if (index%3==0) {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "block";
    }
    else if (index%2==0){
        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none";
    }
    else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
    }
    console.log(index);
    index++;
},3000);

let navbar = document.querySelector('.navigation_bar');
let upperNav = document.querySelector('.upper_nav');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.style.backgroundColor = '#fff';
        upperNav.style.display = 'none';
    } else {
        navbar.style.backgroundColor = 'transparent';
        upperNav.style.display = 'block';
    }
};