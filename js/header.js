const header = document.querySelector('header');

function HeaderBg() {
    if(window.scrollY === 0){
        header.classList.remove('on');
    }else{
        header.classList.add('on');
    }
}

window.addEventListener('scroll', HeaderBg, { passive: true });
HeaderBg();

header.addEventListener('mouseenter',()=>{
    if(window.scrollY === 0){
        header.classList.add('on');
    }
});
header.addEventListener('mouseleave',()=>{
    if(window.scrollY === 0){
        header.classList.remove('on');
    }
});

// 스마트헤더
const smartHeader = document.querySelector('.header-smart');
smartHeader.setAttribute('aria-expanded', String(smartHeader.classList.contains('on')));

function smartHeaderBg() {
    if(window.scrollY === 0){
        smartHeader.classList.remove('on');
    }else{
        smartHeader.classList.add('on');
    }
}
window.addEventListener('scroll', smartHeaderBg, { passive: true });
smartHeaderBg();

// 오버레이온
const smartGnb = document.querySelector('.smart-gnb');
const menuBtn = document.querySelector('.menu-btn');
const menuImg = menuBtn.querySelector('img');

menuBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    const isOpen = smartGnb.classList.toggle('on');
    menuImg.src = isOpen
        ?'./img/closeicon.svg'
        :'./img/menuicon.svg'
    if(window.scrollY === 0){
        smartHeader.classList.toggle('on');
    }else{
        return
    };
});

// 아코디언
const smartAccBtn = document.querySelectorAll('.smart-mega-1depth');
const smartAcc = document.querySelectorAll('.smart-mega-menu');
const unDownBtn = document.querySelectorAll('.smart-gnb1depth-a img');

smartAccBtn.forEach((btn,idx)=>{
    btn.setAttribute('aria-expanded', String(smartAcc[idx].classList.contains('on')));
    smartAcc[idx].inert = !smartAcc[idx].classList.contains('on');
    btn.addEventListener('click',(event)=>{
        event.preventDefault();
        const isOpen = smartAcc[idx].classList.toggle('on');
        unDownBtn[idx].classList.toggle('on', isOpen);
        btn.setAttribute('aria-expanded', String(isOpen));
        smartAcc[idx].inert = !isOpen;
    });
});
