
const list=document.querySelector(".navlist");
const hamburger=document.querySelector(".fa-bars");


hamburger.addEventListener("click",()=>{

    hamburger.classList.toggle("fa-circle-xmark");
    hamburger.classList.toggle("fa-bars");
    list.classList.toggle("navlist-active")
})