// =========================================
// 제품 이미지 슬라이드
// =========================================

const slideView = document.querySelector('.slide-view');

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let slideIdx = 0;


// 슬라이드 이동

function showSlide(){

    let move;

    // 모바일
    if(window.innerWidth <= 768){

        move = slideIdx * 100;

    }

    // PC / PAD
    else{

        move = slideIdx * 50;

    }


    slideView.style.transform =
        'translateX(-' + move + '%)';

}



// =========================================
// 다음 버튼
// =========================================

if(btnNext){

    btnNext.addEventListener('click',()=>{

        slideIdx++;


        showSlide();


        // 마지막 복사 이미지까지 이동한 후 처음으로 되돌리기

        if(slideIdx === 3){

            setTimeout(()=>{

                slideView.style.transition = 'none';

                slideIdx = 0;

                showSlide();


                setTimeout(()=>{

                    slideView.style.transition =
                        'transform 0.45s ease';

                },50);

            },450);

        }

    });

}



// =========================================
// 이전 버튼
// =========================================

if(btnPrev){

    btnPrev.addEventListener('click',()=>{

        // 첫 번째 이미지에서 이전 버튼

        if(slideIdx === 0){

            slideView.style.transition = 'none';

            slideIdx = 3;

            showSlide();


            setTimeout(()=>{

                slideView.style.transition =
                    'transform 0.45s ease';

                slideIdx = 2;

                showSlide();

            },50);

        }

        else{

            slideIdx--;

            showSlide();

        }

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