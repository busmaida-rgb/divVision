// =========================================
// 화면 선택
// =========================================

const testStart = document.querySelector('.test-start');

const testQuestion = document.querySelector('.test-question');

const testResult = document.querySelector('.test-result');


const btnStart = document.querySelector('.btn-start');

const questionBoxes = document.querySelectorAll('.question-box');

const answerBtns = document.querySelectorAll('.answer-list button');

const btnPrevQuestion = document.querySelector('.btn-prev-question');

const questionNumber = document.querySelector('.question-number');

const progressBar = document.querySelector('.progress-line span');

const btnRestart = document.querySelector('.btn-restart');



// =========================================
// 결과 점수
// =========================================

let resultScore = {

    dry:0,

    oily:0,

    sensitive:0,

    bright:0,

    normal:0

};


let questionIdx = 0;



// =========================================
// 시작하기
// =========================================

if(btnStart){

    btnStart.addEventListener('click',()=>{


        testStart.classList.remove('on');

        testQuestion.classList.add('on');


        showQuestion();


    });

}



// =========================================
// 질문 보여주기
// =========================================

function showQuestion(){


    questionBoxes.forEach(box=>{

        box.classList.remove('on');

    });


    questionBoxes[questionIdx].classList.add('on');



    questionNumber.textContent =

        '0' + (questionIdx + 1) + ' / 05';



    progressBar.style.width =

        ((questionIdx + 1) * 20) + '%';



    if(questionIdx === 0){

        btnPrevQuestion.style.visibility = 'hidden';

    }else{

        btnPrevQuestion.style.visibility = 'visible';

    }

}



// =========================================
// 답변 클릭
// =========================================

answerBtns.forEach(btn=>{


    btn.addEventListener('click',()=>{


        const result = btn.dataset.result;


        resultScore[result]++;



        if(questionIdx < questionBoxes.length - 1){


            questionIdx++;


            showQuestion();


        }else{


            showResult();


        }


    });


});



// =========================================
// 이전 질문
// =========================================

if(btnPrevQuestion){

    btnPrevQuestion.addEventListener('click',()=>{


        if(questionIdx > 0){


            questionIdx--;


            showQuestion();


        }


    });

}



// =========================================
// 결과 찾기
// =========================================

function showResult(){


    testQuestion.classList.remove('on');

    testResult.classList.add('on');



    let resultType = 'sensitive';

    let maxScore = -1;



    for(let key in resultScore){


        if(resultScore[key] > maxScore){


            maxScore = resultScore[key];

            resultType = key;


        }

    }



    changeResult(resultType);

}



// =========================================
// 결과 내용 변경
// =========================================

function changeResult(type){


    const resultTypeTxt = document.querySelector('.result-type');

    const resultTitle = document.querySelector('.result-title');

    const resultDesc = document.querySelector('.result-desc');

    const resultProductName = document.querySelector('.result-product-name');

    const resultProductDesc = document.querySelector('.result-product-desc');



    // 진정

    if(type === 'sensitive'){


        resultTypeTxt.textContent = 'CALM & COMFORT';


        resultTitle.innerHTML =

            '지금 당신의 피부에는<br>' +

            '편안한 진정 케어가 필요해요.';


        resultDesc.innerHTML =

            '외부 환경에 쉽게 예민해지는 피부를 위해<br>' +

            '피부를 편안하게 진정시키고<br>' +

            '건강한 피부 컨디션을 유지하는 루틴을 추천합니다.';


        resultProductName.textContent =

            '칼렌듈라 꽃잎 진정 토너';


        resultProductDesc.innerHTML =

            '피부를 산뜻하게 정돈하고<br>' +

            '편안한 사용감을 선사하는 토너';


    }



    // 건조

    if(type === 'dry'){


         resultTypeTxt.textContent =
            'DEEP HYDRATION';

        resultTitle.innerHTML =
            '지금 당신의 피부에는<br>' +
            '충분한 보습이 필요해요.';

        resultDesc.innerHTML =
            '쉽게 건조해지고 당기는 피부를 위해<br>' +
            '수분을 채워주고 촉촉함을 유지하는<br>' +
            '보습 중심의 루틴을 추천합니다.';

    }



    // 브라이트닝

    if(type === 'bright'){


         resultTypeTxt.textContent =
            'CLEAR & BRIGHT';

        resultTitle.innerHTML =
            '지금 당신의 피부에는<br>' +
            '맑은 피부톤 케어가 필요해요.';

        resultDesc.innerHTML =
            '칙칙함과 잡티가 고민인 피부를 위해<br>' +
            '균일하고 생기 있어 보이는 피부를 위한<br>' +
            '브라이트닝 루틴을 추천합니다.';

    }



    // 지성

    if(type === 'oily'){


         resultTypeTxt.textContent =
            'FRESH BALANCE';

        resultTitle.innerHTML =
            '지금 당신의 피부에는<br>' +
            '산뜻한 밸런스 케어가 필요해요.';

        resultDesc.innerHTML =
            '유분감과 번들거림이 고민인 피부를 위해<br>' +
            '피부를 산뜻하게 정돈하고<br>' +
            '편안한 밸런스를 유지하는 루틴을 추천합니다.';

    }



    // 복합 / 일반

    if(type === 'normal'){


         resultTypeTxt.textContent =
            'DAILY BALANCE';

        resultTitle.innerHTML =
            '지금 당신의 피부에는<br>' +
            '균형 잡힌 데일리 케어가 필요해요.';

        resultDesc.innerHTML =
            '건조함과 유분이 함께 느껴지는 피부를 위해<br>' +
            '수분과 피부 컨디션을 균형 있게 관리하는<br>' +
            '기본 스킨케어 루틴을 추천합니다.';

    }


}



// =========================================
// 다시하기
// =========================================

if(btnRestart){

    btnRestart.addEventListener('click',()=>{


        resultScore = {

            dry:0,

            oily:0,

            sensitive:0,

            bright:0,

            normal:0

        };


        questionIdx = 0;


        testResult.classList.remove('on');

        testStart.classList.add('on');


        showQuestion();


    });

}