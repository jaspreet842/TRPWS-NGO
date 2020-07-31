// let nextBtn = document.querySelector('#nextBtn');
// let div1 = document.querySelector('#first');
// let div2 = document.querySelector('#second');
// let div3 = document.querySelector('#third');

// nextBtn.addEventListener('click', function(){
//     div1.setAttribute('style', 'display: none;');
//     div2.setAttribute('style', 'display: block;');
//     nextBtn.addEventListener('click', function(){
//         div2.setAttribute('style', 'display: none;');
//         div3.setAttribute('style', 'display: block;');
//         nextBtn.addEventListener('click', function(){
//             div3.setAttribute('style', 'display: none;');
//             div1.setAttribute('style', 'display: block;');
//         });
//     });
// });
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

let btnApply = document.querySelector('.btnApply');
btnApply.addEventListener('click', function () {
    let val = confirm('Do You want To Continue To Apply For Internship?');
    if (val == false) {
        let a = document.querySelector('#targetForm');
        a.setAttribute('href', '#headingWhatWeDo');
    }
});