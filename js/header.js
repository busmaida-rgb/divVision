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

// 아코디언
const smartAccBtn = document.querySelectorAll('.smart-mega-1depth');
const smartAcc = document.querySelectorAll('.smart-mega-menu');

smartAccBtn.forEach((btn,idx)=>{
    btn.setAttribute('aria-expanded', String(smartAcc[idx].classList.contains('on')));
    smartAcc[idx].inert = !smartAcc[idx].classList.contains('on');
    btn.addEventListener('click',(event)=>{
        event.preventDefault();
        const isOpen = smartAcc[idx].classList.toggle('on');
        btn.setAttribute('aria-expanded', String(isOpen));
        smartAcc[idx].inert = !isOpen;
    });
});
