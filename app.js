let prev = document.getElementById('prev');
let next = document.getElementById('next');
let elecImg = document.querySelector('.elecImg');
let close = document.querySelector('#close');
let menuCover = document.querySelector('.menu-cover');
let menu = document.querySelector('#menu');
let menuProfile = document.querySelector('.menu-profile');
let pass = document.querySelector('#pass');
let str = document.querySelector('#str');
let msg = document.querySelector('#msg');
let loginSection = document.querySelector('.login-section');
let signIn = document.querySelector('#sign-in');
let line = document.querySelector('.line');

let QueCounter = 0;
window.addEventListener('load',()=>{
  showContent(0);
});

next.onclick =()=>{
    if(QueCounter < electronics.length - 1){
        QueCounter++;
        showContent(QueCounter);
    }
}

prev.onclick =()=>{
    if(QueCounter > 0){
        QueCounter--;
        showContent(QueCounter);
    }
}
function showContent(index){
 let offer = document.querySelector('.col-info p');
 let electronic = document.querySelector('.col-info h2');

 let offerTag = ` <p>${electronics[index].discount}</p>`;
 let electronicTag = ` <h2>${electronics[index].electronicInfo}</h2>`;

  offer.innerHTML = offerTag;
  electronic.innerHTML = electronicTag;
  elecImg.src = electronics[index].imgpath;
}

menuProfile.style.left = '-250px';
close.onclick =()=>{
    menuCover.style.display = 'none';
    if(menuProfile.style.left == '0px'){
        menuProfile.style.left = '-250px';
     }
     else{
         menuProfile.style.left = '0px';
     }
}
menu.onclick=()=>{
    menuCover.style.display = 'block';
    if(menuProfile.style.left == '-250px'){
       menuProfile.style.left = '0px';
    }
    else{
        menuProfile.style.left = '-250px';
    }
}
pass.addEventListener('input',(e)=>{
    if(pass.value.length > 0){
        msg.style.display = 'block';
    }
    else{
        msg.style.display = 'none';
    }
    if(pass.value.length <4){
        str.innerHTML = 'weak';
    }
    else if(pass.value.length > 4 && pass.value.length < 8){
        str.innerHTML = 'medium';
    }
    else if(pass.value.length > 8){
        str.innerHTML = 'strong';
    }
    console.log(e.target.value);
})
let LgBtn = document.querySelector('#LgBtn');
let RegBtn = document.querySelector('#RegBtn');
let LoginForm = document.querySelector('#LoginForm');
let RegisterForm = document.querySelector('#RegisterForm');

LgBtn.onclick =()=>{
    LoginForm.style.transform = 'translateX(0px)';
    RegisterForm.style.transform = 'translateX(0px)';
    line.style.transform = 'translateX(0px)';
}
RegBtn.onclick =()=>{
    LoginForm.style.transform = 'translateX(350px)';
    RegisterForm.style.transform = 'translateX(350px)';
    line.style.transform = 'translateX(80px)';
}

loginSection.style.right = '-370px';

signIn.onclick =()=>{
    if(loginSection.style.right === '-370px'){
        loginSection.style.right = '1%';
    }
    else{
        loginSection.style.right = '-370px';
    }
}