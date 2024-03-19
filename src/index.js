import initialPage from "./initial-page/initial-page";
import menuLoad from "./menu/menu";
import about from "./about/about";
import './style.css';


const homeBtn=document.querySelector('.home')
const menuBtn=document.querySelector('.menu')
const aboutBtn=document.querySelector('.about')


window.addEventListener('load',initialPage)
homeBtn.addEventListener('click',initialPage)
menuBtn.addEventListener('click',menuLoad)
aboutBtn.addEventListener('click',about)



