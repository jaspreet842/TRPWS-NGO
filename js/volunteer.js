window.onbeforeunload = scrollTo(0, 0);
let hamburger = document.querySelector('#hamBurger');
let hamback = document.querySelector('#hamBack');
let navlist = document.querySelector('#navList');
let li = document.querySelectorAll('.navBtns');
let logoimage = document.querySelector('.logoImg');

hamburger.addEventListener('click', function () {
    hamback.setAttribute('style', 'display: block;');
    logoimage.setAttribute('style', 'display: none;');
    navlist.setAttribute('style', 'display: flex; flex-direction: column; align-self: center; width: 100%; align-items: center; margin-top:1rem');
    hamburger.setAttribute('style', 'display: none;');
});

hamback.addEventListener('click', function () {
    navlist.setAttribute('style', 'display: none;')
    hamback.setAttribute('style', 'display:none;');
    hamburger.setAttribute('style', 'display: block;');
});


let fieldsContent =document.querySelectorAll('.fieldsContent');
let arrowdown = document.querySelectorAll('.fa-angle-double-down');
let arrowup = document.querySelectorAll('.fa-angle-double-up');

for(let i=0;i<fieldsContent.length;i++){
    arrowdown[i].addEventListener('click', function(){
        arrowdown[i].setAttribute('style', 'display: none;');
        arrowup[i].setAttribute('style', 'display: inline-block;');
        fieldsContent[i].setAttribute('style', 'display: block;');
        arrowup[i].addEventListener('click', function(){
            arrowdown[i].setAttribute('style', 'display: inline-block;');
            arrowup[i].setAttribute('style', 'display: none;');
            fieldsContent[i].setAttribute('style', 'display: none;');
        });
    });
}