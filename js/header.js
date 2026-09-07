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