let hamburger = document.querySelector('#hamBurger');
let hamback = document.querySelector('#hamBack');

hamburger.addEventListener('click', function() {
    let navlist = document.querySelector('#navList');
    let li = document.querySelectorAll('.navBtns');
    let logoimage = document.querySelector('.logoImg');
    hamback.setAttribute('style', 'display: block;');
    logoimage.setAttribute('style', 'display: none;');
    navlist.setAttribute('style', 'display: flex; flex-direction: column; align-self: center; width: 100%; align-items: center; margin-top:1rem');
    hamburger.setAttribute('style', 'display: none;');
});
hamback.addEventListener('click', function() {
    navlist.setAttribute('style', 'display: none;')
    hamback.setAttribute('style', 'display:none;');
    hamburger.setAttribute('style', 'display: block;');
})

let btnApply = document.querySelector('.btnApply');
btnApply.addEventListener('click', function() {
    let val = confirm('Do You want To Continue To Apply For Internship?');
    if(val==false){
        let a =  document.querySelector('#targetForm');
        a.setAttribute('href', '#headingWhatWeDo');     
    }
});

let btnReadMore = document.querySelectorAll('.btnReadMore');
let contentReadMore = document.querySelectorAll('.contentReadMore');
let btnReadLess = document.querySelectorAll('.btnReadLess');

for(let i=0; i<btnReadMore.length; i++){
    btnReadMore[i].addEventListener('click', function() {

        btnReadMore[i].setAttribute('style', 'display: none;');
        contentReadMore[i].setAttribute('style', 'display: block;');
        btnReadLess[i].setAttribute('style', 'display: block;');

        btnReadLess[i].addEventListener('click', function(){
            btnReadMore[i].setAttribute('style', 'display: block;');
            contentReadMore[i].setAttribute('style', 'display: none;');
            btnReadLess[i].setAttribute('style', 'display: none;');            
        });
    });
}