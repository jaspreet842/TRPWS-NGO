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


document.querySelector('.sendBtn').addEventListener('click', function(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('question').value;
    alert(`Name:- ${name}\nEmail-address:- ${email}\nMessage:- ${message}`);
})