const btnTop = document.querySelector('.btn-top');


if(btnTop){

    btnTop.addEventListener('click',()=>{

        window.scrollTo({
            top:0,
            behavior:'smooth'
        });

    });

}