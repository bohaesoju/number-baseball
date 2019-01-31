let body : HTMLElement = document.body;
const question : HTMLElement = document.createElement('h1');
let form : HTMLFormElement = document.createElement('form');
let input : HTMLInputElement= document.createElement('input');
let numberArray : number [] = [];
input.maxLength = 4;
let button : HTMLButtonElement = document.createElement('button');
let resultWindow : HTMLDivElement = document.createElement('div');
let faultNumber : number = 0;
let count : number = 10;
button.textContent = '입력';
question.textContent = String(count);
body.insertAdjacentElement("afterbegin", form);
body.insertAdjacentElement("afterbegin", question)
form.insertAdjacentElement("afterbegin", button);
form.insertAdjacentElement("afterbegin", input);
form.insertAdjacentElement("afterend", resultWindow);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let answer : string = input.value;
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
            let resultArray2 = answer.split('').map((item) => {
                return parseInt(item, 10);
            });

            let strike : number = 0;
            let boll : number = 0;

            for(let i : number = 0; i <= 3; i += 1){
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
            question.textContent = String(count);
        }
    }
});

function makeQuestion(){
    let numberCandidate : number[] = [1,2,3,4,5,6,7,8,9];
    numberArray = [];
    for(let i:number = 0; i < 4; i += 1){
        let numberResult = numberCandidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        numberArray.push(numberResult);
    }
    input.value = '';
    input.focus();
}

makeQuestion();