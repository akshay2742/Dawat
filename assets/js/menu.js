let b1 = document.querySelector('.breakfast');
let l1 = document.querySelector('.lunch');
let d1 = document.querySelector('.dinner');
let c1 = document.querySelector('.coffee');
let s1 = document.querySelector('.snacks');
let food =document.querySelector('.food_menu');

function al(){
    console.log("Hello");
    b1.style.display = 'flex';
    l1.style.display = 'flex';
    d1.style.display = 'flex';
    c1.style.display = 'flex';
    s1.style.display = 'flex';
    // b1.style.animation = 'fadeIn .5s';
    // l1.style.animation = 'fadeIn .5s';
    // d1.style.animation = 'fadeIn .5s';
    // c1.style.animation = 'fadeIn .5s';
    // s1.style.animation = 'fadeIn .5s';
    food.style.animation = 'fadeIn .5s';
    setTimeout(() => {
        food.style.animation = '';
    }, 500);
}

// function animate_over(){
//     food.style.animation = '';
// }

function brea(){
    b1.style.display = 'flex';
    // b1.style.animation = 'fadeIn .5s';
    l1.style.display = 'none';
    d1.style.display = 'none';
    c1.style.display = 'none';
    s1.style.display = 'none';
    food.style.animation = 'fadeIn .5s';
    setTimeout(() => {
        food.style.animation = '';
    }, 500);
}

function lun(){
    b1.style.display = 'none';
    l1.style.display = 'flex';
    // l1.style.animation = 'fadeIn .5s';
    d1.style.display = 'none';
    c1.style.display = 'none';
    s1.style.display = 'none';
    food.style.animation = 'fadeIn .5s';
    setTimeout(() => {
        food.style.animation = '';
    }, 500);
}

function din(){
    b1.style.display = 'none';
    l1.style.display = 'none';
    d1.style.display = 'flex';
    // d1.style.animation = 'fadeIn .5s';
    c1.style.display = 'none';
    s1.style.display = 'none';
    food.style.animation = 'fadeIn .5s';
    setTimeout(() => {
        food.style.animation = '';
    }, 500);
}

function cof(){
    b1.style.display = 'none';
    l1.style.display = 'none';
    d1.style.display = 'none';
    c1.style.display = 'flex';
    // c1.style.animation = 'fadeIn .5s';
    s1.style.display = 'none';
    food.style.animation = 'fadeIn .5s';
    setTimeout(() => {
        food.style.animation = '';
    }, 500);
}

function sna(){
    b1.style.display = 'none';
    l1.style.display = 'none';
    d1.style.display = 'none';
    c1.style.display = 'none';
    s1.style.display = 'flex';
    // s1.style.animation = 'fadeIn .5s';
    food.style.animation = 'fadeIn .5s';
    setTimeout(() => {
        food.style.animation = '';
    }, 500);
}