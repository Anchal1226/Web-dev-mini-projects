const quizDB = [
{
    question: "Q1: What is the full form of HTML?",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "HyperText Markup Language",
    d: "Hypertext Markup Language",
    ans: "ans4"
},
{
    question: "Q2: What is the full form of CSS?",
    a: "Cascading Style Sheets",
    b: "Cascading Style Sheep",
    c: "Cartoon Style Sheets",
    d: "Cascading Super  Sheets",
    ans: "ans1"
},
{
    question: "Q3: If we want to wrap a block of text around an image, which css property will we use ?",
    a: "wrap",
    b: "push",
    c: "float",
    d: "align",
    ans: "ans3"
},
{
    question: "Q4: If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
    a: "padding",
    b: "margin",
    c: "clear",
    d: "float",
    ans: "ans3"
},
{
    question: "Q5: If we want define style for an unique element, then which css selector will we use ?",
    a: "Id",
    b: "text",
    c: "class",
    d: "name",
    ans: "ans1"
},

];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score=0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;

        }
    });
    return answer;
};
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked= false);


}
submit.addEventListener('click', () =>
{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer == quizDB[questionCount].ans)
    {
        score++;
    };
    questionCount++;
    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();

    }else{

        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} ✌️ </h3>
        <button class = "btn" onclick="location.reload()"> Play Again </button>
        `;
        showScore.classList.remove('scoreArea');
        

    }
});

