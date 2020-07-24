let hamburger = document.querySelector('#hamBurger');
console.log(hamburger);
hamburger.addEventListener('click', function() {
    let navbar = document.querySelector('#navBar');
    let navlist = document.querySelector('#navList');
    let li = document.querySelectorAll('.navBtns');
    let logoimage = document.querySelector('.logoImg');
    hamburger.addEventListener('click', function() {
        
    })
    logoimage.setAttribute('style', 'display: none;');
    navbar.setAttribute('style', 'align-items: center;');
    navlist.setAttribute('style', 'display: flex; flex-direction: column; align-self: center; width: 80%;');
    li.forEach(ele => {
        ele.setAttribute('style', 'border: 2px solid red;')
    });
    hamburger.setAttribute('style', 'position: absolute; right: 2px; top: 1px;')
    console.log(navlist);
});

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