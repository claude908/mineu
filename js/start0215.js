const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const endPoint = 11;
const result = document.querySelector("#result");
const select = [];

function calcResult(){
    var pointArray = [
        {name: 'introvert', value: 0, key: 0},
        {name: 'extrovert', value: 0, key: 1},
    ]

    for(let i = 0; i < endPoint; i++){
        var target = qnaList[i].a[select[i]];
        for(let j = 0; j < target.type.length; j++){             // 클릭한 답변의 타입을 돔
            for(let k = 0; k < pointArray.length; k++){     //  위에 만든 pointArray 를 돔
                if(target.type[j] === pointArray[k].name){  //  Type이랑 pointArray에 일치하는 부분이 있으면 해당 타입의 value 1 증가    
                    pointArray[k].value += 1;
                }
            }
        }
    }
    var resultArray = pointArray.sort(function(a, b){   //참고: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        if(a.value > b.value){
            return -1;
        }                           // pointArray의 value 를 기준으로 정렬을 함. 제일 높은게 첫번째 인덱스로 나오게
        if(a.value < b.value){      // a=b 계산안했음. a 와 b 의 값이 똑같다면 첫번쨰 인덱스 뽑히게 함. 
            return 1;
        }
        return 0;
    });
    console.log(resultArray);
    let resultword = resultArray[0].key;    //resultword에 정열된거에 첫번째 원소의키값을 담음
    return resultword;                      //최종 리턴값('key' of MBTI)
}

function setResult(){
    let point = calcResult();
    const resultName = document.querySelector('.resultName');   //Currently not used but bring back and add animation
    resultName.innerHTML = infoList[point].name;                //Currently not used but bring back and add animation

    for(i=0; i<2; i++){             //Prints out two images
        var resultImg = document.createElement('img');
        const imgDiv = document.querySelector('#resultImg');    //selecting the id resultImg from html file
        var imgURL = 'http://mineu.site/wp-content/uploads/2022/02/image-' + point + i + '.png';    //Format the images as such
        resultImg.src = imgURL;
        resultImg.alt = point;                                      //alt attribute is officially MANDATORY
        resultImg.classList.add('img-fluid');
        resultImg.classList.add('py-4');
        imgDiv.appendChild(resultImg);
        }

/* ORIGINAL
    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');    //selecting the id resultImg from html file
    var imgURL = 'http://mineu.site/wp-content/uploads/2022/02/image-' + point + '.png';    //Format the images as such
    resultImg.src = imgURL;
    resultImg.alt = point;                                      //alt attribute is officially MANDATORY
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);
 */

    const resultDesc = document.querySelector('.resultDesc');   //querySelector calls information from a table/database (in this case from data.js)
    resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
        var load = document.createElement('loading');
        //loading.style.display = "block";
        result.style.WebkitAnimation = "fadein 2s";
        result.style.animation = "fadein 2s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        }, 400)})
        console.log(select);
        setResult();
}

function addAnswer(answerText, qIdx, idx){                       //data.js 에서 answer 에 해당 되는 부분을 버튼으로 만들어주는 함수
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button')
    answer.classList.add('answerList');     // 새로 생성될 answer 텍스트에 class 를 부여함. 이제 아래에서 선택이 가능해짐.
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.appendChild(answer);                  // a와 answer 관계지어주는 역할. 해당 함수는 이제 div 태그 안에 button 을 만들어줌
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');    //생성될 answer 를 모두 선택해서 children 이라는 변수에 넣어줌.
        for(let i = 0; i < children.length; i++){
            children[i].disabled = true;              //Ensures button can be clicked only once
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
            //children[i].style.display = 'none'; (위에 fadeout을 추가해서 사용안함) //사용자가 버튼을 클릭하면 모든 버튼이 안보이게됨.
        }
        setTimeout(() => {
            select[qIdx] = idx;
            for(let i = 0; i < children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);     //위의 이벤트가 끝나면 바로 goNext 함수를 실행하되 인덱스 값이 1 증가함.
        }, 450)
    }, false);
}


function goNext(qIdx){
    if(qIdx === endPoint){
        goResult()
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){  //qnaList 라는 리스트에서 qIdx 라는 변수에 해당되는 인덱스를 불러오게 하는 반복문
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);        //Question 을 불러왔으면 이제 answer 가 담겨져 있는 버튼을 만들어줌.
    }

    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx + 1) + '%';
}

function begin(){
    //main.style.WebkitAnimation = "fadeOut 0.5s";
    //main.style.animation = "fadeOut 0.5s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadein 0.5s";
        qna.style.animation = "fadein 0.5s";
        setTimeout(() => {
            //main.style.display = "none";
            qna.style.display = "block";
        }, 00)
        let qIdx = 0;   //qIdx 의 초기값은 0. 인덱스 값이니까.
        goNext(qIdx);
    }, 450)

}