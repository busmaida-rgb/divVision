// =========================================
// 제품 이미지 슬라이드
// =========================================

const slideLeft = document.querySelector('.slide-left img');
const slideRight = document.querySelector('.slide-right img');

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');


const slideImages = [
    './productpage-img/calendula-toner-main.jpg',
    './productpage-img/calendula-toner-main2.jpg',
    './productpage-img/calendula-toner-main3.jpg'
];


let slideIdx = 0;


// 이미지 보여주는 함수
function showSlide(){

    let nextIdx = slideIdx + 1;

    if(nextIdx >= slideImages.length){
        nextIdx = 0;
    }

    slideLeft.src = slideImages[slideIdx];

    slideRight.src = slideImages[nextIdx];
}


// 다음 버튼
if(btnNext){

    btnNext.addEventListener('click',()=>{

        slideIdx++;

        if(slideIdx >= slideImages.length){
            slideIdx = 0;
        }

        showSlide();

    });

}


// 이전 버튼
if(btnPrev){

    btnPrev.addEventListener('click',()=>{

        slideIdx--;

        if(slideIdx < 0){
            slideIdx = slideImages.length - 1;
        }

        showSlide();

    });

}



// =========================================
// 사이즈 버튼
// =========================================

const sizeLists = document.querySelectorAll('.size-list>li');
const priceText = document.querySelector('.price-text');


sizeLists.forEach(li=>{

    li.addEventListener('click',()=>{

        // 모든 사이즈 on 제거
        sizeLists.forEach(litag=>{
            litag.classList.remove('on');
        });


        // 클릭한 사이즈 on
        li.classList.add('on');


        // 클릭한 버튼 찾기
        const sizeBtn = li.querySelector('button');


        // data-price 값 가져오기
        const price = sizeBtn.dataset.price;


        // 가격 변경
        priceText.textContent =
            '₩ ' + Number(price).toLocaleString();

    });

});



// =========================================
// 상세 탭
// =========================================

const tabLists = document.querySelectorAll('.tab-menu>ul>li');
const tabContents = document.querySelectorAll('.tab-content');


tabLists.forEach((li,idx)=>{

    li.addEventListener('click',()=>{

        // 모든 탭 on 제거
        tabLists.forEach(litag=>{
            litag.classList.remove('on');
        });


        // 클릭한 탭 on
        li.classList.add('on');


        // 모든 내용 숨기기
        tabContents.forEach(div=>{
            div.classList.remove('on');
        });


        // 클릭한 탭과 같은 순서 내용 보이기
        tabContents[idx].classList.add('on');

    });

});



// =========================================
// 리뷰 더보기
// =========================================

const btnReviewMore = document.querySelector('.btn-review-more');
const moreReviews = document.querySelectorAll(
    '.review-list>li.more-review'
);


if(btnReviewMore && moreReviews.length > 0){

    btnReviewMore.addEventListener('click',()=>{

        // 리뷰 4, 5 on 토글
        moreReviews.forEach(li=>{
            li.classList.toggle('on');
        });


        // 첫 번째 숨김 리뷰가 열려있는지 확인
        if(moreReviews[0].classList.contains('on')){

            btnReviewMore.textContent = '리뷰 접기 -';

        }else{

            btnReviewMore.textContent = '리뷰 더보기 +';

        }

    });

}



// =========================================
// 바로 구매하기
// =========================================

const btnBuy = document.querySelector('.btn-buy');


if(btnBuy){

    btnBuy.addEventListener('click',()=>{

        window.location.href = './order.html';

    });

}



// =========================================
// TOP 버튼
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