// =========================================
// 뒤로가기
// =========================================

const btnBack = document.querySelector('.btn-back');

if(btnBack){

    btnBack.addEventListener('click',()=>{

        history.back();

    });

}



// =========================================
// HOME
// =========================================

const btnHome = document.querySelector('.btn-home');

if(btnHome){

    btnHome.addEventListener('click',()=>{

        window.location.href = './index.html';

    });

}



// =========================================
// 결제 수단 선택
// =========================================

const paymentLists = document.querySelectorAll('.payment-list>li');
const paymentContents = document.querySelectorAll('.payment-content');


paymentLists.forEach((li,idx)=>{

    li.addEventListener('click',()=>{

        paymentLists.forEach(litag=>{
            litag.classList.remove('on');
        });

        li.classList.add('on');


        paymentContents.forEach(div=>{
            div.classList.remove('on');
        });

        paymentContents[idx].classList.add('on');

    });

});



// =========================================
// 주소검색
// =========================================

const btnAddress = document.querySelector('.btn-address');

if(btnAddress){

    btnAddress.addEventListener('click',()=>{

        alert('주소검색 기능이 들어갈 영역입니다.');

    });

}



// =========================================
// 결제
// =========================================

const btnPayment = document.querySelector('.btn-payment');

if(btnPayment){

    btnPayment.addEventListener('click',()=>{

        const orderName = document.querySelector('.order-name');
        const orderEmail = document.querySelector('.order-email');
        const orderPhone = document.querySelector('.order-phone');
        const orderAddress = document.querySelector('.order-address');


        if(orderName.value === ''){

            alert('이름을 입력해주세요.');

            orderName.focus();

            return;
        }


        if(orderEmail.value === ''){

            alert('이메일을 입력해주세요.');

            orderEmail.focus();

            return;
        }


        if(orderPhone.value === ''){

            alert('휴대폰 번호를 입력해주세요.');

            orderPhone.focus();

            return;
        }


        if(orderAddress.value === ''){

            alert('배송지를 입력해주세요.');

            orderAddress.focus();

            return;
        }


        alert('주문이 완료되었습니다.');

    });

}



// =========================================
// TOP
// =========================================

const btnTop = document.querySelector('.btn-top');

if(btnTop){

    btnTop.addEventListener('click',()=>{

        window.scrollTo({
            top:0,
            behavior:'smooth'
        });

    });

}