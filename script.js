let body = document.body;
const question = document.createElement('h1');
let form = document.createElement('form');
let input = document.createElement('input');
let numberArray = [];
input.maxLength = 4;
let button = document.createElement('button');
let resultWindow = document.createElement('div');
let question2 = document.createElement('div');
let faultNumber = 0;
let count = 10;
button.textContent = '입력';
question.textContent = count;
body.append(question);
body.append(form);
form.append(input);
form.append(button);
body.append(resultWindow);

form.addEventListener('submit', function callback(e){
    e.preventDefault();
    let answer = input.value;
    if(answer === numberArray.join('')){
        resultWindow.textContent = '홈런';
        faultNumber = 0;
        count = 11;
        makeQuestion(); 
    } else {
        faultNumber += 1;
        if(faultNumber > 10){
            resultWindow.textContent = `10번 넘게 틀려서 실패! 답은 ${numberArray} 였습니다!`
            faultNumber = 0;
            makeQuestion();
            count = 11;
        } else {
            resultWindow.textContent = '볼';
            let resultArray2 = answer.split('').map(function(item) {
                return parseInt(item, 10);
            });
    
            let strike = 0;
            let boll = 0;
        
            for(let i = 0; i <= 3; i += 1){
                if(numberArray[i] === resultArray2[i]){
                    strike += 1;  
                } else if(numberArray.indexOf(resultArray2[i]) > -1){
                    boll += 1;
                }
            }
            resultWindow.textContent = `${strike} 스트라이크  ${boll} 볼 입니다.`;
            input.value = '';
            input.focus();
            count -= 1;
            question.textContent = count;
        } 
    }
});

function makeQuestion(){
    let numberCandidate = [1,2,3,4,5,6,7,8,9];
    numberArray = [];
    for(let i = 0; i < 4; i += 1){
        let numberResult = numberCandidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        numberArray.push(numberResult);
    }
    input.value = '';
    input.focus();
}

makeQuestion();