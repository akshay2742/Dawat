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
let nav_logo = document.querySelector('.logo');
let link_color =document.querySelectorAll('.links');
let mobileNav = document.querySelector('.navigation_content');
let mobileLink = document.querySelectorAll('.navbar_link1');
let mobileList = document.querySelector("#mobile_links")
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.animation = 'fadeIn 1s'
        upperNav.style.display = 'none';
        nav_logo.src='./assets/images/main_logo_black.png';
        link_color[0].style.color = '#000';
        link_color[1].style.color = '#000';
        link_color[2].style.color = '#000';
        link_color[3].style.color = '#000';
        link_color[4].style.color = '#000';
        link_color[5].style.color = '#000';
        link_color[6].style.color = '#000';
        link_color[7].style.color = '#000';
        link_color[8].style.color = '#000';
        mobileLink[0].style.color = '#000';
        mobileLink[1].style.color = '#000';
        mobileLink[2].style.color = '#000';
        mobileLink[3].style.color = '#000';
        mobileLink[4].style.color = '#000';
        mobileNav.style.backgroundColor = '#fff';
        mobileList.style.backgroundColor = '#fff';
        navbar.style.setProperty("--check_opacity", "1");

    } else {
        navbar.style.backgroundColor = 'transparent';
        upperNav.style.display = 'block';
        nav_logo.src='./assets/images/main_logo.png';
        link_color[0].style.color = '#fff';
        link_color[1].style.color = '#fff';
        link_color[2].style.color = '#fff';
        link_color[3].style.color = '#fff';
        link_color[4].style.color = '#fff';
        link_color[5].style.color = '#fff';
        link_color[6].style.color = '#fff';
        link_color[7].style.color = '#fff';
        link_color[8].style.color = '#fff';
        mobileLink[0].style.color = '#fff';
        mobileLink[1].style.color = '#fff';
        mobileLink[2].style.color = '#fff';
        mobileLink[3].style.color = '#fff';
        mobileLink[4].style.color = '#fff';
        mobileNav.style.backgroundColor = '#000';
        mobileList.style.backgroundColor = '#000';
        navbar.style.setProperty("--check_opacity", "0");
    }
};



  function myfunction() {
    let x = document.getElementById("mobile_links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}



