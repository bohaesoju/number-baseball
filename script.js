var body = document.body;
var question = document.createElement('h1');
var form = document.createElement('form');
var input = document.createElement('input');
var numberArray = [];
input.maxLength = 4;
var button = document.createElement('button');
var resultWindow = document.createElement('div');
var faultNumber = 0;
var count = 10;
button.textContent = '입력';
question.textContent = String(count);
body.insertAdjacentElement("afterbegin", form);
body.insertAdjacentElement("afterbegin", question);
form.insertAdjacentElement("afterbegin", button);
form.insertAdjacentElement("afterbegin", input);
form.insertAdjacentElement("afterend", resultWindow);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var answer = input.value;
    if (answer === numberArray.join('')) {
        resultWindow.textContent = '홈런';
        faultNumber = 0;
        count = 11;
        makeQuestion();
    }
    else {
        faultNumber += 1;
        if (faultNumber > 10) {
            resultWindow.textContent = "10\uBC88 \uB118\uAC8C \uD2C0\uB824\uC11C \uC2E4\uD328! \uB2F5\uC740 " + numberArray + " \uC600\uC2B5\uB2C8\uB2E4!";
            faultNumber = 0;
            makeQuestion();
            count = 11;
        }
        else {
            resultWindow.textContent = '볼';
            var resultArray2 = answer.split('').map(function (item) {
                return parseInt(item, 10);
            });
            var strike = 0;
            var boll = 0;
            for (var i = 0; i <= 3; i += 1) {
                if (numberArray[i] === resultArray2[i]) {
                    strike += 1;
                }
                else if (numberArray.indexOf(resultArray2[i]) > -1) {
                    boll += 1;
                }
            }
            resultWindow.textContent = strike + " \uC2A4\uD2B8\uB77C\uC774\uD06C  " + boll + " \uBCFC \uC785\uB2C8\uB2E4.";
            input.value = '';
            input.focus();
            count -= 1;
            question.textContent = String(count);
        }
    }
});
function makeQuestion() {
    var numberCandidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numberArray = [];
    for (var i = 0; i < 4; i += 1) {
        var numberResult = numberCandidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        numberArray.push(numberResult);
    }
    input.value = '';
    input.focus();
}
makeQuestion();
