let changeSlideLeft = function() {
    let a = document.getElementById("slide1");
    let b = document.getElementById("slide2");
    // let c = document.getElementById("slide3");
    a.style.display = "block";
    b.style.display = "none";
    // c.style.display = "none";
} 

let changeSlideRight = function() {
    let a = document.getElementById("slide1");
    let b = document.getElementById("slide2");
    // let c = document.getElementById("slide3");
    a.style.display = "none";
    b.style.display = "block";
    // c.style.display = "none";
} 
const slides =document.querySelectorAll('.slider_slides');
let index = 0;

setInterval(function(){
   
    while(index<2){
        if(index==0)
        {
            slides[0].style.display = "block";
            slides[1].style.display = "none";
        }
        else if(index==1)
        {
            slides[0].style.display = "none";
            slides[1].style.display = "block";
        }
        console.log(index);
        index++;
    }
    index=0;
   
}
,3000);

// slides[0].addEventListener('click', function(){
//     slides[1].style.display = "none";
// });
// slides[1].addEventListener('click', function(){
//     slides[0].style.display = "none";
// });
// slides[2].addEventListener('click', function(){
//     slides[0].style.display = "none";
//     slides[1].style.display = "none";
// });