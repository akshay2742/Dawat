let a = document.getElementById("slide1");
let b = document.getElementById("slide2");
let c = document.getElementById("slide3");
a.style.display = "block";
b.style.display = "none";
let changeSlideLeft = function() {
    
    
    a.style.display = "block";
    b.style.display = "none";
    // c.style.display = "none";
} 

let changeSlideRight = function() {
    // let c = document.getElementById("slide3");
    a.style.display = "none";
    b.style.display = "block";
    console.log('mratunjya');
    // c.style.display = "none";
} 
const slides =document.querySelectorAll('.slider_slides');

let index = 1;

setInterval(() => {
    if (index%2==0) {
        a.style.display = "block";
        b.style.display = "none";
    }
    else {
        a.style.display = "none";
        b.style.display = "block";

    }
    index++;
    
},3000);

// setInterval(function(){
   
//     if(index==0)
//    {
//        slides[0].style.display = "block";
//        slides[1].style.display = "none";
//    }
//    else if(index==1)
//    {
//        slides[0].style.display = "none";
//        slides[1].style.display = "block";
//    }
//    else if(index>1)
//    {
//        index=0;
//    }
   
//    console.log(index);
   
//    index++;
// }
// ,3000);

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