'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    if(window.scrollY>navbarHeight){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolloing when tapping on the navbar menu
const navbarMneu=document.querySelector('.navbar__menu');
navbarMneu.addEventListener('click',(event)=>{
    const target=event.target;
    const link=target.dataset.link;
    if(link==null){
        return;
    }
    console.log(event.target.dataset.link);
    scrollIntoView(link);
});

// Handle click on "contact me" button on home
const homeContact=document.querySelector('.home__contact');
homeContact.addEventListener('click',()=>{
    scrollIntoView('#contact');
});

function scrollIntoView(selector){
    const scrollTO=document.querySelector(selector);
    scrollTO.scrollIntoView({behavior:'smooth'});
};