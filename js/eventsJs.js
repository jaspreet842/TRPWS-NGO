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
})

let nextPage = document.querySelector('#nextPage');
let previousPage = document.querySelector('#previousPage');
let page1 = document.querySelector('#eventPage1');
let page2 = document.querySelector('#eventPage2');
let pageNo1 = document.querySelector('#page1');
let pageNo2 = document.querySelector('#page2');

pageNo2.addEventListener('click', function(){
    page1.setAttribute('style', 'display: none;');
    page2.setAttribute('style', 'display: block;');
    nextPage.setAttribute('style', 'display: none;');
    previousPage.setAttribute('style', 'display: block;');
    pageNo1.setAttribute('style', 'color: black;');
    pageNo2.setAttribute('style', 'color: goldenrod;');
    window.scrollTo(0,0);
});

nextPage.addEventListener('click', function(){
    page1.setAttribute('style', 'display: none;');
    page2.setAttribute('style', 'display: block;');
    nextPage.setAttribute('style', 'display: none;');
    previousPage.setAttribute('style', 'display: block;');
    pageNo1.setAttribute('style', 'color: black;');
    pageNo2.setAttribute('style', 'color: goldenrod;');
    window.scrollTo(0,0);
});

pageNo1.addEventListener('click', function(){
    page2.setAttribute('style', 'display: none;');
    page1.setAttribute('style', 'display: block;');
    nextPage.setAttribute('style', 'display: block;');
    previousPage.setAttribute('style', 'display: none;');
    pageNo1.setAttribute('style', 'color: goldenrod;');
    pageNo2.setAttribute('style', 'color: black;');
    window.scrollTo(0,0);
});

previousPage.addEventListener('click', function(){
    page2.setAttribute('style', 'display: none;');
    page1.setAttribute('style', 'display: block;');
    nextPage.setAttribute('style', 'display: block;');
    previousPage.setAttribute('style', 'display: none;');
    pageNo1.setAttribute('style', 'color: goldenrod;');
    pageNo2.setAttribute('style', 'color: black;');
    window.scrollTo(0,0);
});

window.onbeforeunload(scrollTo(0, 0));