let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')

})
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')

})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')

})



const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
    
});



const openModalButto = document.querySelector("#open-modal2");
const closeModalButto = document.querySelector("#close-moda");
const moda = document.querySelector("#moda");
const fad = document.querySelector("#fad");

const toggleModa = () => {
    [moda, fad].forEach((el) => el.classList.toggle("hid"));
}

[openModalButto, closeModalButto, fad].forEach((el) => {
    el.addEventListener("click", () => toggleModa());
    
});



const openModalButt = document.querySelector("#open-modal3");
const closeModalButt = document.querySelector("#close-mod");
const mod = document.querySelector("#mod");
const fada = document.querySelector("#fada");

const toggleMod = () => {
    [mod, fada].forEach((el) => el.classList.toggle("cid"));
}

[openModalButt, closeModalButt, fada].forEach((el) => {
    el.addEventListener("click", () => toggleMod());
    
});


const openModalBut = document.querySelector("#open-modal4");
const closeModalBut = document.querySelector("#close-m");
const m = document.querySelector("#m");
const f = document.querySelector("#f");

const toggleMo = () => {
    [m, f].forEach((el) => el.classList.toggle("c"));
}

[openModalBut, closeModalBut, f].forEach((el) => {
    el.addEventListener("click", () => toggleMo());
    
});



